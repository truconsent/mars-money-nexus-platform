
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  FileText, 
  CreditCard, 
  Banknote, 
  TrendingUp,
  Settings,
  ChevronRight
} from "lucide-react";

const Support = () => {
  const faqCategories = [
    {
      icon: CreditCard,
      title: "Account & Banking",
      questions: [
        "How do I open a savings account?",
        "What documents are required for KYC?",
        "How to activate my debit card?",
        "What are the account charges?"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investments",
      questions: [
        "How to start investing in mutual funds?",
        "What is the minimum investment amount?",
        "How to track my investment portfolio?",
        "What are the tax implications?"
      ]
    },
    {
      icon: Banknote,
      title: "Loans & Credit",
      questions: [
        "How to apply for a personal loan?",
        "What is the loan approval process?",
        "How to check my credit score?",
        "What are the interest rates?"
      ]
    },
    {
      icon: Settings,
      title: "Technical Support",
      questions: [
        "How to reset my password?",
        "Why is my app not working?",
        "How to update my profile?",
        "How to enable notifications?"
      ]
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      availability: "Available 9 AM - 9 PM"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      action: "Call Now",
      availability: "24/7 Available"
    },
    {
      icon: FileText,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      action: "Visit Help Center",
      availability: "Always Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to your questions or get in touch with our support team. We're here to help!
            </p>
          </div>
          
          {/* Quick Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {channel.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <p className="text-sm text-purple-600 font-medium mb-4">{channel.availability}</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-16">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h3>
                <p className="text-red-600">
                  For urgent issues like blocked cards, unauthorized transactions, or account security concerns
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Call Emergency: 1800-911-911
              </Button>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqCategories.map((category, index) => (
                <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.questions.map((question, qIndex) => (
                        <div key={qIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                          <span className="text-gray-700">{question}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Status Page */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">System Status</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">All Systems Operational</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="font-medium text-gray-900">Banking Services</p>
                <p className="text-sm text-green-600">Operational</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="font-medium text-gray-900">UPI Payments</p>
                <p className="text-sm text-green-600">Operational</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="font-medium text-gray-900">Investment Platform</p>
                <p className="text-sm text-green-600">Operational</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="font-medium text-gray-900">Mobile App</p>
                <p className="text-sm text-green-600">Operational</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Support;
