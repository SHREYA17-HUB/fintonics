import { Block, Reveal } from "@/components/site";

type Run = { text: string; bold: boolean; italic: boolean };
type Paragraph = { kind: string; text: string; runs: Run[] };
type CourseDocument = {
  title: string;
  subtitle: string;
  intro: Paragraph[];
  sections: { title: string; content: Paragraph[] }[];
};

function Text({ runs }: { runs: Run[] }) {
  return runs.map((run, index) => {
    let content = <span>{run.text}</span>;
    if (run.bold) content = <strong className="font-semibold text-navy">{content}</strong>;
    if (run.italic) content = <em>{content}</em>;
    return <span key={index}>{content}</span>;
  });
}

function Content({ paragraphs }: { paragraphs: Paragraph[] }) {
  const groups: Paragraph[][] = [];
  for (const paragraph of paragraphs) {
    const last = groups.at(-1);
    if (paragraph.kind === "list" && last?.[0]?.kind === "list") last.push(paragraph);
    else groups.push([paragraph]);
  }
  return (
    <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
      {groups.map((group, index) => {
        const first = group[0];
        if (!first) return null;
        if (first.kind === "list") return (
          <ul key={index} className="list-disc space-y-2 pl-6 marker:text-primary">
            {group.map((paragraph, itemIndex) => <li key={itemIndex}><Text runs={paragraph.runs} /></li>)}
          </ul>
        );
        if (first.kind === "heading") return <h3 key={index} className="pt-5 text-xl font-bold text-navy"><Text runs={first.runs} /></h3>;
        return <p key={index}><Text runs={first.runs} /></p>;
      })}
    </div>
  );
}

export function DocumentCourse({ course }: { course: CourseDocument }) {
  return (
    <>
      <section className="border-b bg-soft">
        <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
          <Reveal>
            <h1 className="text-3xl font-bold leading-tight text-navy md:text-4xl">{course.title}</h1>
            <h2 className="mt-5 text-xl font-semibold text-primary">{course.subtitle}</h2>
            <div className="mt-7"><Content paragraphs={course.intro} /></div>
          </Reveal>
        </div>
      </section>
      {course.sections.map((section, index) => (
        <Block key={section.title} title={section.title} soft={index % 2 === 1}>
          <Content paragraphs={section.content} />
        </Block>
      ))}
    </>
  );
}