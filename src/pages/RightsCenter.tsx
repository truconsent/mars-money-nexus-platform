
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import "@trueconsent/consent-banner-react/RightCenter.css"
import {RightCenter} from "@trueconsent/consent-banner-react"



const RightsCenter = () => {
  const { user } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const iframeUrl = `https://iwjwpfuaygfojwrrstly.supabase.co/functions/v1/embed-rights-center?client_id=MARS_MONEY_CLIENT_001&data_principal_id=${user.id}`;

  return (
    <div className="">
      <Navigation />
      
      {/* <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <iframe 
          src={iframeUrl}
          width="100%" 
          height="100%"
          className="w-full h-full border-0 rounded-lg shadow-lg"
          title="Rights Center"
        />
      </div> */}
      <RightCenter userId={user.id.slice(0,6)}/>

      <Footer />
    </div>
  );
};

export default RightsCenter;
