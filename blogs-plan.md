from pathlib import Path

content = r"""# Class Takers Pro Blog System
## Implementation Plan for the Coding Agent

**Project:** Class Takers Pro (`classtakerspro.com`)  
**Application:** Existing Next.js website and backend  
**Database:** Supabase (PostgreSQL)  
**Deliverables:** Complete blog frontend, protected admin dashboard, Supabase SQL migration, storage setup instructions, and verification checklist.

---

## 1. Mission and non-negotiable requirements

Implement a production-quality blog/CMS inside the existing Class Takers Pro Next.js project. Do not create a separate application or replace the existing website.

The work must include:

- Public blog listing page, category filtering, pagination, and individual article pages.
- A completely separate, protected admin login and dashboard for blog management.
- Create, edit, preview, publish, unpublish, schedule if practical, and delete posts.
- Full CRUD for categories and authors.
- A capable rich-text editor supporting paste from Google Docs, Microsoft Word, and websites; headings; bold/italic/underline; lists; links; quotes; tables; images; code where appropriate; undo/redo; and clean content output.
- Per-post SEO fields, canonical URL, social sharing metadata, featured image, alt text, slug, excerpt, author, categories, and publish dates.
- Supabase SQL migration file(s) that can be run in the Supabase SQL Editor.
- Supabase Storage setup for featured images and editor images.
- Responsive, polished UI that fits Class Takers Pro's existing brand and does not conflict with existing CSS.
- Proper security, server-side validation, useful empty/loading/error states, and tests.

Do not stop after making mockups or static screens. Wire every UI control to real functionality and the database.

## 2. Start by inspecting the existing project

Before editing code:

1. Inspect `package.json`, Next.js version, App Router or Pages Router structure, TypeScript setup, styling system, existing design tokens, fonts, header/footer, navigation, and current SEO implementation.
2. Inspect existing Supabase client/server helpers and environment-variable conventions. Reuse them when safe; do not create competing clients unnecessarily.
3. Identify the current global CSS and component naming conventions. Avoid changing unrelated pages.
4. Check whether a Supabase project is already configured and whether any existing tables or storage buckets could conflict. Never drop or overwrite unrelated objects.
5. Write a short implementation note identifying relevant files and the chosen integration points before coding.
6. Follow the project's existing routing architecture. If it uses Next.js App Router, use Server Components by default and Client Components only where interaction is required.

**Important:** Supabase means PostgreSQL, not MySQL. The requested migration must therefore be PostgreSQL SQL for the Supabase SQL Editor, not a phpMyAdmin/MySQL dump.

## 3. Design direction

Create an editorial, premium academic-support brand experience. It should look deliberately designed, not like a default CMS template.

### Brand integration

- Inspect the existing website and reuse its actual brand palette, typography, logo, and spacing patterns.
- Known brand colors: navy/blue `#263673` and gold/yellow `#FAB82B`. Verify against the live project's existing tokens before using these as authoritative.
- Use a light, calm editorial canvas, strong readable contrast, generous whitespace, restrained accent color, clear hierarchy, and subtle borders/shadows.
- Reuse the site's existing global header and footer where appropriate. Do not redesign unrelated site areas.
- Use a separate, consistent blog visual system, while staying recognizably part of Class Takers Pro.

### CSS isolation is mandatory

Use a unique prefix for all new blog styles, for example:

- `.ctp-blog-*` for public blog pages.
- `.ctp-blog-admin-*` for admin pages.
- `ctp-blog-` prefixes for custom CSS variables and utility classes where needed.

Prefer CSS Modules for component-specific styling, such as `BlogCard.module.css`, `BlogArticle.module.css`, and `AdminLayout.module.css`. Do not add generic global selectors such as `.container`, `.card`, `.title`, `h1`, or `button` that could affect existing pages. Scope rich-text styles under a dedicated article content root such as `.ctp-blog-article-content`. Do not globally restyle `body`, headings, buttons, or form fields.

Use existing shared components only if they can be reused without changing existing behavior. Keep responsive layouts polished from mobile through large desktop.

### Public blog listing page

Create `/blog` with:

- An editorial page heading and short introduction.
- A visually strong featured/latest article area when published content exists.
- Search input with an explicit submit/debounce strategy.
- Category filter chips or a compact category selector.
- A responsive article-card grid, with consistent image ratios, readable titles, excerpts, author/date metadata, and category labels.
- Pagination or accessible “Load more” behavior. Prefer URL-backed pagination so results are crawlable.
- Loading skeletons, no-results state, and a friendly empty state when no posts are published.
- Correct focus states, keyboard interaction, and accessible labels.

Avoid excessive animations, clutter, fake metrics, or invented testimonials.

### Article detail page

Create `/blog/[slug]` with:

- A clean, readable article layout with a sensible maximum text width.
- Breadcrumbs: Home → Blog → Category → Article, with valid links.
- Article title, excerpt or intro, author identity, published/updated date, reading-time estimate if reliable, and category.
- Featured image using the required ratio and a meaningful alt attribute.
- Rich article body with properly spaced H2/H3 headings, lists, links, quotes, tables, and inline images.
- A table of contents generated from headings if it can be implemented accessibly and robustly.
- Share links only when useful; related articles selected from published content and preferably relevant categories.
- A visible route for missing/unpublished posts that returns a true 404 for public visitors.
- A restrained CTA that matches the existing website's conversion design. Do not let the CTA overwhelm the article.

Do not render raw HTML unsafely. Sanitize any HTML output and validate allowed tags/attributes. If the editor uses JSON/structured content, render from the editor schema where possible.

## 4. Featured image and inline image specification

### Featured image standard

Use **1200 × 630 pixels** (approximately 1.91:1) as the standard featured image canvas. This is a practical share-card ratio and works well for consistent article cards. The frontend should use a consistent 1.91:1 image frame for cards and article hero imagery, with responsive cropping using `object-fit: cover`.

Admin upload requirements:

- Accept JPEG, PNG, and WebP. Reject SVG uploads unless there is a deliberate, secure sanitization pipeline.
- Validate MIME type, file signature where practical, file size, and image dimensions on the server.
- Suggested maximum file size: 5 MB.
- Recommend 1200 × 630 px and display a preview/crop frame. Do not distort images.
- Require descriptive alt text for meaningful images. Allow explicitly empty alt text only for decorative images.
- Store the Supabase Storage object path and public URL (or derive the URL from the path consistently). Avoid duplicating inconsistent URLs.
- Use unique object names, not the original filename alone.
- On replacement/deletion, handle storage cleanup safely. Do not delete a shared image still used by another post.
- Use Next.js image optimization if compatible with the existing configuration; configure the Supabase image host in `next.config` if required.
- Inline images should support upload, insertion, alt text, and optional caption.

Suggested Supabase Storage buckets:
- `ctp-blog-featured` for featured images.
- `ctp-blog-content` for inline article images.

Prefer private uploads mediated by a trusted server where suitable. If public image URLs are used, configure public read access but restrict write/delete operations to authenticated authorized admins. Never put a Supabase service-role key in browser code.

## 5. Admin login and authorization

Use a separate admin route group and visual shell, for example:

- `/blog-admin/login`
- `/blog-admin`
- `/blog-admin/posts`
- `/blog-admin/posts/new`
- `/blog-admin/posts/[id]/edit`
- `/blog-admin/categories`
- `/blog-admin/authors`
- `/blog-admin/media` (optional if a reusable media library is implemented)
- `/blog-admin/settings` (only if there are real settings to manage)

The public website must not expose admin data or write operations.

### Authentication rules

- Use Supabase Auth rather than building a custom password system.
- Admin login must support email/password and safe sign-out.
- Enforce authorization on the server for every mutation and every admin data read, not just by hiding links or protecting the page visually.
- Create an explicit admin authorization mechanism, preferably a `blog_admins` table keyed to `auth.users.id`, or use a correctly configured trusted role claim if the project already has one. Do not trust a client-provided role or user metadata that the user can change.
- Check the authenticated user and admin membership inside every Server Action/API handler that changes data.
- Configure Row Level Security (RLS) on every blog table. Public users may read only published posts and the minimum associated author/category data needed for public rendering. Only authorized admins may create, edit, publish, or delete content.
- Never expose the service-role key to the client. Prefer user-scoped Supabase clients with RLS. If a service-role client is genuinely required, use it only on the server after an explicit authorization check.
- Use secure session handling supported by the installed Supabase SSR package and the existing Next.js version. Do not copy obsolete auth patterns blindly.
- Rate-limit login attempts where supported by the architecture and rely on Supabase Auth protections.
- Do not add public admin registration. Admin membership should be provisioned deliberately by a trusted project owner.
- Include setup instructions for creating the first admin. Do not hardcode credentials in source code or migrations.

If the project currently uses a different trusted auth system, assess whether it should be reused; document the decision and retain the same server-side authorization requirements.

## 6. Dashboard experience

Build a real admin workspace with a responsive sidebar, clear active navigation, top bar, account menu, and consistent form controls. On mobile, use a usable collapsible navigation.

### Dashboard overview

Show database-backed summaries, not hardcoded numbers:

- Total posts.
- Published posts.
- Drafts.
- Categories.
- Authors.
- Recently updated posts with status and quick actions.

If analytics are not implemented, do not invent views, clicks, or traffic figures.

### Posts management

Provide:

- Search by title/slug.
- Filters for status, category, author, and date when practical.
- Sort by updated/published date and title.
- Pagination.
- Status badges for Draft, Published, and Scheduled only if scheduling is implemented.
- Row/card actions: edit, preview, publish/unpublish, duplicate if implemented, and delete with confirmation.
- Bulk actions only if they are implemented safely.
- Clear success/error feedback and disabled/loading states during mutations.

### Create/edit post form

Organize the editor into a comfortable main editing area plus a responsive settings sidebar.

Required fields:

- Title.
- Slug, automatically suggested from title but editable.
- Excerpt.
- Rich content.
- Featured image upload, preview, and alt text.
- One or more categories.
- Author.
- Status: Draft or Published; Scheduled only if implemented.
- Published date and updated date managed consistently.
- SEO title.
- Meta description.
- Canonical URL, optional.
- Open Graph title/description/image overrides, optional.
- Robots index/follow controls with safe defaults; prevent accidental `noindex` on normal published posts.
- Focus keyword as an editorial aid only; do not claim it directly boosts Google ranking.
- A live SEO/social preview.
- Save Draft, Preview, Publish/Update, and Cancel actions.
- Unsaved-changes warning when navigating away, where reliable.
- Validation errors next to the relevant fields.

SEO defaults:
- SEO title may default to the post title, but allow editing.
- Meta description may be suggested from the excerpt, but remain editable.
- Slug must be unique and URL-safe.
- Published posts require title, slug, content, author, and a valid featured image/alt text policy.
- Do not claim that a character counter guarantees search ranking. Use sensible guidance and preview truncation.

## 7. Rich-text editor requirements

Choose a maintained editor compatible with the project's React/Next.js version. Tiptap is a suitable candidate if compatible with current dependencies; inspect before adding it. Keep the editor isolated in a Client Component and avoid importing browser-only editor modules into Server Components.

Minimum toolbar and behavior:

- Paragraph and heading levels H2/H3 (H1 should generally be reserved for the page title).
- Bold, italic, underline, strike-through.
- Bulleted and numbered lists.
- Blockquote.
- Link add/edit/remove.
- Insert inline image with alt text and optional caption.
- Table insertion and basic table editing if supported cleanly.
- Horizontal divider.
- Undo and redo.
- Clear formatting where safe.
- Paste from Word, Google Docs, and websites with reasonable formatting preservation.
- Normalize pasted content to avoid importing arbitrary font families, inline colors, enormous spacing, and unsafe HTML.
- Keyboard shortcuts, accessible toolbar labels, and visible focus states.
- Word/character count if useful.
- Autosave or explicit save state. If autosave is implemented, show “Saving”, “Saved”, and error states and prevent stale autosaves from overwriting newer content.
- Preview using the same renderer and typography as the public article.
- Store structured JSON when the editor supports it; if HTML is stored, sanitize on both write and render paths. Do not store unsanitized arbitrary pasted HTML and render it directly.
- Ensure content is preserved correctly across edit → save → reopen → preview → publish.

The editor must not be a plain textarea disguised as a rich editor.

## 8. Data model and Supabase migration

Create a versioned SQL migration such as:

`supabase/migrations/202610120001_create_blog_cms.sql`

If the repository already uses a migration naming convention, follow it. Also provide a copyable SQL file suitable for running in the Supabase SQL Editor. Do not drop unrelated tables or disable security globally.

Suggested tables:

### `blog_admins`
- `user_id uuid primary key references auth.users(id) on delete cascade`
- `created_at timestamptz not null default now()`
- Optional `created_by uuid references auth.users(id)`

Only trusted project owners should be able to grant admin membership. Do not permit arbitrary authenticated users to self-insert admin rows.

### `blog_authors`
- `id uuid primary key default gen_random_uuid()`
- `name text not null`
- `slug text not null unique`
- `bio text`
- `avatar_path text`
- `avatar_url text`
- `website_url text`
- `social_links jsonb not null default '{}'::jsonb`
- `is_active boolean not null default true`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

### `blog_categories`
- `id uuid primary key default gen_random_uuid()`
- `name text not null`
- `slug text not null unique`
- `description text`
- `seo_title text`
- `meta_description text`
- `is_active boolean not null default true`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

### `blog_posts`
- `id uuid primary key default gen_random_uuid()`
- `title text not null`
- `slug text not null unique`
- `excerpt text`
- `content_json jsonb` for structured editor content, nullable only if the chosen editor architecture requires another storage model
- `content_html text` only if HTML rendering/storage is deliberately chosen and sanitized
- `featured_image_path text`
- `featured_image_url text`
- `featured_image_alt text`
- `author_id uuid references blog_authors(id) on delete set null`
- `status text not null default 'draft' check (status in ('draft','published','scheduled'))` if scheduled publishing is implemented; otherwise use only `draft` and `published`
- `published_at timestamptz`
- `scheduled_at timestamptz` only if scheduling is implemented
- `seo_title text`
- `meta_description text`
- `canonical_url text`
- `og_title text`
- `og_description text`
- `og_image_path text`
- `og_image_url text`
- `robots_index boolean not null default true`
- `robots_follow boolean not null default true`
- `focus_keyword text`
- `reading_time_minutes integer`
- `created_by uuid references auth.users(id) on delete set null`
- `updated_by uuid references auth.users(id) on delete set null`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

### `blog_post_categories`
- `post_id uuid not null references blog_posts(id) on delete cascade`
- `category_id uuid not null references blog_categories(id) on delete restrict`
- `created_at timestamptz not null default now()`
- Composite primary key `(post_id, category_id)`

Use indexes for:
- Published status/date ordering.
- Post slug (unique constraint already indexes it).
- Author and category relationships.
- Searchable title/excerpt where useful; use PostgreSQL full-text search if implementing database-backed search.
- Any common filter/order combinations demonstrated by actual queries.

Use `updated_at` triggers for relevant tables, with a clearly named reusable trigger function. Add constraints for valid statuses, non-empty required text, and sensible values where practical. Use transactions and avoid destructive migration behavior.

### Migration security requirements

- Enable RLS on all blog tables.
- Add policies for public reads of published posts only, and public reads of active categories/authors needed by published posts.
- Add admin-only policies for all management operations.
- Policies must check trusted membership in `blog_admins` and avoid recursive RLS policy pitfalls. If a `SECURITY DEFINER` helper is used, set a safe `search_path`, restrict execute grants, and explain why it is safe.
- Prevent untrusted users from granting themselves admin status.
- Do not assume hiding the dashboard is security.
- Keep storage policies aligned with the chosen bucket access model.
- Test the policies using both anonymous and authenticated non-admin/admin sessions.

The final migration must be executable and internally consistent. Do not leave pseudo-SQL, contradictory columns, or policy placeholders.

## 9. Categories and authors management

### Categories
- List/search categories with name, slug, description, status, and post count.
- Create, edit, activate/deactivate, and delete categories.
- Auto-suggest a slug while allowing manual editing.
- Prevent duplicate slugs and show a useful error.
- If a category is used by posts, either prevent deletion with a clear explanation or explicitly remove only its join relationships after confirmation. Do not silently delete posts.

### Authors
- List/search authors with name, slug, avatar, and associated post count.
- Create, edit, activate/deactivate, and delete authors.
- Fields: name, slug, bio, avatar upload, website, and optional social links.
- Handle existing posts safely when an author is deleted. Prefer requiring reassignment or setting `author_id` to null with a clear warning, then validate whether published posts require an author.
- Do not expose private admin email addresses publicly. Public author pages are optional, but author metadata should be clean and consistent.

## 10. Routing and rendering strategy

Adapt these examples to the current routing system instead of creating duplicate route trees:

Public:
- `/blog`
- `/blog/[slug]`
- Optional `/blog/category/[slug]`
- Optional `/blog/author/[slug]`

Admin:
- `/blog-admin/login`
- `/blog-admin`
- `/blog-admin/posts`
- `/blog-admin/posts/new`
- `/blog-admin/posts/[id]/edit`
- `/blog-admin/categories`
- `/blog-admin/authors`

Use server-rendered public content for SEO. Public listing and article pages should return useful HTML without requiring client-side JavaScript to fetch the core article. Use pagination and filter URLs that are stable and crawlable. Do not expose draft content through public queries or metadata.

Use database queries that explicitly filter `status = 'published'` and only expose posts whose publish time has arrived. Do not rely solely on UI filters.

## 11. SEO implementation

For every published post:

- Generate a unique canonical URL based on the configured production site URL and slug, unless a valid custom canonical is set.
- Generate unique `<title>` and meta description from post SEO fields with safe fallbacks.
- Add Open Graph title, description, URL, type `article`, and image metadata.
- Add appropriate Twitter/X card metadata.
- Use Next.js Metadata API or the existing SEO solution for the installed Next.js version.
- Add Article or BlogPosting JSON-LD with only truthful fields: headline, image, dates, author, publisher when supported by actual site data, and canonical URL.
- Escape/serialize JSON-LD safely. Never interpolate untrusted strings into executable script content without safe serialization.
- Use semantic HTML, a single visible H1 for the article title, logical heading hierarchy, descriptive image alt text, and descriptive internal links.
- Ensure drafts and unpublished posts are not indexed or included in public sitemap/feed.
- Include published blog URLs in the existing sitemap generation system. Inspect the current `sitemap.xml` implementation before editing it; preserve existing URLs and avoid duplicates.
- Add a blog RSS/Atom feed only if practical and consistent with the current stack.
- Add breadcrumb structured data only if the visible breadcrumb matches it.
- Use real publication/update dates, not fabricated dates.
- Keep category metadata unique when category pages are implemented.
- Avoid keyword stuffing, duplicate meta descriptions, empty titles, and false claims about guaranteed rankings.

Do not claim that metadata alone guarantees rankings. Technical SEO supports discoverability; ranking also depends on content quality, relevance, competition, links, performance, and other factors.

## 12. Validation, security, and performance

- Validate all form input server-side with a schema library already installed or a compatible maintained library such as Zod.
- Validate slugs, URLs, enum status values, image types/sizes, and required fields.
- Use parameterized Supabase query APIs. Never build raw SQL from user input.
- Sanitize rich text and validate links/attributes. Reject `javascript:` URLs and unsafe embedded content.
- Do not permit arbitrary iframe embeds unless a strict allowlist is designed.
- Add CSRF protections according to the selected mutation/session architecture.
- Use safe error messages; do not expose secrets, SQL internals, or stack traces to users.
- Add pagination and avoid fetching full content bodies for listing cards.
- Use appropriate caching/revalidation for public published content and invalidate caches after publish/update/unpublish/delete. Drafts should not leak through stale caches.
- Optimize images and avoid layout shift by reserving image aspect ratio.
- Avoid unnecessary client-side JavaScript.
- Use accessible labels, keyboard navigation, contrast, reduced-motion support, and semantic buttons/links.
- Add a confirmation step for destructive actions.
- Keep dependencies minimal and compatible with the existing Next.js version.

## 13. Suggested implementation phases

### Phase 1: Project audit and architecture
- Inspect app structure, styling, Supabase setup, current navigation, SEO, sitemap, and dependencies.
- Record integration points and any assumptions.
- Decide editor content format, image storage strategy, auth/session approach, and routing based on the actual repository.

### Phase 2: Database and access control
- Write and validate the complete SQL migration.
- Create tables, constraints, indexes, updated-at triggers, RLS policies, and storage policies.
- Document bucket creation and first-admin provisioning.
- Test anonymous, non-admin, and admin access.

### Phase 3: Supabase and server utilities
- Reuse or create typed server/browser clients.
- Add centralized admin authorization helpers and validation schemas.
- Implement safe data access functions and cache invalidation.

### Phase 4: Admin shell and management
- Implement login/logout and protected admin layout.
- Build dashboard overview and posts table.
- Build category and author CRUD.
- Add loading, error, empty, and success states.

### Phase 5: Editor and media
- Integrate the rich-text editor.
- Implement draft save, editing, preview, publish/unpublish, featured image upload, inline image insertion, SEO fields, and validation.
- Verify pasted content and edit/reopen fidelity.

### Phase 6: Public frontend
- Build `/blog`, category filters, search, pagination, article detail pages, related posts, and responsive styling.
- Match the site's design system while isolating blog CSS.
- Add genuine 404 behavior and empty states.

### Phase 7: SEO and production readiness
- Implement metadata, Open Graph/Twitter metadata, JSON-LD, sitemap integration, canonical URLs, and crawlable routes.
- Verify draft privacy, caching invalidation, image handling, mobile behavior, and accessibility.
- Run lint, type checks, tests, and a production build.

### Phase 8: Handover
- Deliver the SQL migration file.
- Deliver exact Supabase setup steps, environment variable names, bucket setup, and first-admin setup steps.
- Document routes, editor format, image size, security model, and how to test the implementation.
- Summarize files created/changed and list any incomplete items honestly.

## 14. Environment variables and setup notes

Inspect existing variables first. Reuse current names where appropriate and document only variables actually used. Common examples may include:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` or the project's current publishable-key variable
- `SUPABASE_SERVICE_ROLE_KEY` only if required server-side; never prefix it with `NEXT_PUBLIC_`
- `NEXT_PUBLIC_SITE_URL` or the existing production URL variable

Do not commit secrets. Update `.env.example` with placeholders only. Never print actual secrets in logs or handover notes.

The production site URL should be configured once and used consistently for canonical URLs, Open Graph URLs, sitemap entries, and structured data. Do not hardcode `localhost` or preview URLs into production metadata.

## 15. Required deliverables

The implementation is not complete until all applicable items exist and work:

1. `implementation_plan.md` (this plan, committed to the project if requested by the owner).
2. A complete, executable Supabase SQL migration under the repository's migration convention.
3. Any required storage bucket/policy setup instructions.
4. Public blog listing and article detail pages.
5. Protected admin login and dashboard.
6. Working post CRUD, category CRUD, and author CRUD.
7. Rich-text editor with safe paste handling, image upload/insertion, and preview.
8. Per-post SEO controls and correct public metadata/schema.
9. Sitemap integration that preserves existing website URLs.
10. Responsive, CSS-isolated styling that does not disturb unrelated pages.
11. Validation and authorization tests, including RLS tests where practical.
12. A handover README or implementation note with setup and testing steps.

## 16. Acceptance checklist

### Security
- [ ] Anonymous visitor can read published posts only.
- [ ] Anonymous visitor cannot read drafts or call mutation endpoints successfully.
- [ ] Authenticated non-admin cannot manage posts, categories, authors, or admin membership.
- [ ] Authorized admin can log in and manage content.
- [ ] Admin access is verified on the server for every mutation.
- [ ] Service-role secrets never reach client bundles.
- [ ] Unsafe pasted HTML/links cannot execute in public article pages.

### Content management
- [ ] Create, edit, save draft, preview, publish, unpublish, and delete post work.
- [ ] Category create/edit/delete works and handles associated posts safely.
- [ ] Author create/edit/delete works and handles associated posts safely.
- [ ] Slug uniqueness is enforced in the database and shown as a useful UI error.
- [ ] Rich content remains intact after save and reopening.
- [ ] Featured and inline images upload, preview, render, and have alt text.
- [ ] All actions show clear loading/success/error feedback.

### Frontend and SEO
- [ ] `/blog` shows published content only, with working search/filter/pagination.
- [ ] `/blog/[slug]` renders server-side and unknown/unpublished slugs return 404.
- [ ] Mobile, tablet, and desktop layouts are polished.
- [ ] New CSS does not alter unrelated pages.
- [ ] Every post has sensible title, description, canonical, OG/Twitter metadata, and JSON-LD.
- [ ] Sitemap includes published posts and excludes drafts.
- [ ] Publish/update/unpublish actions correctly invalidate cached pages.
- [ ] No duplicate H1s, broken links, console errors, or hydration errors.

### Engineering
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] SQL migration runs successfully on the intended Supabase project.
- [ ] RLS is tested with anonymous, non-admin, and admin sessions.
- [ ] Setup and rollback considerations are documented.
- [ ] No unrelated pages, styles, database objects, or functionality were changed unnecessarily.

## 17. Final instructions to the coding agent

Work in small, verifiable stages. Inspect first, then implement the real end-to-end system. Prefer simple, maintainable architecture over unnecessary abstractions. Do not silently skip requirements, use mock data in production components, leave inert buttons, expose drafts, weaken RLS to make a query work, or claim a test passed unless it was actually run.

If a requirement conflicts with the existing codebase or installed Next.js/Supabase versions, adapt it to the actual project and document the reason. Preserve all existing website behavior outside the blog system.

At the end, report:
- What was implemented.
- Exact files created and changed.
- Exact SQL migration filename and how to run it.
- Supabase Auth, storage bucket, and first-admin setup steps.
- Commands actually run and their results.
- Any remaining limitations or manual steps.
"""

path = Path("/mnt/data/implementation_plan.md")
path.write_text(content, encoding="utf-8")
print(f"Created: {path}\nSize: {path.stat().st_size:,} bytes")
