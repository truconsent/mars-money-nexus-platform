
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Calculator } from "lucide-react";

export const LoansHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-blue-500/5 to-purple-400/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Quick Loans
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-500 bg-clip-text text-transparent">
              When You Need Them
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get instant access to funds with our digital lending platform. 
            From personal loans to loans against investments, we've got you covered.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg mb-16"
          >
            Apply for Loan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100">
            <Clock className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Approval</h3>
            <p className="text-gray-600 text-center">Get loan approval in minutes with minimal documentation</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Process</h3>
            <p className="text-gray-600 text-center">Bank-grade security for all loan applications and disbursals</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
            <Calculator className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h3>
            <p className="text-gray-600 text-center">Get the best interest rates with flexible repayment options</p>
          </div>
        </div>
      </div>
    </section>
  );
};
