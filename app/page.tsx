import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Company-status";
import { Feature } from "@/components/sections/Feature";
import { HeroSection } from "@/components/sections/Hero";
import Milestone from "@/components/sections/Milestone";
import { Ourcompany } from "@/components/sections/Our-company";
import { Team } from "@/components/sections/Our-team";
import { WeOffer } from "@/components/sections/WeOffer";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <HeroSection />
      {/* <Milestone /> */}
      <About />
      <Feature />
      <WeOffer />
      <Stats />
      <Ourcompany />
      <Team />
    </main>
  );
}
