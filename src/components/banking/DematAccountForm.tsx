import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { toast } from "@/components/ui/use-toast"; // Importing the actual toast component
import { TruConsentModal } from "@truconsent/consent-banner-react"; // Importing the actual TruConsentModal package


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  panNumber: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter a valid PAN number (e.g., ABCDE1234F)"),
  aadharNumber: z
    .string()
    .regex(/^\d{12}$/, "Please enter a valid 12-digit Aadhar number"),
  gender: z.string().min(1, "Please select your gender"),
  dateOfBirth: z.string().min(1, "Please enter your date of birth"),
  emailAddress: z.string().email("Please enter a valid email address"),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  address: z.string().min(10, "Please enter your complete address"),
  annualIncome: z.string().min(1, "Please select your annual income"),
  tradingExperience: z.string().min(1, "Please select your trading experience"),
  investmentObjective: z.string().min(1, "Please select your investment objective"),
});

type FormData = z.infer<typeof formSchema>;

interface DematAccountFormProps {
  onBack: () => void;
}

export const DematAccountForm = ({ onBack }: DematAccountFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      panNumber: "",
      aadharNumber: "",
      gender: "",
      dateOfBirth: "",
      emailAddress: "",
      mobileNumber: "",
      address: "",
      annualIncome: "",
      tradingExperience: "",
      investmentObjective: "",
    },
  });

  // State to control the visibility of the TruConsentModal
  const [showBanner, setShowBanner] = useState(false);

  // onSubmit function, now triggers the consent banner
  const onSubmit = (data: FormData) => {
    console.log("Demat Account Form data captured:", data);
    console.log("Demat Account Application: Setting showBanner to true to display TruConsentModal.");
    setShowBanner(true); // On form submission, show the consent banner.
    console.log("Demat Account Application: showBanner state is now:", true);
  };

  // onSubmitted function, handles the response from the TruConsentModal
  const onSubmitted = (type: string) => {
    console.log("Demat Account Application: TruConsentModal onClose triggered with type:", type);
    if (type === "approved") {
      // If consent is approved, proceed with application submission success
      toast({
        title: "Application Submitted",
        description: "Your Demat account application has been submitted successfully! You can now proceed to mutual fund selection.",
      });
      console.log("Demat Account Application: Consent approved. Hiding banner and navigating back.");
      setShowBanner(false); // Hide the banner as consent is given and processed
      onBack(); // Navigate back or reset the form
    } else {
      // If consent is not approved (e.g., "denied" or closed), inform the user and keep the banner visible
      toast({
        title: "Application Not Submitted",
        description: "Please provide the consent to open your Demat account.",
      });
      console.log("Demat Account Application: Consent not approved. Re-showing banner.");
      setShowBanner(true); // Ensure the banner remains visible to re-prompt for consent
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {/* Conditionally render the TruConsentModal.
          It will appear when showBanner state is true, typically after the user attempts to submit the form. */}
      {showBanner && (
        <TruConsentModal
          bannerId={"CP012"} // Unique identifier for this specific Demat Account consent banner.
                           // This ID must be configured in your TruConsent platform.
          onClose={(type) => { // Callback fired when the user interacts with the modal (approves, denies, closes).
            onSubmitted(type); // Pass the consent type (e.g., "approved", "denied") to our handler.
          }}
        />
      )}

      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Demat Account Application
            </CardTitle>
            <CardDescription>
              Powered by mars.money • Start your investment journey
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          {/* The form's onSubmit event is now tied to our custom onSubmit function,
              which will trigger the consent banner display. */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-3">
                Personal Information
              </h3>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Identity Verification */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-3">
                Identity Verification
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="panNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PAN Number *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="ABCDE1234F" 
                          {...field}
                          style={{ textTransform: 'uppercase' }}
                          onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aadharNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aadhar Number *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123456789012" 
                          {...field}
                          maxLength={12}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-3">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="9876543210" 
                          {...field}
                          maxLength={10}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complete Address *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your complete address with pincode"
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Investment Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-3">
                Investment Profile
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="annualIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Income *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select income" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="below-1lakh">Below ₹1 Lakh</SelectItem>
                          <SelectItem value="1-5lakh">₹1-5 Lakhs</SelectItem>
                          <SelectItem value="5-10lakh">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10-25lakh">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="above-25lakh">Above ₹25 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tradingExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trading Experience *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="1-2years">1-2 Years</SelectItem>
                          <SelectItem value="3-5years">3-5 Years</SelectItem>
                          <SelectItem value="above-5years">Above 5 Years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investmentObjective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment Objective *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select objective" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="wealth-creation">Wealth Creation</SelectItem>
                          <SelectItem value="income-generation">Income Generation</SelectItem>
                          <SelectItem value="tax-saving">Tax Saving</SelectItem>
                          <SelectItem value="capital-appreciation">Capital Appreciation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Form Submission Buttons */}
            <div className="flex gap-4 pt-6">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1" size="lg">
                Back to Services
              </Button>
              <Button type="submit" className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700" size="lg">
                Open Demat Account
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
