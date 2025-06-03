
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  Building2, 
  Smartphone, 
  BarChart3, 
  CreditCard, 
  Coins, 
  TrendingUp, 
  Banknote,
  PiggyBank 
} from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Savings Account",
      description: "Open a high-yield savings account with Federal Bank. Enjoy competitive interest rates and digital convenience.",
      partner: "Federal Bank",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "Salary Account",
      description: "Corporate salary accounts with Federal Bank. Seamless payroll integration and exclusive benefits.",
      partner: "Federal Bank",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "UPI Payments",
      description: "Fast, secure, and convenient digital payments. Send money, pay bills, and shop online instantly.",
      partner: "mars.money",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Account Aggregator",
      description: "Track all your bank accounts in one place. Get comprehensive insights into your financial health.",
      partner: "mars.money",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Credit Cards",
      description: "Premium credit cards from Catholic Syrian Bank. Enjoy rewards, cashback, and exclusive privileges.",
      partner: "Catholic Syrian Bank",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Coins,
      title: "Gold Investment",
      description: "Invest in digital gold starting from ₹1. Safe, secure, and backed by physical gold reserves.",
      partner: "mars.money",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Direct mutual fund investments with zero commission. One-time investments and SIP options available.",
      partner: "mars.money",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Banknote,
      title: "Personal Loans",
      description: "Quick personal loans with competitive interest rates. Minimal documentation and fast approval.",
      partner: "Partner Banks",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Wallet,
      title: "Loans Against MF",
      description: "Get instant loans against your mutual fund portfolio. Retain your investments while accessing funds.",
      partner: "mars.money",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From banking to investments, we've got all your financial needs covered under one platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </CardTitle>
                <div className="text-sm text-purple-600 font-medium">
                  Powered by {service.partner}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 group-hover:border-purple-300 transition-all duration-300"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
