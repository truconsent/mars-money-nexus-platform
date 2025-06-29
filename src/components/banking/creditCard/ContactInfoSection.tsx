
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
import { Textarea } from "@/components/ui/textarea";
import { CreditCardFormData } from "./creditCardSchema";

interface ContactInfoSectionProps {
  form: UseFormReturn<CreditCardFormData>;
}

export const ContactInfoSection = ({ form }: ContactInfoSectionProps) => {
  return (
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
  );
};
