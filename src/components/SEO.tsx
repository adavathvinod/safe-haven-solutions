import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, LOCATION, PHONE_1 } from "@/lib/constants";
import { SITE_URL } from "@/lib/seoConfig";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  type = "website",
  image = "/og-image.png",
  author = BUSINESS_NAME,
  publishedTime,
  modifiedTime,
  locale = "en_IN",
  noindex = false,
}: SEOProps) => {
  const fullTitle = `${title} | ${BUSINESS_NAME} | Hyderabad`;
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={fullCanonical} />}
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />

      {/* Language & Locale */}
      <meta property="og:locale" content={locale} />
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={BUSINESS_NAME} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <link rel="alternate" hrefLang="en-in" href={fullCanonical} />
      <link rel="alternate" hrefLang="te-in" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEO;
