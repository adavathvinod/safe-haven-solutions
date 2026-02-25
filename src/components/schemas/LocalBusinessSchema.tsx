import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE_1, PHONE_2, ADDRESS } from "@/lib/constants";
import { SITE_URL, SERVICE_AREAS, BUSINESS_REVIEWS, SOCIAL_PROFILES, PAYMENT_METHODS } from "@/lib/seoConfig";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    description: "Premium safety nets and bird nets installation service in Hyderabad, Vijayawada, and Visakhapatnam. Professional installation for balconies, windows, sports courts, and child safety.",
    url: SITE_URL,
    telephone: `+91${PHONE_1}`,
    paymentAccepted: PAYMENT_METHODS.join(", "),
    currenciesAccepted: "INR",
    email: "gdrenterprisesasafetynets@gmail.com",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.3850",
      longitude: "78.4867",
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: area.state,
      },
    })),
    sameAs: SOCIAL_PROFILES,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: BUSINESS_REVIEWS.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: BUSINESS_REVIEWS.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Safety Nets & Bird Nets Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balcony Safety Nets Installation",
            description: "Premium balcony safety nets for child safety and bird protection in Hyderabad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bird & Pigeon Nets",
            description: "Effective bird and pigeon control nets for balconies and windows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Safety Nets",
            description: "Industrial-grade safety nets for construction and high-rise buildings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Nets Installation",
            description: "Professional sports court and practice net installation",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
