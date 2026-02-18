import { Shield, Baby, Bird, HardHat, Fence, Building, Trophy, Grid3X3, Home, PawPrint, Drill, ArrowRight } from "lucide-react";

const services = [
  { icon: Fence, title: "Balcony Safety Nets", desc: "High-quality, durable nets ensuring protection from falls for balconies." },
  { icon: Bird, title: "Pigeon Safety Nets", desc: "Top-quality pigeon nets to protect your premises from bird menace." },
  { icon: Grid3X3, title: "Invisible Grill", desc: "Security without obstructing views. Sleek and perfect for modern living." },
  { icon: Baby, title: "Children Safety Nets", desc: "Reliable protection nets for balconies and windows to keep children safe." },
  { icon: Shield, title: "Anti Bird Nets", desc: "Effective protection against birds while ensuring safety and durability." },
  { icon: HardHat, title: "Construction Safety Nets", desc: "High-quality nets ensuring a secure environment for workers." },
  { icon: Trophy, title: "All Types Sports Nets", desc: "Top-quality sports nets for cricket practice and all sports activities." },
  { icon: Home, title: "Duct Area Safety Nets", desc: "Durable nets ensuring safety in duct areas and elevated spaces." },
  { icon: Building, title: "Building Safety Nets", desc: "Top-quality building covering nets for complete protection." },
  { icon: PawPrint, title: "Pets Safety Nets", desc: "High-quality nets to protect your beloved pets from accidental falls." },
  { icon: Drill, title: "Pigeon & Bird Spikes", desc: "Effective spikes to deter birds from roosting on your property." },
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
              className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold font-heading text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:gap-2 transition-all">
                Read More <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
