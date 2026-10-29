import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-fintech.jpg";
import { CIN, Reveal } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fintonics — Courses Offered in Finance & Technology" },
      { name: "description", content: "CA, CS, ACCA, CIMA, Fintech, Business Analytics, US CMA, AI & ML and CPA courses at Fintonics, Bangalore." },
      { property: "og:title", content: "Fintonics — Courses Offered" },
      { property: "og:description", content: "Upskill or break into the fintech space with Fintonics courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Z = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/AVLJzj22NyF7JK9Y/";

type Course = { code: string; name?: string; img: string; to?: "/about" | "/aboutfintech" | "/landingpage-copy1" | "/acca" | "/cs" | "/ai-and-ml" };
const courses: Course[] = [
  { code: "CA", name: "Chartered Accountant", img: "institute-of-chartered-accountants-logo-vector.svg-ALpJnX5P3Mh07bOl.png", to: "/about" },
  { code: "CS", name: "Company Secretary", img: "my-first-design-15-mnl3v1DKXLhqqVLR.png", to: "/cs" },
  { code: "ACCA", img: "my-first-design-9-1-mP4pnXVz5RfVX64E.png", to: "/acca" },
  { code: "CIMA", img: "cima-A1aKw1oNM2FGz28Q.png" },
  { code: "Fintech", img: "my-first-design-11-dOqbylrgJpiL1G00.png", to: "/aboutfintech" },
  { code: "Business Analytics", img: "ba1-m6LvwPlvVzCkDZ99.png" },
  { code: "US CMA", img: "us-cma-dOqbylarwMfR77ej.jpg", to: "/aboutfintech" },
  { code: "AI & ML", img: "al-ml-AR0Jy2Ngpbupnrke.png", to: "/ai-and-ml" },
  { code: "CPA", img: "cpa1-d95pKD3ZJLsrP8vB.jpg", to: "/landingpage-copy1" },
];

function CourseCard({ c }: { c: Course }) {
  const body = (
    <>
      <div className="aspect-[16/9] overflow-hidden bg-soft">
        <img src={Z + c.img} alt={`${c.code} course`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-navy">{c.code}</h3>
          {c.name && <p className="text-sm text-muted-foreground">{c.name}</p>}
        </div>
        {c.to && (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-royal transition-colors group-hover:bg-brand group-hover:text-primary-foreground">→</span>
        )}
      </div>
    </>
  );
  const cls = "group card-lift block h-full overflow-hidden rounded-2xl border bg-card shadow-card";
  return c.to ? <Link to={c.to} className={cls}>{body}</Link> : <div className={cls}>{body}</div>;
}

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <Reveal>
            <p className="inline-flex rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-royal">CIN : {CIN}</p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              Empowering future in <span className="text-brand">finance and technology</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Whether you're a seasoned finance professional looking to upskill or a newcomer eager to break into the fintech space, Fintonics has the resources you need to succeed. Join us on this exciting journey and take your career to new heights!
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#courses" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">Courses Offered</a>
              <a href="#contact" className="rounded-full border-2 border-primary/20 px-7 py-3.5 font-semibold text-royal transition-colors hover:border-primary hover:bg-accent">Connect</a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand opacity-20 blur-3xl" />
              <img src={hero} alt="Fintech analytics visual" width={1280} height={1024} className="float-slow relative rounded-[2rem] border-4 border-background shadow-glow" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="courses" className="bg-soft-gradient">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Fintonics</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Courses Offered</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.code} delay={(i % 3) * 90}>
                <CourseCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand p-10 text-primary-foreground md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Fintonics Services Private Limited</h2>
                <p className="mt-3 opacity-90"># 20, Near GKW Layout, Shambavi Nagar, Bangalore North, Karnataka, PIN- 560058</p>
              </div>
              <a href="tel:+919035651622" className="rounded-full bg-background px-7 py-3.5 text-center font-bold text-royal transition-transform hover:-translate-y-0.5">+91 9035651622</a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
