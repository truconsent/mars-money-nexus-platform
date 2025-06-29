
import * as z from "zod";

export const creditCardFormSchema = z.object({
  creditScore: z.string().min(1, "Please enter your credit score"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  panNumber: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter a valid PAN number (e.g., ABCDE1234F)"),
  gender: z.string().min(1, "Please select your gender"),
  dateOfBirth: z.string().min(1, "Please enter your date of birth"),
  emailAddress: z.string().email("Please enter a valid email address"),
  address: z.string().min(10, "Please enter your complete address"),
  aadharNumber: z
    .string()
    .regex(/^\d{12}$/, "Please enter a valid 12-digit Aadhar number"),
  maritalStatus: z.string().min(1, "Please select your marital status"),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  salaryDetails: z.string().min(1, "Please enter your salary details"),
});

export type CreditCardFormData = z.infer<typeof creditCardFormSchema>;
