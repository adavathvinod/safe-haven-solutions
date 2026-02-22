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
