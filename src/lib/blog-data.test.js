import { mapPostRow, readingTimeMinutes, sanitizeSlug } from "./blog-data";

describe("blog data mapping", () => {
  test("creates normalized slugs", () => {
    expect(sanitizeSlug("  Course Planning: Week One!  ")).toBe("course-planning-week-one");
  });

  test("maps a Supabase post row and its category relations", () => {
    const post = mapPostRow(
      {
        id: "post-id",
        title: "Study plan",
        slug: "study-plan",
        status: "published",
        published_at: "2026-10-12T10:00:00.000Z",
        updated_at: "2026-10-12T11:00:00.000Z",
        content_json: { sections: [{ title: "Start", body: "Make a plan." }] },
        author_id: "author-id",
        robots_index: false,
      },
      [{ id: "category-id", name: "Study Skills", slug: "study-skills" }]
    );

    expect(post).toMatchObject({
      id: "post-id",
      publishedAt: "2026-10-12T10:00:00.000Z",
      updatedAt: "2026-10-12T11:00:00.000Z",
      categoryIds: ["category-id"],
      robotsIndex: false,
    });
    expect(post.sections).toEqual([{ title: "Start", body: "Make a plan." }]);
  });

  test("estimates reading time from stored article sections", () => {
    expect(readingTimeMinutes([{ body: "word ".repeat(360) }])).toBe(3);
  });

  test("estimates reading time from rich article HTML", () => {
    expect(readingTimeMinutes(`<h2>Topic</h2><p>${"word ".repeat(720)}</p>`)).toBe(5);
  });
});
