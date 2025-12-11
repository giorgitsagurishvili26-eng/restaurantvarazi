import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl text-cream">Varazi</span>
              <span className="block text-[10px] text-cream/50 tracking-[0.4em] uppercase mt-1">
                Restaurant
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">
              Modern Georgian dining with an architectural soul. Experience culinary excellence in the heart of Tbilisi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
                <span className="text-sm">
                  1 ვარაზისხევის ქუჩა,<br />
                  თბილისი 0179, საქართველო
                </span>
              </li>
              <li>
                <a
                  href="tel:+995593908010"
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm">+995 593 90 80 10</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-gold shrink-0" />
                <span className="text-sm">
                  Open Daily<br />
                  Until 2:00 AM
                </span>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://rezto.ge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-gold transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-gold" />
                  View Full Menu
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-gold transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/PQ6J%2BJ4+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-gold transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 text-gold" />
                  View on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Varazi Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            რესტორანი ვარაზი • Tbilisi, Georgia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
