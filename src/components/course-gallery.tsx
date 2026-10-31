import { Reveal } from "@/components/site";
import { courseGalleries, type CourseKey } from "@/lib/course-images";

export function CourseGallery({ course, label, index }: { course: CourseKey; label: string; index: number }) {
  const src = courseGalleries[course][index];
  if (!src) return null;
  return (
    <section className="bg-soft-gradient">
      <div className="mx-auto max-w-5xl px-5 py-8 md:py-10">
        <div className="mx-auto max-w-2xl">
            <Reveal>
              <figure className="group card-lift relative overflow-hidden rounded-3xl border-4 border-background bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={src} alt={`${label} learning visual ${index + 1}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            </Reveal>
        </div>
      </div>
    </section>
  );
}
