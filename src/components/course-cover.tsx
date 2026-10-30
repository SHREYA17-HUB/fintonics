import type { ReactNode } from "react";

export function CourseCover({ title, subtitle, image }: { title: ReactNode; subtitle: ReactNode; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img src={image} alt="" width={1536} height={864} fetchPriority="high" className="kenburns absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy/75" />
      <div className="mx-auto flex min-h-80 max-w-5xl flex-col justify-center px-5 py-12 md:min-h-96 md:py-16">
        <h1 className="rise-in max-w-4xl text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">{title}</h1>
        <p className="rise-in rise-delay mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-primary-foreground/90 md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}