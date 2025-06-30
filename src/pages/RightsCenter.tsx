
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, Eye, FileText, Phone, Mail } from "lucide-react";

const RightsCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rights Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your rights and protections as a mars.money customer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-purple-600" />
                <CardTitle>Data Protection Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Right to know what personal data we collect</li>
                <li>• Right to access your personal information</li>
                <li>• Right to correct inaccurate data</li>
                <li>• Right to delete your personal data</li>
                <li>• Right to data portability</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Scale className="h-6 w-6 text-purple-600" />
                <CardTitle>Financial Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Right to fair and transparent pricing</li>
                <li>• Right to dispute transactions</li>
                <li>• Right to account closure</li>
                <li>• Right to complaint resolution</li>
                <li>• Right to regulatory protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Eye className="h-6 w-6 text-purple-600" />
                <CardTitle>Transparency Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Right to clear terms and conditions</li>
                <li>• Right to understand fees and charges</li>
                <li>• Right to notification of changes</li>
                <li>• Right to accessible information</li>
                <li>• Right to multilingual support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-purple-600" />
                <CardTitle>Service Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Right to quality service</li>
                <li>• Right to timely responses</li>
                <li>• Right to escalation procedures</li>
                <li>• Right to service continuity</li>
                <li>• Right to reasonable accommodation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Exercise Your Rights</CardTitle>
            <CardDescription>
              Contact us through any of the following channels to exercise your rights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Customer Care</p>
                  <p className="text-gray-600">1800-XXX-XXXX (Toll Free)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-gray-600">rights@mars.money</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regulatory Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              mars.money is regulated by the Reserve Bank of India (RBI) and adheres to all applicable 
              financial regulations and consumer protection guidelines.
            </p>
            <p className="text-gray-600">
              For regulatory complaints that cannot be resolved through our internal processes, 
              you may approach the RBI Ombudsman or other relevant regulatory authorities.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default RightsCenter;
