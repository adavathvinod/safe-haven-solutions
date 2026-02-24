import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import work7 from "@/assets/work-7.png";
import work8 from "@/assets/work-8.png";

const galleryImages = [
  { image: work1, title: "Building Safety Nets Installation" },
  { image: work2, title: "Balcony Safety Nets" },
  { image: work3, title: "House Covering Safety Nets" },
  { image: work4, title: "Pigeon & Bird Spikes" },
  { image: work5, title: "Children Safety Nets" },
  { image: work6, title: "Kids Balcony Protection" },
  { image: work7, title: "Safety Net Installation Work" },
  { image: work8, title: "Balcony Pigeon Nets" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gallery - Safety Net Installations | GDR Enterprises"
        description="View our recent safety net installations in Hyderabad, Vijayawada & Visakhapatnam. Balcony nets, bird nets, building safety nets gallery."
        keywords="safety net installation gallery, balcony nets photos, bird nets images, pigeon nets work"
      />
      <Header />

      {/* Page Banner */}
      <div className="bg-primary py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-primary-foreground">
            Our Gallery
          </h1>
          <p className="text-primary-foreground/80 mt-2">View our recent safety net installations</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-card p-4 text-center">
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Gallery;
