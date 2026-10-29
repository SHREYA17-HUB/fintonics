import { createFileRoute } from "@tanstack/react-router";
import { DocumentCourse } from "@/components/document-course";
import course from "@/data/cs.json";

export const Route = createFileRoute("/cs")({
  head: () => ({ meta: [
    { title: "CS India Company Secretary Course — Fintonics" },
    { name: "description", content: "Explore the Company Secretary course, CSEET, Executive and Professional programmes, eligibility and corporate careers at Fintonics." },
    { property: "og:title", content: "CS India Company Secretary Course — Fintonics" },
    { property: "og:description", content: "Build your career in corporate law, governance and compliance with the CS course." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <DocumentCourse course={course} />,
});