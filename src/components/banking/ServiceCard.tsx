
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    icon: LucideIcon;
    title: string;
    partner: string;
    description: string;
    benefits: string[];
    features: string[];
  };
  index: number;
  onApplyClick: (serviceId: string) => void;
}

export const ServiceCard = ({ service, index, onApplyClick }: ServiceCardProps) => {
  return (
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
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 w-full"
            onClick={() => onApplyClick(service.id)}
          >
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
  );
};
