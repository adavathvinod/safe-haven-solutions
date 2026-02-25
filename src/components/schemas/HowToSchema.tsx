import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/seoConfig";

interface Step {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Step[];
  totalTime?: string;
}

const HowToSchema = ({ name, description, steps, totalTime = "P2D" }: HowToSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    tool: ["Premium Netting Materials", "Installation Brackets", "Tensioning Tools"],
    supply: ["Quality Safety Nets", "Cable Fittings", "End Caps"],
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? `${SITE_URL}${step.image}` : undefined,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default HowToSchema;
