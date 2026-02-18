import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href="tel:9100579116"
        className="w-14 h-14 rounded-full bg-phone-red flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/919100579116"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
