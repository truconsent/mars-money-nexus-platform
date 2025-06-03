
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  TrendingUp,
  Check,
  ArrowRight,
  Clock,
  Shield,
  Calculator
} from "lucide-react";

export const LoansServices = () => {
  const services = [
    {
      id: "personal-loan",
      icon: User,
      title: "Personal Loans",
      partner: "Partner Banks",
      description: "Quick personal loans for all your immediate financial needs",
      benefits: [
        "Loan amount up to ₹50 lakhs",
        "Interest rates starting 10.49%",
        "Instant approval in minutes",
        "Minimal documentation required",
        "Flexible repayment tenure"
      ],
      features: [
        "Digital application process",
        "No collateral required",
        "Quick disbursement",
        "Prepayment facility"
      ]
    },
    {
      id: "loans-against-mf",
      icon: TrendingUp,
      title: "Loans Against Mutual Funds",
      partner: "Partner Banks",
      description: "Leverage your mutual fund investments for instant liquidity",
      benefits: [
        "Loan against MF portfolio",
        "Interest rates from 9%",
        "Up to 70% of portfolio value",
        "No need to redeem investments",
        "Continue earning returns"
      ],
      features: [
        "Online application",
        "Same-day approval",
        "Flexible repayment",
        "Portfolio monitoring"
      ]
    }
  ];

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible Loan Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant access to funds with our competitive loan products
          </p>
        </div>

        {/* Loan Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Approval</h3>
            <p className="text-gray-600">Get loan approval in minutes with minimal documentation</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Process</h3>
            <p className="text-gray-600">Bank-grade security with encrypted data transmission</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <Calculator className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h3>
            <p className="text-gray-600">Best-in-class interest rates with flexible tenure</p>
          </div>
        </div>

        {/* Sticky Quick Navigation */}
        <div className="sticky top-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 mb-16 z-40">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Button
                key={service.id}
                variant="outline"
                onClick={() => scrollToService(service.id)}
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Service Sections */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <Card className={`border-0 bg-gradient-to-br from-white to-gray-50 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </CardTitle>
                        <p className="text-purple-600 font-medium">
                          Powered by {service.partner}
                        </p>
                      </div>
                    </div>
                    <CardDescription className="text-lg text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <ArrowRight className="h-4 w-4 text-purple-500" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Apply for Loan</h3>
                    <p className="mb-6">
                      Get instant approval with mars.money's quick loan process
                    </p>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Application Process</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">1</div>
                        <span>Fill loan application</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">2</div>
                        <span>Submit required documents</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">3</div>
                        <span>Get instant approval & disbursement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
