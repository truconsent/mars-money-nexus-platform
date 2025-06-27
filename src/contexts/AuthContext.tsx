
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on mount
    const storedUser = localStorage.getItem('mars_money_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('mars_money_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if user exists in localStorage "database"
    const storedUsers = localStorage.getItem('mars_money_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    const existingUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (existingUser) {
      const userData = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name
      };
      setUser(userData);
      localStorage.setItem('mars_money_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if user already exists
    const storedUsers = localStorage.getItem('mars_money_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    if (users.find((u: any) => u.email === email)) {
      setIsLoading(false);
      return false; // User already exists
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      email,
      password,
      name
    };
    
    users.push(newUser);
    localStorage.setItem('mars_money_users', JSON.stringify(users));
    
    // Set current user
    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name
    };
    setUser(userData);
    localStorage.setItem('mars_money_user', JSON.stringify(userData));
    
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mars_money_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
