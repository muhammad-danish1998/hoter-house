import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { RequestService } from "@/components/sections/RequestService";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <EmergencyBanner />
      <WhyUs />
      <Reviews />
      <ServiceAreas />
      <RequestService />
    </>
  );
}
