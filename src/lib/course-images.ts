import ca from "@/assets/course-ca.jpg";
import cs from "@/assets/course-cs.jpg";
import acca from "@/assets/course-acca.jpg";
import cima from "@/assets/course-cima.jpg";
import fintech from "@/assets/course-fintech.jpg";
import analytics from "@/assets/course-analytics.jpg";
import cma from "@/assets/course-cma.jpg";
import ai from "@/assets/course-ai.jpg";
import cpa from "@/assets/course-cpa.jpg";

export const courseImages = { ca, cs, acca, cima, fintech, analytics, cma, ai, cpa };
export type CourseKey = keyof typeof courseImages;

const extras = import.meta.glob<string>("../assets/gallery/*.jpg", { eager: true, import: "default" });
const pick = (k: CourseKey) => [1, 2].map((n) => extras[`../assets/gallery/${k}-${n}.jpg`]).filter((x): x is string => !!x);

export const courseGalleries = Object.fromEntries(
  (Object.keys(courseImages) as CourseKey[]).map((k) => [k, [courseImages[k], ...pick(k)]]),
) as Record<CourseKey, string[]>;
