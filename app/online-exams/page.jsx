import OnlineExamsPage from "../../src/site-pages/online-exam";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  onlineExamFaqs,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.onlineExams.title,
  description: pageMetadata.onlineExams.description,
  keywords: pageMetadata.onlineExams.keywords,
  alternates: { canonical: pageMetadata.onlineExams.canonical },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        schema={[
          organizationSchema,
          buildServiceSchema({
            name: "Online Exam Help",
            description: "Confidential online exam support for proctored tests, regular quizzes, NCLEX, GED, TEAS, and HESI exams.",
            url: "https://classtakerspro.com/online-exams",
          }),
          buildFAQSchema(onlineExamFaqs, "https://classtakerspro.com/online-exams"),
          buildBreadcrumbSchema(
            [
              { name: "Home", url: "/" },
              { name: "Online Exams" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <OnlineExamsPage />
    </>
  );
}
