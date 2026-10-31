import { createFileRoute } from "@tanstack/react-router";
import { CourseGallery } from "@/components/course-gallery";
import { CourseHighlights } from "@/components/course-highlights";
import { Block, Card, List, PageHero } from "@/components/site";
import { courseImages } from "@/lib/course-images";

export const Route = createFileRoute("/landingpage-copy1")({
  head: () => ({
    meta: [
      { title: "US CMA Course – Certified Management Accountant | Fintonics" },
      { name: "description", content: "Build your career in global accounting, finance and strategic management with the US CMA course at Fintonics." },
      { property: "og:title", content: "US CMA Course – Fintonics" },
      { property: "og:description", content: "US CMA structure, eligibility, exam pattern and career opportunities." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cma,
});

function Cma() {
  return (
    <>
      <PageHero eyebrow="US CMA Course" title={<>US CMA Course – <span className="text-brand">Certified Management Accountant</span></>} image={courseImages.cma}>
        <h2 className="text-xl font-semibold text-navy">Build Your Career in Global Accounting, Finance and Strategic Management</h2>
        <p>
          The <strong className="text-navy">US CMA (Certified Management Accountant)</strong> is a globally recognised professional certification offered by the <strong className="text-navy">Institute of Management Accountants (IMA), USA</strong>. It is designed for students and working professionals who want to develop expertise in management accounting, financial planning, corporate finance, business analysis and strategic decision-making.
        </p>
        <p>The US CMA equips candidates with the financial and analytical skills required to support business performance, improve profitability, manage costs and make informed management decisions.</p>
        <p>Whether you are a commerce graduate, a finance professional or a student pursuing a degree in accounting or business, the US CMA can help you prepare for a career in the global finance and corporate sector.</p>
      </PageHero>
      <CourseHighlights course="cma" />

      <Block title="Why Choose the US CMA?">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Global Recognition:", "Earn a professional credential recognised internationally in management accounting and corporate finance."],
            ["Industry-Relevant Curriculum:", "Develop practical knowledge in financial planning, budgeting, cost management, performance analysis and strategic finance."],
            ["Two-Part Examination:", "Complete the certification examinations through two comprehensive exam parts."],
            ["Career Advancement:", "Prepare for opportunities in corporate finance, financial planning and analysis, management accounting and business consulting."],
            ["Strategic Business Skills:", "Learn to analyse financial information, evaluate business performance and support management decisions."],
            ["Flexible Preparation:", "Prepare for the two examination parts in either order while balancing your academic or professional commitments."],
          ].map(([t = "", b = ""]) => (
            <Card key={t} className="card-lift"><List items={[{ t, b }]} /></Card>
          ))}
        </div>
      </Block>

      <CourseGallery course="cma" label="US CMA" index={0} />
      <Block title="US CMA Course Structure" soft>
        <p className="mb-6 text-muted-foreground">The US CMA certification consists of two examination parts.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="card-lift">
            <h3 className="text-lg font-bold text-navy">Part 1: Financial Planning, Performance and Analytics</h3>
            <p className="mt-2 text-muted-foreground">This part focuses on the financial planning and analytical skills needed to measure and improve organisational performance.</p>
            <p className="mt-4 font-semibold text-navy">Key subjects include:</p>
            <List depth={1} items={["External Financial Reporting Decisions", "Planning, Budgeting and Forecasting", "Performance Management", "Cost Management", "Internal Controls", "Technology and Analytics"]} />
          </Card>
          <Card className="card-lift">
            <h3 className="text-lg font-bold text-navy">Part 2: Strategic Financial Management</h3>
            <p className="mt-2 text-muted-foreground">This part develops the financial and strategic decision-making skills needed in modern organisations.</p>
            <p className="mt-4 font-semibold text-navy">Key subjects include:</p>
            <List depth={1} items={["Financial Statement Analysis", "Corporate Finance", "Business Decision Analysis", "Enterprise Risk Management", "Capital Investment Decisions", "Professional Ethics"]} />
          </Card>
        </div>
      </Block>

      <Block title="US CMA Eligibility">
        <p className="mb-4 text-muted-foreground">The US CMA is suitable for students and professionals interested in accounting, finance and business management.</p>
        <p className="mb-6 text-muted-foreground">To obtain the certification, candidates must meet the following requirements:</p>
        <List
          items={[
            "Hold a bachelor's degree from an accredited college or university, or an accepted professional qualification as specified by IMA.",
            "Pass both parts of the US CMA examination.",
            "Complete two continuous years of relevant professional experience in management accounting or financial management.",
            "Maintain active IMA membership and fulfil the applicable certification requirements.",
          ]}
        />
        <p className="mt-6 text-muted-foreground">Candidates may complete their examinations before fulfilling the education and work experience requirements, subject to IMA rules.</p>
      </Block>

      <CourseGallery course="cma" label="US CMA" index={1} />
      <Block title="Examination Pattern" soft>
        <p className="mb-6 text-muted-foreground">Each examination part is four hours long and includes multiple-choice questions and a case-based question section for English-language exams in India from the September/October 2026 testing window onwards.</p>
        <List
          items={[
            { t: "Part 1:", b: "100 multiple-choice questions and two case-based question sets." },
            { t: "Part 2:", b: "100 multiple-choice questions and two case-based question sets." },
            { t: "Total examination duration:", b: "Four hours per part." },
            { t: "Examination windows:", b: "January–February, May–June and September–October." },
            { t: "Order of examinations:", b: "Candidates may take Part 1 and Part 2 in either order." },
          ]}
        />
        <p className="mt-6 text-muted-foreground">Candidates must pass both examination parts within three years of entering the CMA certification programme.</p>
      </Block>

      <Block title="Course Duration">
        <p className="text-lg leading-relaxed text-muted-foreground">The preparation period depends on the candidate's academic background, study schedule and preparation strategy. Many candidates plan to complete both examination parts within approximately 6–12 months, although individual timelines vary.</p>
      </Block>

      <CourseGallery course="cma" label="US CMA" index={2} />
      <Block title="Career Opportunities After US CMA" soft>
        <p className="mb-6 text-muted-foreground">US CMA-qualified professionals may pursue roles such as:</p>
        <div className="flex flex-wrap gap-3">
          {["Management Accountant", "Financial Analyst", "Financial Planning and Analysis (FP&A) Analyst", "Cost Accountant", "Budget Analyst", "Corporate Finance Analyst", "Finance Manager", "Business Analyst", "Risk and Internal Controls Analyst", "Financial Controller, with relevant experience"].map((r) => (
            <span key={r} className="rounded-full border bg-card px-4 py-2 text-sm font-semibold text-navy shadow-card">{r}</span>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">Potential employers include multinational corporations, consulting firms, financial services organisations, manufacturing companies, technology companies and shared service centres.</p>
      </Block>

      <Block title="Who Should Pursue the US CMA?">
        <p className="mb-6 text-muted-foreground">The programme is suitable for:</p>
        <List items={["B.Com and M.Com students", "BBA and MBA students", "Accounting and finance graduates", "Working professionals in finance and accounting", "Professionals seeking career growth in corporate finance and management accounting"]} />
      </Block>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="rounded-3xl bg-brand p-10 text-primary-foreground shadow-glow md:p-14">
          <h2 className="text-2xl font-bold md:text-3xl">Take the Next Step Towards a Global Finance Career</h2>
          <p className="mt-4 opacity-90">Give your career a competitive edge with the US CMA certification. Develop the financial expertise, analytical capabilities and strategic thinking required to contribute to modern business organisations.</p>
          <p className="mt-4 opacity-90"><strong>Enquire Now</strong> to learn more about course preparation, eligibility, fees, examination registration and available training options.</p>
          <p className="mt-4 opacity-90">Contact our team today to discuss your US CMA learning journey.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+919035651622" className="rounded-full bg-background px-7 py-3.5 font-bold text-royal transition-transform hover:-translate-y-0.5">Enquire Now</a>
            <a href="mailto:info@fintonics.com" className="rounded-full border-2 border-primary-foreground/40 px-7 py-3.5 font-semibold transition-colors hover:bg-primary-foreground/10">info@fintonics.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
