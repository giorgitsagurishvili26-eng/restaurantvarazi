import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import exteriorImage from "@/assets/exterior.jpg";
import interiorOrbImage from "@/assets/interior-orb-lights.jpg";
import interiorAmberImage from "@/assets/interior-amber-lights.jpg";

const galleryImages = [
  {
    src: exteriorImage,
    alt: "Varazi Restaurant modern Corten steel exterior",
    title: "The Entrance",
    category: "Exterior",
  },
  {
    src: interiorOrbImage,
    alt: "Main dining hall with geometric orb ceiling lights",
    title: "Main Dining Hall",
    category: "Interior",
  },
  {
    src: interiorAmberImage,
    alt: "Intimate seating with amber pendant lights",
    title: "Evening Ambiance",
    category: "Interior",
  },
  {
    src: exteriorImage,
    alt: "Architectural detail of Corten steel facade",
    title: "Architectural Details",
    category: "Exterior",
  },
  {
    src: interiorOrbImage,
    alt: "Indoor trees and natural elements",
    title: "Living Elements",
    category: "Interior",
  },
  {
    src: interiorAmberImage,
    alt: "Warm dining atmosphere",
    title: "Dining Experience",
    category: "Interior",
  },
];

const GalleryPage = () => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-charcoal">
        <div className="container-narrow mx-auto text-center">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
            Visual Journey
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            Gallery
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Explore the architectural beauty and warm atmosphere of Varazi Restaurant
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(image)}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-muted"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-start justify-end p-6">
                  <span className="text-gold text-xs tracking-wider uppercase mb-1">
                    {image.category}
                  </span>
                  <span className="font-serif text-xl text-cream">
                    {image.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Placeholder for future photos */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              More photos coming soon. Follow us on{" "}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Facebook
              </a>{" "}
              for the latest updates.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-lg flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="text-center mt-6">
              <h3 className="font-serif text-2xl text-cream">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default GalleryPage;
