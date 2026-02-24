import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'm ${name}. I'd like to enquire about ${service || "your safety net services"}. ${message} My number is ${mobile}.`;
    window.open(
      `https://wa.me/919100579116?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact GDR Enterprises - Free Quote for Safety Nets"
        description="Contact GDR Enterprises for free safety net quotes. Call 9100579116. We serve Hyderabad, Vijayawada & Visakhapatnam. Mon-Sat 8AM-8PM."
        keywords="contact safety nets Hyderabad, safety nets quote, bird nets enquiry, GDR Enterprises contact"
      />
      <Header />

      {/* Page Banner */}
      <div className="bg-primary py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-primary-foreground">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 mt-2">Get in touch for a free quote</p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Book a Service</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border outline-none text-sm focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border outline-none text-sm focus:ring-2 focus:ring-primary"
                />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border outline-none text-sm focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Service</option>
                  <option value="Balcony Safety Nets">Balcony Safety Nets</option>
                  <option value="Building Safety Nets">Building Safety Nets</option>
                  <option value="Children Safety Nets">Children Safety Nets</option>
                  <option value="Pigeon Safety Nets">Pigeon Safety Nets</option>
                  <option value="Anti Bird Nets">Anti Bird Nets</option>
                  <option value="Sports Safety Nets">Sports Safety Nets</option>
                  <option value="Construction Safety Nets">Construction Safety Nets</option>
                  <option value="Swimming Pool Safety Nets">Swimming Pool Safety Nets</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border outline-none text-sm focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:9100579116" className="text-muted-foreground hover:text-secondary">+91 9100579116</a>
                    <br />
                    <a href="tel:8317579116" className="text-muted-foreground hover:text-secondary">+91 8317579116</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:GDREnterprisesasafetynets@gmail.com" className="text-muted-foreground hover:text-secondary break-all text-sm">
                      GDREnterprisesasafetynets@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Locations</h3>
                    <p className="text-muted-foreground">Vijayawada | Visakhapatnam | Hyderabad</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
