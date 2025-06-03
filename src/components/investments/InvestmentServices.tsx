
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Coins, 
  TrendingUp,
  Check,
  ArrowRight,
  Calculator,
  Calendar
} from "lucide-react";

export const InvestmentServices = () => {
  const services = [
    {
      id: "gold",
      icon: Coins,
      title: "Gold Investment",
      partner: "mars.money",
      description: "Invest in 24K digital gold starting from just ₹1",
      benefits: [
        "Start with just ₹1",
        "24K pure gold backed",
        "Instant buy/sell anytime",
        "No storage hassles",
        "Real-time gold prices"
      ],
      features: [
        "Digital gold certificates",
        "Physical delivery option",
        "SIP in gold available",
        "Tax-efficient investing"
      ],
      comparison: [
        { feature: "Minimum Investment", traditional: "₹10,000+", mars: "₹1" },
        { feature: "Storage Cost", traditional: "₹500-1000/year", mars: "Free" },
        { feature: "Liquidity", traditional: "Complex", mars: "Instant" },
        { feature: "Purity Guarantee", traditional: "Variable", mars: "24K Certified" }
      ]
    },
    {
      id: "mutual-funds",
      icon: TrendingUp,
      title: "Mutual Funds",
      partner: "mars.money",
      description: "Direct mutual fund investments with zero commission",
      benefits: [
        "Zero commission (Direct plans)",
        "SIP starting ₹500",
        "One-time investments",
        "Portfolio diversification",
        "Professional fund management"
      ],
      features: [
        "1000+ fund options",
        "Goal-based investing",
        "Auto-rebalancing",
        "Tax-saving funds (ELSS)"
      ],
      comparison: [
        { feature: "Commission", traditional: "1-2.5%", mars: "0%" },
        { feature: "Minimum SIP", traditional: "₹1000+", mars: "₹500" },
        { feature: "Fund Options", traditional: "Limited", mars: "1000+" },
        { feature: "Switching", traditional: "Complex", mars: "One-click" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your wealth with our comprehensive investment platform designed for modern investors
          </p>
        </div>
        
        <Tabs defaultValue="gold" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </CardTitle>
                          <p className="text-orange-600 font-medium">
                            Powered by {service.partner}
                          </p>
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <ArrowRight className="h-4 w-4 text-orange-500" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 bg-gradient-to-br from-orange-50 to-yellow-50">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Why mars.money is Better
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-semibold text-gray-900">Feature</th>
                              <th className="text-left py-2 font-semibold text-gray-600">Traditional</th>
                              <th className="text-left py-2 font-semibold text-orange-600">mars.money</th>
                            </tr>
                          </thead>
                          <tbody>
                            {service.comparison.map((row, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-3 font-medium text-gray-900">{row.feature}</td>
                                <td className="py-3 text-gray-600">{row.traditional}</td>
                                <td className="py-3 text-orange-600 font-semibold">{row.mars}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">Start Investing Today</h3>
                    <p className="mb-6 text-sm">
                      Begin your investment journey with mars.money and build wealth systematically
                    </p>
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 w-full mb-4">
                      Start Investing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calculator className="h-4 w-4" />
                      <span>Use our SIP calculator</span>
                    </div>
                  </div>
                  
                  <Card className="border-0">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                        Investment Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">1</div>
                          <div>
                            <p className="font-medium text-gray-900">Choose Investment</p>
                            <p className="text-sm text-gray-600">Select your preferred investment option</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">2</div>
                          <div>
                            <p className="font-medium text-gray-900">Set Amount</p>
                            <p className="text-sm text-gray-600">Choose one-time or SIP investment</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">3</div>
                          <div>
                            <p className="font-medium text-gray-900">Start Investing</p>
                            <p className="text-sm text-gray-600">Begin building your wealth</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
