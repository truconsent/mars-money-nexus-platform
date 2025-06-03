import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/eb39d5b7-edd4-4395-a6cf-ad518b7a01ce.png" 
              alt="mars.money" 
              className="h-24 w-auto mb-4 filter brightness-0 invert"
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
              <li><Link to="/banking" className="hover:text-white transition-colors">Banking</Link></li>
              <li><Link to="/investments" className="hover:text-white transition-colors">Investments</Link></li>
              <li><Link to="/loans" className="hover:text-white transition-colors">Loans</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
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
