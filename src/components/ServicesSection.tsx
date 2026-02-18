import { ArrowRight } from "lucide-react";
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
  { image: serviceBalcony, title: "Balcony Safety Nets", desc: "GDR Enterprise Safety Nets offers Balcony Safety Nets ensuring protection from falls. High-quality, durable, and reliable solutions for peace of mind." },
  { image: servicePigeon, title: "Pigeon Safety Nets", desc: "GDR Enterprise Safety Nets offers top-quality Pigeon Safety Nets to protect your premises. Keep your space safe with our reliable solutions." },
  { image: serviceInvisibleGrill, title: "Invisible Grill for Balcony", desc: "GDR Safety Nets offers Invisible Grill for Balconies, providing security without obstructing views. Durable, sleek, and perfect for modern living spaces." },
  { image: serviceChildren, title: "Children Safety Nets", desc: "GDR Safety Nets provides high-quality safety nets ensuring Children Safety. Trusted by many, they offer reliable protection for balconies and windows." },
  { image: serviceAntiBird, title: "Anti Bird Nets", desc: "GDR Safety Nets offers high-quality Anti Bird Nets, providing effective protection against birds while ensuring safety and durability." },
  { image: serviceConstruction, title: "Construction Safety Nets", desc: "GDR Safety Nets offers high-quality Construction Safety Nets, ensuring a secure environment for workers and preventing accidents effectively." },
  { image: serviceSports, title: "All Types Sports Nets", desc: "Discover top-quality Sports Nets from GDR Safety Nets. Ensure safety and durability for all sports activities. Order now!" },
  { image: serviceDuct, title: "Duct Area Safety Nets", desc: "GDR Safety Nets provides durable Duct Area Safety Nets ensuring safety in elevated areas. Trust their expertise for protection." },
  { image: serviceBuilding, title: "Building Safety Nets", desc: "GDR Safety Nets offers top-quality Building Safety Nets, ensuring utmost protection against falls and accidents. Trust their expertise!" },
  { image: servicePets, title: "Pets Safety Nets", desc: "GDR Safety Nets offers high-quality Pet Safety Nets to protect your beloved pets from accidental falls. Contact us today!" },
  { image: serviceSpikes, title: "Pigeon & Bird Spikes", desc: "GDR Safety Nets offers effective Pigeon & Bird Spikes to deter birds from roosting. Protect your property now!" },
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
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
