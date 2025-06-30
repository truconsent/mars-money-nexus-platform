
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const client_id = url.searchParams.get('client_id');
    const data_principal_id = url.searchParams.get('data_principal_id');

    // Validate required parameters
    if (!client_id || !data_principal_id) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: client_id and data_principal_id' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Generate the rights center HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rights Center - mars.money</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            min-height: 100vh;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #1e293b;
            font-size: 2rem;
            margin-bottom: 8px;
          }
          .header p {
            color: #64748b;
            font-size: 1.1rem;
          }
          .user-info {
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .rights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }
          .rights-card {
            background: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border-left: 4px solid #8b5cf6;
          }
          .rights-card h3 {
            color: #1e293b;
            margin: 0 0 16px 0;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .rights-card ul {
            margin: 0;
            padding-left: 20px;
            color: #4b5563;
          }
          .rights-card li {
            margin-bottom: 8px;
          }
          .contact-section {
            background: white;
            border-radius: 12px;
            padding: 24px;
            margin-top: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 16px;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .icon {
            width: 20px;
            height: 20px;
            color: #8b5cf6;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Rights Center</h1>
            <p>Your rights and protections as a mars.money customer</p>
          </div>

          <div class="user-info">
            <strong>Client ID:</strong> ${client_id} | <strong>User ID:</strong> ${data_principal_id}
          </div>

          <div class="rights-grid">
            <div class="rights-card">
              <h3>🛡️ Data Protection Rights</h3>
              <ul>
                <li>Right to know what personal data we collect</li>
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your personal data</li>
                <li>Right to data portability</li>
              </ul>
            </div>

            <div class="rights-card">
              <h3>⚖️ Financial Rights</h3>
              <ul>
                <li>Right to fair and transparent pricing</li>
                <li>Right to dispute transactions</li>
                <li>Right to account closure</li>
                <li>Right to complaint resolution</li>
                <li>Right to regulatory protection</li>
              </ul>
            </div>

            <div class="rights-card">
              <h3>👁️ Transparency Rights</h3>
              <ul>
                <li>Right to clear terms and conditions</li>
                <li>Right to understand fees and charges</li>
                <li>Right to notification of changes</li>
                <li>Right to accessible information</li>
                <li>Right to multilingual support</li>
              </ul>
            </div>

            <div class="rights-card">
              <h3>📋 Service Rights</h3>
              <ul>
                <li>Right to quality service</li>
                <li>Right to timely responses</li>
                <li>Right to escalation procedures</li>
                <li>Right to service continuity</li>
                <li>Right to reasonable accommodation</li>
              </ul>
            </div>
          </div>

          <div class="contact-section">
            <h3>How to Exercise Your Rights</h3>
            <p>Contact us through any of the following channels to exercise your rights</p>
            <div class="contact-grid">
              <div class="contact-item">
                <span class="icon">📞</span>
                <div>
                  <p><strong>Customer Care</strong></p>
                  <p>1800-XXX-XXXX (Toll Free)</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="icon">✉️</span>
                <div>
                  <p><strong>Email Support</strong></p>
                  <p>rights@mars.money</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-section">
            <h3>Regulatory Information</h3>
            <p>mars.money is regulated by the Reserve Bank of India (RBI) and adheres to all applicable financial regulations and consumer protection guidelines.</p>
            <p>For regulatory complaints that cannot be resolved through our internal processes, you may approach the RBI Ombudsman or other relevant regulatory authorities.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return new Response(htmlContent, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
      },
    });

  } catch (error) {
    console.error('Error in embed-rights-center function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
