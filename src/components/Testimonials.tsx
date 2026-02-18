import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vaani",
    service: "Pigeon Safety Nets",
    text: "I highly recommend GDR Enterprise Safety Nets! Their professional team installed nets swiftly, keeping our premises safe and secure.",
  },
  {
    name: "Raja Sharma",
    service: "Balcony Safety Nets",
    text: "GDR Enterprise Safety Nets provided excellent service! Their nets are strong and durable, ensuring our peace of mind at home.",
  },
  {
    name: "Priya Reddy",
    service: "Children Safety Nets",
    text: "Impressed by GDR Enterprise Safety Nets' quality! Their prompt installation and top-notch customer service exceeded my expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-10">
          Our Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4 text-sm leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold font-heading text-foreground">{t.name}</p>
                <p className="text-xs text-secondary font-semibold">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
