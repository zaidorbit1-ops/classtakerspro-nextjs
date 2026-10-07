const siteUrl = "https://classtakerspro.com";

const pages = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/online-class", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-exams", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-course", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-assignment", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-condition", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
