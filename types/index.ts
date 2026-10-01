export type ServiceCategory = "cooling" | "heating" | "emergency" | "maintenance" | "air-quality";

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  bullets: string[];
  icon: string;
  isPopular?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  serviceType: string;
  comment: string;
  verified: boolean;
}

export interface ServiceArea {
  city: string;
  state: string;
  zipCodes: string[];
  featured?: boolean;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  phoneRaw: string;
  phoneFormatted: string;
  emergencyPhoneRaw: string;
  emergencyPhoneFormatted: string;
  email: string;
  licenseNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: {
    regular: string;
    emergency: string;
  };
  serviceAreas: ServiceArea[];
  badges: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface ServiceRequestFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceType: string;
  urgency: "emergency" | "today" | "flexible";
  streetAddress: string;
  zipCode: string;
  issueDescription: string;
  honeypot?: string;
}
