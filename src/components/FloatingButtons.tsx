import { Phone, MessageCircle } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/gtmTracking";

const FloatingButtons = () => {
  return (
    <div className="fixed right-3 bottom-3 z-50 flex flex-col items-end gap-3 md:right-4 md:bottom-4">
      <a
        href="tel:9100579116"
        className="w-12 h-12 rounded-full bg-phone-red flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:w-14 md:h-14"
        aria-label="Call us"
        onClick={() => trackCallClick('9100579116', 'floating_button')}
      >
        <Phone className="w-5 h-5 text-primary-foreground md:w-6 md:h-6" />
      </a>
      <a
        href="https://wa.me/919100579116?text=Hi%2C%20I%20need%20a%20price%20for%20pigeon%20or%20balcony%20safety%20net%20installation%20in%20Hyderabad."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:scale-105 transition-transform md:h-14 md:w-auto md:gap-2 md:px-4"
        aria-label="WhatsApp"
        onClick={() => trackWhatsAppClick('floating_button')}
      >
        <MessageCircle className="w-5 h-5 text-primary-foreground md:w-6 md:h-6" />
        <span className="hidden sm:inline text-sm font-semibold text-primary-foreground whitespace-nowrap">
          Get Price on WhatsApp in 10 Seconds
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
