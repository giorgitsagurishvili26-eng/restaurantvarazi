import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <div className="aspect-square lg:aspect-auto rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8548045!2d44.7445!3d41.7295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473a5b8e4c6c7%3A0x8b8b8b8b8b8b8b8b!2sPQ6J%2BJ4%20Tbilisi%2C%20Georgia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Varazi Restaurant location on Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              {t("location.label")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-8">
              {t("location.title")}
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-1">{t("location.address")}</h3>
                  <p className="text-muted-foreground">
                    1 ვარაზისხევის ქუჩა<br />
                    თბილისი 0179, საქართველო
                  </p>
                  <a
                    href="https://www.google.com/maps/place/PQ6J%2BJ4+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline text-sm mt-1 inline-block"
                  >
                    {t("location.directions")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-1">{t("location.hours")}</h3>
                  <p className="text-muted-foreground">
                    {t("location.openDaily")}<br />
                    <span className="text-gold font-medium">{t("location.until2am")}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-1">{t("location.reservations")}</h3>
                  <a
                    href="tel:+995593908010"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    +995 593 90 80 10
                  </a>
                </div>
              </div>
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">{t("nav.makeReservation")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
