export interface NavigationItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

export interface GoogleAdsMetrics {
  specialty: string;
  avgCPC: string;
  ctr: string;
  conversionRate: string;
  keywordExamples: string;
  bestAdTypes: string;
}

export interface ExpectedResults {
  impressions: string;
  clicks: string;
  newPatients: string;
  roi: string;
}

export interface BudgetProjection {
  practiceType: string;
  monthlyBudget: string;
  avgRevenuePerPatient: number;
  expectedResults: ExpectedResults;
}

export interface AdBudgetDistribution {
  channel: string;
  percentageOfBudget: string;
  bestFor: string;
}

export interface MarketingStrategy {
  specialty: string;
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

export interface DentalMarketingPageProps {
  googleAdsMetrics: GoogleAdsMetrics[];
  budgetProjections: BudgetProjection[];
  adBudgetDistribution: AdBudgetDistribution[];
  marketingStrategies: MarketingStrategy[];
  complianceAndEthics: ComplianceItem[];
}

