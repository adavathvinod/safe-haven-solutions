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
        title="GDR Enterprises - Safety Nets & Bird Nets in Hyderabad | 40% OFF"
        description="GDR Enterprises offers premium safety nets, bird nets, pigeon nets, invisible grills installation in Hyderabad, Vijayawada, Visakhapatnam. Call 9100579116."
        keywords="safety nets Hyderabad, bird nets, pigeon nets, balcony safety nets, children safety nets, construction safety nets, sports nets"
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
