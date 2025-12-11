import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import exteriorImage from "@/assets/exterior.jpg";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={exteriorImage}
          alt="Varazi Restaurant exterior with modern Corten steel architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
          <span className="inline-block text-gold text-xs tracking-[0.4em] uppercase mb-6">
            Tbilisi, Georgia
          </span>
        </div>

        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-4 animate-fade-up opacity-0"
          style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          Varazi Restaurant
        </h1>

        <p 
          className="font-serif text-xl md:text-2xl text-cream/70 mb-2 animate-fade-up opacity-0"
          style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
        >
          რესტორანი ვარაზი
        </p>

        <p 
          className="text-cream/60 text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
        >
          Modern Dining in the Heart of Tbilisi
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0"
          style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://rezto.ge" target="_blank" rel="noopener noreferrer">
              View Menu
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">Reserve a Table</Link>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="tel:+995593908010" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
