import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import interiorAmberImage from "@/assets/interior-amber-lights.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuPreview = () => {
  const { t } = useLanguage();

  const menuCategories = [
    {
      title: t("menu.starters"),
      items: ["Pkhali Trio", "Eggplant Rolls", "Cheese Board"],
    },
    {
      title: t("menu.mainCourses"),
      items: ["Khinkali", "Mtsvadi", "Chahushuli"],
    },
    {
      title: t("menu.desserts"),
      items: ["Churchkhela", "Pelamushi", "Honey Cake"],
    },
    {
      title: t("menu.drinks"),
      items: ["Georgian Wine Selection", "Craft Cocktails", "Fresh Lemonades"],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto">
          <img
            src={interiorAmberImage}
            alt="Varazi Restaurant dining area with amber pendant lights and greenery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent lg:bg-gradient-to-l" />
        </div>

        {/* Content Side */}
        <div className="bg-charcoal text-cream section-padding flex items-center">
          <div className="max-w-lg">
            <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              {t("menu.label")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
              {t("menu.title1")}<br />{t("menu.title2")}
            </h2>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {menuCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-serif text-gold text-lg mb-3">{category.title}</h3>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-cream/70 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="/menu" className="inline-flex items-center gap-2">
                {t("menu.viewFull")}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
