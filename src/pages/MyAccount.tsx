
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { CreditCard, Building, TrendingUp, User, Calendar, Clock } from "lucide-react";
import { Navigate } from "react-router-dom";

const MyAccount = () => {
  const { user, profile } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Mock data for user applications - in real app, this would come from database
  const applications = [
    {
      id: "CC001",
      type: "Credit Card",
      status: "Under Review",
      appliedDate: "2024-06-28",
      icon: CreditCard,
      description: "Catholic Syrian Bank Credit Card Application",
      statusColor: "bg-yellow-100 text-yellow-800" as const
    },
    {
      id: "SA001",
      type: "Savings Account",
      status: "Approved",
      appliedDate: "2024-06-25",
      icon: Building,
      description: "Federal Bank Savings Account",
      statusColor: "bg-green-100 text-green-800" as const
    },
    {
      id: "FD001",
      type: "Fixed Deposit",
      status: "Pending Documents",
      appliedDate: "2024-06-20",
      icon: TrendingUp,
      description: "6-Month Fixed Deposit Plan",
      statusColor: "bg-blue-100 text-blue-800" as const
    }
  ];

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
              {applications.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No applications found</p>
                  <Button asChild>
                    <a href="/banking">Start New Application</a>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((application) => {
                    const IconComponent = application.icon;
                    return (
                      <Card key={application.id} className="border-l-4 border-l-purple-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                                <IconComponent className="h-6 w-6 text-purple-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg">{application.type}</h3>
                                <p className="text-gray-600 text-sm mb-2">
                                  {application.description}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Applied: {application.appliedDate}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4" />
                                    <span>ID: {application.id}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge className={application.statusColor}>
                              {application.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyAccount;
