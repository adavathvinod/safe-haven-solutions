import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Balcony Safety Nets", slug: "balcony-safety-nets" },
    { name: "Building Safety Nets", slug: "building-safety-nets" },
    { name: "Bird & Pigeon Protection Nets", slug: "bird-nets" },
    { name: "Child Safety Nets", slug: "child-safety-nets" },
    { name: "Sports Safety Nets", slug: "sports-nets" },
    { name: "Construction Safety Nets", slug: "construction-safety-nets" },
    { name: "Window Protection Nets", slug: "window-nets" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold font-heading mb-4">About Company</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            GDR Enterprises is an expert safety nets provider with 12+ years of experience. We deliver quality assurance and professional installation with complete customer satisfaction and warranty support.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold font-heading mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/service/${service.slug}`} className="hover:text-secondary transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold font-heading mb-4">Contact Details</h3>
          <div className="space-y-3 text-sm">
            <a href="tel:9100579116" className="flex items-center gap-2 opacity-80 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" /> 9100579116
            </a>
            <a href="tel:8317579116" className="flex items-center gap-2 opacity-80 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" /> 8317579116
            </a>
            <a href="mailto:gdrenterprisesasafetynets@gmail.com" className="flex items-center gap-2 opacity-80 hover:text-secondary transition-colors break-all">
              <Mail className="w-4 h-4 shrink-0" /> gdrenterprisesasafetynets@gmail.com
            </a>
            <div className="flex items-start gap-2 opacity-80">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Vijayawada | Visakhapatnam | Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-6 border-t border-background/20 text-center text-xs opacity-60">
        © 2025 GDR Enterprises Safety Nets. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
