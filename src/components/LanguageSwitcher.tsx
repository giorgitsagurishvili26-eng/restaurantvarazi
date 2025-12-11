import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs">
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 transition-colors duration-300 tracking-wide",
          language === "en"
            ? "text-gold"
            : "text-cream/60 hover:text-cream"
        )}
      >
        EN
      </button>
      <span className="text-cream/30">|</span>
      <button
        onClick={() => setLanguage("ka")}
        className={cn(
          "px-2 py-1 transition-colors duration-300 tracking-wide",
          language === "ka"
            ? "text-gold"
            : "text-cream/60 hover:text-cream"
        )}
      >
        ქარ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
