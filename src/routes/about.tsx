import { createFileRoute } from "@tanstack/react-router";
import { Block, Card, List, PageHero, type Item } from "@/components/site";
import { courseImages } from "@/lib/course-images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "CA Foundation Course — Fintonics" },
      { name: "description", content: "Embark on your journey to become a Chartered Accountant with the CA Foundation course at Fintonics." },
      { property: "og:title", content: "CA Foundation Course — Fintonics" },
      { property: "og:description", content: "Course structure, eligibility, registration and study support for CA Foundation." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const why: Item[] = [
  { t: "Strong Foundation:", b: "Builds a strong base in accounting and business concepts." },
  { t: "Career Opportunities:", b: "Opens doors to various career paths in finance, accounting, and business." },
  { t: "Professional Growth:", b: "Offers a pathway to become a Chartered Accountant, a respected and high-demand profession." },
  { t: "Global Recognition:", b: "The CA qualification is recognized internationally, providing global career opportunities." },
];

const papers: { t: string; c: Item[] }[] = [
  { t: "Paper 1: Principles and Practice of Accounting", c: ["Basic accounting concepts", "Preparation of financial statements", "Accounting for special transactions"] },
  {
    t: "Paper 2: Business Laws and Business Correspondence and Reporting",
    c: [
      { t: "Section A: Business Laws", c: ["The Indian Contract Act, 1872", "The Sale of Goods Act, 1930", "The Indian Partnership Act, 1932", "The Companies Act, 2013 (with relevant sections)"] },
      { t: "Section B: Business Correspondence and Reporting", c: ["Comprehension passages", "Note making", "Developing writing skills"] },
    ],
  },
  {
    t: "Paper 3: Business Mathematics and Logical Reasoning & Statistics",
    c: [
      { t: "Section A: Business Mathematics and Logical Reasoning", c: ["Ratios and proportions, indices, logarithms", "Equations and matrices", "Permutations and combinations", "Logical reasoning"] },
      { t: "Section B: Statistics", c: ["Statistical description of data", "Measures of central tendency and dispersion", "Probability"] },
    ],
  },
  {
    t: "Paper 4: Business Economics and Business and Commercial Knowledge",
    c: [
      { t: "Section A: Business Economics", c: ["Introduction to Business Economics", "Theory of demand and supply", "Theory of production and cost", "Business cycles"] },
      { t: "Section B: Business and Commercial Knowledge", c: ["Business environment", "Business organizations", "Government policies for business growth"] },
    ],
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Embark on Your Journey to Become a Chartered Accountant"
        title={<>About <span className="text-brand">CA Foundation</span></>}
        image={courseImages.ca}
      >
        <p>
          The CA Foundation Course is the entry-level examination for the Chartered Accountancy program in India, conducted by the Institute of Chartered Accountants of India (ICAI). This course is designed to build a strong foundation in accounting, business laws, economics, and quantitative aptitude, preparing students for a successful career in the field of accounting and finance.
        </p>
      </PageHero>

      <Block title="Why Choose CA Foundation?">
        <div className="grid gap-4 sm:grid-cols-2">
          {why.map((w, i) => (
            <Card key={i} className="card-lift"><List items={[w]} /></Card>
          ))}
        </div>
      </Block>

      <Block title="Course Structure" soft>
        <div className="grid gap-5 md:grid-cols-2">
          {papers.map((p, i) => (
            <Card key={p.t} className="card-lift">
              <span className="text-sm font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-1 text-lg font-bold text-navy">{p.t}</h3>
              <div className="mt-4"><List items={p.c} depth={1} /></div>
            </Card>
          ))}
        </div>
      </Block>

      <Block title="Eligibility Criteria">
        <List items={["Completed 10+2 examination from a recognized board.", "Registered with ICAI for the CA Foundation course."]} />
      </Block>

      <Block title="Registration and Examination" soft>
        <List
          items={[
            { t: "Registration:", b: "Candidates must register with ICAI for the CA Foundation Course. Registration is open throughout the year but must be completed at least four months prior to the examination." },
            { t: "Examination:", b: "The CA Foundation exams are conducted twice a year, in May and November. The exams are a mix of objective and subjective questions, conducted offline." },
          ]}
        />
      </Block>

      <Block title="Study Material and Support">
        <List items={["Comprehensive study material provided by ICAI.", "Regular updates and notifications on the ICAI website.", "Access to online lectures and practice tests.", "Support from experienced faculty and mentors."]} />
        <div className="mt-10 rounded-3xl bg-brand p-8 text-primary-foreground shadow-glow">
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Batch Starts</p>
          <p className="mt-2 text-2xl font-bold">Online CA Foundation Batch Start</p>
        </div>
      </Block>
    </>
  );
}
