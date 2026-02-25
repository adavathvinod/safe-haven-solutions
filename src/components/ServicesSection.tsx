import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceBalcony from "@/assets/service-balcony.jpg";
import servicePigeon from "@/assets/service-pigeon.jpg";
import serviceInvisibleGrill from "@/assets/service-invisible-grill.jpg";
import serviceChildren from "@/assets/service-children.jpg";
import serviceAntiBird from "@/assets/service-anti-bird.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceSports from "@/assets/service-sports.jpg";
import serviceDuct from "@/assets/service-duct.jpg";
import serviceBuilding from "@/assets/service-building.jpg";
import servicePets from "@/assets/service-pets.jpg";
import serviceSpikes from "@/assets/service-spikes.jpg";

const services = [
  { image: serviceBalcony, title: "Balcony Safety Nets", slug: "balcony-safety-nets", desc: "Prevent falls, protect children & pets. UV-resistant, transparent nets for residential and commercial balconies. Professional installation with warranty." },
  { image: serviceBuilding, title: "Building Safety Nets", slug: "building-safety-nets", desc: "Heavy-duty construction safety nets for multi-storey buildings. Fire-resistant options available. Complete worker protection & compliance." },
  { image: serviceAntiBird, title: "Bird & Pigeon Protection Nets", slug: "bird-nets", desc: "Humane, eco-friendly bird control for balconies & windows. Transparent netting prevents pigeons without harm. Maintains airflow and visibility." },
  { image: serviceChildren, title: "Child Safety Nets", slug: "child-safety-nets", desc: "Non-toxic, invisible safety nets for children. Perfect for balconies, staircases & windows. Maximum protection with peace of mind for parents." },
  { image: serviceSports, title: "Sports Safety Nets", slug: "sports-nets", desc: "Professional-grade nets for badminton, cricket, football & tennis courts. Durable, weather-resistant with proper tension installation." },
  { image: serviceConstruction, title: "Construction Safety Nets", slug: "construction-safety-nets", desc: "Industrial-grade worker protection. High load-bearing capacity, fire-retardant options. Meets all safety compliance standards." },
  { image: serviceInvisibleGrill, title: "Window Protection Nets", slug: "window-nets", desc: "Transparent window safety nets for bird prevention and child protection. Nearly invisible design maintains aesthetic appeal." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 section-alt">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-2">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Complete safety solutions for residential, commercial and industrial needs
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold font-heading text-secondary mb-2 text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                {service.slug ? (
                  <Link
                    to={`/service/${service.slug}`}
                    className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
