import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE_1 } from "@/lib/constants";
import { SITE_URL, SERVICE_AREAS } from "@/lib/seoConfig";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
}

const ServiceSchema = ({ serviceName, description, serviceType, areaServed }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: `+91${PHONE_1}`,
      url: SITE_URL,
    },
    areaServed: (areaServed || SERVICE_AREAS.map((area) => area.name)).map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} Service`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
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

export default ServiceSchema;
