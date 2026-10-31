import type { CourseKey } from "@/lib/course-images";

export type HighlightIcon = "book" | "chart" | "scale" | "shield" | "globe" | "strategy" | "wallet" | "network" | "code" | "dashboard" | "brain" | "report";
type LearningHighlight = { icon: HighlightIcon; title: string; keyword: string; description: string };
type CourseHighlights = { heading: string; description: string; items: LearningHighlight[] };

export const courseHighlights: Record<CourseKey, CourseHighlights> = {
  ca: {
    heading: "Build the foundations. Understand the business.",
    description: "Connect accounting principles, business laws and quantitative thinking at the start of your Chartered Accountancy journey.",
    items: [
      { icon: "book", title: "Make the numbers meaningful", keyword: "Accounting fundamentals", description: "bring financial statements and business transactions into focus." },
      { icon: "scale", title: "Understand the legal framework", keyword: "Business laws", description: "provide context for contracts, partnerships and company operations." },
      { icon: "chart", title: "Think logically, analyse clearly", keyword: "Mathematics, statistics and economics", description: "connect quantitative reasoning with how businesses work." },
    ],
  },
  cs: {
    heading: "Where corporate law meets business leadership.",
    description: "Explore the relationship between legal obligations, responsible governance and the decisions that shape an organisation.",
    items: [
      { icon: "scale", title: "Know the corporate rulebook", keyword: "Company law and securities laws", description: "form the legal foundation for corporate practice." },
      { icon: "shield", title: "Put governance into perspective", keyword: "Corporate governance and compliance", description: "connect regulatory requirements with responsible business conduct." },
      { icon: "strategy", title: "Develop professional judgment", keyword: "Corporate advisory and decision-making", description: "bring legal knowledge into real organisational contexts." },
    ],
  },
  acca: {
    heading: "See beyond the accounts. Build a global perspective.",
    description: "Connect financial knowledge with professional judgment across accounting, assurance and strategic business decisions.",
    items: [
      { icon: "report", title: "Understand the financial picture", keyword: "Financial and management accounting", description: "develop your understanding of reporting and business performance." },
      { icon: "shield", title: "Examine with confidence", keyword: "Audit, taxation and financial management", description: "broaden your perspective on assurance and financial responsibilities." },
      { icon: "globe", title: "Bring strategy and ethics together", keyword: "Strategic leadership and professional ethics", description: "support informed judgment in a global business environment." },
    ],
  },
  cima: {
    heading: "Turn financial insight into business direction.",
    description: "Look beyond historical numbers to understand performance, guide planning and evaluate strategic choices.",
    items: [
      { icon: "chart", title: "Understand what drives performance", keyword: "Management accounting", description: "connects costs, financial information and organisational performance." },
      { icon: "report", title: "Make analysis decision-ready", keyword: "Financial reporting and analysis", description: "help you interpret results in the context of business challenges." },
      { icon: "strategy", title: "Connect operations with strategy", keyword: "Operational, Management and Strategic learning", description: "builds a progressively broader view of business decisions." },
    ],
  },
  fintech: {
    heading: "Explore the technology reshaping finance.",
    description: "Connect everyday digital financial services with the systems and concepts behind payments, banking and blockchain.",
    items: [
      { icon: "wallet", title: "Follow the digital payment journey", keyword: "Mobile wallets and digital payments", description: "show how technology changes the way money moves." },
      { icon: "dashboard", title: "Discover connected banking", keyword: "Online banking and digital lending", description: "bring financial services into accessible digital environments." },
      { icon: "network", title: "Understand decentralised systems", keyword: "Blockchain, smart contracts and cryptocurrency", description: "introduce new ways to record transactions and exchange value." },
    ],
  },
  analytics: {
    heading: "From raw data to a clearer business story.",
    description: "Combine analysis, visualisation and business context to uncover patterns and communicate useful insights.",
    items: [
      { icon: "code", title: "Build your analytical toolkit", keyword: "Excel, SQL and Python", description: "support the preparation, exploration and analysis of business data." },
      { icon: "dashboard", title: "Make insights visible", keyword: "Power BI and Tableau", description: "bring findings together through visualisations and dashboards." },
      { icon: "chart", title: "Connect data with decisions", keyword: "Case studies and practical projects", description: "place analysis in the context of real business questions." },
    ],
  },
  cma: {
    heading: "Measure performance. Think strategically.",
    description: "Connect planning and cost management with the financial decisions that influence organisational performance.",
    items: [
      { icon: "report", title: "Build a forward-looking plan", keyword: "Budgeting and forecasting", description: "translate financial information into plans for the business." },
      { icon: "chart", title: "Understand cost and performance", keyword: "Cost management and performance analysis", description: "help you evaluate how resources support business results." },
      { icon: "strategy", title: "Evaluate the bigger decision", keyword: "Corporate finance, risk and investment analysis", description: "bring a strategic perspective to financial choices." },
    ],
  },
  ai: {
    heading: "From data patterns to intelligent applications.",
    description: "Explore the progression from programming and data analysis to machine learning, deep learning and generative AI.",
    items: [
      { icon: "code", title: "Start with data and code", keyword: "Python and data analysis", description: "provide the building blocks for working with datasets and developing models." },
      { icon: "brain", title: "Understand how models learn", keyword: "Machine learning and deep learning", description: "explore methods for recognising patterns, classifying data and making predictions." },
      { icon: "network", title: "Explore language and generation", keyword: "NLP, generative AI and practical projects", description: "connect intelligent models with real-world applications." },
    ],
  },
  cpa: {
    heading: "Bring precision to reporting and assurance.",
    description: "Develop a connected view of US accounting practice through financial reporting, auditing, taxation and regulation.",
    items: [
      { icon: "report", title: "Read the financial story", keyword: "Financial accounting and reporting", description: "build understanding of financial statements and US accounting standards." },
      { icon: "shield", title: "Examine evidence and controls", keyword: "Auditing and attestation", description: "focus on assurance, audit procedures and the reliability of information." },
      { icon: "scale", title: "Understand tax and regulation", keyword: "Taxation and business regulation", description: "connect accounting responsibilities with the applicable legal framework." },
    ],
  },
};