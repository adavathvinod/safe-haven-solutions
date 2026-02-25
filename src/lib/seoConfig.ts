import { BUSINESS_NAME, PHONE_1, PHONE_2, LOCATION, ADDRESS } from "./constants";

export const SITE_URL = "https://gdr-enterprises.com";

// Service Areas for Local SEO
export const SERVICE_AREAS = [
  { name: "Hyderabad", state: "Telangana", postalCode: "500001" },
  { name: "Vijayawada", state: "Andhra Pradesh", postalCode: "520010" },
  { name: "Visakhapatnam", state: "Andhra Pradesh", postalCode: "530001" },
];

// Reviews Data (for schema)
export const BUSINESS_REVIEWS = [
  {
    author: "Rajesh Kumar",
    rating: 5,
    datePublished: "2024-01-15",
    reviewBody: "Excellent safety nets installation! Professional work and very affordable. Highly recommended for balcony and pigeon nets.",
  },
  {
    author: "Priya Sharma",
    rating: 5,
    datePublished: "2024-02-10",
    reviewBody: "Very professional team. The bird nets are completely invisible and perfectly installed. Great customer service!",
  },
  {
    author: "Venkat Rao",
    rating: 5,
    datePublished: "2024-03-05",
    reviewBody: "Best safety nets provider in Hyderabad. Fair pricing, quick installation, and excellent workmanship. 5 stars!",
  },
];

// Long-tail Keywords by Service
export const SEO_KEYWORDS = {
  safety: [
    "safety nets Hyderabad",
    "balcony safety nets Hyderabad",
    "children safety nets Hyderabad",
    "construction safety nets",
    "safety nets installation near me",
    "safety net for balcony",
  ],
  bird: [
    "bird nets Hyderabad",
    "pigeon nets Hyderabad",
    "bird protection nets",
    "anti bird netting",
    "bird safety nets for balcony",
  ],
  child: [
    "child safety nets Hyderabad",
    "kids safety nets",
    "children protection nets",
    "balcony safety for kids",
    "child proof balcony nets",
  ],
  sports: [
    "sports nets Hyderabad",
    "badminton court nets",
    "cricket practice nets",
    "sports netting installation",
  ],
};

// Location-specific keywords
export const LOCATION_KEYWORDS = {
  hyderabad: "safety nets Hyderabad, bird nets Hyderabad, pigeon nets Hyderabad, balcony nets Hyderabad",
  vijayawada: "safety nets Vijayawada, bird nets Vijayawada",
  visakhapatnam: "safety nets Visakhapatnam, bird nets Visakhapatnam",
};

// Social Media Profiles
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/gdr-enterprises",
  "https://www.instagram.com/gdr-enterprises",
  "https://twitter.com/gdr_enterprises",
];

// Payment Methods Accepted
export const PAYMENT_METHODS = [
  "Cash",
  "UPI",
  "Bank Transfer",
  "Debit Card",
  "Credit Card",
];

// Certifications & Trust Signals
export const CERTIFICATIONS = [
  "ISO Certified Materials",
  "BIS Approved Products",
  "Insured Installation Service",
  "2 Year Warranty",
];
