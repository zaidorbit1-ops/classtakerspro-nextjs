import OnlineClassPage from "../../src/site-pages/online-class";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  onlineClassFaqs,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.onlineClass.title,
  description: pageMetadata.onlineClass.description,
  keywords: pageMetadata.onlineClass.keywords,
  alternates: { canonical: pageMetadata.onlineClass.canonical },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        schema={[
          organizationSchema,
          buildServiceSchema({
            name: "Online Class Help",
            description: "Professional online class assistance for assignments, quizzes, discussions, and exams from PhD experts.",
            url: "https://classtakerspro.com/online-class",
          }),
          buildFAQSchema(onlineClassFaqs, "https://classtakerspro.com/online-class"),
          buildBreadcrumbSchema(
            [
              { name: "Home", url: "/" },
              { name: "Online Class" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <OnlineClassPage />
    </>
  );
}
