import OnlineAssignmentPage from "../../src/site-pages/online-assignment";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  onlineAssignmentFaqs,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.onlineAssignment.title,
  description: pageMetadata.onlineAssignment.description,
  keywords: pageMetadata.onlineAssignment.keywords,
  alternates: { canonical: pageMetadata.onlineAssignment.canonical },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        schema={[
          organizationSchema,
          buildServiceSchema({
            name: "Online Assignment Help",
            description: "Professional assignment and homework help for essays, research papers, case studies, coding tasks, and more.",
            url: "https://classtakerspro.com/online-assignment",
          }),
          buildFAQSchema(onlineAssignmentFaqs, "https://classtakerspro.com/online-assignment"),
          buildBreadcrumbSchema(
            [
              { name: "Home", url: "/" },
              { name: "Online Assignment" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <OnlineAssignmentPage />
    </>
  );
}
