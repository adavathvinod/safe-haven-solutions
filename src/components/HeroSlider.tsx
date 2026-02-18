import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import slide1 from "@/assets/slide-1.png";
import slide2 from "@/assets/slide-2.png";
import slide3 from "@/assets/slide-3.png";
import slide4 from "@/assets/slide-4.png";
import slide5 from "@/assets/slide-5.png";
import slide6 from "@/assets/slide-6.png";

const slides = [
  { image: slide1, title: "GDR Enterprise Safety Nets", discount: "40% OFF*" },
  { image: slide2, title: "Invisible Grill for Balcony", discount: "40% OFF*" },
  { image: slide3, title: "Balcony Safety Nets", discount: "40% OFF*" },
  { image: slide4, title: "Children Safety Nets", discount: "40% OFF*" },
  { image: slide5, title: "Pigeon & Bird Spikes", discount: "40% OFF*" },
  { image: slide6, title: "Pigeon Safety Nets", discount: "40% OFF*" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1
          key={current}
          className="text-4xl md:text-6xl font-extrabold font-heading text-primary-foreground uppercase tracking-wide mb-6 animate-slide-in drop-shadow-lg"
        >
          {slides[current].title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:9100579116"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            <Phone className="w-5 h-5" />
            Reach Us @ 9100579116
          </a>
          <span className="text-3xl md:text-4xl font-bold text-primary-foreground drop-shadow-lg italic">
            {slides[current].discount}
          </span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
