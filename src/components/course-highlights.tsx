import { BookOpen, ChartNoAxesCombined, Scale, ShieldCheck, Globe2, Compass, Wallet, Network, Code2, PanelsTopLeft, BrainCircuit, FileChartColumn } from "lucide-react";
import { Reveal } from "@/components/site";
import { courseHighlights, type HighlightIcon } from "@/data/course-highlights";
import type { CourseKey } from "@/lib/course-images";

const icons = {
  book: BookOpen, chart: ChartNoAxesCombined, scale: Scale, shield: ShieldCheck,
  globe: Globe2, strategy: Compass, wallet: Wallet, network: Network,
  code: Code2, dashboard: PanelsTopLeft, brain: BrainCircuit, report: FileChartColumn,
} satisfies Record<HighlightIcon, typeof BookOpen>;

export function CourseHighlights({ course }: { course: CourseKey }) {
  const content = courseHighlights[course];
  return (
    <section className="course-middle border-y border-border/60 bg-soft-gradient" aria-labelledby={`learning-${course}`} data-course-highlights={course}>
      <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <Reveal>
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            <span aria-hidden="true" className="h-px w-8 bg-primary" /> Learning in focus
          </p>
          <h2 id={`learning-${course}`} className="max-w-3xl text-2xl font-bold leading-snug text-navy md:text-3xl">{content.heading}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{content.description}</p>
        </Reveal>
        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 90} className="h-full">
                <article className="group h-full rounded-lg border border-border bg-card p-6 shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><strong className="font-semibold text-primary">{item.keyword}</strong> {item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}