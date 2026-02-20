import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

const About = () => {
  return (
    <div className="min-h-screen">
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

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
