// Define types for the comparison table
export interface ComparisonRow {
  challenge: string;
  solution: string;
  impact: string;
}

// Helper function to format large numbers
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

// Helper function to calculate potential savings
export function calculateSavings(currentSpend: number, savingsPercentage: number): number {
  return currentSpend * (savingsPercentage / 100);
}

// Sample data for feature cards
export const featureCards = [
  {
    icon: "LineChart",
    title: "Digital Marketing Intelligence",
    description: "Decode customer behavior with AI-powered insights",
    content: "Advanced audience segmentation and predictive customer journey mapping for unprecedented marketing precision."
  },
  {
    icon: "Target",
    title: "AI-Driven Content Engineering",
    description: "Create smarter, more impactful content",
    content: "Generate SEO-optimized content across multiple formats while ensuring maximum engagement."
  },
  {
    icon: "Users",
    title: "Intelligent Digital Advertising",
    description: "Optimize campaigns with precision",
    content: "Execute smart, cost-effective campaigns with real-time optimization and adaptive bidding."
  }
];

// Sample data for comparison table
export const comparisonData = [
  {
    challenge: "High customer acquisition costs",
    solution: "Predictive bidding reduces waste by focusing on high-conversion audiences",
    impact: "30-50% cost savings"
  },
  {
    challenge: "Inconsistent ad performance",
    solution: "AI adjusts creatives and budgets in real-time",
    impact: "Improved campaign efficiency"
  },
  {
    challenge: "Fragmented multi-channel efforts",
    solution: "AI synchronizes messaging across platforms",
    impact: "Consistent brand identity"
  }
];