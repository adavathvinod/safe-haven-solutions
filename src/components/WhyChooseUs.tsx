import { Wrench, Award, DollarSign, Heart } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Best Quality Nylon Nets",
    desc: "Strong, weather-resistant pigeon and balcony safety nets installed for long-term protection.",
  },
  {
    icon: Award,
    title: "Professional Installation",
    desc: "Experienced technicians deliver clean fitting, secure anchors, and reliable finishing on every job.",
  },
  {
    icon: DollarSign,
    title: "Affordable Price",
    desc: "Transparent quotes, starting from Rs.10 / Sq Ft, with a free site visit and free measurement.",
  },
  {
    icon: Heart,
    title: "Fast Service in Hyderabad",
    desc: "Quick response for homes, apartments, and buildings with same day service when slots are available.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-primary-foreground mb-10">
          Why Choose GDR Enterprises
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-bold font-heading text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
