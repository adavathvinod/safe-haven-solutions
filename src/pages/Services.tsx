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
        title="Professional Safety Net Services in Hyderabad | Balcony, Bird & Sports Nets | GDR Enterprises"
        description="Complete safety net solutions in Hyderabad - balcony nets, bird & pigeon nets, sports nets, construction nets, window nets. 10+ years experience. Professional installation. Free quotes!"
        keywords="safety net services Hyderabad, balcony safety nets installation, bird nets, pigeon nets removal, sports safety nets, construction safety nets, window protection nets, invisible grills services"
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
