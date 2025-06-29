import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-elevate-purple py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Event Gallery
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Browse through our collection of past events to see the magic we
              create. Each event tells a unique story of celebrations,
              collaborations, and unforgettable moments.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />

        {/* Call to Action */}
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Create Your Own Memorable Event?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let our team of expert event planners help you design and execute
            your perfect event. Whether it's a corporate gathering, wedding
            celebration, or special occasion, we've got you covered.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-elevate-purple hover:bg-elevate-purple/90 text-white px-8 py-3 rounded-md transition-colors"
          >
            Start Planning Your Event
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
