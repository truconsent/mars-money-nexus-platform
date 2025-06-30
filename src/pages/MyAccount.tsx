
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { User, Calendar, Clock } from "lucide-react";
import { Navigate } from "react-router-dom";

const MyAccount = () => {
  const { user, profile } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Account
          </h1>
          <p className="text-lg text-gray-600">
            Manage your profile and track your applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <User className="h-6 w-6 text-purple-600" />
                <CardTitle>Profile</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="text-lg">{profile?.name || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Member Since</p>
                  <p className="text-lg">
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Applications Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
              <CardDescription>
                Track the status of your financial service applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No applications found</p>
                <Button asChild>
                  <a href="/banking">Start New Application</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyAccount;
