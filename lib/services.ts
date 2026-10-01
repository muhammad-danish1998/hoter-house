import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "Emergency AC Repair",
    category: "cooling",
    isPopular: true,
    shortDescription: "Is your AC blowing warm air, making strange noises, or refusing to turn on? We diagnose and fix all major AC brands fast.",
    bullets: [
      "Refrigerant leak detection & recharge",
      "Compressor, capacitor & fan motor fixes",
      "Frozen evaporator coil restoration",
      "Emergency same-day appointments",
    ],
    icon: "Snowflake",
  },
  {
    id: "furnace-heating-repair",
    title: "Furnace & Heating Repair",
    category: "heating",
    isPopular: true,
    shortDescription: "Don't get left in the cold. We troubleshoot gas furnaces, electric heat pumps, and boilers to restore comfort quickly and safely.",
    bullets: [
      "Ignition & pilot light troubleshooting",
      "Heat exchanger inspection & safety check",
      "Blower motor & thermostat diagnostics",
      "Carbon monoxide leak detection",
    ],
    icon: "Flame",
  },
  {
    id: "hvac-replacement",
    title: "AC & Heat Pump Installation",
    category: "cooling",
    shortDescription: "Upgrade to a high-efficiency inverter heat pump or central AC system. Save up to 30% on monthly energy bills with rebates.",
    bullets: [
      "Free in-home replacement estimates",
      "Energy Star® high-SEER2 rated models",
      "10-year manufacturer & workmanship warranties",
      "Flexible financing options available",
    ],
    icon: "Sparkles",
  },
  {
    id: "heat-pump-service",
    title: "Heat Pump Service & Install",
    category: "heating",
    shortDescription: "Year-round heating and cooling efficiency. Expert servicing for ducted and ductless mini-split heat pump systems.",
    bullets: [
      "Reversing valve and defrost cycle repair",
      "Multi-zone ductless mini-split installations",
      "Seasonal changeover inspections",
      "Cold-climate high performance tuning",
    ],
    icon: "Zap",
  },
  {
    id: "maintenance-tuneup",
    title: "Seasonal HVAC Tune-Up",
    category: "maintenance",
    shortDescription: "Prevent costly breakdowns before extreme weather strikes. Comprehensive 21-point system tune-up and safety inspection.",
    bullets: [
      "Coil cleaning & electrical testing",
      "Filter replacement & airflow balancing",
      "Lubricate moving parts & tighten wires",
      "Peak operating efficiency calibration",
    ],
    icon: "Wrench",
  },
  {
    id: "indoor-air-quality",
    title: "Air Quality & Duct Solutions",
    category: "air-quality",
    shortDescription: "Breathe cleaner, healthier air at home. We install whole-home air purifiers, dehumidifiers, UV scrubbers, and duct sealing.",
    bullets: [
      "HEPA & UV air purification systems",
      "Whole-home humidifiers & dehumidifiers",
      "Duct sanitizing & airflow optimization",
      "Allergen, dust & mold reduction",
    ],
    icon: "Wind",
  },
];
