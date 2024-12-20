export interface NavigationItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

export interface GMBMetrics {
  actionType: string;
  averageMonthlyPerformance: string;
  impactOnConversion: string;
}

export interface MarketingStrategy {
  level: string;
  strategies: string[];
}

export interface ComplianceItem {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface PrivateEducationPageProps {
  gmbMetrics: GMBMetrics[];
  marketingStrategies: MarketingStrategy[];
  complianceAndEthics: ComplianceItem[];
}

