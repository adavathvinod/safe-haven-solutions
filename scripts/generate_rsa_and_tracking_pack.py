from __future__ import annotations

from pathlib import Path

import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "analysis_output_2026-04-10"
OUT.mkdir(exist_ok=True)

CAMPAIGN = "Hyderabad_Search_Leads"
FINAL_URL = "https://gdrenterprises.in/"
CALL_NUMBER = "+91 9100579116"


def cap(text: str, max_len: int) -> str:
    text = str(text).strip()
    return text[:max_len]


def make_rsa_row(ad_group: str, headlines: list[str], descriptions: list[str], path1: str, path2: str) -> dict[str, str]:
    h = [cap(x, 30) for x in headlines]
    d = [cap(x, 90) for x in descriptions]

    while len(h) < 15:
        h.append("")
    while len(d) < 4:
        d.append("")

    row = {
        "Row Type": "Ad",
        "Action": "Add",
        "Ad status": "Enabled",
        "Campaign": CAMPAIGN,
        "Ad group": ad_group,
        "Ad type": "Responsive search ad",
        "Final URL": FINAL_URL,
        "Path 1": cap(path1, 15),
        "Path 2": cap(path2, 15),
    }

    for i in range(15):
        row[f"Headline {i+1}"] = h[i]
    for i in range(4):
        row[f"Description {i+1}"] = d[i]

    # Pin only one headline and one description to keep flexibility while preserving intent.
    row["Headline 1 position"] = "HEADLINE_1"
    row["Description 1 position"] = "DESCRIPTION_1"

    return row


def main() -> None:
    rows: list[dict[str, str]] = []

    rows.append(
        make_rsa_row(
            ad_group="Core_Safety_Nets",
            headlines=[
                "Safety Nets Hyderabad",
                "Same Day Site Visit",
                "Call Now For Quick Quote",
                "Strong UV Safe Nets",
                "Expert Installation Team",
                "Affordable Net Solutions",
                "Trusted Local Service",
                "Free Measurement Visit",
                "Book Installation Today",
                "GDR Safety Nets",
            ],
            descriptions=[
                "Protect your family with durable safety nets in Hyderabad. Fast installation available.",
                "Call now for site visit, exact measurement, and quick price estimate.",
                "High-quality materials and clean fitting by experienced technicians.",
                "Serving apartments, villas, and commercial buildings across Hyderabad.",
            ],
            path1="safety-nets",
            path2="hyderabad",
        )
    )

    rows.append(
        make_rsa_row(
            ad_group="Balcony_Child_Safety",
            headlines=[
                "Balcony Safety Nets",
                "Child Safety Net Experts",
                "Secure Balcony In 1 Day",
                "Hyderabad Net Installation",
                "Call For Fast Quote",
                "Safe Home For Kids",
                "Strong Balcony Protection",
                "Affordable Child Safety",
                "Book Free Site Visit",
                "Get Quote On WhatsApp",
            ],
            descriptions=[
                "Child safety and balcony nets installed with strong fittings and neat finish.",
                "Quick site inspection and same-day installation in many Hyderabad areas.",
                "Call now for pricing and protect children from balcony fall risks.",
                "Durable UV-resistant net options available for home safety.",
            ],
            path1="balcony-nets",
            path2="child-safety",
        )
    )

    rows.append(
        make_rsa_row(
            ad_group="Bird_Pigeon_Nets",
            headlines=[
                "Pigeon Net Installation",
                "Bird Nets Hyderabad",
                "Stop Pigeon Problems",
                "No Harm Bird Protection",
                "Balcony Bird Net Experts",
                "Fast Service Near You",
                "Call For Pigeon Net Quote",
                "Clean Balcony Solution",
                "Long Lasting Net Material",
                "Book Free Site Visit",
            ],
            descriptions=[
                "Professional pigeon and bird net installation for balconies, windows, and ducts.",
                "Keep birds away safely without harming them. Strong and reliable net fitting.",
                "Call now for quick quote and same-day service in Hyderabad areas.",
                "Experienced team with proper anchors and clean installation process.",
            ],
            path1="pigeon-nets",
            path2="installation",
        )
    )

    rows.append(
        make_rsa_row(
            ad_group="Urgent_Installation_NearMe",
            headlines=[
                "Safety Nets Near Me",
                "Urgent Net Installation",
                "Call Now Hyderabad Team",
                "Quick Home Protection",
                "Same Day Service Available",
                "Fast Quote On Call",
                "Install Today Pay Later",
                "Local Net Fitting Experts",
                "Emergency Balcony Net",
                "Book Technician Now",
            ],
            descriptions=[
                "Need urgent safety net installation? Call now for quick support near your location.",
                "Same-day site visit and installation available in selected Hyderabad zones.",
                "Get fast response, transparent pricing, and trusted workmanship.",
                "Ideal for balcony, pigeon, child, and duct safety requirements.",
            ],
            path1="near-me",
            path2="urgent-service",
        )
    )

    rsa_df = pd.DataFrame(rows)

    ordered_cols = [
        "Row Type",
        "Action",
        "Ad status",
        "Campaign",
        "Ad group",
        "Ad type",
        "Final URL",
    ]
    ordered_cols += [f"Headline {i}" for i in range(1, 16)]
    ordered_cols += [f"Description {i}" for i in range(1, 5)]
    ordered_cols += [
        "Headline 1 position",
        "Description 1 position",
        "Path 1",
        "Path 2",
    ]

    for col in ordered_cols:
        if col not in rsa_df.columns:
            rsa_df[col] = ""
    rsa_df = rsa_df[ordered_cols]

    tracking_rows = [
        {
            "step": 1,
            "area": "GTM Container",
            "task": "Create Data Layer Variables",
            "details": "event, phone_number, click_location, form_location, service_type, lead_type",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 2,
            "area": "GTM Trigger",
            "task": "Create Custom Event trigger: call_click",
            "details": "Event name equals call_click",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 3,
            "area": "GTM Trigger",
            "task": "Create Custom Event trigger: contact_form_submit",
            "details": "Event name equals contact_form_submit",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 4,
            "area": "GA4",
            "task": "Create GA4 Event tag for call_click",
            "details": "Map parameters: phone_number, click_location, lead_type",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 5,
            "area": "GA4",
            "task": "Create GA4 Event tag for contact_form_submit",
            "details": "Map parameters: form_location, service_type, lead_type",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 6,
            "area": "GA4",
            "task": "Mark events as conversions",
            "details": "Enable call_click and contact_form_submit as key events",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 7,
            "area": "Google Ads",
            "task": "Import GA4 conversions",
            "details": "Import call_click and contact_form_submit into Google Ads",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 8,
            "area": "Google Ads",
            "task": "Enable call assets",
            "details": f"Use primary number {CALL_NUMBER} at campaign level",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 9,
            "area": "Validation",
            "task": "GTM Preview test",
            "details": "Confirm events fire on click-to-call and form submit",
            "owner": "Marketing",
            "status": "Pending",
        },
        {
            "step": 10,
            "area": "Validation",
            "task": "Realtime validation",
            "details": "Check GA4 Realtime and Ads diagnostics after test events",
            "owner": "Marketing",
            "status": "Pending",
        },
    ]
    tracking_df = pd.DataFrame(tracking_rows)

    rsa_csv = OUT / "rsa_ads_upload_new.csv"
    rsa_xlsx = OUT / "rsa_ads_upload_new.xlsx"
    tracking_csv = OUT / "gtm_call_tracking_checklist.csv"
    tracking_xlsx = OUT / "gtm_call_tracking_checklist.xlsx"
    tracking_md = OUT / "gtm_call_tracking_checklist.md"

    rsa_df.to_csv(rsa_csv, index=False)
    rsa_df.to_excel(rsa_xlsx, index=False)

    tracking_df.to_csv(tracking_csv, index=False)
    tracking_df.to_excel(tracking_xlsx, index=False)

    md_lines = [
        "# GTM + Call Tracking Checklist",
        "",
        f"Campaign: {CAMPAIGN}",
        f"Primary call number: {CALL_NUMBER}",
        "",
    ]
    for _, r in tracking_df.iterrows():
        md_lines.append(f"- [ ] Step {int(r['step'])}: {r['area']} - {r['task']} ({r['details']})")
    tracking_md.write_text("\n".join(md_lines), encoding="utf-8")

    print(f"Created: {rsa_csv}")
    print(f"Created: {rsa_xlsx}")
    print(f"Created: {tracking_csv}")
    print(f"Created: {tracking_xlsx}")
    print(f"Created: {tracking_md}")


if __name__ == "__main__":
    main()
