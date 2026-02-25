import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME } from "@/lib/constants";
import { SITE_URL, SOCIAL_PROFILES } from "@/lib/seoConfig";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description: "Professional safety nets and bird nets installation service provider in Hyderabad, Vijayawada, and Visakhapatnam specializing in balcony, window, child safety, and sports nets solutions.",
    sameAs: SOCIAL_PROFILES,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919100579116",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
