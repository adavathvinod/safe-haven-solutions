import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE_1 } from "@/lib/constants";
import { SITE_URL } from "@/lib/seoConfig";

interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  price?: string;
  currency?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
}

const ProductSchema = ({
  name,
  description,
  image = "/og-image.png",
  price,
  currency = "INR",
  availability = "https://schema.org/InStock",
  rating = 4.9,
  reviewCount = 100,
}: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    brand: {
      "@type": "Brand",
      name: BUSINESS_NAME,
    },
    manufacturer: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      telephone: `+91${PHONE_1}`,
      url: SITE_URL,
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        url: SITE_URL,
        priceCurrency: currency,
        price,
        availability,
      },
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ProductSchema;
