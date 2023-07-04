import "./App.css";
import { FooterSection } from "./components/Footer";
import { NavbarSection } from "./components/Navbar";
import { CTASection } from "./sections/CTASection";
import { CollectionSection } from "./sections/CollectionSection";
import { FeaturedSection } from "./sections/FeaturedSection";
import { HeroSection } from "./sections/HeroSection";
import { ShopSection } from "./sections/ShopSection";
import { TestimonialSection } from "./sections/TestimonialSection";

function App() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <FeaturedSection />
      <CollectionSection />
      <ShopSection />
      <TestimonialSection />
      <CTASection />
      <FooterSection />
    </>
  );
}

export default App;
