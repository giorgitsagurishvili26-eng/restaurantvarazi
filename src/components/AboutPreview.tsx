import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import interiorOrbImage from "@/assets/interior-orb-lights.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPreview = () => {
  const { t } = useLanguage();

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
              {t("about.label")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              {t("about.title1")}<br />{t("about.title2")}
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
            <Button variant="minimal" asChild>
              <Link to="/about" className="group inline-flex items-center gap-2">
                {t("about.discoverMore")}
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
