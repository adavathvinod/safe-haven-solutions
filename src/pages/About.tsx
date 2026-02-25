import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ThreeSteps from "@/components/ThreeSteps";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About GDR Enterprises - Premier Safety Nets Company in Hyderabad | 10+ Years Experience"
        description="Discover GDR Enterprises - Hyderabad's trusted safety nets provider with 10+ years experience, 5000+ installations, expert team. Balcony nets, bird nets, stadium nets - all solutions!"
        keywords="about GDR Enterprises, best safety nets company Hyderabad, professional bird nets provider, safety net installation experts, Hyderabad safety solutions, experienced safety net installers"
      />
      <Header />

      {/* Page Banner */}
      <div className="bg-primary py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-primary-foreground">
            About Us
          </h1>
          <p className="text-primary-foreground/80 mt-2">Know more about GDR Enterprises</p>
        </div>
      </div>

      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <ThreeSteps />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
