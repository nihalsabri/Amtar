import { AreasSection } from "@/components/main-page/AreasSection";
import Discover from "@/components/main-page/discover";
import Hero from "@/components/main-page/hero";
import { MapSection } from "@/components/main-page/MapSection";
import Search from "@/components/main-page/search";
import { Services } from "@/components/main-page/services";
import PropertiesSection from "@/components/main-page/properties";
import MarketSection from "@/components/main-page/marketSection";
import PropertyProjectSection from "@/components/main-page/propertyProjectSection";
import PropertyRequestsSection from "@/components/main-page/propertyRequests";
import { JoinUs } from "@/components/main-page/joinus";
import Partners from "@/components/main-page/partners";
import AgentSection from "@/components/main-page/agentSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Discover />
      <Services />
       <AreasSection />
       <MapSection />
       <PropertiesSection />
       <MarketSection />
       <PropertyProjectSection />
       <PropertyRequestsSection />
       <JoinUs />
      <Partners />
      <AgentSection />
    </div>
  );
}
