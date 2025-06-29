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
import { CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { TruConsentModal } from "@truconsent/consent-banner-react";
import { useAuth } from "@/contexts/AuthContext";
import { RegistrationModal } from "@/components/RegistrationModal";

// Define the schema for the form data using Zod
const formSchema = z.object({
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

// Infer the form data type from the schema
type FormData = z.infer<typeof formSchema>;

// Define props for the CreditCardForm component
interface CreditCardFormProps {
  onBack: () => void;
}

// CreditCardForm functional component
export const CreditCardForm = ({ onBack }: CreditCardFormProps) => {
  const { user } = useAuth();
  const [showBanner, setShowBanner] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [applicationData, setApplicationData] = useState<FormData | null>(null);

  // Initialize react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema), // Use Zod for validation
    defaultValues: {
      creditScore: "",
      name: user?.user_metadata?.name || "",
      panNumber: "",
      gender: "",
      dateOfBirth: "",
      emailAddress: user?.email || "",
      address: "",
      aadharNumber: "",
      maritalStatus: "",
      mobileNumber: "",
      salaryDetails: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Credit Card Application data captured:", data);
    setApplicationData(data);
    
    if (!user) {
      // For guest users, show registration modal first
      setShowRegistrationModal(true);
    } else {
      // For registered users, proceed directly to consent
      setShowBanner(true);
    }
  };

  const handleRegistrationSuccess = () => {
    // After successful registration, proceed to consent
    setShowBanner(true);
  };

  const handleSkipRegistration = () => {
    // Guest user chose to skip registration, proceed to consent
    setShowRegistrationModal(false);
    setShowBanner(true);
  };

  const onSubmitted = (type: string) => {
    if (type === "approved") {
      toast({
        title: "Application Submitted",
        description: user 
          ? "Your credit card application has been submitted successfully! We will review and contact you soon."
          : "Your credit card application has been submitted successfully! Consider registering to track your application status.",
      });
      setShowBanner(false); // Hide the banner as consent is given and processed
      onBack(); // Navigate back or reset the form
    } else {
      // If consent is not approved (e.g., "denied" or closed), inform the user and keep the banner visible
      toast({
        title: "Application Not Submitted",
        description: "Please provide the consent to proceed with your credit card application.",
      });
      setShowBanner(true); // Ensure the banner remains visible to re-prompt for consent
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {/* Conditionally render the TruConsentModal.
          It will appear when showBanner state is true, typically after the user attempts to submit the form. */}
      {showBanner && (
        <TruConsentModal
          bannerId={"CC001"} // Unique identifier for this specific credit card consent banner.
                           // This ID must be configured in your TruConsent platform.
          onClose={(type) => { // Callback fired when the user interacts with the modal (approves, denies, closes).
            onSubmitted(type); // Pass the consent type (e.g., "approved", "denied") to our handler.
          }}
        />
      )}

      <RegistrationModal
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
        onSuccess={handleRegistrationSuccess}
        prefilledData={{
          name: applicationData?.name,
          email: applicationData?.emailAddress,
        }}
      />

      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
            <CreditCard className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Credit Card Application
            </CardTitle>
            <CardDescription>
              Powered by Catholic Syrian Bank • Credit Card Application (CSB)
              {!user && " • No registration required"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          {/* The form's onSubmit event is now tied to our custom onSubmit function,
              which will trigger the consent banner display. */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Financial Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-3">
                Financial Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="creditScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Score *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your credit score" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="salaryDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Salary Details *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your monthly salary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-3">
                Personal Information
              </h3>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                <FormField
                  control={form.control}
                  name="maritalStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marital Status *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Identity Verification Section */}
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

            {/* Contact Information Section */}
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
                    <FormLabel>Address *</FormLabel>
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

            {/* Form Submission Buttons */}
            <div className="flex gap-4 pt-6">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1" size="lg">
                Back to Services
              </Button>
              <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700" size="lg">
                {user ? "Submit Application" : "Apply Now (Guest)"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
