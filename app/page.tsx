import { AreasSection } from "@/components/main-page/AreasSection";
import Discover from "@/components/main-page/discover";
import Hero from "@/components/main-page/hero";
import Search from "@/components/main-page/search";
import { Services } from "@/components/main-page/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Discover />
      <Services />
       <AreasSection />
    </div>
  );
}
