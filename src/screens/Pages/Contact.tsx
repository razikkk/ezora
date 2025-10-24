
import { Button } from "../../components/ui/button";
import { ContactFormSection } from "../ElementDefault/sections/CallForm/CallForm";
import { ContactInfoSection } from "../ElementDefault/sections/CallInfoSection/CallInfoSection";
import { CallToActionSection } from "../ElementDefault/sections/CallToActionSection";
import { FaqSection } from "../ElementDefault/sections/FaqSection";
import { FooterDesktopSection } from "../ElementDefault/sections/FooterDesktopSection";
import { VideoReelsSection } from "../ElementDefault/sections/VideoReelsSection/VideoReelsSection";
import { Link } from "react-router-dom";


const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Destination", path: "/destination" },
    { label: "Contact", path: "/contact" },
  ];
  
  export const Contact = (): JSX.Element => {
    return (

<section className="relative w-full bg-black">
  {/* Navbar */}
  <nav className="sticky top-4 z-50 flex justify-center px-4 py-6">
  <div className="bg-[#22535D] rounded-[50px] h-[64px] flex items-center justify-center gap-12 px-10 max-w-[500px] w-full shadow-lg">
    {navigationItems.map((item, i) => (
      <Link key={i} to={item.path}>
        <Button
          variant="ghost"
          className="h-auto px-0 [font-family:'Poppins',Helvetica] font-medium text-base text-white tracking-[-0.48px] hover:bg-transparent"
        >
          {item.label}
        </Button>
      </Link>
    ))}
  </div>
</nav>

  <ContactFormSection/>
  <ContactInfoSection/>
  <FaqSection/>
  <VideoReelsSection/>
  <CallToActionSection/>
  <FooterDesktopSection/>
  </section>

);
};