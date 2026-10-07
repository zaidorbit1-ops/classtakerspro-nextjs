import TermsAndConditionPage from "../../src/site-pages/terms-condition-page";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildBreadcrumbSchema,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.terms.title,
  description: pageMetadata.terms.description,
  keywords: pageMetadata.terms.keywords,
  alternates: { canonical: pageMetadata.terms.canonical },
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
              { name: "Terms & Conditions" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <TermsAndConditionPage />
    </>
  );
}
