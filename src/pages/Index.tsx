import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import MenuPreview from "@/components/MenuPreview";
import Features from "@/components/Features";
import GalleryPreview from "@/components/GalleryPreview";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPreview />
      <MenuPreview />
      <Features />
      <GalleryPreview />
      <LocationSection />
      <Footer />
    </main>
  );
};

export default Index;
