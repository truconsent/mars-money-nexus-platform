
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using mars.money services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-600 mb-4">
                mars.money is a neo-banking platform that provides access to various financial 
                services through partnerships with regulated banks including Federal Bank and 
                Catholic Syrian Bank. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Savings and salary accounts</li>
                <li>Digital payment solutions</li>
                <li>Investment products (mutual funds, gold)</li>
                <li>Loan and credit facilities</li>
                <li>Account aggregation services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
              <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any unlawful purposes</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Services Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                All banking services are provided by our partner banks and are subject to their 
                terms and conditions. Investment products are subject to market risks, and past 
                performance does not guarantee future returns. Please read all scheme-related 
                documents carefully before investing.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                mars.money shall not be liable for any direct, indirect, incidental, special, 
                or consequential damages resulting from the use or inability to use our services, 
                except as required by law.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modification of Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Users will be notified 
                of significant changes, and continued use of the service constitutes acceptance 
                of the modified terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
                of courts in Bangalore, India.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: legal@mars.money<br />
                Phone: 1800-123-4567<br />
                Address: mars.money, Bangalore, India
              </p>
            </section>
            
            <section>
              <p className="text-sm text-gray-500">
                Last updated: December 2024. These terms are effective as of the date of your 
                first use of the service and remain in effect until terminated.
              </p>
            </section>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
