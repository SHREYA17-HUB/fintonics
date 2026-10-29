import { createFileRoute } from "@tanstack/react-router";
import { DocumentCourse } from "@/components/document-course";
import course from "@/data/ai-and-ml.json";

export const Route = createFileRoute("/ai-and-ml")({
  head: () => ({ meta: [
    { title: "Artificial Intelligence & Machine Learning Course — Fintonics" },
    { name: "description", content: "Discover 11 AI and Machine Learning modules covering Python, data analysis, deep learning, NLP, Generative AI, deployment and practical projects." },
    { property: "og:title", content: "AI & Machine Learning Course — Fintonics" },
    { property: "og:description", content: "Learn AI and machine learning through practical programming, real-world projects and industry-relevant skills." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <DocumentCourse course={course} />,
});