import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import interiorOrbImage from "@/assets/interior-orb-lights.jpg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={interiorOrbImage}
                alt="Varazi Restaurant interior with geometric ceiling lights and indoor trees"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Where Architecture<br />Meets Gastronomy
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Nestled in the vibrant Varaziskhevi district, Varazi Restaurant stands as a testament to modern Georgian hospitality. Our space harmoniously blends contemporary architecture with nature's serenity.
              </p>
              <p>
                Step inside to discover soaring ceilings adorned with geometric light installations, living trees that breathe life into every corner, and an atmosphere that feels both intimate and grand.
              </p>
            </div>
            <Button variant="minimal" asChild>
              <Link to="/about" className="group inline-flex items-center gap-2">
                Discover More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
