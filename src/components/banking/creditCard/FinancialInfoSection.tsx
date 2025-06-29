
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

interface FinancialInfoSectionProps {
  form: UseFormReturn<CreditCardFormData>;
}

export const FinancialInfoSection = ({ form }: FinancialInfoSectionProps) => {
  return (
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
  );
};
