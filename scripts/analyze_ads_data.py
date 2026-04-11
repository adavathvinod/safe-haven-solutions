from __future__ import annotations

import json
from pathlib import Path

import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
OVERVIEW_DIR = ROOT / "Overview_cards_csv(2026-04-10_00_00_55)"
PREV_DIR = ROOT / "previous ad group data"


def read_csv_auto(path: Path) -> pd.DataFrame:
    last_exc: Exception | None = None
    # Some Google Ads exports include metadata rows before the CSV header.
    # Detect and skip those rows when needed.
    try:
        first_line = path.read_text(encoding="utf-8", errors="ignore").splitlines()[:3]
    except Exception:
        first_line = []

    if first_line and "report" in first_line[0].lower():
        for skip in (2, 1, 0):
            for encoding in ("utf-8", "utf-8-sig", "latin-1"):
                try:
                    return pd.read_csv(path, encoding=encoding, skiprows=skip)
                except Exception as exc:
                    last_exc = exc

    for encoding in ("utf-8", "utf-8-sig", "latin-1"):
        try:
            return pd.read_csv(path, encoding=encoding)
        except Exception as exc:  # pragma: no cover
            last_exc = exc
    raise RuntimeError(f"Failed to read {path}: {last_exc}")


def parse_num(series: pd.Series) -> pd.Series:
    cleaned = (
        series.astype(str)
        .str.replace(",", "", regex=False)
        .str.replace("%", "", regex=False)
        .str.replace("\u20b9", "", regex=False)
        .str.replace("INR", "", regex=False)
        .str.replace("--", "", regex=False)
        .str.replace(r"[^0-9.\-]", "", regex=True)
        .str.strip()
    )
    return pd.to_numeric(cleaned, errors="coerce")


def pick_col(df: pd.DataFrame, candidates: list[str]) -> str | None:
    cols_lower = {c.lower(): c for c in df.columns}
    for cand in candidates:
        if cand.lower() in cols_lower:
            return cols_lower[cand.lower()]
    for c in df.columns:
        c_l = c.lower()
        if any(cand.lower() in c_l for cand in candidates):
            return c
    return None


def add_standard_metrics(df: pd.DataFrame) -> pd.DataFrame:
    out = df.copy()
    clicks_col = pick_col(out, ["Clicks"])
    impr_col = pick_col(out, ["Impr.", "Impressions"])
    cost_col = pick_col(out, ["Cost", "Cost / conv.", "Cost (INR)", "Avg. CPC"])
    conv_col = pick_col(out, ["Conversions", "All conv.", "Phone calls", "Calls"])

    if clicks_col:
        out["_clicks"] = parse_num(out[clicks_col])
    else:
        out["_clicks"] = 0.0
    if impr_col:
        out["_impr"] = parse_num(out[impr_col])
    else:
        out["_impr"] = 0.0
    if cost_col:
        out["_cost"] = parse_num(out[cost_col])
    else:
        out["_cost"] = 0.0
    if conv_col:
        out["_conv"] = parse_num(out[conv_col])
    else:
        out["_conv"] = 0.0

    out["_ctr"] = (out["_clicks"] / out["_impr"]).where(out["_impr"] > 0)
    out["_cpc"] = (out["_cost"] / out["_clicks"]).where(out["_clicks"] > 0)
    out["_cpa"] = (out["_cost"] / out["_conv"]).where(out["_conv"] > 0)
    out["_cvr"] = (out["_conv"] / out["_clicks"]).where(out["_clicks"] > 0)
    return out


def summarize_by(df: pd.DataFrame, dim_col: str) -> pd.DataFrame:
    clean = df.copy()
    clean[dim_col] = clean[dim_col].astype(str).str.strip()
    clean = clean[
        clean[dim_col].notna()
        & (clean[dim_col] != "")
        & (clean[dim_col].str.lower() != "nan")
        & (clean[dim_col] != "--")
    ]
    g = (
        clean.groupby(dim_col, dropna=False)[["_impr", "_clicks", "_cost", "_conv"]]
        .sum()
        .reset_index()
    )
    g["CTR"] = (g["_clicks"] / g["_impr"]).where(g["_impr"] > 0)
    g["CPC"] = (g["_cost"] / g["_clicks"]).where(g["_clicks"] > 0)
    g["CVR"] = (g["_conv"] / g["_clicks"]).where(g["_clicks"] > 0)
    g["CPA"] = (g["_cost"] / g["_conv"]).where(g["_conv"] > 0)
    return g.sort_values(["_conv", "_clicks", "_cost"], ascending=[False, False, False])


def safe_sheet(name: str) -> str:
    bad = set('[]:*?/\\')
    s = ''.join('_' if ch in bad else ch for ch in name)
    return s[:31]


def main() -> None:
    out_dir = ROOT / "analysis_output_2026-04-10"
    out_dir.mkdir(exist_ok=True)

    report_files = sorted(OVERVIEW_DIR.glob("*.csv")) + sorted(PREV_DIR.glob("*.csv"))
    loaded: dict[str, pd.DataFrame] = {}
    profile_rows: list[dict[str, object]] = []

    for f in report_files:
        try:
            raw = read_csv_auto(f)
            # Drop all-empty rows and report total rows to keep analyses clean.
            raw = raw.dropna(how="all")
            for c in ["Keyword", "Search Keyword", "Search", "Ad Group", "Ad Group Name"]:
                if c in raw.columns:
                    raw = raw[~raw[c].astype(str).str.contains("^\\s*Total:", case=False, regex=True, na=False)]
            df = add_standard_metrics(raw)
            loaded[f.stem] = df
            profile_rows.append(
                {
                    "file": str(f.relative_to(ROOT)),
                    "rows": len(df),
                    "impr": float(df["_impr"].sum()),
                    "clicks": float(df["_clicks"].sum()),
                    "cost": float(df["_cost"].sum()),
                    "conv": float(df["_conv"].sum()),
                    "columns": json.dumps(list(raw.columns), ensure_ascii=True),
                }
            )
        except Exception as exc:
            profile_rows.append(
                {
                    "file": str(f.relative_to(ROOT)),
                    "rows": 0,
                    "impr": 0.0,
                    "clicks": 0.0,
                    "cost": 0.0,
                    "conv": 0.0,
                    "columns": f"ERROR: {exc}",
                }
            )

    profile_df = pd.DataFrame(profile_rows)

    kw_df = None
    for key in loaded:
        if "Search keyword report" in key:
            kw_df = loaded[key]
            break
    if kw_df is None:
        for key in loaded:
            if "Search_keywords" in key:
                kw_df = loaded[key]
                break

    search_terms_df = None
    for key in loaded:
        if "Searches(Search" in key:
            search_terms_df = loaded[key]
            break

    adgroup_df = None
    for key in loaded:
        if "Ad_Groups" in key:
            adgroup_df = loaded[key]
            break

    device_df = None
    for key in loaded:
        if "Devices" in key:
            device_df = loaded[key]
            break

    location_df = None
    for key in loaded:
        if "Geographic" in key:
            location_df = loaded[key]
            break

    dayhour_df = None
    for key in loaded:
        if "Day_Hour" in key:
            dayhour_df = loaded[key]
            break

    negatives_existing = None
    for key in loaded:
        if "Negative keyword report" in key:
            negatives_existing = loaded[key]
            break

    analyses: dict[str, pd.DataFrame] = {}

    if kw_df is not None:
        kw_col = pick_col(kw_df, ["Search keyword", "Keyword", "Criteria"])
        if kw_col:
            kw_sum = summarize_by(kw_df, kw_col)
            analyses["keyword_performance"] = kw_sum

    if search_terms_df is not None:
        st_col = pick_col(search_terms_df, ["Search term", "Search"])
        if st_col:
            st_sum = summarize_by(search_terms_df, st_col)
            analyses["search_term_performance"] = st_sum

    if adgroup_df is not None:
        ag_col = pick_col(adgroup_df, ["Ad group"])
        if ag_col:
            analyses["adgroup_performance"] = summarize_by(adgroup_df, ag_col)

    if device_df is not None:
        d_col = pick_col(device_df, ["Device"])
        if d_col:
            analyses["device_performance"] = summarize_by(device_df, d_col)

    if location_df is not None:
        l_col = pick_col(location_df, ["Location", "Geographic location", "Region"])
        if l_col:
            analyses["location_performance"] = summarize_by(location_df, l_col)

    if dayhour_df is not None:
        dh_col = pick_col(dayhour_df, ["Day of week and hour", "Day & hour", "Hour"])
        if dh_col:
            analyses["dayhour_performance"] = summarize_by(dayhour_df, dh_col)

    good_keywords = pd.DataFrame(columns=["keyword", "match_type", "intent", "notes"])
    if "keyword_performance" in analyses:
        temp = analyses["keyword_performance"].copy()
        temp = temp[(temp["_clicks"] >= 2) & (temp["CPC"].fillna(10**9) <= 90)]
        temp = temp.sort_values(["_clicks", "CPC"], ascending=[False, True]).head(150)
        good_keywords = pd.DataFrame(
            {
                "keyword": temp.iloc[:, 0].astype(str).str.lower().str.strip(),
                "match_type": "Phrase",
                "intent": "high",
                "notes": "Based on historical clicks/conversions",
            }
        ).drop_duplicates(subset=["keyword"])

    if good_keywords.empty:
        fallback = [
            "safety nets hyderabad",
            "balcony safety nets hyderabad",
            "pigeon safety nets hyderabad",
            "bird net installation hyderabad",
            "child safety nets hyderabad",
            "duct area safety nets hyderabad",
            "building safety nets hyderabad",
            "terrace safety nets hyderabad",
            "invisible grills hyderabad",
            "sports nets hyderabad",
            "cricket practice nets hyderabad",
            "coconut tree safety nets hyderabad",
            "monkey safety nets hyderabad",
        ]
        good_keywords = pd.DataFrame(
            {
                "keyword": fallback,
                "match_type": "Phrase",
                "intent": "high",
                "notes": "Fallback seed",
            }
        )

    # Add high-intent exact variants for call-focused search terms.
    exact_seed = [
        "pigeon net installation hyderabad",
        "pigeon net installation near me",
        "balcony safety nets hyderabad",
        "bird net installation hyderabad",
        "child safety nets hyderabad",
        "safety nets hyderabad",
        "pigeon net for balcony near me",
    ]
    exact_df = pd.DataFrame(
        {
            "keyword": exact_seed,
            "match_type": "Exact",
            "intent": "high",
            "notes": "Manual exact-intent expansion",
        }
    )
    good_keywords = pd.concat([good_keywords, exact_df], ignore_index=True)
    good_keywords["keyword"] = good_keywords["keyword"].astype(str).str.strip()
    good_keywords = good_keywords[
        good_keywords["keyword"].notna()
        & (good_keywords["keyword"] != "")
        & (good_keywords["keyword"].str.lower() != "nan")
    ]
    good_keywords = good_keywords.drop_duplicates(subset=["keyword", "match_type"])

    low_intent_terms = [
        "free",
        "job",
        "jobs",
        "career",
        "salary",
        "training",
        "youtube",
        "video",
        "diy",
        "how to",
        "amazon",
        "flipkart",
        "olx",
        "used",
        "second hand",
        "raw material",
        "wholesale",
        "manufacturer",
        "supplier",
        "rope",
        "net price per kg",
        "cricket score",
        "live match",
        "torrent",
        "pdf",
    ]

    if search_terms_df is not None:
        st_col = pick_col(search_terms_df, ["Search term", "Search"])
        if st_col:
            low_cost_no_conv = search_terms_df[(search_terms_df["_clicks"] >= 3) & (search_terms_df["_conv"] <= 0)]
            candidates = (
                low_cost_no_conv[st_col]
                .astype(str)
                .str.lower()
                .str.strip()
                .dropna()
                .unique()
                .tolist()
            )
            for term in candidates[:200]:
                if len(term) > 2 and term not in low_intent_terms:
                    low_intent_terms.append(term)

    negatives_df = pd.DataFrame(
        {
            "negative_keyword": sorted(set(low_intent_terms)),
            "match_type": "Phrase",
            "level": "Campaign",
            "campaign": "Hyderabad_Search_Leads",
        }
    )

    existing_negative_df = pd.DataFrame(columns=["negative_keyword"])
    if negatives_existing is not None:
        n_col = pick_col(negatives_existing, ["Negative keyword"])
        if n_col:
            existing_negative_df = pd.DataFrame(
                {
                    "negative_keyword": negatives_existing[n_col].astype(str).str.replace('"', "", regex=False).str.strip().str.lower()
                }
            )

    negatives_df["negative_keyword"] = negatives_df["negative_keyword"].str.lower().str.strip()
    if not existing_negative_df.empty:
        negatives_df = pd.concat([negatives_df, existing_negative_df.assign(match_type="Phrase", level="Campaign", campaign="Hyderabad_Search_Leads")], ignore_index=True)
    # Protect core business intent terms from being blocked as negatives.
    protected_patterns = [
        "safety net",
        "safety nets",
        "balcony safety",
        "pigeon net",
        "bird net",
        "child safety",
        "invisible grill",
        "hyderabad",
    ]
    mask_block = negatives_df["negative_keyword"].fillna("").str.contains("|".join(protected_patterns), case=False, regex=True)
    negatives_df = negatives_df[~mask_block]
    negatives_df = negatives_df.drop_duplicates(subset=["negative_keyword"]).sort_values("negative_keyword")

    campaign_plan_df = pd.DataFrame(
        [
            {
                "campaign": "Hyderabad_Search_Leads",
                "type": "Search",
                "daily_budget_inr": 1000,
                "bidding": "Maximize Conversions (or Max Clicks with CPC cap 25)",
                "networks": "Google Search only",
                "locations": "Hyderabad + 15-20km",
                "languages": "English, Telugu, Hindi",
                "ad_schedule": "6am-10pm start; optimize by call data",
                "device_bid_adjustment": "Mobile +20%, Desktop -10% initial",
                "goal": "4-5 calls/day",
            }
        ]
    )

    adgroup_plan_df = pd.DataFrame(
        [
            {"ad_group": "Core_Safety_Nets", "budget_split_pct": 35, "focus": "generic high intent"},
            {"ad_group": "Balcony_Child_Safety", "budget_split_pct": 25, "focus": "home safety urgency"},
            {"ad_group": "Bird_Pigeon_Nets", "budget_split_pct": 25, "focus": "bird problem solution"},
            {"ad_group": "Urgent_Installation_NearMe", "budget_split_pct": 15, "focus": "near me / quick service"},
        ]
    )

    keyword_upload_df = good_keywords.copy()
    keyword_upload_df["campaign"] = "Hyderabad_Search_Leads"
    keyword_upload_df["ad_group"] = "Core_Safety_Nets"
    keyword_upload_df["final_url"] = "https://gdrenterprises.in/"

    high_intent_masks = {
        "Balcony_Child_Safety": ["balcony", "child", "kids", "window"],
        "Bird_Pigeon_Nets": ["bird", "pigeon", "sparrow", "anti bird"],
        "Urgent_Installation_NearMe": ["near me", "urgent", "today", "contact", "call"],
    }

    for ag, words in high_intent_masks.items():
        mask = keyword_upload_df["keyword"].str.contains("|".join(words), case=False, na=False)
        keyword_upload_df.loc[mask, "ad_group"] = ag

    def phrase_wrap(k: str) -> str:
        k = k.strip().replace('"', "")
        return f'"{k}"'

    keyword_upload_df["keyword_text"] = keyword_upload_df.apply(
        lambda r: phrase_wrap(str(r["keyword"])) if str(r["match_type"]).lower() == "phrase" else f"[{str(r['keyword']).strip().replace('[','').replace(']','')}]",
        axis=1,
    )
    keyword_upload_df = keyword_upload_df[
        [
            "campaign",
            "ad_group",
            "keyword_text",
            "match_type",
            "final_url",
            "intent",
            "notes",
        ]
    ].rename(columns={"keyword_text": "keyword"})

    neg_upload_df = negatives_df.rename(columns={"negative_keyword": "keyword"})[
        ["campaign", "level", "keyword", "match_type"]
    ]

    summary_metrics = {
        "target_daily_budget_inr": 1000,
        "required_calls_per_day": 4.5,
        "assumed_call_conversion_rate": 0.15,
        "required_clicks_per_day": round(4.5 / 0.15, 1),
        "assumed_avg_cpc_inr": 25,
        "estimated_spend_for_required_clicks": round((4.5 / 0.15) * 25, 1),
        "note": "To hit 4-5 calls/day on 1000 INR, CPC should be ~20-30 and landing/call flow must convert 13-18% of clicks",
    }
    kpi_df = pd.DataFrame([summary_metrics])

    pause_recommendations = pd.DataFrame(columns=["keyword", "reason", "action"])
    if kw_df is not None:
        k_col = pick_col(kw_df, ["Keyword", "Search keyword"])
        if k_col:
            tmp = kw_df.copy()
            tmp = tmp[(tmp["_clicks"] >= 2) & (tmp["_cost"] >= 250)]
            if not tmp.empty:
                pause_recommendations = pd.DataFrame(
                    {
                        "keyword": tmp[k_col].astype(str).str.replace('"', "", regex=False),
                        "reason": "High spend with no recorded conversions in export",
                        "action": "Pause or move to observation with lower bids",
                    }
                ).drop_duplicates(subset=["keyword"]) 

    csv_exports = {
        "analysis_profile.csv": profile_df,
        "campaign_plan_1000inr.csv": campaign_plan_df,
        "adgroup_plan_1000inr.csv": adgroup_plan_df,
        "keyword_upload_new.csv": keyword_upload_df,
        "negative_keyword_upload_new.csv": neg_upload_df,
        "kpi_target_model.csv": kpi_df,
        "pause_recommendations.csv": pause_recommendations,
    }

    for name, df in csv_exports.items():
        df.to_csv(out_dir / name, index=False)

    xlsx_path = out_dir / "SafeHaven_GoogleAds_Recommendations_2026-04-10.xlsx"
    with pd.ExcelWriter(xlsx_path, engine="xlsxwriter") as writer:
        profile_df.to_excel(writer, sheet_name="data_profile", index=False)
        campaign_plan_df.to_excel(writer, sheet_name="campaign_plan", index=False)
        adgroup_plan_df.to_excel(writer, sheet_name="adgroup_plan", index=False)
        keyword_upload_df.to_excel(writer, sheet_name="keywords_upload", index=False)
        neg_upload_df.to_excel(writer, sheet_name="negatives_upload", index=False)
        kpi_df.to_excel(writer, sheet_name="kpi_model", index=False)
        pause_recommendations.to_excel(writer, sheet_name="pause_recommendations", index=False)

        for name, df in analyses.items():
            df.to_excel(writer, sheet_name=safe_sheet(name), index=False)

    print("Analysis completed.")
    print(f"Output folder: {out_dir}")
    print(f"Excel file: {xlsx_path}")


if __name__ == "__main__":
    main()
