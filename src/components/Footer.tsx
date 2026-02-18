import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold font-heading mb-4">About Company</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            GDR Safety Nets is started by Garikina Ramesh, an expert who understood the quality lacking in the current netting industry. We build quality assurance with 12+ years of experience.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold font-heading mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              "Balcony Safety Nets",
              "Pigeon Safety Nets",
              "Children Safety Nets",
              "Invisible Grills",
              "Construction Safety Nets",
              "Sports Practice Nets",
              "Bird & Pigeon Spikes",
            ].map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-secondary transition-colors">
                  {s}
                </a>
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
            <a href="mailto:GDREnterprisesasafetynets@gmail.com" className="flex items-center gap-2 opacity-80 hover:text-secondary transition-colors break-all">
              <Mail className="w-4 h-4 shrink-0" /> GDREnterprisesasafetynets@gmail.com
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
