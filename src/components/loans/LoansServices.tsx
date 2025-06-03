
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Banknote, 
  Wallet,
  Check,
  ArrowRight,
  Calendar,
  Percent
} from "lucide-react";

export const LoansServices = () => {
  const services = [
    {
      id: "personal",
      icon: Banknote,
      title: "Personal Loans",
      partner: "Partner Banks",
      description: "Quick personal loans with competitive interest rates",
      benefits: [
        "Loan amount up to ₹25 lakhs",
        "Interest rates from 10.99%",
        "Flexible tenure 12-60 months",
        "Minimal documentation",
        "Quick disbursal in 24 hours"
      ],
      features: [
        "No collateral required",
        "Prepayment without penalty",
        "EMI calculator available",
        "Online loan management"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Minimum salary: ₹25,000",
        "Employment: 2+ years",
        "CIBIL score: 700+"
      ]
    },
    {
      id: "mutual-fund",
      icon: Wallet,
      title: "Loans Against Mutual Funds",
      partner: "mars.money",
      description: "Get instant loans against your mutual fund portfolio",
      benefits: [
        "Loan up to 80% of portfolio value",
        "Interest rates from 12%",
        "No processing fees",
        "Retain your investments",
        "Instant loan approval"
      ],
      features: [
        "Continue earning returns",
        "Flexible repayment",
        "No foreclosure charges",
        "Digital loan process"
      ],
      eligibility: [
        "Mutual fund portfolio worth ₹1 lakh+",
        "Portfolio age: 6+ months",
        "Regular SIP preferred",
        "KYC compliant investments"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loan Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access funds quickly with our digital lending platform designed for your financial needs
          </p>
        </div>
        
        <Tabs defaultValue="personal" className="w-full">
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
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </CardTitle>
                          <p className="text-blue-600 font-medium">
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
                                <ArrowRight className="h-4 w-4 text-blue-500" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 bg-gradient-to-br from-blue-50 to-green-50">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Eligibility Criteria
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.eligibility.map((criteria, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-blue-500" />
                            <span className="text-gray-700">{criteria}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">Apply Now</h3>
                    <p className="mb-6 text-sm">
                      Get instant loan approval with minimal documentation
                    </p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full mb-4">
                      Apply for Loan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex items-center space-x-2 text-sm">
                      <Percent className="h-4 w-4" />
                      <span>Use our EMI calculator</span>
                    </div>
                  </div>
                  
                  <Card className="border-0">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                        Loan Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">1</div>
                          <div>
                            <p className="font-medium text-gray-900">Apply Online</p>
                            <p className="text-sm text-gray-600">Fill the loan application form</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">2</div>
                          <div>
                            <p className="font-medium text-gray-900">Upload Documents</p>
                            <p className="text-sm text-gray-600">Submit required documents digitally</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">3</div>
                          <div>
                            <p className="font-medium text-gray-900">Get Approved</p>
                            <p className="text-sm text-gray-600">Receive loan approval instantly</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">4</div>
                          <div>
                            <p className="font-medium text-gray-900">Funds Transfer</p>
                            <p className="text-sm text-gray-600">Money credited to your account</p>
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
