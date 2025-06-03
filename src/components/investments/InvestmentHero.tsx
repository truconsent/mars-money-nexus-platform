
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";

export const InvestmentHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-orange-500/5 to-red-400/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Investing
            <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build wealth systematically with our direct investment platform. 
            From digital gold to mutual funds, start your investment journey today.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 text-lg mb-16"
          >
            Start Investing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-yellow-100">
            <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Investing</h3>
            <p className="text-gray-600 text-center">Zero commission on mutual funds and direct investment options</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
            <Shield className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h3>
            <p className="text-gray-600 text-center">Bank-grade security for all your investment transactions</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100">
            <Target className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Goal-Based</h3>
            <p className="text-gray-600 text-center">Invest with purpose using our intelligent goal planning tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};
