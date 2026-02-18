import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import EnquiryForm from "@/components/EnquiryForm";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <EnquiryForm />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
