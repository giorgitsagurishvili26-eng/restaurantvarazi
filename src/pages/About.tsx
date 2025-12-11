import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import interiorOrbImage from "@/assets/interior-orb-lights.jpg";
import interiorAmberImage from "@/assets/interior-amber-lights.jpg";
import exteriorImage from "@/assets/exterior.jpg";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={interiorOrbImage}
            alt="Varazi Restaurant main dining hall with orb lights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            About Varazi
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            რესტორანი ვარაზი
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-8">
              Where Nature Meets Design
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Varazi Restaurant represents the perfect union of Georgian hospitality and contemporary architectural vision. Located in the serene Varaziskhevi district of Tbilisi, our space was designed to create an immersive dining experience unlike any other.
              </p>
              <p>
                Our striking Corten steel exterior, with its weathered rust patina, stands as a bold statement against the lush pine forest backdrop. Step inside to discover a world where living trees grow through our floors, geometric light installations dance across ceilings, and every corner reveals thoughtful design details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
                The Space
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Architecture That Breathes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The interior of Varazi is a masterclass in biophilic design. Mature ficus trees rise majestically from specially designed planters, their canopies creating natural gathering spaces for our guests.
                </p>
                <p>
                  Our signature ceiling installation features hundreds of hand-blown glass orbs, creating a constellation effect that transforms the space from day to evening. The warm glow of amber pendant lights complements the rich wood tones of our custom furniture.
                </p>
                <p>
                  Floor-to-ceiling windows blur the boundary between inside and out, offering panoramic views of our landscaped gardens and the surrounding natural beauty of the Varaziskhevi valley.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={interiorAmberImage}
                  alt="Intimate dining area with amber lights"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Vision */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={exteriorImage}
                  alt="Varazi Restaurant exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
                Culinary Vision
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                Modern Georgian Excellence
              </h2>
              <div className="space-y-4 text-cream/70">
                <p>
                  Our kitchen celebrates the rich culinary heritage of Georgia while embracing contemporary techniques and presentation. Every dish tells a story of tradition meeting innovation.
                </p>
                <p>
                  We source our ingredients from local farmers, foragers, and artisan producers who share our commitment to quality. From the famous qvevri wines aged in clay vessels to hand-made cheeses from the mountain regions, authenticity guides every choice.
                </p>
                <p>
                  Open until 2 AM, Varazi invites you to linger, to savor, and to experience dining as it was meant to be — unhurried, abundant, and shared with those who matter most.
                </p>
              </div>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/menu">Explore Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Experience Varazi
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We invite you to discover the magic of Varazi firsthand. Reserve your table and join us for an unforgettable evening.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Make a Reservation</Link>
            </Button>
            <Button variant="minimal" size="lg" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
