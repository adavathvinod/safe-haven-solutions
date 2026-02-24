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
        title="About GDR Enterprises - Leading Safety Net Company in Hyderabad"
        description="Learn about GDR Enterprises, the trusted safety nets provider in Hyderabad, Vijayawada & Visakhapatnam. 10+ years experience, 5000+ installations."
        keywords="about GDR Enterprises, safety nets company Hyderabad, bird nets company, safety net installation"
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
