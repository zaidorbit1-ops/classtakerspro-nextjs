import PrivacyPolicyPage from "../../src/site-pages/privacy-policy-page";
import SeoJsonLd from "../../src/seo/SeoJsonLd";
import {
  organizationSchema,
  buildBreadcrumbSchema,
  pageMetadata,
} from "../../src/seo/siteSeo";

export const metadata = {
  title: pageMetadata.privacyPolicy.title,
  description: pageMetadata.privacyPolicy.description,
  keywords: pageMetadata.privacyPolicy.keywords,
  alternates: { canonical: pageMetadata.privacyPolicy.canonical },
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
              { name: "Privacy Policy" },
            ],
            "https://classtakerspro.com"
          ),
        ]}
      />
      <PrivacyPolicyPage />
    </>
  );
}
