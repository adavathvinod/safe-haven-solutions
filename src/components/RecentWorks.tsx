import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import work7 from "@/assets/work-7.png";
import work8 from "@/assets/work-8.png";

const works = [
  { image: work1, title: "Building Safety Nets Installation" },
  { image: work2, title: "Balcony Safety Nets" },
  { image: work3, title: "House Covering Safety Nets" },
  { image: work4, title: "Pigeon & Bird Spikes" },
  { image: work5, title: "Children Safety Nets" },
  { image: work6, title: "Kids Balcony Protection" },
  { image: work7, title: "Safety Net Installation Work" },
  { image: work8, title: "Balcony Pigeon Nets" },
];

const RecentWorks = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const next = () => setCurrent((prev) => (prev + 1) % works.length);
  const prev = () => setCurrent((prev) => (prev - 1 + works.length) % works.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleCount; i++) {
      slides.push({ ...works[(current + i) % works.length], index: (current + i) % works.length });
    }
    return slides;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-primary mb-4">
          Our Recent Works
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          To Book Service Call @ <a href="tel:9100579116" className="text-secondary font-bold">+91 9100579116</a>
        </p>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:opacity-80 transition-opacity -ml-2 md:-ml-4"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {getVisibleSlides().map((work) => (
              <div key={work.index} className="rounded-xl overflow-hidden shadow-lg group animate-fade-in">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-card p-4 text-center">
                  <h3 className="font-heading font-semibold text-foreground">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:opacity-80 transition-opacity -mr-2 md:-mr-4"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
