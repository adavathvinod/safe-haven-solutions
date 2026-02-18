import { Phone } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-secondary font-bold text-lg font-heading">About Us</span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mt-2 mb-4">
            Best Pigeon & Bird Nets Service Dealers in Vijayawada, Visakhapatnam, Hyderabad
          </h2>
          <h3 className="text-xl font-extrabold font-heading text-primary mb-4">
            GDR SAFETY NETS
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Complete Bird Proofing Solutions by Installation of Nets, Cost Effective, Customizable. We are Leading Manufacturer and Supplier of Bird Netting with Installation & Warranty. Our Team with 12+ Yrs of Experience & Expert in Installation of Quality Pigeon Netting.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are the skilled experts in fixing Safety nets for Balcony Safety Nets, Pigeon Safety Nets, Anti Bird Nets, Children Safety Nets, Construction Safety Nets, Duct Area Safety Nets, Building Safety Nets, Industrial Safety Nets, Swimming Pool Safety Nets, Sports Nets, and all types of HDPE & Nylon Nets.
          </p>
          <a
            href="tel:9100579116"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            +91 9100579116
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={hero1} alt="Safety net installation" className="rounded-lg w-full h-48 object-cover" />
          <img src={hero3} alt="Invisible grill" className="rounded-lg w-full h-48 object-cover" />
          <img src={hero1} alt="Balcony nets" className="rounded-lg w-full h-48 object-cover col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
