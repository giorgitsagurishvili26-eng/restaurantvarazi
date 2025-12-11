import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import exteriorImage from "@/assets/exterior.jpg";
import interiorOrbImage from "@/assets/interior-orb-lights.jpg";
import interiorAmberImage from "@/assets/interior-amber-lights.jpg";

const galleryImages = [
  {
    src: exteriorImage,
    alt: "Varazi Restaurant modern Corten steel exterior architecture",
    title: "The Entrance",
  },
  {
    src: interiorOrbImage,
    alt: "Main dining room with geometric orb ceiling lights and indoor trees",
    title: "Main Dining Hall",
  },
  {
    src: interiorAmberImage,
    alt: "Intimate seating area with amber pendant lights and lush greenery",
    title: "Evening Ambiance",
  },
];

const GalleryPreview = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section className="section-padding bg-charcoal">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
                Visual Journey
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream">
                Gallery
              </h2>
            </div>
            <Button variant="minimal" className="text-cream hover:text-gold" asChild>
              <Link to="/gallery" className="group inline-flex items-center gap-2">
                View All Photos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(image.src)}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-end p-6">
                  <span className="font-serif text-lg text-cream opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {image.title}
                  </span>
                </div>
              </button>
            ))}
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
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image enlarged"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GalleryPreview;
