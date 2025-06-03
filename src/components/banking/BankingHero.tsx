
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Smartphone } from "lucide-react";

export const BankingHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/5 to-pink-400/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Banking
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience seamless banking with mars.money. From savings accounts to digital payments, 
            manage all your banking needs in one secure platform.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg mb-16"
          >
            Start Banking Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Regulated</h3>
            <p className="text-gray-600 text-center">RBI approved banks with advanced security protocols</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100">
            <Clock className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Setup</h3>
            <p className="text-gray-600 text-center">Open accounts in minutes with minimal documentation</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-pink-100">
            <Smartphone className="h-12 w-12 text-pink-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile First</h3>
            <p className="text-gray-600 text-center">Complete banking experience on your smartphone</p>
          </div>
        </div>
      </div>
    </section>
  );
};
