import { Reveal } from "@/components/site";
import { courseGalleries, type CourseKey } from "@/lib/course-images";

export function CourseGallery({ course, label }: { course: CourseKey; label: string }) {
  const images = courseGalleries[course];
  return (
    <section className="bg-soft-gradient">
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <Reveal key={src} delay={i * 120} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <figure className="group card-lift relative overflow-hidden rounded-3xl border-4 border-background bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={src} alt={`${label} learning visual ${i + 1}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
