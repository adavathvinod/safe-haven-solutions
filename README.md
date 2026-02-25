# GDR Enterprises - Safety Nets Installation Website

Professional safety nets installation service provider in Hyderabad, Vijayawada, and Visakhapatnam.

## 📋 Project Overview

**GDR Enterprises** is a comprehensive, enterprise-level web application for a safety nets installation business. The site provides:

- Service listings and details (7 core services)
- Professional portfolio gallery
- Contact/enquiry forms
- SEO optimized pages
- Analytics and tracking integration
- Mobile-responsive design

## 🛠 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Build Tool**: Vite
- **SEO**: React Helmet Async, Schema.org markups
- **Routing**: React Router v6
- **Analytics**: Google Tag Manager, Google Analytics 4

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm installed

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd safe-haven-solutions

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `localhost:8080`

### Build for Production

```sh
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Main navigation header
│   ├── Footer.tsx              # Footer with service links
│   ├── SEO.tsx                 # Meta tags & SEO
│   ├── AnalyticsTracker.tsx   # GTM & GA4 integration
│   ├── ServicesSection.tsx    # Service cards display
│   ├── schemas/               # Schema.org markups (9 types)
│   └── ui/                    # shadcn-ui components
├── pages/
│   ├── Index.tsx              # Homepage
│   ├── Services.tsx           # Services listing
│   ├── ServiceDetail.tsx      # Individual service pages (7 services)
│   ├── Gallery.tsx            # Project portfolio
│   ├── About.tsx              # Company information
│   ├── Contact.tsx            # Contact & enquiry form
│   └── NotFound.tsx           # 404 page
├── lib/
│   ├── constants.ts           # Business info (phone, address, etc)
│   ├── seoConfig.ts           # SEO keywords & location data
│   ├── serviceData.ts         # Service metadata
│   ├── sitemapGenerator.ts   # XML sitemap generation
│   └── utils.ts               # Utility functions
└── assets/                    # Images and media
```

## 🎯 Core Services

1. **Balcony Safety Nets** - Child & pet protection
2. **Building Safety Nets** - Multi-storey construction safety
3. **Bird & Pigeon Protection Nets** - Humane bird control
4. **Child Safety Nets** - Maximum child protection
5. **Sports Safety Nets** - Professional sports facilities
6. **Construction Safety Nets** - Industrial worker protection
7. **Window Protection Nets** - Bird prevention & child safety

## 📱 SEO Implementation

- ✅ 9 Schema.org markup types
- ✅ Dynamic XML sitemaps (16 URLs + image sitemap)
- ✅ Optimized page titles & meta descriptions
- ✅ Geo-tags for Hyderabad, Vijayawada, Visakhapatnam
- ✅ Open Graph & Twitter Card tags
- ✅ Mobile-first responsive design
- ✅ FAQ schema for rich snippets

See `ON_PAGE_SEO_GUIDE.md` for detailed SEO specifications.

## 🔧 Configuration

### Analytics Setup (Required)

Update the following placeholder IDs with actual values:

**Google Tag Manager**
- File: `src/components/AnalyticsTracker.tsx`
- Replace: `GTM-XXXXXXXX` with your GTM Container ID
- File: `index.html`
- Replace: `GTM-XXXXXXXX` in GTM script tag

**Google Analytics 4**
- File: `src/components/AnalyticsTracker.tsx`
- Replace: `G-XXXXXXXX` with your GA4 Property ID
- File: `index.html`
- Replace: `G-XXXXXXXX` in GA script tag

### Business Information

Edit `src/lib/constants.ts`:
```typescript
export const PHONE_1 = "9100579116";
export const PHONE_2 = "8317579116";
export const BUSINESS_NAME = "GDR Enterprises";
export const LOCATION = "Hyderabad, Telangana";
```

## 📊 File Organization

**Public Assets**:
- `robots.txt` - Search engine crawler directives
- `sitemap.xml` - URL list for search engines
- `sitemap-images.xml` - Image sitemap
- `manifest.json` - PWA configuration

**Documentation**:
- `PRE_LAUNCH_CHECKLIST.md` - Launch preparation
- `ON_PAGE_SEO_GUIDE.md` - Detailed SEO specifications
- `SEO_IMPLEMENTATION_SUMMARY.md` - Technical SEO summary

## 🧪 Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm test         # Run tests (if applicable)
```

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

© 2025 GDR Enterprises Safety Nets. All Rights Reserved.

## 📞 Contact

**GDR Enterprises**
- Phone: +91 9100579116
- Email: gdrenterprisesasafetynets@gmail.com
- Service Areas: Hyderabad, Vijayawada, Visakhapatnam

---

**Last Updated**: February 2025
