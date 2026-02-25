import { Helmet } from "react-helmet-async";

interface SpeakableSchemaProps {
  content: string[];
}

const SpeakableSchema = ({ content }: SpeakableSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: content,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SpeakableSchema;
