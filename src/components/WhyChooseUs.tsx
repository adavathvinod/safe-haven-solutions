import { Wrench, Award, DollarSign, Heart } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Free Installation",
    desc: "We provide complete installation. No additional charges for any type of demand.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Highest calibre products. We are wholesalers providing the lowest prices.",
  },
  {
    icon: DollarSign,
    title: "Save Maintenance Cost",
    desc: "Zero maintenance cost. Contact us for any cuts or damage repairs.",
  },
  {
    icon: Heart,
    title: "Trusted By Customers",
    desc: "We focus on unique client needs. Quality standards keep us in business for years.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-primary-foreground mb-10">
          Why Choose Us
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
