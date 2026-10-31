import { Block, Reveal } from "@/components/site";
import { Fragment } from "react";
import { CourseCover } from "@/components/course-cover";
import { CourseGallery } from "@/components/course-gallery";
import { CourseHighlights } from "@/components/course-highlights";
import type { CourseKey } from "@/lib/course-images";

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

export function DocumentCourse({ course, image, gallery }: { course: CourseDocument; image: string; gallery?: CourseKey }) {
  return (
    <>
      <CourseCover title={course.title} subtitle={course.subtitle} image={image} />
      <section className="border-b bg-soft">
        <div className="mx-auto max-w-5xl px-5 py-10 md:py-12">
          <Reveal>
            <Content paragraphs={course.intro} />
          </Reveal>
        </div>
      </section>
      {gallery && <CourseHighlights course={gallery} />}
      {course.sections.map((section, index) => (
        <Fragment key={section.title}>
        <Block title={section.title} soft={index % 2 === 1}>
          <Content paragraphs={section.content} />
        </Block>
        {gallery && [0, Math.floor(course.sections.length / 3), Math.floor(course.sections.length * 2 / 3)].map((position, imageIndex) =>
          position === index ? <CourseGallery key={imageIndex} course={gallery} label={course.title} index={imageIndex} /> : null
        )}
        </Fragment>
      ))}
    </>
  );
}