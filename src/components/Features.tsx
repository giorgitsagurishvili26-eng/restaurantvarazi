import { Leaf, Sparkles, Clock, Building2 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "Stunning Corten steel facades and floor-to-ceiling glass create a unique visual experience.",
  },
  {
    icon: Leaf,
    title: "Indoor Greenery",
    description: "Living trees and lush plants bring nature indoors, creating a serene dining atmosphere.",
  },
  {
    icon: Sparkles,
    title: "Elegant Ambiance",
    description: "Carefully curated lighting and warm wood tones set the mood for memorable evenings.",
  },
  {
    icon: Clock,
    title: "Late Night Dining",
    description: "Open until 2 AM, perfect for leisurely dinners that extend into the night.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            The Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Why Guests Love Varazi
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-6 transition-all duration-300 hover:bg-muted rounded-sm"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-6 transition-all duration-300 group-hover:bg-gold group-hover:text-charcoal">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
