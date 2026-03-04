// Base URL for canonical links
const BASE_URL = "https://www.bartonheyman.com";

// Default organization structured data
const ORGANIZATION_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Barton Heyman",
  "description": "Premier Advisory for Sustainable Finance & Energy Transition",
  "url": BASE_URL,
  "serviceArea": ["EMEA", "UK", "US", "Africa"],
  "serviceType": "Financial Advisory",
  "offers": {
    "@type": "Service",
    "name": "Strategic Advisory",
    "description": "Transaction structuring for renewable energy and climate finance"
  },
  "founder": {
    "@type": "Person",
    "name": "Barton Heyman"
  },
  "foundingDate": "2011",
  "logo": `${BASE_URL}/logo.png`,
  "sameAs": [
    "https://facebook.com/bartonheyman",
    "https://linkedin.com/company/bartonheyman",
    "https://twitter.com/bartonheyman",
    "https://youtube.com/bartonheyman"
  ]
};

// Page-specific SEO configurations
export const SEO_CONFIG = {
  HOME: {
    title: "Barton Heyman | Premier Advisory for Sustainable Finance & Energy Transition",
    description: "Barton Heyman delivers expert transaction structuring and advisory services in renewable energy, climate finance, carbon markets, and capital mobilisation across EMEA and UK markets.",
    ogTitle: "Strategic Advisory Driving Africa's Sustainable Energy Future",
    canonicalUrl: BASE_URL,
    structuredData: {
      ...ORGANIZATION_STRUCTURED_DATA,
      "@type": "WebPage",
      "name": "Home Page",
      "breadcrumb": "Home"
    }
  },
  ABOUT: {
    title: "About Barton Heyman | Africa's Leading Sustainable Finance Advisory Firm",
    description: "With over 50 years of combined expertise of our partners, Barton Heyman's team structures transformative deals in green finance, carbon markets, and energy transition across Africa and beyond.",
    canonicalUrl: `${BASE_URL}/about`,
    structuredData: {
      ...ORGANIZATION_STRUCTURED_DATA,
      "@type": "AboutPage",
      "name": "About Us"
    }
  },
  POWER_RENEWABLES: {
    title: "Power & Renewables Advisory | Green Bond Structuring & Carbon Markets Expertise",
    description: "Barton Heyman's market-leading power & renewables practice structures bankable transactions in renewable energy, carbon credits, and climate finance across Africa's emerging markets.",
    canonicalUrl: `${BASE_URL}/power`
  },
  CAPITAL_MARKETS: {
    title: "Capital Markets Advisory | Green Bond Structuring & Sustainable Exchange Development",
    description: "Barton Heyman designs next-generation capital market infrastructure, ESG frameworks, and green bond platforms that drive sustainable finance across African markets.",
    canonicalUrl: `${BASE_URL}/capital`
  },
  TECHNOLOGY: {
    title: "Financial Technology Advisory | ESG Data Integration & Market Infrastructure Systems",
    description: "Barton Heyman implements transformative technology solutions for capital markets, climate finance tracking, and ESG data integration across Africa's financial ecosystem.",
    canonicalUrl: `${BASE_URL}/technology`
  },
  INSIGHTS: {
    title: "Financial Insights | Climate Finance, Carbon Markets & ESG Investment Analysis",
    description: "Access expert analysis, market reports, and thought leadership on sustainable finance, carbon markets, green bonds, and Africa's energy transition landscape.",
    canonicalUrl: `${BASE_URL}/insights`
  },
  CONTACT: {
    title: "Contact Barton Heyman | Speak with Our Transaction Advisory Experts",
    description: "Connect with Barton Heyman's expert team for transaction structuring, climate finance solutions, and capital markets advisory services.",
    canonicalUrl: `${BASE_URL}/contact`
  },
  CAREERS: {
    title: "Careers at Barton Heyman | Join Africa's Premier Transaction Advisory Firm",
    description: "Explore career opportunities in sustainable finance, transaction structuring, and advisory services with the continent's leading financial innovation firm.",
    canonicalUrl: `${BASE_URL}/career`
  }
};