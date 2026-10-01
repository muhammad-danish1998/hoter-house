import { z } from "zod";

export const serviceRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (at least 2 characters)." })
    .max(80, { message: "Name must be under 80 characters." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid 10-digit US phone number." })
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, {
      message: "Please enter a valid US phone number (e.g. 555-123-4567).",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),
  serviceType: z.string().min(1, { message: "Please select the service needed." }),
  urgency: z.enum(["emergency", "today", "flexible"], {
    errorMap: () => ({ message: "Please select your scheduling timeframe." }),
  }),
  streetAddress: z
    .string()
    .min(5, { message: "Please provide your street address for dispatch." })
    .max(120, { message: "Address must be under 120 characters." }),
  zipCode: z
    .string()
    .regex(/^\d{5}$/, { message: "Please enter a valid 5-digit US ZIP code." }),
  issueDescription: z
    .string()
    .min(10, { message: "Please briefly describe the problem (at least 10 characters)." })
    .max(1000, { message: "Description must be under 1000 characters." }),
  honeypot: z.string().max(0, { message: "Spam detected." }).optional(),
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;
