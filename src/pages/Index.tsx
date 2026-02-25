import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import EnquiryForm from "@/components/EnquiryForm";
import RecentWorks from "@/components/RecentWorks";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ThreeSteps from "@/components/ThreeSteps";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Safety Nets & Bird Nets Installation in Hyderabad | GDR Enterprises | 40% OFF"
        description="Premium safety nets & bird nets installation in Hyderabad, Vijayawada & Visakhapatnam. Balcony protection, pigeon control, child safety. Expert installation. Get 40% OFF now! Call 9100579116."
        keywords="safety nets Hyderabad, bird nets Hyderabad, pigeon nets, balcony safety nets, children safety nets, construction safety nets, sports nets, invisible grills Hyderabad"
      />
      <Header />
      <HeroSlider />
      <EnquiryForm />
      <RecentWorks />
      <ServicesSection />
      <WhyChooseUs />
      <ThreeSteps />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
