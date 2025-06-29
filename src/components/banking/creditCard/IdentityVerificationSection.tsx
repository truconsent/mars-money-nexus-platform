
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreditCardFormData } from "./creditCardSchema";

interface IdentityVerificationSectionProps {
  form: UseFormReturn<CreditCardFormData>;
}

export const IdentityVerificationSection = ({ form }: IdentityVerificationSectionProps) => {
  return (
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
  );
};
