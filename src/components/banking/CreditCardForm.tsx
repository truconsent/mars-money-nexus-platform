
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { TruConsentModal } from "@truconsent/consent-banner-react";
import { useAuth } from "@/contexts/AuthContext";
import { RegistrationModal } from "@/components/RegistrationModal";
import { creditCardFormSchema, CreditCardFormData } from "./creditCard/creditCardSchema";
import { FinancialInfoSection } from "./creditCard/FinancialInfoSection";
import { PersonalInfoSection } from "./creditCard/PersonalInfoSection";
import { IdentityVerificationSection } from "./creditCard/IdentityVerificationSection";
import { ContactInfoSection } from "./creditCard/ContactInfoSection";

interface CreditCardFormProps {
  onBack: () => void;
}

export const CreditCardForm = ({ onBack }: CreditCardFormProps) => {
  const { user } = useAuth();
  const [showBanner, setShowBanner] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [applicationData, setApplicationData] = useState<CreditCardFormData | null>(null);

  const form = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardFormSchema),
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

  const onSubmit = (data: CreditCardFormData) => {
    console.log("Credit Card Application data captured:", data);
    setApplicationData(data);
    
    if (!user) {
      setShowRegistrationModal(true);
    } else {
      setShowBanner(true);
    }
  };

  const handleRegistrationSuccess = () => {
    setShowBanner(true);
  };

  const handleSkipRegistration = () => {
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
      setShowBanner(false);
      onBack();
    } else {
      toast({
        title: "Application Not Submitted",
        description: "Please provide the consent to proceed with your credit card application.",
      });
      setShowBanner(true);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {showBanner && (
        <TruConsentModal
          bannerId={"CC001"}
          onClose={(type) => {
            onSubmitted(type);
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FinancialInfoSection form={form} />
            <PersonalInfoSection form={form} />
            <IdentityVerificationSection form={form} />
            <ContactInfoSection form={form} />

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
