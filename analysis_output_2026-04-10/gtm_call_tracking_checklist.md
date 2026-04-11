# GTM + Call Tracking Checklist

Campaign: Hyderabad_Search_Leads
Primary call number: +91 9100579116

- [ ] Step 1: GTM Container - Create Data Layer Variables (event, phone_number, click_location, form_location, service_type, lead_type)
- [ ] Step 2: GTM Trigger - Create Custom Event trigger: call_click (Event name equals call_click)
- [ ] Step 3: GTM Trigger - Create Custom Event trigger: contact_form_submit (Event name equals contact_form_submit)
- [ ] Step 4: GA4 - Create GA4 Event tag for call_click (Map parameters: phone_number, click_location, lead_type)
- [ ] Step 5: GA4 - Create GA4 Event tag for contact_form_submit (Map parameters: form_location, service_type, lead_type)
- [ ] Step 6: GA4 - Mark events as conversions (Enable call_click and contact_form_submit as key events)
- [ ] Step 7: Google Ads - Import GA4 conversions (Import call_click and contact_form_submit into Google Ads)
- [ ] Step 8: Google Ads - Enable call assets (Use primary number +91 9100579116 at campaign level)
- [ ] Step 9: Validation - GTM Preview test (Confirm events fire on click-to-call and form submit)
- [ ] Step 10: Validation - Realtime validation (Check GA4 Realtime and Ads diagnostics after test events)