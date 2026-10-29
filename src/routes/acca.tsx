import { createFileRoute } from "@tanstack/react-router";
import { DocumentCourse } from "@/components/document-course";
import course from "@/data/acca.json";

export const Route = createFileRoute("/acca")({
  head: () => ({ meta: [
    { title: "ACCA UK Course — Fintonics" },
    { name: "description", content: "Explore the ACCA UK qualification, examination levels, ethics, practical experience, eligibility and accounting careers at Fintonics." },
    { property: "og:title", content: "ACCA UK Course — Fintonics" },
    { property: "og:description", content: "Build a global career in accounting, auditing, taxation and finance with ACCA UK." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <DocumentCourse course={course} />,
});