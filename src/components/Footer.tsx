
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/eb39d5b7-edd4-4395-a6cf-ad518b7a01ce.png" 
              alt="mars.money" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              mars.money is a next-generation neo-banking platform partnering with leading Indian banks 
              to provide comprehensive financial services.
            </p>
            <div className="text-sm text-gray-500">
              <p>Regulated by RBI | Secured by 256-bit SSL</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Savings Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salary Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UPI Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investments</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 mars.money. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Partner banks: Federal Bank, Catholic Syrian Bank
          </p>
        </div>
      </div>
    </footer>
  );
};
