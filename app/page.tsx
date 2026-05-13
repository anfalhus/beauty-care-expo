import Navbar from "./components/basic/Navbar";
import ActivitiesSection from "./components/home-sections/ActivitiesSection";
import HeroSection from "./components/home-sections/HeroSection";
import LocationSection from "./components/home-sections/LocationSection";
import PartnerSection from "./components/home-sections/PartnerSection";
import TicketSection from "./components/home-sections/TicketSection";
import CounterSection from "./components/home-sections/CounterSection";
import AboutSection from "./components/home-sections/AboutSection";

export default function Home() {
  return (
<div>
<Navbar />
<HeroSection />
<CounterSection />
<AboutSection />
<ActivitiesSection />
<TicketSection />
<LocationSection />
<PartnerSection />
</div>
  );
}
