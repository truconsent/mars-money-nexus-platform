
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { TruConsentModal } from "@truconsent/consent-banner-react";
import { creditCardFormSchema, CreditCardFormData } from "./creditCard/creditCardSchema";
import { FinancialInfoSection } from "./creditCard/FinancialInfoSection";
import { PersonalInfoSection } from "./creditCard/PersonalInfoSection";
import { IdentityVerificationSection } from "./creditCard/IdentityVerificationSection";
import { ContactInfoSection } from "./creditCard/ContactInfoSection";

interface CreditCardFormProps {
  onBack: () => void;
}

export const CreditCardForm = ({ onBack }: CreditCardFormProps) => {
  const form = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardFormSchema),
    defaultValues: {
      name: "",
      panNumber: "",
      gender: "",
      dateOfBirth: "",
      emailAddress: "",
      address: "",
      aadharNumber: "",
      maritalStatus: "",
      mobileNumber: "",
      salaryDetails: "",
    },
  });

  const [showBanner, setShowBanner] = useState(false);

  const onSubmit = (data: CreditCardFormData) => {
    console.log("Credit Card Application: Form submitted. Data captured:", data);
    console.log("Credit Card Application: Setting showBanner to true to display TruConsentModal.");
    setShowBanner(true);
    console.log("Credit Card Application: showBanner state is now:", true);
  };

  const onSubmitted = (type: string) => {
    console.log("Credit Card Application: TruConsentModal onClose triggered with type:", type);
    if (type === "approved") {
      toast({
        title: "Application Submitted",
        description: "Your credit card application has been submitted successfully! We will review and contact you soon.",
      });
      console.log("Credit Card Application: Consent approved. Hiding banner and navigating back.");
      setShowBanner(false);
      onBack();
    } else {
      toast({
        title: "Application Not Submitted",
        description: "Please provide the consent to proceed with your credit card application.",
      });
      console.log("Credit Card Application: Consent not approved. Re-showing banner.");
      setShowBanner(true);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {showBanner && (
        <TruConsentModal
          bannerId={"CP007"}
          onClose={(type) => {
            onSubmitted(type);
          }}
        />
      )}

      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
            <CreditCard className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">
              Credit Card Application
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Powered by Catholic Syrian Bank • Credit Card Application (CSB)
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

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1 order-2 sm:order-1" size="lg">
                Back to Services
              </Button>
              <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 order-1 sm:order-2" size="lg">
                Submit Application
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
