
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                apply for financial products, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personal identification information (name, email, phone number, address)</li>
                <li>Financial information (income, employment details, bank account information)</li>
                <li>Documents for KYC verification (Aadhaar, PAN, passport, etc.)</li>
                <li>Transaction history and account activity</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and maintain our financial services</li>
                <li>Process transactions and send related information</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and develop new features</li>
                <li>Communicate with you about your account and our services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with our banking partners (Federal Bank, Catholic Syrian Bank) 
                to provide services to you. We do not sell, trade, or otherwise transfer your personal 
                information to third parties except as described in this policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your personal information, 
                including encryption, secure servers, and regular security audits. However, no method 
                of transmission over the internet is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: privacy@mars.money<br />
                Phone: 1800-123-4567<br />
                Address: mars.money, Bangalore, India
              </p>
            </section>
            
            <section>
              <p className="text-sm text-gray-500">
                Last updated: December 2024. We may update this Privacy Policy from time to time. 
                We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;
