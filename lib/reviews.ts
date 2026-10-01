import { CustomerReview } from "@/types";

export const reviewsData: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Marcus T.",
    location: "Denver, CO",
    rating: 5,
    date: "2 days ago",
    serviceType: "Emergency AC Repair",
    comment: "Our AC stopped cooling on a 96-degree July afternoon. Summit Air had a technician at our door in under 90 minutes. Fixed a blown capacitor and had cold air blowing immediately. Transparent pricing, no games.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Sarah L.",
    location: "Aurora, CO",
    rating: 5,
    date: "1 week ago",
    serviceType: "Furnace Replacement",
    comment: "Our 18-year-old furnace died in the middle of a cold snap. The technicians were professional, laid down protective runners on our floors, and finished the full new install in one day. Very impressed!",
    verified: true,
  },
  {
    id: "rev-3",
    author: "David & Elena R.",
    location: "Lakewood, CO",
    rating: 5,
    date: "2 weeks ago",
    serviceType: "Heat Pump Installation",
    comment: "Replaced our old noisy central system with a dual-fuel heat pump. The team explained all the local rebate credits and helped us with the paperwork. Our electric bill has already dropped significantly.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Robert K.",
    location: "Centennial, CO",
    rating: 5,
    date: "3 weeks ago",
    serviceType: "21-Point AC Tune-Up",
    comment: "Honest and thorough tune-up. They caught a failing contactor before it caused an expensive breakdown during peak summer. Friendly technician took the time to answer all my questions.",
    verified: true,
  },
];
