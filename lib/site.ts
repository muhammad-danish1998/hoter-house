import { BusinessConfig } from "@/types";

export const siteConfig: BusinessConfig = {
  name: "Summit Air Heating & Cooling",
  legalName: "Summit Air Heating & Cooling LLC",
  tagline: "Fast, Reliable Heating & Air Conditioning Repair — 24/7 Emergency Service",
  phoneRaw: "5550192834",
  phoneFormatted: "(555) 019-2834",
  emergencyPhoneRaw: "5550192834",
  emergencyPhoneFormatted: "(555) 019-2834",
  email: "service@summitairhvac.demo",
  licenseNumber: "HVAC Lic. #94821-US",
  address: {
    street: "1420 Commerce Valley Pkwy",
    city: "Denver",
    state: "CO",
    zip: "80202",
    country: "United States",
  },
  hours: {
    regular: "Mon–Sat: 7:00 AM – 8:00 PM",
    emergency: "24/7 Emergency Response Available",
  },
  serviceAreas: [
    { city: "Denver", state: "CO", zipCodes: ["80202", "80203", "80204", "80205", "80206"], featured: true },
    { city: "Aurora", state: "CO", zipCodes: ["80010", "80011", "80012", "80013"], featured: true },
    { city: "Lakewood", state: "CO", zipCodes: ["80214", "80215", "80226", "80228"], featured: true },
    { city: "Centennial", state: "CO", zipCodes: ["80111", "80112", "80121", "80122"], featured: true },
    { city: "Highlands Ranch", state: "CO", zipCodes: ["80126", "80129", "80130"], featured: false },
    { city: "Littleton", state: "CO", zipCodes: ["80120", "80123", "80127"], featured: false },
    { city: "Arvada", state: "CO", zipCodes: ["80002", "80003", "80004"], featured: false },
    { city: "Thornton", state: "CO", zipCodes: ["80229", "80233", "80241"], featured: false },
  ],
  badges: [
    {
      title: "Licensed & Insured",
      description: "State-certified Master HVAC technicians with full liability coverage.",
      icon: "ShieldCheck",
    },
    {
      title: "Same-Day Service",
      description: "Fast arrival with fully-stocked service trucks ready to fix on the first visit.",
      icon: "Clock",
    },
    {
      title: "Upfront Honest Pricing",
      description: "No hidden dispatch fees or surprise charges. Upfront quotes before work starts.",
      icon: "BadgeCheck",
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "1-year warranty on all repairs, parts, and new unit installations.",
      icon: "ThumbsUp",
    },
  ],
};
