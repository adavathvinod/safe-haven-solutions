import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Declare gtag on window object for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      id: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

// Google Tag Manager ID
const GTM_ID = "GTM-XXXXXXXX";

// Google Analytics 4 ID
const GA4_ID = "G-XXXXXXXX";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA4_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Google Tag Manager Script
export const GTMScript = () => (
  <>
    {/* Google Tag Manager */}
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
    {/* End Google Tag Manager */}
  </>
);

// Google Analytics 4 Script
export const GA4Script = () => (
  <>
    {/* Google Analytics 4 */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `,
      }}
    />
    {/* End Google Analytics 4 */}
  </>
);

// Google Tag Manager No-Script (Add after body tag)
export const GTMNoScript = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>
);

export default AnalyticsTracker;
