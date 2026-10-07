import Script from "next/script";

export default function SeoJsonLd({ schema }) {
  if (!schema) return null;

  const items = Array.isArray(schema) ? schema : [schema];

  return items.map((item, index) => (
    <Script
      key={`schema-${index}`}
      id={`schema-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ));
}
