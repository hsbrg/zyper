
export interface NavigationItem {
  label: string;
  href: string;
}

export interface GMBMetrics {
  actionType: string;
  averageMonthlyPerformance: string;
  impactOnConversion: string;
}

export interface BudgetProjection {
  dealershipType: string;
  monthlyBudget: string;
  avgRevenuePerSale: number;
  expectedResults: {
    impressions: string;
    clicks: string;
    leads: string;
    roi: string;
  };
}

export interface AdBudgetDistribution {
  channel: string;
  percentageOfBudget: string;
  bestFor: string;
}

export interface KeywordExample {
  primaryKeywords: string[];
  contentTopics: string[];
  seasonalFocus: string[];
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

export interface AutoDealershipMarketingGuidePageProps {
  navigationItems: NavigationItem[];
  gmbMetrics: GMBMetrics[];
  budgetProjections: BudgetProjection[];
  adBudgetDistribution: AdBudgetDistribution[];
  keywordExamples: KeywordExample[];
  marketingStrategies: MarketingStrategy[];
  complianceItems: ComplianceItem[];
  socialLinks: SocialLink[];
}

