# Google Ads Launch Settings (Hyderabad_Search_Leads)

## Campaign Setup
- Campaign name: Hyderabad_Search_Leads
- Campaign type: Search
- Goal: Leads
- Daily budget: INR 1000
- Bidding strategy (week 1): Maximize Clicks
- Max CPC bid limit (week 1): INR 30
- Bidding strategy (after call tracking stabilizes): Maximize Conversions
- Networks: Search Network ON, Display Network OFF
- Start date: Immediate
- End date: None

## Location & Language
- Presence setting: Presence (people in or regularly in your included locations)
- Included location: Hyderabad
- Radius target: 15 to 20 km around Hyderabad city center (or serviceable pin codes)
- Excluded locations: Outside Telangana service areas (if not servicing)
- Languages: English, Telugu, Hindi

## Audience / Segments
- Observation mode only (no hard targeting initially)
- Do not restrict reach in first 14 days

## Ad Schedule
- Initial schedule: 06:00 to 22:00 (all days)
- Optional tighter schedule for first phase: 07:00 to 21:00
- After 7 to 10 days: adjust by call conversion by hour

## Device Adjustments (Start)
- Mobile: +20%
- Desktop: -10%
- Tablet: -20%

## Ad Groups
- Core_Safety_Nets (35%)
- Balcony_Child_Safety (25%)
- Bird_Pigeon_Nets (25%)
- Urgent_Installation_NearMe (15%)

## Assets (Extensions)
- Call asset: +91 9100579116
- Call reporting: ON
- Count calls as conversion: ON (minimum 30 sec suggested)
- Callout assets:
  - Free Site Visit
  - Same Day Installation
  - UV Resistant Nets
  - Trained Technicians
- Structured snippets (Services):
  - Balcony Safety Nets
  - Child Safety Nets
  - Pigeon Bird Nets
  - Duct Area Nets
- Sitelinks:
  - Safety Nets
  - Bird & Pigeon Nets
  - Balcony Child Safety
  - Contact / Call Now

## Conversion Tracking (Must Before Scale)
- GTM event for call click: call_click
- GTM event for form submit: contact_form_submit
- Import GA4 conversions into Google Ads
- Set Primary conversions for bidding:
  - call_click
  - contact_form_submit

## Upload Sequence (Fixed Files)
1. campaign_upload_fixed.xlsx
2. adgroup_upload_fixed.xlsx
3. keyword_upload_fixed.xlsx
4. negative_keyword_upload_fixed.xlsx
5. rsa_ads_upload_fixed.xlsx
6. Apply GTM checklist and validate in preview/realtime

## Optimization Rules (First 14 Days)
- Pause keyword if spend > INR 300 and zero calls
- Reduce bid by 15% if CPC > INR 35 with no calls
- Increase bid by 10% for keywords with 2+ calls and CPC < INR 30
- Add search term as negative if 2+ clicks and irrelevant intent
- Keep at least 10 to 15 active high-intent keywords per ad group

## KPI Guardrails
- Target CPC: INR 20 to 30
- Daily clicks needed for 4 to 5 calls: ~30
- Required click-to-call conversion rate: 13% to 18%
- Target calls/day: 4 to 5
