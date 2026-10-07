import ContactPage from "../../src/site-pages/contact";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildBreadcrumbSchema,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  alternates: { canonical: pageMetadata.contact.canonical },
};

export default function Page() {
  return (
    <>
      <SeoJsonLd
        schema={[
          organizationSchema,
          buildBreadcrumbSchema(
            [
              { name: "Home", url: "/" },
              { name: "Contact" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <ContactPage />
    </>
  );
}
