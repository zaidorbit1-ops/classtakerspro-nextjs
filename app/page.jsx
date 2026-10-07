import HomePage from "../src/site-pages/Home";
import SeoJsonLd from "../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildTestimonialSchema,
  homeFaqs,
  homeTestimonials,
  pageMetadata,
} from "../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  alternates: { canonical: pageMetadata.home.canonical },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        schema={[
          organizationSchema,
          buildServiceSchema({
            name: "Online Class Help",
            description: "Expert online class support for coursework, tests, attendance, and exams.",
            url: "https://classtakerspro.com/",
          }),
          buildFAQSchema(homeFaqs, "https://classtakerspro.com/"),
          buildTestimonialSchema(homeTestimonials, "https://classtakerspro.com/"),
        ]}
      />
      <HomePage />
    </>
  );
}
