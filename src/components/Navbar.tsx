import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.menu"), path: "/menu" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-narrow mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl text-cream tracking-wide">
            Varazi
          </span>
          <span className="text-[10px] text-cream/60 tracking-[0.3em] uppercase">
            Restaurant
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative",
                location.pathname === link.path
                  ? "text-gold"
                  : "text-cream/80 hover:text-cream"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="tel:+995593908010"
            className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+995 593 90 80 10</span>
          </a>
          <Button variant="heroOutline" size="sm" asChild>
            <Link to="/contact">{t("nav.reserve")}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 bg-charcoal/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-8",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-cream p-2"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <LanguageSwitcher />

        {navLinks.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-2xl font-serif tracking-wide transition-all duration-300",
              location.pathname === link.path ? "text-gold" : "text-cream/80 hover:text-cream",
              isOpen && "animate-fade-up"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}

        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="tel:+995593908010"
            className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            +995 593 90 80 10
          </a>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">{t("nav.makeReservation")}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
