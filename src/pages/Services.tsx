import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ServicesSection from "@/components/ServicesSection";
import ThreeSteps from "@/components/ThreeSteps";

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Safety Net Services in Hyderabad | GDR Enterprises"
        description="Explore our complete range of safety net services - balcony nets, bird nets, pigeon nets, sports nets, construction nets. Professional installation across Hyderabad."
        keywords="safety net services, balcony safety nets, bird nets installation, pigeon nets, sports safety nets, construction safety nets Hyderabad"
      />
      <Header />

      {/* Page Banner */}
      <div className="bg-primary py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-primary-foreground">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 mt-2">Complete safety net solutions for every need</p>
        </div>
      </div>

      <ServicesSection />
      <ThreeSteps />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
