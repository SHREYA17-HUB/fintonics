import { createFileRoute } from "@tanstack/react-router";
import { CourseGallery } from "@/components/course-gallery";
import { CourseHighlights } from "@/components/course-highlights";
import hero from "@/assets/course-fintech.jpg";
import { Block, Card, List, PageHero, type Item } from "@/components/site";

export const Route = createFileRoute("/aboutfintech")({
  head: () => ({
    meta: [
      { title: "About Fintech Course — Fintonics" },
      { name: "description", content: "Welcome to the future of financial technology: digital payments, online banking, blockchain and cryptocurrency." },
      { property: "og:title", content: "About Fintech — Fintonics" },
      { property: "og:description", content: "Explore the Fintonics Fintech course structure and eligibility." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Fintech,
});

const why: Item[] = [
  { t: "Cutting-edge Technology :", b: "Leverage the latest advancements in blockchain and cryptocurrency to stay ahead of the curve." },
  { t: "Expertise and Experience :", b: "Our team comprises industry experts with deep knowledge of fintech, blockchain, and digital currencies." },
  { t: "Security and Compliance :", b: "We prioritize the security of your financial transactions and ensure compliance with regulatory standards." },
  { t: "Customer-centric Approach :", b: "Our solutions are designed to meet the unique needs of our clients, providing personalized and efficient financial services." },
];

const core: { t: string; c: Item[] }[] = [
  { t: "Digital Payments", c: ["Mobile wallets", "Peer-to-peer payment systems", "Contactless payment solutions"] },
  { t: "Online Banking", c: ["Internet banking services", "Automated financial planning", "Digital lending platforms"] },
  {
    t: "Blockchain Technology",
    c: [
      { t: "What is Blockchain?", c: ["A decentralized, distributed ledger that records transactions across multiple computers.", "Ensures transparency, security, and immutability."] },
      { t: "Applications of Blockchain", c: ["Secure financial transactions", "Smart contracts", "Supply chain management"] },
    ],
  },
  {
    t: "Cryptocurrency",
    c: [
      { t: "Understanding Cryptocurrency", c: ["Digital or virtual currency that uses cryptography for security.", "Operates independently of a central bank."] },
      { t: "Popular Cryptocurrencies", c: ["Bitcoin (BTC)", "Ethereum (ETH)", "Ripple (XRP)"] },
      { t: "Benefits of Cryptocurrency", c: ["Decentralization", "Lower transaction fees", "Borderless transactions"] },
    ],
  },
];

const crypto: Item[] = [
  { t: "Decentralized Finance (DeFi)", c: ["A financial system built on blockchain technology that operates without traditional banks.", "Provides financial services such as lending, borrowing, and trading directly between participants."] },
  { t: "Investment Opportunities", c: ["Cryptocurrencies offer new avenues for investment, including trading and holding digital assets."] },
  { t: "Cross-border Transactions", c: ["Facilitates quick and cost-effective international money transfers without the need for currency conversion."] },
];

const benefits: Item[] = [
  { t: "Innovation and Growth", c: ["Fintech drives innovation, enabling financial institutions and businesses to grow and adapt to changing market dynamics."] },
  { t: "Customer Empowerment", c: ["Provides customers with more control over their financial activities through user-friendly digital platforms."] },
  { t: "Increased Accessibility", c: ["Expands access to financial services for underbanked and unbanked populations, fostering financial inclusion."] },
];

function Fintech() {
  return (
    <>
      <PageHero eyebrow="Welcome to the Future of Financial Technology" title={<>About <span className="text-brand">Fintech</span></>} image={hero}>
        <p>
          Financial Technology, or Fintech, is revolutionizing the financial services industry by leveraging cutting-edge technology to enhance financial processes and services. Fintech encompasses a range of applications including digital payments, online banking, blockchain, and cryptocurrency, making financial transactions more efficient, secure, and accessible.
        </p>
      </PageHero>
      <CourseHighlights course="fintech" />
      <CourseGallery course="fintech" label="Fintech" index={0} />

      <Block title="Why Choose Our Fintech Solutions?">
        <div className="grid gap-4 sm:grid-cols-2">
          {why.map((w, i) => (
            <Card key={i} className="card-lift"><List items={[w]} /></Card>
          ))}
        </div>
      </Block>

      <CourseGallery course="fintech" label="Fintech" index={1} />
      <Block title="Course Structure" soft>
        <h3 className="mb-5 text-xl font-bold text-navy">Core Components of Fintech</h3>
        <div className="grid gap-5 md:grid-cols-2">
          {core.map((p, i) => (
            <Card key={p.t} className="card-lift">
              <span className="text-sm font-bold text-primary">0{i + 1}</span>
              <h4 className="mt-1 text-lg font-bold text-navy">{p.t}</h4>
              <div className="mt-4"><List items={p.c} depth={1} /></div>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="mb-5 text-xl font-bold text-navy">Cryptocurrency in Fintech</h3>
            <List items={crypto} />
          </Card>
          <Card>
            <h3 className="mb-5 text-xl font-bold text-navy">Benefits of Embracing Fintech</h3>
            <List items={benefits} />
          </Card>
        </div>
      </Block>

      <CourseGallery course="fintech" label="Fintech" index={2} />
      <Block title="Eligibility Criteria">
        <List items={["Completed 10+2 examination from a recognized board."]} />
      </Block>
    </>
  );
}
