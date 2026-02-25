import { servicePages } from "./serviceData";
import { SERVICE_AREAS } from "./seoConfig";

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const SITE_URL = "https://gdr-enterprises.com";
const TODAY = new Date().toISOString().split("T")[0];

export const generateSitemap = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [
    {
      loc: `${SITE_URL}/`,
      lastmod: TODAY,
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: `${SITE_URL}/about`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/services`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${SITE_URL}/gallery`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      loc: `${SITE_URL}/contact`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: 0.8,
    },
  ];

  // Add service pages
  servicePages.forEach((service) => {
    urls.push({
      loc: `${SITE_URL}/service/${service.slug}`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: 0.9,
    });
  });

  // Add location pages
  SERVICE_AREAS.forEach((area) => {
    urls.push({
      loc: `${SITE_URL}/location/${area.name.toLowerCase()}`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: 0.8,
    });
  });

  return urls;
};

export const generateSitemapXML = (): string => {
  const urls = generateSitemap();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach((url) => {
    xml += "  <url>\n";
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += "  </url>\n";
  });
  
  xml += "</urlset>";
  
  return xml;
};

// Image sitemap for SEO
export const generateImageSitemap = (): string => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  xml += "  <url>\n";
  xml += `    <loc>${SITE_URL}/</loc>\n`;
  xml += '    <image:image>\n';
  xml += `      <image:loc>${SITE_URL}/og-image.png</image:loc>\n`;
  xml += '      <image:caption>GDR Enterprises Safety Nets & Bird Nets Hyderabad</image:caption>\n';
  xml += '      <image:title>Premium Safety Nets Installation Service</image:title>\n';
  xml += '    </image:image>\n';
  xml += "  </url>\n";
  
  xml += "</urlset>";
  
  return xml;
};
