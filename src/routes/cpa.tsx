import { createFileRoute } from "@tanstack/react-router";
import { DocumentCourse } from "@/components/document-course";
import course from "@/data/cpa.json";
import { courseImages } from "@/lib/course-images";

export const Route = createFileRoute("/cpa")({
  head: () => ({ meta: [
    { title: "US CPA Certified Public Accountant Course — Fintonics" },
    { name: "description", content: "Explore the US CPA Core and Discipline sections, state-specific eligibility pathways and accounting career opportunities at Fintonics." },
    { property: "og:title", content: "US CPA Course — Fintonics" },
    { property: "og:description", content: "Build a global career in accounting, auditing and finance with the US CPA pathway." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <DocumentCourse course={course} image={courseImages.cpa} gallery="cpa" />,
});