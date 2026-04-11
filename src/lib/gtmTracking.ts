/**
 * GTM (Google Tag Manager) Event Tracking Utilities
 * 
 * This file provides helper functions to push conversion events to GTM's dataLayer
 * which can then be used by Google Ads, Meta Pixel, and other marketing platforms.
 */

// Declare dataLayer on window for TypeScript
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Push a generic event to GTM dataLayer
 */
export const pushToDataLayer = (eventData: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
    console.log('GTM Event Pushed:', eventData);
  } else {
    console.warn('GTM dataLayer not available');
  }
};

/**
 * Track contact form submission (main lead conversion)
 */
export const trackContactFormSubmit = (params: {
  name: string;
  mobile: string;
  service?: string;
  formLocation: 'contact_page' | 'quick_enquiry';
}) => {
  pushToDataLayer({
    event: 'generate_lead',
    event_category: 'Lead',
    event_label: 'Contact Form Submit',
    form_location: params.formLocation,
    service_type: params.service || 'General Enquiry',
    lead_type: 'form_submission',
    value: 1, // You can assign a value to leads
    currency: 'INR',
  });

  // Also push a separate conversion event for Google Ads
  pushToDataLayer({
    event: 'contact_form_submit',
  });
};

/**
 * Track Click to Call action
 */
export const trackCallClick = (phoneNumber: string, location: string) => {
  pushToDataLayer({
    event: 'generate_lead',
    event_category: 'Lead',
    event_label: 'Click to Call',
    phone_number: phoneNumber,
    click_location: location,
    lead_type: 'call_click',
    value: 1,
    currency: 'INR',
  });

  // Separate event for Google Ads
  pushToDataLayer({
    event: 'call_click',
  });
};

/**
 * Track WhatsApp click action
 */
export const trackWhatsAppClick = (location: string) => {
  pushToDataLayer({
    event: 'generate_lead',
    event_category: 'Lead',
    event_label: 'WhatsApp Click',
    click_location: location,
    lead_type: 'whatsapp_click',
    value: 1,
    currency: 'INR',
  });

  // Separate event for Google Ads
  pushToDataLayer({
    event: 'whatsapp_click',
  });
};

/**
 * Track page view (for virtual page tracking)
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushToDataLayer({
    event: 'virtual_page_view',
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Track Service Interest (when user views service details)
 */
export const trackServiceInterest = (serviceName: string) => {
  pushToDataLayer({
    event: 'view_service',
    event_category: 'Engagement',
    event_label: serviceName,
    service_name: serviceName,
  });
};

/**
 * Enhanced ecommerce event (if you add pricing later)
 */
export const trackBeginCheckout = (serviceName: string, value: number) => {
  pushToDataLayer({
    event: 'begin_checkout',
    event_category: 'Ecommerce',
    event_label: serviceName,
    value: value,
    currency: 'INR',
    items: [
      {
        item_name: serviceName,
        item_category: 'Safety Nets',
        price: value,
        quantity: 1,
      },
    ],
  });
};
