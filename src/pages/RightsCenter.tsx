
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import "@trueconsent/consent-notice/RightCenter.css"
import { RightCenter } from "@trueconsent/consent-notice"



const RightsCenter = () => {
  const { user } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // const iframeUrl = `https://iwjwpfuaygfojwrrstly.supabase.co/functions/v1/embed-rights-center?client_id=MARS_MONEY_CLIENT_001&data_principal_id=${user.id}`;

  return (
    <div className="">
      <Navigation />
      <RightCenter 
        userId={user.id.slice(0,6)}
        apiKey={import.meta.env.VITE_TRU_CONSENT_API_KEY}
        organizationId={import.meta.env.VITE_TRU_CONSENT_ORGANIZATION_ID}
        />

      <Footer />
    </div>
  );
};

export default RightsCenter;
