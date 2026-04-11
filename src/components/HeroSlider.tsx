import { useState, useEffect } from "react";
import { MessageCircle, Phone, Star } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/gtmTracking";
import slide1 from "@/assets/slide-1.png";
import slide2 from "@/assets/slide-2.png";
import slide3 from "@/assets/slide-3.png";
import slide4 from "@/assets/slide-4.png";
import slide5 from "@/assets/slide-5.png";
import slide6 from "@/assets/slide-6.png";

const slides = [
  {
    image: slide1,
    title: "Pigeon Net Installation in Hyderabad",
    highlight: "Starting From Rs.10 / Sq Ft",
  },
  {
    image: slide2,
    title: "Pigeon & Balcony Safety Nets Installation in Hyderabad",
    highlight: "Free Measurement Visit",
  },
  {
    image: slide3,
    title: "Balcony Safety Nets in Hyderabad",
    highlight: "Same Day Service",
  },
  {
    image: slide4,
    title: "Child & Balcony Safety Nets in Hyderabad",
    highlight: "10 Year Warranty",
  },
  {
    image: slide5,
    title: "Pigeon & Bird Spikes Installation in Hyderabad",
    highlight: "Best Price Quote",
  },
  {
    image: slide6,
    title: "Pigeon Safety Nets Near You in Hyderabad",
    highlight: "Call Now For Free Visit",
  },
];

const trustSignals = [
  "10+ Years Experience",
  "5000+ Installations",
  "Same Day Service",
  "10 Year Warranty",
];

const heroOffer = "40% OFF";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden md:h-[70vh] md:min-h-[500px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 pt-12 pb-28 z-10 md:justify-center md:pt-0 md:pb-0">
        <h1
          key={current}
          className="max-w-sm text-[2rem] md:max-w-5xl md:text-5xl font-extrabold font-heading text-primary-foreground uppercase leading-[1.1] tracking-wide mb-4 animate-slide-in drop-shadow-lg"
        >
          {slides[current].title}
        </h1>
        <p className="max-w-md text-sm md:text-xl font-semibold text-primary-foreground/95 drop-shadow-lg mb-5 md:max-w-none">
          Free Site Visit | Free Measurement Visit | Fast Installation Across Hyderabad
        </p>
        <div className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2 text-base md:text-lg font-extrabold text-secondary-foreground shadow-lg mb-5">
          {heroOffer} Today
        </div>
        <div className="grid grid-cols-1 gap-3 mb-6 w-full max-w-xs sm:max-w-md md:flex md:flex-wrap md:items-center md:justify-center md:max-w-4xl">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm md:text-base font-semibold text-primary-foreground backdrop-blur-sm"
            >
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-sm flex-col items-center justify-center gap-3 mb-4 md:w-auto md:max-w-none md:flex-row md:flex-wrap md:gap-4">
          <a
            href="tel:9100579116"
            className="inline-flex w-full flex-row-reverse items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-4 rounded-full text-base md:w-auto md:px-10 md:text-xl font-extrabold shadow-lg hover:opacity-90 transition-opacity animate-pulse-glow"
            onClick={() => trackCallClick("9100579116", "hero_section")}
          >
            <Phone className="w-6 h-6" />
            Call Now - Free Site Visit
          </a>
          <a
            href="https://wa.me/919100579116?text=Hi%2C%20I%20need%20a%20price%20for%20pigeon%20or%20balcony%20safety%20net%20installation%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-base md:w-auto md:px-8 md:text-lg font-bold shadow-lg hover:opacity-90 transition-opacity"
            onClick={() => trackWhatsAppClick("hero_section")}
          >
            <MessageCircle className="w-5 h-5" />
            Get Price on WhatsApp in 10 Seconds
          </a>
        </div>
        <div className="inline-flex max-w-sm items-center justify-center rounded-full bg-background/90 px-5 py-3 text-sm md:max-w-none md:text-lg font-bold text-primary shadow-lg">
          <span>
            {slides[current].highlight} | Free Measurement Visit
          </span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 gap-2 z-10 md:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-secondary scale-125"
                : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
