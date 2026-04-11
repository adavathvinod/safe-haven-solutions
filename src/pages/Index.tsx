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
        title="Pigeon & Balcony Safety Nets Installation in Hyderabad | Free Site Visit"
        description="Pigeon net installation and balcony safety nets in Hyderabad with free site visit, free measurement, same day service, and 10 year warranty. Starting from Rs.10 / Sq Ft. Call 9100579116."
        keywords="pigeon net Hyderabad, pigeon net installation Hyderabad, balcony safety nets Hyderabad, bird nets near me, pigeon nets near me, child safety nets Hyderabad"
      />
      <Header />
      <HeroSlider />
      <RecentWorks />
      <WhyChooseUs />
      <EnquiryForm />
      <ServicesSection />
      <ThreeSteps />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
