
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const RightsCenter = () => {
  const { user } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const iframeUrl = `https://iwjwpfuaygfojwrrstly.supabase.co/functions/v1/embed-rights-center?client_id=MARS_MONEY_CLIENT_001&data_principal_id=${user.id}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex flex-col">
      <Navigation />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <iframe 
          src={iframeUrl}
          width="100%" 
          height="100%"
          className="w-full h-full border-0 rounded-lg shadow-lg"
          title="Rights Center"
        />
      </div>

      <Footer />
    </div>
  );
};

export default RightsCenter;
