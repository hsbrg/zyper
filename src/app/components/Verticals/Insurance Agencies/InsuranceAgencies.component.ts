
export interface NavigationItem {
  label: string;
  href: string;
}

export interface GMBMetrics {
  actionType: string;
  averageMonthlyPerformance: string;
  impactOnConversion: string;
}

export interface GoogleAdsMetrics {
  insuranceSpecialty: string;
  avgCPC: string;
  ctr: string;
  conversionRate: string;
  keywordExamples: string;
  bestAdTypes: string;
}

export interface BudgetProjection {
  budgetType: string;
  monthlyBudget: number;
  expectedResults: {
    impressions: string;
    clicks: string;
    newLeads: string;
    roi: string;
  };
}

export interface AdBudgetDistribution {
  channel: string;
  percentageOfBudget: string;
  bestFor: string;
}

export interface InsuranceSpecialty {
  name: string;
  primaryKeywords: string[];
  contentTopics: string[];
  seasonalFocus: string[];
}

export interface PerformanceMetric {
  title: string;
  metrics: string[];
}

export interface OptimizationMetric {
  title: string;
  metrics: {
    [key: string]: string | { [subKey: string]: string };
  };
}

export interface MarketingStrategy {
  title: string;
  strategies: string[];
}

export interface ComplianceItem {
  title: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface InsuranceMarketingGuidePageProps {
  navigationItems: NavigationItem[];
  gmbMetrics: GMBMetrics[];
  googleAdsMetrics: GoogleAdsMetrics[];
  budgetProjections: BudgetProjection[];
  adBudgetDistribution: AdBudgetDistribution[];
  insuranceSpecialties: InsuranceSpecialty[];
  performanceMetrics: PerformanceMetric[];
  optimizationMetrics: OptimizationMetric[];
  marketingStrategies: MarketingStrategy[];
  complianceItems: ComplianceItem[];
  socialLinks: SocialLink[];
}

