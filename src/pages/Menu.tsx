import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import interiorAmberImage from "@/assets/interior-amber-lights.jpg";

const menuData = {
  starters: [
    { name: "Pkhali Trio", description: "Traditional Georgian spinach, beet & bean spreads with walnuts", price: "₾18" },
    { name: "Badrijani Nigvzit", description: "Eggplant rolls with spiced walnut paste", price: "₾22" },
    { name: "Cheese Board", description: "Selection of Georgian cheeses with honey & herbs", price: "₾35" },
    { name: "Lobio", description: "Slow-cooked kidney beans in clay pot with herbs", price: "₾16" },
    { name: "Jonjoli Salad", description: "Pickled bladdernut with onions & herbs", price: "₾14" },
  ],
  mains: [
    { name: "Khinkali (10 pcs)", description: "Traditional Georgian dumplings with spiced meat", price: "₾25" },
    { name: "Mtsvadi", description: "Grilled pork skewers with pomegranate & onions", price: "₾45" },
    { name: "Chahushuli", description: "Slow-braised veal in tomato sauce with herbs", price: "₾48" },
    { name: "Satsivi", description: "Chicken in creamy walnut sauce, served cold", price: "₾38" },
    { name: "Ojakhuri", description: "Pan-fried pork with potatoes & onions", price: "₾42" },
    { name: "Chkmeruli", description: "Roasted chicken in garlic cream sauce", price: "₾52" },
  ],
  desserts: [
    { name: "Churchkhela", description: "Traditional grape & walnut candy", price: "₾12" },
    { name: "Pelamushi", description: "Grape pudding with walnuts", price: "₾14" },
    { name: "Honey Cake", description: "Layered honey cake with cream", price: "₾18" },
    { name: "Gozinaki", description: "Honey-fried walnuts, festive treat", price: "₾15" },
  ],
  drinks: [
    { name: "Georgian Wine Selection", description: "Ask your server for today's recommendations", price: "₾25-150" },
    { name: "Craft Cocktails", description: "House specialty cocktails with Georgian spirits", price: "₾28-35" },
    { name: "Fresh Lemonades", description: "Tarragon, mint, or classic citrus", price: "₾12" },
    { name: "Georgian Mineral Water", description: "Borjomi or Nabeghlavi", price: "₾8" },
  ],
};

const MenuPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={interiorAmberImage}
            alt="Varazi Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            Our Menu
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            A celebration of Georgian culinary traditions with modern refinement
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          {/* CTA */}
          <div className="text-center mb-16">
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://rezto.ge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Full Interactive Menu
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Menu Sections */}
          <div className="space-y-16">
            {Object.entries(menuData).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 capitalize border-b border-border pb-4">
                  {category === "mains" ? "Main Courses" : category}
                </h2>
                <div className="grid gap-6">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-8 py-4 border-b border-border/50 last:border-0"
                    >
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-serif text-gold text-lg shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Explore our complete menu with detailed descriptions and daily specials
            </p>
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://rezto.ge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Open Full Menu on Rezto
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MenuPage;
