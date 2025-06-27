
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user, logout } = useAuth();

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/d3d83a6e-8210-420a-a23b-0c89fc7ee3f4.png" 
                  alt="mars.money" 
                  className="h-24 w-auto"
                />
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/banking" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Banking
                </Link>
                <Link to="/investments" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Investments
                </Link>
                <Link to="/loans" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Loans
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-3">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-purple-50 rounded-lg">
                      <User className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">{user.name}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleLogout}
                      className="border-red-200 text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="border-purple-200 text-purple-700 hover:bg-purple-50"
                      onClick={() => handleAuthClick('login')}
                    >
                      Login
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      onClick={() => handleAuthClick('signup')}
                    >
                      Register
                    </Button>
                  </>
                )}
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
                <Link to="/banking" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                  Banking
                </Link>
                <Link to="/investments" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                  Investments
                </Link>
                <Link to="/loans" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                  Loans
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  {user ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 px-3 py-2 bg-purple-50 rounded-lg">
                        <User className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-700">{user.name}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-red-200 text-red-700 hover:bg-red-50"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Button 
                        variant="outline" 
                        className="border-purple-200 text-purple-700"
                        onClick={() => handleAuthClick('login')}
                      >
                        Login
                      </Button>
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        onClick={() => handleAuthClick('signup')}
                      >
                        Register
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};
