export interface UseCase {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solution: string;
  image?: string;
}

export interface CustomSolution {
  id: string;
  title: string;
  description: string;
  features: string[];
  howItWorks: string[];
  realWorldApplication: string;
  relatedUseCase: string;
  image?: string;
}

export const useCases: UseCase[] = [
  {
    id: "market-analysis",
    title: "Market Analysis and Predictive Pricing",
    description: "Real estate professionals need comprehensive market analysis to make informed investment decisions. Traditional methods often rely on limited historical data and manual comparisons, leading to potential missed opportunities and mispriced properties.",
    challenges: [
      "Processing vast amounts of market data across multiple sources",
      "Identifying emerging neighborhood trends before they become obvious",
      "Accurately predicting property value changes based on multiple factors",
      "Determining optimal pricing strategies in volatile markets"
    ],
    solution: "An AI system that continuously analyzes market data, property characteristics, economic indicators, and demographic shifts to predict price movements with greater accuracy than traditional methods. The system would identify undervalued properties and emerging neighborhood hotspots before they become widely recognized.",
    image: "/images/luxury-property.jpg"
  },
  {
    id: "investment-property",
    title: "Investment Property Identification",
    description: "Finding investment properties with the highest potential ROI requires analyzing numerous factors simultaneously, a task that becomes increasingly complex at scale.",
    challenges: [
      "Evaluating thousands of properties against multiple investment criteria",
      "Calculating accurate ROI projections accounting for all expenses",
      "Identifying properties with hidden potential not obvious in listing data",
      "Balancing short-term rental income against long-term appreciation"
    ],
    solution: "A comprehensive property screening system that evaluates potential investments against customizable criteria, incorporating both traditional metrics and alternative data sources to identify properties with exceptional investment potential that might be overlooked by conventional analysis."
  },
  {
    id: "neighborhood-trends",
    title: "Neighborhood Trend Analysis",
    description: "Understanding neighborhood dynamics and predicting future development patterns is crucial for long-term investment success.",
    challenges: [
      "Identifying early indicators of neighborhood revitalization",
      "Predicting the impact of planned infrastructure or commercial developments",
      "Understanding demographic shifts and their effect on property values",
      "Quantifying quality-of-life factors that influence desirability"
    ],
    solution: "A predictive neighborhood analysis platform that combines traditional data with alternative sources like social media sentiment, business permit applications, and transportation patterns to identify neighborhoods on the cusp of significant positive change."
  },
  {
    id: "property-marketing",
    title: "Competitive Property Marketing",
    description: "In competitive markets, effective property marketing requires understanding buyer preferences and creating compelling, targeted presentations.",
    challenges: [
      "Identifying the most appealing property features for specific buyer segments",
      "Creating personalized marketing materials at scale",
      "Determining optimal listing timing and pricing strategy",
      "Standing out in saturated listing platforms"
    ],
    solution: "An intelligent marketing platform that analyzes successful sales patterns to identify the most effective presentation strategies for each property type and buyer demographic, automatically generating customized marketing materials and suggesting optimal timing and channels.",
    image: "/images/real-estate-agents.jpg"
  },
  {
    id: "client-matching",
    title: "Client Matching and Preference Analysis",
    description: "Understanding client preferences at a deep level allows agents to show fewer properties while achieving higher satisfaction and conversion rates.",
    challenges: [
      "Extracting true preferences beyond stated requirements",
      "Balancing multiple decision-makers with different priorities",
      "Predicting future needs clients haven't yet recognized",
      "Efficiently matching inventory to complex preference profiles"
    ],
    solution: "A sophisticated client preference analysis system that builds detailed buyer profiles based on both explicit statements and implicit behavioral signals, then matches these profiles against available inventory with a high degree of precision."
  },
  {
    id: "development-site",
    title: "Development Site Identification",
    description: "Developers need to identify optimal sites for new projects, considering numerous factors from zoning to market demand.",
    challenges: [
      "Finding underutilized parcels with development potential",
      "Navigating complex zoning and regulatory environments",
      "Assessing environmental and infrastructure constraints",
      "Projecting demand for specific property types in emerging areas"
    ],
    solution: "A comprehensive site selection platform that combines property records, zoning information, environmental data, and market projections to identify ideal development opportunities, including potential for zoning changes or adaptive reuse."
  },
  {
    id: "portfolio-optimization",
    title: "Portfolio Optimization",
    description: "Real estate investors with multiple properties need to optimize their portfolios for performance, balancing risk, return, and diversification.",
    challenges: [
      "Evaluating performance across diverse property types and locations",
      "Identifying underperforming assets requiring intervention",
      "Optimizing buy/hold/sell decisions across a portfolio",
      "Balancing portfolio for resilience against market fluctuations"
    ],
    solution: "A portfolio intelligence system that continuously monitors performance, market conditions, and macroeconomic factors to recommend optimal portfolio adjustments, identifying both properties to divest and strategic acquisition targets."
  },
  {
    id: "luxury-valuation",
    title: "Luxury Property Valuation",
    description: "Luxury and unique properties present special valuation challenges due to limited comparables and highly specific buyer preferences.",
    challenges: [
      "Finding relevant comparables for unique properties",
      "Quantifying the value of luxury amenities and design features",
      "Understanding the psychology of luxury buyers in different segments",
      "Determining appropriate marketing strategies for exclusive properties"
    ],
    solution: "A specialized valuation system for luxury properties that incorporates both traditional metrics and unique factors like architectural significance, privacy features, and amenity packages to accurately value distinctive properties and identify their ideal buyer profiles.",
    image: "/images/luxury-property.jpg"
  }
];

export const customSolutions: CustomSolution[] = [
  {
    id: "market-pulse-ai",
    title: "MarketPulse AI",
    description: "MarketPulse AI combines traditional MLS data with alternative data sources including social media trends, building permits, school ratings, crime statistics, and transportation developments to create hyper-accurate property valuations and price forecasts.",
    features: [
      "Price sensitivity analysis showing how specific improvements impact property value",
      "Neighborhood gentrification scoring with 5-year projection timelines",
      "Automated alerts for properties priced significantly below algorithmic valuation",
      "Customizable dashboards for different investment strategies (fix-and-flip, long-term hold, etc.)"
    ],
    howItWorks: [
      "The system ingests data from 20+ sources, including proprietary real estate databases",
      "Machine learning algorithms identify correlations between neighborhood features and property values",
      "Predictive models forecast price movements 6-24 months ahead with confidence intervals",
      "Interactive heatmaps visualize emerging value trends across neighborhoods"
    ],
    realWorldApplication: "A real estate investment firm used MarketPulse AI to identify an overlooked neighborhood showing early revitalization signals. By purchasing six properties at an average of $275,000, they realized a 43% appreciation over three years as the area transformed, significantly outperforming market averages.",
    relatedUseCase: "market-analysis"
  },
  {
    id: "opportunity-scout",
    title: "OpportunityScout",
    description: "OpportunityScout continuously evaluates the entire property market against customizable investment criteria, identifying high-potential opportunities that match specific investment strategies.",
    features: [
      "Cash flow modeling with variable occupancy rates and expense projections",
      "Renovation ROI calculator using local contractor cost data",
      "Automated due diligence checklist generation",
      "Competitive analysis showing similar investor activity in target areas"
    ],
    howItWorks: [
      "Investors define their criteria including budget, desired ROI, property characteristics, and risk tolerance",
      "The system analyzes thousands of listings daily, including off-market properties",
      "Machine learning algorithms score each property based on 50+ factors",
      "Properties are ranked by investment potential with detailed analysis reports"
    ],
    realWorldApplication: "A solo investor with limited time to research properties used OpportunityScout to identify a small apartment building with below-market rents and deferred maintenance. The system's renovation ROI calculator accurately predicted that $85,000 in strategic upgrades would increase rental income by 35%, creating significant equity within 18 months.",
    relatedUseCase: "investment-property"
  },
  {
    id: "urbanshift-predictor",
    title: "UrbanShift Predictor",
    description: "UrbanShift Predictor identifies neighborhoods in the early stages of positive transformation by analyzing patterns that historically precede revitalization.",
    features: [
      "Business opening/closing pattern analysis",
      "Building permit volume and type tracking",
      "Demographic shift detection",
      "Public investment monitoring (parks, transit, infrastructure)",
      "Social media sentiment analysis for neighborhood perception"
    ],
    howItWorks: [
      "The system analyzes historical patterns from neighborhoods that have previously gentrified",
      "Current neighborhoods are continuously monitored for similar early indicators",
      "Machine learning models assign transformation probability scores",
      "Interactive timelines project the pace and extent of expected changes"
    ],
    realWorldApplication: "A development company used UrbanShift Predictor to identify an industrial area showing early signs of conversion to mixed-use. They secured three warehouse properties at industrial prices before the area's potential became widely recognized. Within four years, the properties were rezoned and redeveloped into loft apartments and creative office space, tripling the initial investment.",
    relatedUseCase: "neighborhood-trends"
  },
  {
    id: "listing-lens-ai",
    title: "ListingLens AI",
    description: "ListingLens AI analyzes successful sales data to create hyper-targeted marketing strategies for each property, automatically generating customized materials that highlight the most appealing features for likely buyers.",
    features: [
      "Automated photo selection and enhancement based on buyer preferences",
      "Property description optimization using persuasive language patterns",
      "Targeted digital ad campaign generation across multiple platforms",
      "Virtual staging customized to appeal to the most likely buyer profile",
      "Optimal listing time calculator based on market conditions"
    ],
    howItWorks: [
      "The system analyzes historical sales data to identify what features appeal to different buyer segments",
      "Property-specific data is processed to identify its most marketable attributes",
      "AI generates customized marketing materials tailored to target buyer demographics",
      "Performance analytics track engagement and recommend adjustments"
    ],
    realWorldApplication: "A luxury property that had been listed for six months with traditional marketing was relisted using ListingLens AI. The system identified that the property's privacy features and home office potential would appeal to tech executives, rather than the family-focused marketing previously used. The property sold within three weeks at 95% of asking price after the marketing pivot.",
    relatedUseCase: "property-marketing",
    image: "/images/real-estate-agents.jpg"
  },
  {
    id: "buyer-dna",
    title: "BuyerDNA",
    description: "BuyerDNA builds comprehensive client preference profiles that go beyond stated requirements, using behavioral analysis and preference learning to identify properties that perfectly match each client's unique needs.",
    features: [
      "Implicit preference detection based on viewing behavior",
      "Compromise modeling for multiple decision-makers",
      "Future needs prediction based on life stage analysis",
      "Preference evolution tracking as clients view more properties",
      "Automated listing alerts with personalized match explanations"
    ],
    howItWorks: [
      "Initial client interviews establish baseline preferences",
      "The system tracks client reactions to property showings and listings",
      "Machine learning algorithms identify pattern preferences the client may not have articulated",
      "Properties are scored against the evolving preference profile with detailed match explanations"
    ],
    realWorldApplication: "A relocating executive couple with different priorities was struggling to find a suitable home after viewing 20+ properties. BuyerDNA analyzed their feedback patterns and identified an unstated preference for natural light and open sight lines that neither had explicitly mentioned. By focusing on these features, their agent showed them just three additional properties before they purchased, saving weeks of continued searching.",
    relatedUseCase: "client-matching",
    image: "/images/real-estate-agents.jpg"
  },
  {
    id: "sitefinder-pro",
    title: "SiteFinder Pro",
    description: "SiteFinder Pro identifies optimal development sites by analyzing property records, zoning information, market trends, and environmental data to uncover parcels with exceptional development potential.",
    features: [
      "Zoning change probability assessment",
      "Underutilized parcel identification",
      "Environmental risk screening",
      "Infrastructure capacity analysis",
      "Market demand forecasting for different property types",
      "Automated outreach to property owners of high-potential sites"
    ],
    howItWorks: [
      "The system continuously analyzes property and zoning databases across target markets",
      "Machine learning algorithms identify parcels with development potential based on multiple criteria",
      "Sites are scored based on development feasibility, potential returns, and risk factors",
      "Detailed reports provide comprehensive site analysis and development recommendations"
    ],
    realWorldApplication: "A boutique developer used SiteFinder Pro to identify several adjacent parcels with outdated zoning that were prime for assemblage and redevelopment. The system's analysis showed high probability for zoning variance approval based on recent precedents in the area. After successful acquisition and rezoning, the developer created a mixed-use project that achieved returns 40% above their typical projects.",
    relatedUseCase: "development-site"
  },
  {
    id: "portfolio-max",
    title: "PortfolioMax",
    description: "PortfolioMax continuously analyzes real estate investment portfolios to identify optimization opportunities, recommend strategic acquisitions or dispositions, and maximize overall portfolio performance.",
    features: [
      "Underperforming asset identification with improvement recommendations",
      "Optimal hold period calculations for each property",
      "Tax-optimized disposition scheduling",
      "Acquisition recommendations to improve portfolio balance",
      "Scenario modeling for different economic conditions",
      "Automated 1031 exchange opportunity matching"
    ],
    howItWorks: [
      "The system integrates with property management software to track real-time performance metrics",
      "Machine learning algorithms analyze each property's performance against market benchmarks",
      "Portfolio-level analysis identifies diversification opportunities and risk concentrations",
      "Actionable recommendations are generated for portfolio optimization"
    ],
    realWorldApplication: "A family office with 35 properties across three states used PortfolioMax to analyze their holdings. The system identified four properties with below-market returns but high appreciation potential, recommending specific management changes. For three other properties, it recommended disposition based on peak valuation and reinvestment in underrepresented markets. Following these recommendations increased overall portfolio returns by 12% within 18 months.",
    relatedUseCase: "portfolio-optimization"
  },
  {
    id: "elite-valuate",
    title: "EliteValuate",
    description: "EliteValuate provides accurate valuations for unique and luxury properties by analyzing both traditional metrics and specialized factors that influence high-end property values.",
    features: [
      "Architectural significance quantification",
      "Privacy and security feature valuation",
      "International buyer appeal assessment",
      "Amenity package comparative analysis",
      "Provenance and historical significance valuation",
      "Optimal marketing strategy recommendations"
    ],
    howItWorks: [
      "The system analyzes both public and private sales data for luxury properties",
      "Machine learning algorithms quantify the value contribution of unique features and amenities",
      "Buyer demographic analysis identifies likely purchaser profiles and their preferences",
      "Comprehensive valuation reports detail value drivers with supporting evidence"
    ],
    realWorldApplication: "A unique mountainside property with architectural significance was difficult to value using traditional methods due to limited comparables. EliteValuate analyzed successful sales of similarly unique properties nationwide, quantified the premium for the architectural pedigree, and identified the specific buyer demographic most likely to value its distinctive features. The resulting valuation was 28% higher than traditional broker estimates, and the property sold within that range after targeted marketing to the identified buyer segment.",
    relatedUseCase: "luxury-valuation",
    image: "/images/luxury-property.jpg"
  }
];
