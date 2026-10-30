import { createFileRoute } from "@tanstack/react-router";
import { DocumentCourse } from "@/components/document-course";
import course from "@/data/cima.json";
import { courseImages } from "@/lib/course-images";

export const Route = createFileRoute("/cima")({
  head: () => ({ meta: [
    { title: "CIMA UK Management Accounting Course — Fintonics" },
    { name: "description", content: "Explore the CIMA UK CGMA qualification, Operational, Management and Strategic levels, eligibility and finance careers at Fintonics." },
    { property: "og:title", content: "CIMA UK Course — Fintonics" },
    { property: "og:description", content: "Build a global career in management accounting, finance and business strategy." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <DocumentCourse course={course} image={courseImages.cima} gallery="cima" />,
});