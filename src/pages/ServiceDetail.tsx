import { useParams, Link } from "react-router-dom";
import { Phone, ArrowLeft, CheckCircle, Star } from "lucide-react";
import SEO from "@/components/SEO";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ThreeSteps from "@/components/ThreeSteps";

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
import pageSports from "@/assets/page-sports.jpg";
import pageCricket from "@/assets/page-cricket.jpg";
import pageFootball from "@/assets/page-football.jpg";
import pageTennis from "@/assets/page-tennis.jpg";
import pageMultisport from "@/assets/page-multisport.jpg";

interface ServiceData {
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  image: string;
  description: string;
  fullDescription: string;
  purpose: string[];
  features: string[];
  applications: string[];
  benefits: string[];
  faqs?: Array<{ q: string; a: string }>;
}

const servicesData: Record<string, ServiceData> = {
  "balcony-safety-nets": {
    title: "Balcony Safety Nets",
    seoTitle: "Balcony Safety Nets Installation in Hyderabad | Child Protection | GDR Enterprises",
    seoDescription: "Professional balcony safety nets in Hyderabad for child protection, pet safety, and bird prevention. UV-resistant, long-lasting nets. Free quote. Call 9100579116.",
    seoKeywords: "balcony safety nets Hyderabad, balcony nets installation, child safety nets, bird nets for balcony, pigeon prevention nets, invisible grills",
    image: pageBalcony,
    description: "Balcony Safety Nets are designed to provide complete protection for homes, apartments, and high-rise buildings. They prevent accidents, especially for children, pets, and elderly people, while still allowing fresh air and sunlight.",
    fullDescription: "Our balcony safety nets are made from premium quality nylon or HDPE material that is UV resistant and weatherproof. They are transparent or white colored, maintaining the aesthetic appeal of your balcony while providing robust protection. The nets are installed with strong knots and fasteners, ensuring durability for 3-5 years. They prevent children and pets from accidental falls, block birds from entering, and prevent objects from falling down. Installation is quick, easy, and non-intrusive, without damaging your walls or paint.",
    purpose: ["Prevent children from falling", "Protect pets from jumping out", "Avoid birds entering balconies", "Prevent objects from falling down"],
    features: ["Made from high-quality nylon or HDPE material", "UV resistant and weatherproof", "Strong knots and durable mesh", "Transparent or white color for aesthetic look", "Long-lasting (3–5 years)", "Non-damaging installation"],
    applications: ["Residential apartments", "High-rise buildings", "Hotels", "Hospitals", "Schools", "Villas"],
    benefits: ["Ensures family safety", "Maintains balcony beauty", "Easy installation and removal", "Low maintenance", "Cost-effective", "10-year warranty on materials"],
    faqs: [
      {
        q: "How long do balcony safety nets last?",
        a: "Our premium balcony safety nets are made from UV-resistant material and typically last 3-5 years with minimal maintenance. We provide a 10-year warranty on materials."
      },
      {
        q: "Can balcony nets block sunlight?",
        a: "No, our nets are transparent and designed to allow maximum sunlight and airflow while providing complete safety protection."
      },
      {
        q: "Is installation damaging to walls?",
        a: "No, we use non-invasive installation methods that don't damage your walls, paint, or structure of your balcony."
      },
      {
        q: "Can the nets be easily removed?",
        a: "Yes, our balcony nets can be easily removed or repositioned without any permanent damage to your property."
      }
    ]
  },
  "building-safety-nets": {
    title: "Building Safety Nets",
    seoTitle: "Building Safety Nets Installation | Construction Safety | GDR Enterprises Hyderabad",
    seoDescription: "Professional building safety nets for multi-storey construction projects. Protect workers and property. Fire-resistant options available. Expert installation. Call now for free quote.",
    seoKeywords: "building safety nets, construction safety nets, multi-story building protection, worker safety nets, fire-resistant safety nets, construction site safety",
    image: pageBuilding,
    description: "Building Safety Nets are installed around multi-storey buildings to protect people and property from falling debris or accidental slips during construction or maintenance work.",
    fullDescription: "Our building safety nets are heavy-duty nylon or polypropylene nets designed for construction sites and service work. They have high tensile strength and can support significant loads. Fire-resistant options are available for industrial applications. The nets are custom-sized to fit your building dimensions and securely fastened with professional equipment. They protect workers, pedestrians, and property from falling materials while allowing visibility and airflow.",
    purpose: ["Prevent falling of construction materials", "Protect workers and pedestrians", "Safety during exterior cleaning and painting", "Comply with construction safety standards"],
    features: ["Heavy-duty nylon or polypropylene nets", "High tensile strength", "Fire-resistant options available", "Custom sizes available", "Secure fastening system", "Professional installation"],
    applications: ["Commercial buildings", "Apartments", "Office complexes", "Shopping malls", "High-rise projects", "Renovation work"],
    benefits: ["Reduces accident risks significantly", "Improves work safety standards", "Cost-effective safety solution", "Complies with safety regulations", "Quick and efficient installation", "Professional team support"],
    faqs: [
      {
        q: "Are building safety nets fire-resistant?",
        a: "Yes, we offer both standard and fire-resistant building safety nets. Fire-resistant options are recommended for industrial and sensitive areas."
      },
      {
        q: "How quickly can you install building nets?",
        a: "Our professional team can install building safety nets quickly, typically completing standard installations within 1-2 days depending on building size."
      }
    ]
  },
  "bird-nets": {
    title: "Bird & Pigeon Protection Nets",
    seoTitle: "Bird & Pigeon Protection Nets in Hyderabad | Anti-Bird Netting | GDR Enterprises",
    seoDescription: "Effective bird and pigeon protection nets for balconies, windows, and AC units. Humane and eco-friendly. Professional installation. Free quote. Call 9100579116.",
    seoKeywords: "bird nets Hyderabad, pigeon nets, bird protection nets, anti-bird netting, pigeon control nets, bird prevention system",
    image: pageAntibird,
    description: "Anti Bird Nets are specially designed to prevent birds from entering balconies, windows, and open spaces without harming them. They are a humane and eco-friendly solution for bird control.",
    fullDescription: "Our bird and pigeon protection nets are made from high-quality nylon or HDPE material that is UV stabilized and weather resistant. They have a transparent appearance and strong durable mesh construction. The nets prevent birds and pigeons from entering your home while maintaining airflow and visibility. Installation is simple and does not damage your property. These nets are ideal for residential and commercial applications, providing a humane solution to bird problems.",
    purpose: ["Stop birds from entering balconies and buildings", "Prevent nesting and droppings", "Protect property and maintain cleanliness", "Eco-friendly bird control"],
    features: ["Made from high-quality nylon or HDPE material", "UV stabilized and weather resistant", "Strong and durable mesh", "Transparent appearance", "Long-lasting (3–5 years)", "Humane solution"],
    applications: ["Balconies", "Windows", "AC outdoor units", "Warehouses", "Factories", "Terraces"],
    benefits: ["Hygienic environment", "No harm to birds", "Maintains airflow and sunlight", "Easy installation and maintenance", "Cost-effective solution", "Professional installation"],
    faqs: [
      {
        q: "Do bird nets harm birds?",
        a: "No, our bird nets are designed to prevent entry without harming birds. They are a humane and eco-friendly solution."
      },
      {
        q: "Can I see through bird nets?",
        a: "Yes, our bird nets are transparent and maintain visibility while providing complete bird protection."
      }
    ]
  },
  "child-safety-nets": {
    title: "Child Safety Nets",
    seoTitle: "Child Safety Nets in Hyderabad | Kids Protection | GDR Enterprises",
    seoDescription: "Premium child safety nets for maximum protection. Balcony, staircase, and window installation. Non-toxic, eco-friendly. Peace of mind for parents. Call 9100579116.",
    seoKeywords: "child safety nets Hyderabad, kids safety nets, balcony child protection, staircase safety nets, children fall prevention, baby safety nets",
    image: pageChildren,
    description: "Children Safety Nets are specially designed to prevent accidents in homes and play areas. They are installed in balconies, staircases, windows, and open spaces.",
    fullDescription: "Our child safety nets are crafted with soft but strong material that is non-toxic and eco-friendly. The small mesh size provides extra safety for children while being completely invisible. The nets are tear-resistant and professionally installed to ensure maximum security. They are perfect for homes with young children, daycare centers, schools, and play zones. Parents can enjoy complete peace of mind knowing their children are protected from dangerous falls.",
    purpose: ["Prevent children from falling", "Create safe play areas", "Block dangerous openings", "Protect in high-risk areas"],
    features: ["Soft but strong material", "Non-toxic and eco-friendly", "Small mesh size for extra safety", "Tear-resistant", "Invisible look", "Professional installation"],
    applications: ["Homes", "Schools", "Daycare centers", "Play zones", "Hospitals", "Balconies"],
    benefits: ["Peace of mind for parents", "Safe indoor and outdoor environment", "Quick installation", "Child-friendly design", "Maximum protection", "Inspector approved"],
    faqs: [
      {
        q: "Is the material safe for children?",
        a: "Absolutely. Our child safety nets are made from non-toxic, eco-friendly material that is completely safe and approved for child use."
      }
    ]
  },
  "sports-nets": {
    title: "Sports Safety Nets",
    seoTitle: "Sports Nets Installation in Hyderabad | Badminton, Cricket Nets | GDR Enterprises",
    seoDescription: "Professional sports net installation - badminton courts, cricket practice nets, football goals. Quality materials. Expert installation. Free consultation. Call 9100579116.",
    seoKeywords: "sports nets Hyderabad, badminton court nets, cricket practice nets, football goal nets, sports court safety nets, professional sports netting",
    image: pageSports,
    description: "Sports Safety Nets are specially designed to protect players and spectators during sports activities while keeping balls within the playing area.",
    fullDescription: "Our sports safety nets are engineered for professional-grade performance in badminton courts, cricket practice areas, football goals, and other sports facilities. The nets are made from durable material with tight weave construction for accurate ball control. They can withstand intense use and weather conditions. Professional installation ensures proper tension and durability. Whether for residential practice or professional facilities, our sports nets provide reliable performance.",
    purpose: ["Prevent balls from leaving playing area", "Protect players and spectators", "Avoid damage to nearby property", "Maintain discipline in sports zones"],
    features: ["Durable, professional-grade material", "Tight weave construction", "Weather-resistant", "Proper tension and installation", "Customizable sizes", "Long-lasting performance"],
    applications: ["Badminton courts", "Cricket practice areas", "Football goals", "Tennis courts", "Sports academies", "Commercial sports facilities"],
    benefits: ["Professional performance", "Accurate ball control", "Player and spectator safety", "Long service life", "Minimal maintenance", "Professional appearance"],
    faqs: [
      {
        q: "How long do sports nets last?",
        a: "Our professional sports nets last 5-10 years depending on usage and maintenance, providing excellent value for investment."
      }
    ]
  },
  "construction-safety-nets": {
    title: "Construction Safety Nets",
    seoTitle: "Construction Safety Nets in Hyderabad | Industrial Grade | GDR Enterprises",
    seoDescription: "Industrial-grade construction safety nets for worker protection. Passes safety standards. Heavy-duty, durable. Expert installation. Free quote. Call 9100579116.",
    seoKeywords: "construction safety nets Hyderabad, industrial safety nets, heavy-duty construction nets, worker safety nets, OSHA compliant safety nets",
    image: pageConstruction,
    description: "Construction Safety Nets are mandatory safety equipment used at construction sites to protect workers and materials from falling hazards.",
    fullDescription: "Our construction safety nets are industrial-grade equipment designed to meet strict safety standards. They have a high load-bearing capacity and are made from certified quality materials. Fire-retardant options are available for hazardous environments. The nets are custom-installed by our professional team with proper anchoring and tension. They provide comprehensive protection for workers, equipment, and surrounding properties during construction and maintenance activities.",
    purpose: ["Prevent falls from height", "Catch falling tools or materials", "Protect nearby people", "Meet safety compliance standards"],
    features: ["Heavy-duty industrial grade nets", "High load-bearing capacity", "Flame retardant options", "Custom installation", "Certified quality materials", "Professional team"],
    applications: ["Construction sites", "Bridges", "Flyovers", "High-rise buildings", "Industrial projects", "Renovation sites"],
    benefits: ["Reduces injuries and accidents", "Improves worker confidence", "Follows safety standards", "Cost-efficient safety measure", "Professional installation", "Comprehensive support"],
    faqs: [
      {
        q: "Are construction nets compliant with safety standards?",
        a: "Yes, our construction safety nets meet all applicable safety standards and regulations for construction site safety."
      }
    ]
  },
  "window-nets": {
    title: "Window Protection Nets",
    seoTitle: "Window Safety Nets in Hyderabad | Bird Prevention | GDR Enterprises",
    seoDescription: "Window safety nets for child protection and bird prevention. Transparent, invisible design. Professional installation. Free quote. Call 9100579116.",
    seoKeywords: "window safety nets Hyderabad, window bird nets, window protection nets, child safety windows, invisible window nets",
    image: pageAntibird,
    description: "Window Protection Nets are installed to prevent unwanted bird entry while maintaining ventilation and visibility.",
    fullDescription: "Our window protection nets combine functionality with aesthetics. They prevent birds from entering while maintaining clear visibility and airflow. The transparent netting is nearly invisible and does not affect the appearance of your windows. Easy installation without damaging frames or glass. Suitable for residential apartments, commercial buildings, and offices.",
    purpose: ["Bird prevention", "Child safety", "Maintain ventilation", "Protect indoor spaces"],
    features: ["Transparent design", "Non-intrusive installation", "Durable material", "UV resistant", "Low maintenance", "Professional installation"],
    applications: ["Residential windows", "Commercial buildings", "Hospitals", "Schools", "Offices", "Hotels"],
    benefits: ["Bird prevention", "Child protection", "Maintains airflow", "Invisible appearance", "Easy maintenance", "Cost-effective"],
    faqs: [
      {
        q: "Does window netting block light?",
        a: "No, our transparent window nets do not block light and maintain full visibility while providing bird and child protection."
      }
    ]
  }
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
      <SEO
        title={`${service.seoTitle || service.title + ' in Hyderabad | GDR Enterprises'}`}
        description={service.seoDescription || service.description.slice(0, 155)}
        keywords={service.seoKeywords || `${service.title}, ${service.title} Hyderabad, safety nets, GDR Enterprises`}
      />
      {service.faqs && <FAQSchema faqs={service.faqs} />}
      <ServiceSchema
        serviceName={service.title}
        description={service.description}
        serviceType={service.title}
        areaServed={["Hyderabad", "Vijayawada", "Visakhapatnam"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/service/${slug}` }
        ]}
      />
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
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">What is {service.title}?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="mb-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-base text-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {renderList("Purpose", service.purpose)}
            {renderList("Features", service.features)}
            {renderList("Applications", service.applications)}
            {renderList("Benefits", service.benefits)}
          </div>

          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <details key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <summary className="cursor-pointer font-semibold text-foreground hover:text-primary">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-primary/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
              Get a Free Quote for {service.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              GDR Enterprise Safety Nets - Guaranteed to be 100% safe and durable. Professional installation with 10-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9100579116"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 9100579116
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:opacity-90 transition-opacity"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ThreeSteps />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
