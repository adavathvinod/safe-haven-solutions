import { useParams, Link } from "react-router-dom";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import pageBalcony from "@/assets/page-balcony.jpg";
import pageBuilding from "@/assets/page-building.jpg";
import pageCarparking from "@/assets/page-carparking.jpg";
import pageChildren from "@/assets/page-children.jpg";
import pageConstruction from "@/assets/page-construction.jpg";
import pageDuct from "@/assets/page-duct.jpg";
import pageIndustrial from "@/assets/page-industrial.jpg";
import pagePool from "@/assets/page-pool.jpg";
import pageAntibird from "@/assets/page-antibird.jpg";
import pagePigeon from "@/assets/page-pigeon.jpg";
import pageBirdprotection from "@/assets/page-birdprotection.jpg";
import pageSpikes from "@/assets/page-spikes.jpg";

interface ServiceData {
  title: string;
  image: string;
  description: string;
  purpose: string[];
  features: string[];
  applications: string[];
  benefits: string[];
}

const servicesData: Record<string, ServiceData> = {
  "balcony-safety-nets": {
    title: "Balcony Safety Nets",
    image: pageBalcony,
    description: "Balcony Safety Nets are designed to provide complete protection for homes, apartments, and high-rise buildings. They prevent accidents, especially for children, pets, and elderly people, while still allowing fresh air and sunlight.",
    purpose: ["Prevent children from falling", "Protect pets from jumping out", "Avoid birds entering balconies", "Prevent objects from falling down"],
    features: ["Made from high-quality nylon or HDPE material", "UV resistant and weatherproof", "Strong knots and durable mesh", "Transparent or white color for aesthetic look", "Long-lasting (3–5 years)"],
    applications: ["Residential apartments", "High-rise buildings", "Hotels", "Hospitals", "Schools"],
    benefits: ["Ensures family safety", "Maintains balcony beauty", "Easy installation and removal", "Low maintenance"],
  },
  "building-safety-nets": {
    title: "Building Safety Nets",
    image: pageBuilding,
    description: "Building Safety Nets are installed around multi-storey buildings to protect people and property from falling debris or accidental slips during construction or maintenance work.",
    purpose: ["Prevent falling of construction materials", "Protect workers and pedestrians", "Safety during exterior cleaning and painting"],
    features: ["Heavy-duty nylon or polypropylene nets", "High tensile strength", "Fire-resistant (optional)", "Custom sizes available", "Secure fastening system"],
    applications: ["Commercial buildings", "Apartments", "Office complexes", "Shopping malls"],
    benefits: ["Reduces accident risks", "Improves work safety standards", "Cost-effective safety solution", "Complies with safety regulations"],
  },
  "car-parking-safety-nets": {
    title: "Car Parking Safety Nets",
    image: pageCarparking,
    description: "Car Parking Safety Nets are used to protect vehicles and people in parking areas from falling objects from upper floors or open structures.",
    purpose: ["Protect cars from falling debris", "Prevent accidental falls", "Control bird nuisance", "Improve safety in open parking zones"],
    features: ["Strong mesh material", "Weather-resistant", "UV protected", "Easy installation", "Long life span"],
    applications: ["Apartment parking areas", "Commercial parking lots", "Basement parking", "Mall parking zones"],
    benefits: ["Vehicle protection", "Enhanced safety", "Low maintenance", "Affordable solution"],
  },
  "children-safety-nets": {
    title: "Children Safety Nets",
    image: pageChildren,
    description: "Children Safety Nets are specially designed to prevent accidents in homes and play areas. They are installed in balconies, staircases, windows, and open spaces.",
    purpose: ["Prevent children from falling", "Create safe play areas", "Block dangerous openings"],
    features: ["Soft but strong material", "Non-toxic and eco-friendly", "Small mesh size for extra safety", "Tear-resistant", "Invisible look"],
    applications: ["Homes", "Schools", "Daycare centers", "Play zones", "Hospitals"],
    benefits: ["Peace of mind for parents", "Safe indoor and outdoor environment", "Quick installation", "Child-friendly design"],
  },
  "construction-safety-nets": {
    title: "Construction Safety Nets",
    image: pageConstruction,
    description: "Construction Safety Nets are mandatory safety equipment used at construction sites to protect workers and materials from falling hazards.",
    purpose: ["Prevent falls from height", "Catch falling tools or materials", "Protect nearby people"],
    features: ["Heavy-duty industrial grade nets", "High load-bearing capacity", "Flame retardant options", "Custom installation", "Certified quality materials"],
    applications: ["Construction sites", "Bridges", "Flyovers", "High-rise buildings", "Industrial projects"],
    benefits: ["Reduces injuries and accidents", "Improves worker confidence", "Follows safety standards", "Cost-efficient safety measure"],
  },
  "duct-area-safety-nets": {
    title: "Duct Area Safety Nets",
    image: pageDuct,
    description: "Duct Area Safety Nets are installed in open duct spaces inside buildings to prevent falls and block garbage or birds from entering.",
    purpose: ["Prevent accidental falls", "Stop garbage dumping", "Avoid bird nesting", "Improve hygiene"],
    features: ["High strength nylon nets", "Moisture resistant", "Long-lasting", "Easy to install", "Minimal visibility"],
    applications: ["Apartment duct areas", "Hospitals", "Office buildings", "Hotels", "Commercial complexes"],
    benefits: ["Improved safety", "Clean and hygienic environment", "No disturbance to ventilation", "Low maintenance"],
  },
  "industrial-safety-nets": {
    title: "Industrial Safety Nets",
    image: pageIndustrial,
    description: "Industrial Safety Nets are designed for factories and industrial environments to protect workers and machinery from falling hazards.",
    purpose: ["Worker safety", "Protect machines", "Prevent accidents in height work", "Material handling safety"],
    features: ["Heavy-duty netting", "Chemical resistant", "Fire retardant", "High tensile strength", "Long durability"],
    applications: ["Factories", "Warehouses", "Power plants", "Manufacturing units", "Oil & gas industries"],
    benefits: ["Safer work environment", "Reduced insurance risks", "Long service life", "Professional safety solution"],
  },
  "swimming-pool-safety-nets": {
    title: "Swimming Pool Safety Nets",
    image: pagePool,
    description: "Swimming Pool Safety Nets are installed over or around swimming pools to prevent accidental drowning, especially for children and pets.",
    purpose: ["Prevent accidental falls into pools", "Child and pet protection", "Maintain pool hygiene"],
    features: ["Waterproof nylon nets", "Strong load capacity", "UV resistant", "Easy open and close system", "Custom fit design"],
    applications: ["Residential swimming pools", "Hotels", "Resorts", "Schools", "Clubs"],
    benefits: ["Life-saving protection", "Peace of mind", "Keeps pool clean", "Stylish and safe solution"],
  },
  "anti-bird-nets": {
    title: "Anti Bird Nets",
    image: pageAntibird,
    description: "Anti Bird Nets are specially designed to prevent birds from entering balconies, windows, and open spaces without harming them. They are a humane and eco-friendly solution for bird control in residential and commercial areas.",
    purpose: ["Stop birds from entering balconies and buildings", "Prevent nesting and droppings", "Protect property and cleanliness"],
    features: ["Made from high-quality nylon or HDPE material", "UV stabilized and weather resistant", "Strong and durable mesh", "Transparent or white color for neat appearance", "Long-lasting (3–5 years)"],
    applications: ["Balconies", "Windows", "Terraces", "Warehouses", "Factories"],
    benefits: ["Hygienic environment", "No harm to birds", "Maintains airflow and sunlight", "Easy installation and maintenance", "Cost-effective solution"],
  },
  "pigeon-safety-nets": {
    title: "Pigeon Safety Nets",
    image: pagePigeon,
    description: "Pigeon Safety Nets are used specifically to block pigeons from entering buildings and causing health hazards. They are widely installed in apartments and commercial buildings.",
    purpose: ["Prevent pigeon nesting", "Stop pigeon droppings", "Avoid spread of diseases", "Protect walls and interiors"],
    features: ["Heavy-duty nylon netting", "Small mesh size to block pigeons", "UV and heat resistant", "Strong knots and long durability", "Almost invisible look"],
    applications: ["Apartment balconies", "Window grills", "AC outdoor units", "Parking areas", "Hospitals and schools"],
    benefits: ["Clean and healthy surroundings", "No bird injuries", "Long service life", "Easy to clean", "Professional appearance"],
  },
  "bird-protection-nets": {
    title: "Bird Protection Nets",
    image: pageBirdprotection,
    description: "Bird Protection Nets are used to protect crops, plants, fruits, and open areas from bird damage. They are widely used in agriculture and gardens.",
    purpose: ["Protect fruits and vegetables", "Prevent birds from damaging plants", "Avoid crop loss", "Maintain garden beauty"],
    features: ["Lightweight and strong material", "UV protected", "Tear resistant", "Flexible installation", "Reusable nets"],
    applications: ["Farms", "Gardens", "Nurseries", "Vineyards", "Greenhouses"],
    benefits: ["Safe for birds", "Increases crop yield", "Eco-friendly solution", "Easy installation", "Affordable protection"],
  },
  "pigeon-bird-spikes": {
    title: "Pigeon & Bird Spikes",
    image: pageSpikes,
    description: "Pigeon & Bird Spikes are physical bird deterrents installed on ledges, parapets, signboards, and beams to stop birds from sitting or nesting.",
    purpose: ["Prevent birds from landing", "Stop nesting on edges", "Keep buildings clean", "Protect property"],
    features: ["Stainless steel or plastic spikes", "Rust-proof and weather resistant", "Long-lasting material", "Easy installation with adhesive or screws", "Non-harmful design"],
    applications: ["Window ledges", "Building edges", "Roofs", "Signboards", "CCTV poles"],
    benefits: ["Humane bird control", "Low maintenance", "Durable and strong", "Professional look", "Effective bird deterrent"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold font-heading text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const renderList = (title: string, items: string[]) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold font-heading text-primary mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-primary-foreground text-center drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {renderList("Purpose", service.purpose)}
            {renderList("Features", service.features)}
            {renderList("Applications", service.applications)}
            {renderList("Benefits", service.benefits)}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
              Get a Free Quote for {service.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              GDR Enterprise Safety Nets - Guaranteed to be 100% safe and durable.
            </p>
            <a
              href="tel:9100579116"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 9100579116
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
