import { createFileRoute } from "@tanstack/react-router";
import { DocumentCourse } from "@/components/document-course";
import course from "@/data/business-analytics.json";
import { courseImages } from "@/lib/course-images";

export const Route = createFileRoute("/business-analytics")({
  head: () => ({ meta: [
    { title: "Business Analytics Course — Fintonics" },
    { name: "description", content: "Learn Excel, SQL, Power BI, Tableau and Python through eight Business Analytics modules and practical projects at Fintonics." },
    { property: "og:title", content: "Business Analytics Course — Fintonics" },
    { property: "og:description", content: "Transform data into decisions with practical analytics skills, dashboards and business projects." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <DocumentCourse course={course} image={courseImages.analytics} gallery="analytics" />,
});