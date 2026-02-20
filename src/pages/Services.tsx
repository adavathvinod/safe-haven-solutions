import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen">
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

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
