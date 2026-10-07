import OnlineCoursePage from "../../src/site-pages/online-course";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  onlineCourseFaqs,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.onlineCourse.title,
  description: pageMetadata.onlineCourse.description,
  keywords: pageMetadata.onlineCourse.keywords,
  alternates: { canonical: pageMetadata.onlineCourse.canonical },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        schema={[
          organizationSchema,
          buildServiceSchema({
            name: "Online Course Help",
            description: "Expert course completion support for college, university, and certification classes across all levels.",
            url: "https://classtakerspro.com/online-course",
          }),
          buildFAQSchema(onlineCourseFaqs, "https://classtakerspro.com/online-course"),
          buildBreadcrumbSchema(
            [
              { name: "Home", url: "/" },
              { name: "Online Course" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <OnlineCoursePage />
    </>
  );
}
