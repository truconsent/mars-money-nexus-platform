import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PiggyBank, 
  Building2, 
  Smartphone, 
  BarChart3, 
  CreditCard,
  Check,
  ArrowRight
} from "lucide-react";

export const BankingServices = () => {
  const services = [
    {
      id: "savings",
      icon: PiggyBank,
      title: "Savings Account",
      partner: "Federal Bank",
      description: "High-yield savings account with competitive interest rates",
      benefits: [
        "Up to 7% interest rate",
        "Zero balance requirement",
        "Free debit card",
        "Unlimited transactions",
        "24/7 customer support"
      ],
      features: [
        "Instant account opening",
        "Mobile & internet banking",
        "UPI integration",
        "ATM access nationwide"
      ]
    },
    {
      id: "salary",
      icon: Building2,
      title: "Salary Account",
      partner: "Federal Bank",
      description: "Corporate salary accounts with exclusive benefits",
      benefits: [
        "Zero maintenance charges",
        "Higher interest rates",
        "Priority customer service",
        "Exclusive offers & discounts",
        "Easy loan approvals"
      ],
      features: [
        "Instant salary credit",
        "Corporate banking portal",
        "Bulk transaction facility",
        "Dedicated relationship manager"
      ]
    },
    {
      id: "upi",
      icon: Smartphone,
      title: "UPI Payments",
      partner: "mars.money",
      description: "Fast, secure digital payments and money transfers",
      benefits: [
        "Instant money transfers",
        "Bill payment facility",
        "Merchant payments",
        "QR code scanning",
        "Transaction history"
      ],
      features: [
        "24/7 availability",
        "Bank-grade security",
        "Multiple UPI IDs",
        "Offline transaction capability"
      ]
    },
    {
      id: "aggregator",
      icon: BarChart3,
      title: "Account Aggregator",
      partner: "mars.money",
      description: "Track all your bank accounts in one place",
      benefits: [
        "Multi-bank account view",
        "Expense categorization",
        "Financial insights",
        "Budget planning tools",
        "Investment tracking"
      ],
      features: [
        "Real-time data sync",
        "AI-powered analytics",
        "Secure data encryption",
        "Customizable dashboard"
      ]
    },
    {
      id: "credit",
      icon: CreditCard,
      title: "Credit Cards",
      partner: "Catholic Syrian Bank",
      description: "Premium credit cards with rewards and benefits",
      benefits: [
        "Cashback on all purchases",
        "Reward points system",
        "Airport lounge access",
        "Zero annual fees",
        "Travel insurance"
      ],
      features: [
        "Contactless payments",
        "EMI conversion facility",
        "Credit limit enhancement",
        "International acceptance"
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
            Complete Banking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic savings to advanced financial management, we've got all your banking needs covered
          </p>
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
                    <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                    <p className="mb-6">
                      Apply now and experience the future of banking with mars.money
                    </p>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Process</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">1</div>
                        <span>Fill application form</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">2</div>
                        <span>Upload required documents</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">3</div>
                        <span>Get instant approval</span>
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
