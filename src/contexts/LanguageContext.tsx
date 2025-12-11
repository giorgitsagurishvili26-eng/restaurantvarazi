import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ka";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve",
    "nav.makeReservation": "Make a Reservation",
    
    // Hero
    "hero.location": "Tbilisi, Georgia",
    "hero.title": "Varazi Restaurant",
    "hero.subtitle": "რესტორანი ვარაზი",
    "hero.tagline": "Modern Dining in the Heart of Tbilisi",
    "hero.viewMenu": "View Menu",
    "hero.reserveTable": "Reserve a Table",
    "hero.callNow": "Call Now",
    
    // About Preview
    "about.label": "Our Story",
    "about.title1": "Where Architecture",
    "about.title2": "Meets Gastronomy",
    "about.p1": "Nestled in the vibrant Varaziskhevi district, Varazi Restaurant stands as a testament to modern Georgian hospitality. Our space harmoniously blends contemporary architecture with nature's serenity.",
    "about.p2": "Step inside to discover soaring ceilings adorned with geometric light installations, living trees that breathe life into every corner, and an atmosphere that feels both intimate and grand.",
    "about.discoverMore": "Discover More",
    
    // Menu Preview
    "menu.label": "Culinary Excellence",
    "menu.title1": "A Taste of",
    "menu.title2": "Modern Georgia",
    "menu.viewFull": "View Full Menu",
    "menu.starters": "Starters",
    "menu.mainCourses": "Main Courses",
    "menu.desserts": "Desserts",
    "menu.drinks": "Drinks",
    
    // Features
    "features.label": "The Experience",
    "features.title": "Why Guests Love Varazi",
    "features.architecture": "Architectural Design",
    "features.architectureDesc": "Stunning Corten steel facades and floor-to-ceiling glass create a unique visual experience.",
    "features.greenery": "Indoor Greenery",
    "features.greeneryDesc": "Living trees and lush plants bring nature indoors, creating a serene dining atmosphere.",
    "features.ambiance": "Elegant Ambiance",
    "features.ambianceDesc": "Carefully curated lighting and warm wood tones set the mood for memorable evenings.",
    "features.lateNight": "Late Night Dining",
    "features.lateNightDesc": "Open until 2 AM, perfect for leisurely dinners that extend into the night.",
    
    // Gallery
    "gallery.label": "Visual Journey",
    "gallery.title": "Gallery",
    "gallery.viewAll": "View All Photos",
    "gallery.entrance": "The Entrance",
    "gallery.mainHall": "Main Dining Hall",
    "gallery.evening": "Evening Ambiance",
    
    // Location
    "location.label": "Find Us",
    "location.title": "Visit Varazi",
    "location.address": "Address",
    "location.directions": "Get Directions →",
    "location.hours": "Hours",
    "location.openDaily": "Open Daily",
    "location.until2am": "Until 2:00 AM",
    "location.reservations": "Reservations",
    
    // Footer
    "footer.description": "Modern Georgian dining with an architectural soul. Experience culinary excellence in the heart of Tbilisi.",
    "footer.explore": "Explore",
    "footer.ourMenu": "Our Menu",
    "footer.aboutUs": "About Us",
    "footer.contactLabel": "Contact",
    "footer.connect": "Connect",
    "footer.viewFullMenu": "View Full Menu",
    "footer.facebook": "Facebook",
    "footer.viewOnMap": "View on Map",
    "footer.rights": "All rights reserved.",
  },
  ka: {
    // Navbar
    "nav.home": "მთავარი",
    "nav.menu": "მენიუ",
    "nav.about": "ჩვენს შესახებ",
    "nav.gallery": "გალერეა",
    "nav.contact": "კონტაქტი",
    "nav.reserve": "დაჯავშნა",
    "nav.makeReservation": "მაგიდის დაჯავშნა",
    
    // Hero
    "hero.location": "თბილისი, საქართველო",
    "hero.title": "რესტორანი ვარაზი",
    "hero.subtitle": "Varazi Restaurant",
    "hero.tagline": "თანამედროვე სამზარეულო თბილისის გულში",
    "hero.viewMenu": "მენიუ",
    "hero.reserveTable": "დაჯავშნა",
    "hero.callNow": "დარეკვა",
    
    // About Preview
    "about.label": "ჩვენი ისტორია",
    "about.title1": "სადაც არქიტექტურა",
    "about.title2": "გასტრონომიას ხვდება",
    "about.p1": "ვარაზისხევის ცოცხალ უბანში მდებარე რესტორანი ვარაზი თანამედროვე ქართული სტუმართმოყვარეობის ნიმუშია. ჩვენი სივრცე ჰარმონიულად აერთიანებს თანამედროვე არქიტექტურას ბუნების სიმშვიდესთან.",
    "about.p2": "შედით და აღმოაჩინეთ მაღალი ჭერი გეომეტრიული სანათებით, ცოცხალი ხეები, რომლებიც სიცოცხლეს სუნთქავენ ყველა კუთხეში, და ატმოსფერო, რომელიც ერთდროულად ინტიმური და დიდებულია.",
    "about.discoverMore": "გაიგე მეტი",
    
    // Menu Preview
    "menu.label": "კულინარიული სრულყოფილება",
    "menu.title1": "თანამედროვე",
    "menu.title2": "საქართველოს გემო",
    "menu.viewFull": "სრული მენიუ",
    "menu.starters": "წინაკერძები",
    "menu.mainCourses": "ძირითადი კერძები",
    "menu.desserts": "დესერტები",
    "menu.drinks": "სასმელები",
    
    // Features
    "features.label": "გამოცდილება",
    "features.title": "რატომ უყვართ სტუმრებს ვარაზი",
    "features.architecture": "არქიტექტურული დიზაინი",
    "features.architectureDesc": "კორტენის ფოლადის ფასადები და მთელი სიმაღლის მინა ქმნის უნიკალურ ვიზუალურ გამოცდილებას.",
    "features.greenery": "შიდა მწვანე სივრცე",
    "features.greeneryDesc": "ცოცხალი ხეები და მწვანე მცენარეები ბუნებას შენობაში შემოაქვს, მშვიდ ატმოსფეროს ქმნის.",
    "features.ambiance": "ელეგანტური ატმოსფერო",
    "features.ambianceDesc": "გულდასმით შერჩეული განათება და თბილი ხის ტონები საღამოს დაუვიწყარს ხდის.",
    "features.lateNight": "გვიანი ვახშამი",
    "features.lateNightDesc": "ღიაა ღამის 2 საათამდე, იდეალურია ხანგრძლივი ვახშმისთვის.",
    
    // Gallery
    "gallery.label": "ვიზუალური მოგზაურობა",
    "gallery.title": "გალერეა",
    "gallery.viewAll": "ყველა ფოტო",
    "gallery.entrance": "შესასვლელი",
    "gallery.mainHall": "მთავარი დარბაზი",
    "gallery.evening": "საღამოს ატმოსფერო",
    
    // Location
    "location.label": "მოგვინახულეთ",
    "location.title": "ეწვიეთ ვარაზს",
    "location.address": "მისამართი",
    "location.directions": "მიმართულება →",
    "location.hours": "სამუშაო საათები",
    "location.openDaily": "ყოველდღე",
    "location.until2am": "ღამის 2:00 საათამდე",
    "location.reservations": "დაჯავშნა",
    
    // Footer
    "footer.description": "თანამედროვე ქართული სამზარეულო არქიტექტურული სულით. განიცადეთ კულინარიული ბრწყინვალება თბილისის გულში.",
    "footer.explore": "ნავიგაცია",
    "footer.ourMenu": "მენიუ",
    "footer.aboutUs": "ჩვენს შესახებ",
    "footer.contactLabel": "კონტაქტი",
    "footer.connect": "კავშირი",
    "footer.viewFullMenu": "სრული მენიუ",
    "footer.facebook": "ფეისბუქი",
    "footer.viewOnMap": "რუკაზე ნახვა",
    "footer.rights": "ყველა უფლება დაცულია.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
