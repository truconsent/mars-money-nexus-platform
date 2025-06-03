
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/eb39d5b7-edd4-4395-a6cf-ad518b7a01ce.png" 
              alt="mars.money" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Banking
              </a>
              <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Investments
              </a>
              <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Loans
              </a>
              <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                UPI
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Register
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Banking
              </a>
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Investments
              </a>
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Loans
              </a>
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                UPI
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="border-purple-200 text-purple-700">
                    Login
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
