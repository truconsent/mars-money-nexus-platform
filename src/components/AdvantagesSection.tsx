
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, CreditCard, TrendingUp, Users } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your money and data are protected with industry-leading encryption and regulatory compliance from RBI-approved banks.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Instant Digital Banking",
      description: "Open accounts, transfer money, and manage finances instantly through our cutting-edge digital platform.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Multiple Bank Partners",
      description: "Access services from Federal Bank, Catholic Syrian Bank, and other leading Indian financial institutions.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: CreditCard,
      title: "All-in-One Platform",
      description: "Banking, investments, loans, and payments - everything you need for your financial journey in one place.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Smart Investment Tools",
      description: "Grow your wealth with direct mutual funds, digital gold, and intelligent portfolio management.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get personalized financial guidance from our team of banking and investment experts.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose mars.money?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of banking with our comprehensive neo-banking platform, 
            designed for the modern Indian consumer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${advantage.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
