
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";
import '@truconsent/consent-notice/MarsConsentModal.css';
import { TruConsentModal } from "@truconsent/consent-notice"

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate to bring cutting-edge financial solutions to the Indian market."
    },
    {
      icon: Award,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and transparency in all our operations."
    },
    {
      icon: Globe,
      title: "Financial Inclusion",
      description: "Making modern banking accessible to every Indian, regardless of their background."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      {/* <TruConsentModal bannerId={"CP006"} onClose={(type)=>{
        console.log("close",type)
       }}/> */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                mars.money
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing banking and financial services for the digital-first generation in India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                mars.money was founded with a simple vision: to make banking and financial services
                accessible, affordable, and intuitive for every Indian. We recognized that traditional
                banking often fell short of meeting the needs of the modern, digital-savvy consumer.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By partnering with leading Indian banks like Federal Bank and Catholic Syrian Bank,
                we've created a comprehensive neo-banking platform that combines the trust and
                security of established banking with the innovation and convenience of modern technology.
              </p>
              <p className="text-lg text-gray-600">
                Today, mars.money serves thousands of customers across India, helping them save,
                invest, and manage their finances with confidence and ease.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">✓</div>
                  <span className="text-gray-600">Partnership with RBI-approved banks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">✓</div>
                  <span className="text-gray-600">Zero-commission investment options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">✓</div>
                  <span className="text-gray-600">Industry-leading security measures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">✓</div>
                  <span className="text-gray-600">24/7 customer support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">✓</div>
                  <span className="text-gray-600">Comprehensive financial solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Banking?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have already made the switch to mars.money
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
