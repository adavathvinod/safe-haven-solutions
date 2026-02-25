import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME } from "@/lib/constants";
import { SITE_URL } from "@/lib/seoConfig";

interface ImageObjectSchemaProps {
  images: {
    url: string;
    caption: string;
    width?: number;
    height?: number;
  }[];
}

const ImageObjectSchema = ({ images }: ImageObjectSchemaProps) => {
  const schemas = images.map((img) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: img.url.startsWith("http") ? img.url : `${SITE_URL}${img.url}`,
    caption: img.caption,
    description: img.caption,
    name: img.caption,
    author: {
      "@type": "Organization",
      name: BUSINESS_NAME,
    },
    copyrightHolder: {
      "@type": "Organization",
      name: BUSINESS_NAME,
    },
    width: img.width || 1200,
    height: img.height || 800,
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <Helmet key={index}>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      ))}
    </>
  );
};

export default ImageObjectSchema;
