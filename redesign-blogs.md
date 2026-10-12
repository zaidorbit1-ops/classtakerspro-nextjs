# Class Takers Pro Blog System: Complete UI/UX Redesign & Full-Stack Requirements

## 1. CRITICAL INSTRUCTION: COMPLETE REDESIGN FROM SCRATCH

Completely redesign and rebuild the entire existing Blog System. The current UI/UX is not acceptable and must not be reused.

**Do not reuse any existing blog module layouts, components, styling, page structures, editor UI, dashboard design, table design, cards, spacing, navigation, or visual patterns.** Do not simply restyle the current implementation. Create an entirely new, premium-quality experience for both the public-facing blog website and the admin dashboard.

First audit the existing implementation, identify its functional capabilities and technical issues, then rebuild the blog module with a fresh design system and clean architecture.

### Technology constraints
- Frontend and backend: Next.js with App Router.
- Database: Existing Supabase PostgreSQL database.
- Authentication: Secure, separate blog administration login.
- Styling: Properly scoped CSS/Tailwind classes that do not affect the existing main website.
- Responsive: Desktop, tablet and mobile.
- Brand identity: Class Takers Pro blue `#263673` and yellow `#FAB82B`.
- Use yellow as a controlled accent, not as a dominant background. Do not introduce gold, purple, random gradients or unrelated colors.
- Preserve the existing main website, navigation and unrelated pages. The redesign applies to the complete blog system and its admin area.

Do not sacrifice functionality for appearance. Both frontend and backend must be fully functional, connected to the database and tested.

---

# PART A: PUBLIC BLOG WEBSITE

## 2. Visual Direction

Build a premium editorial experience for a modern UK student-support brand. The design should feel professionally art-directed, sophisticated, readable and trustworthy, not like a generic blog template or an ordinary admin-generated website.

Use:
- Clean white and subtle cool-toned backgrounds.
- Class Takers Pro navy blue for headings, links and important elements.
- Yellow for selective highlights, small labels and important accents.
- Modern typography such as Inter or a similarly polished sans-serif.
- Excellent whitespace, consistent alignment and carefully controlled content widths.
- Subtle borders, refined shadows and tasteful hover transitions.
- Properly cropped, high-quality featured images.
- A consistent spacing, typography and component system.

Avoid:
- Oversized headings that consume the entire screen.
- Excessive rounded cards and pill-shaped elements.
- Random decorative shapes, unnecessary icons and excessive gradients.
- Repeated identical card layouts everywhere.
- Huge empty spaces, cramped sections or text-heavy walls.
- Generic template styling, emoji-based icons and inconsistent margins.

## 3. Blog Listing Page: `/blog`

Design a completely new, editorial-style landing page.

### Header
- Integrate naturally with the existing website's brand identity.
- Include a clear Blog navigation item and an appropriate back-to-main-site path.
- Use a clean, responsive header without creating a competing navigation system.
- Keep it visually polished on desktop and mobile.

### Intro section
- Display a strong, well-written blog heading and short supporting description.
- Use a restrained, visually interesting layout rather than a generic centered heading with excessive empty space.
- Include a functional search field with a clear search action.
- Provide useful topic/category navigation.

### Featured article
- Create a visually prominent featured article section.
- Use a large editorial image and carefully balanced text.
- Show category, article title, short excerpt, author, publication date and estimated reading time.
- Include a clear Read Article link.
- Make the image and title clickable.

### Article listing
- Create a refined article grid with varied visual emphasis where appropriate.
- Each article should display:
  - Featured image.
  - Category label.
  - Article title.
  - Short excerpt.
  - Author information.
  - Publication date.
  - Reading time.
- Keep typography and card dimensions consistent.
- Implement functional pagination or a reliable Load More interaction.
- Include loading, empty and error states.

### Category filtering
- Clicking a category must display its associated published articles.
- Provide a clear active category state.
- Include an All Articles option.
- Preserve appropriate search and pagination behavior when filters change.

### Search
- Search published article titles, excerpts and relevant content.
- Use debounced input where appropriate.
- Display clear empty results and loading states.
- Search must work with category filters and pagination.

## 4. Individual Article Page: `/blog/[slug]`

This is a major priority because it is the page visitors and search engines will actually consume.

Create a premium long-form reading experience.

### Article header
Display:
- Breadcrumb navigation.
- Category.
- Article title.
- Excerpt or introduction.
- Author name and optional avatar.
- Published date and updated date where applicable.
- Estimated reading time.
- Featured image with the correct aspect ratio.

The article title must have a strong hierarchy without becoming excessively large or awkward on mobile.

### Article body
- Use a comfortable reading width, approximately 700–800px on desktop.
- Apply excellent typography, paragraph spacing and line height.
- Support H2, H3, H4, lists, numbered lists, blockquotes, links, images, captions, tables and code blocks where relevant.
- Make embedded images responsive and prevent horizontal overflow.
- Style links clearly and maintain sufficient color contrast.
- Preserve formatting generated by the rich-text editor.

### Table of contents
- Generate a table of contents from article headings.
- Clicking an item should scroll to the corresponding section.
- Highlight the active section where practical.
- Use a sticky sidebar on suitable desktop layouts.
- On mobile, present a compact expandable table of contents.
- Hide the table of contents when there are too few headings.

### Supporting sections
- Add relevant related articles.
- Include an author information section.
- Add contextual internal links where appropriate.
- Provide category navigation and a clear route back to the blog.
- Include a tasteful end-of-article section, not intrusive popups or oversized promotional banners.

### Comments
If comments are enabled:
- Display approved comments.
- Provide a comment submission form.
- Support moderation and spam protection.
- Never display pending or rejected comments publicly.
- Provide proper validation, rate limiting and secure server-side processing.

Comments must be configurable rather than forced onto every article.

## 5. SEO and Public Performance

Implement actual SEO functionality, not merely visible SEO fields.

Requirements:
- Unique title and meta description for every article and category page.
- Canonical URLs.
- Open Graph and Twitter metadata.
- Appropriate Article and BreadcrumbList structured data.
- Accurate author and publication metadata.
- Clean, stable article slugs.
- XML sitemap containing published articles and relevant public blog pages.
- Appropriate robots directives.
- Correct 404 behavior for missing or unpublished articles.
- No accidental indexing of admin pages, previews or private drafts.
- Proper heading hierarchy and descriptive image alt text.
- Internal linking and related-article navigation.
- Server-rendered public article content wherever appropriate.
- Optimized image sizes, responsive images and lazy loading below the fold.
- Avoid layout shifts, unnecessary JavaScript and oversized dependencies.

Never expose drafts, private content, unpublished articles or administrative data through public APIs, metadata, sitemap or page source.

---

# PART B: COMPLETELY NEW ADMIN DASHBOARD

## 6. Separate Admin Experience

Create a new administration interface with a completely different information architecture from the public blog website.

Recommended routes:
- `/blog-admin/login`
- `/blog-admin`
- `/blog-admin/posts`
- `/blog-admin/posts/new`
- `/blog-admin/posts/[id]/edit`
- `/blog-admin/categories`
- `/blog-admin/authors`
- `/blog-admin/comments`
- `/blog-admin/media`
- `/blog-admin/settings`

Adjust routes if necessary to fit the existing application architecture, but keep administration clearly separated from public pages.

### Dashboard layout

Create a premium SaaS-style administration workspace.

**Sidebar**
- Dashboard
- All Posts
- Create Post
- Categories
- Authors
- Media Library
- Comments
- SEO Overview or Settings
- Blog Settings
- View Website
- Logout

Use a consistent icon library, clear active states, collapsible navigation and a proper mobile drawer.

**Top navigation**
- Current page title and breadcrumbs.
- Quick Create Post action.
- Search or command-style navigation where useful.
- Logged-in administrator information.
- Functional notification indicators only if notifications exist.

Avoid clutter, oversized navigation elements, excessive cards and dashboard widgets that provide no useful information.

## 7. Dashboard Home

Build a useful, data-driven overview.

### Summary metrics
- Total posts.
- Published posts.
- Draft posts.
- Scheduled posts.
- Total categories.
- Pending comments, if comments are enabled.

### Main sections
- Recently edited posts.
- Recently published posts.
- Quick actions.
- Publishing activity or a simple content overview.
- Posts requiring attention, such as missing SEO descriptions or featured images.

All metrics must come from actual database queries. Do not use hardcoded numbers, fake analytics or decorative charts containing fabricated data.

The dashboard should prioritize daily content-management tasks rather than looking like a financial analytics dashboard.

## 8. Posts Management

Create a professional post-management workspace.

### Listing interface
Use a clean, readable table or well-designed list with:
- Featured image thumbnail.
- Article title.
- Author.
- Category.
- Publication status.
- Last updated date.
- Publication date.
- SEO completeness indicator where useful.
- Actions menu.

### Required functionality
- Create, edit, view and delete posts.
- Search by title and relevant fields.
- Filter by status, author and category.
- Sort by date and title.
- Paginate large datasets.
- Select multiple posts for supported bulk actions.
- Bulk publish, unpublish or delete only after appropriate confirmation.
- Duplicate a post into a new draft if implemented safely.
- Preview unpublished articles through a secure preview route.
- Show clear success and error feedback.
- Confirm destructive operations.
- Prevent accidental loss of unsaved changes.

### Publishing workflow
Support:
- Draft.
- Published.
- Scheduled, if scheduling is implemented.
- Unpublished or archived states where appropriate.

Store publication timestamps correctly. Scheduled articles must not become publicly accessible before their scheduled publication time.

---

# PART C: PREMIUM BLOG EDITOR

## 9. Editor UI and Layout

The editor is one of the most important parts of the entire system. Build it as a proper content-authoring workspace, not a collection of ordinary form fields.

### Layout
- Main content area for the title and article body.
- A clean formatting toolbar.
- A secondary settings panel for publishing, category, author, featured image and SEO.
- Responsive behavior that keeps editing comfortable on smaller screens.
- A clear visual hierarchy between content creation and publishing controls.

On desktop, use a wide main editor with a manageable side panel. On mobile, collapse secondary settings into accessible sections.

### Title and slug
- Prominent article title field.
- Automatically suggest a URL slug from the title.
- Allow manual slug editing.
- Validate slug uniqueness.
- Preserve the existing slug when editing unless the administrator changes it.
- If a published slug changes, handle redirects or provide a safe redirect-management approach to avoid broken links.

### Rich-text editing
Use a mature rich-text editor compatible with Next.js, such as TipTap, or another suitable maintained library.

The editor must support:
- Bold, italic, underline and strikethrough.
- H2, H3 and H4 headings.
- Paragraphs and text alignment where appropriate.
- Ordered and unordered lists.
- Blockquotes.
- Hyperlinks and link editing.
- Images inserted within article content.
- Image captions and alt text.
- Tables.
- Undo and redo.
- Copy and paste from Word, Google Docs and websites.
- Keyboard shortcuts.
- Clean handling of pasted formatting.
- Safe HTML sanitization.
- Reliable content persistence and restoration when reopening a draft.

Pasting content must not produce broken layouts, enormous fonts, random colors or malformed HTML. Normalize imported formatting while preserving useful structure.

Do not create a fake toolbar with buttons that do nothing. Every displayed editor control must work.

### Autosave
- Implement reliable draft autosaving.
- Show clear Saving, Saved and Save Failed states.
- Avoid conflicting concurrent saves.
- Warn before navigating away when changes remain unsaved.
- Provide a manual Save Draft action.
- Handle network errors without silently discarding content.

## 10. Featured Image and Media Library

### Featured image
- Recommended image dimensions: **1200 × 675 pixels, 16:9 ratio**.
- Provide drag-and-drop and file-selection upload.
- Display an attractive image preview.
- Allow replacing or removing the selected image.
- Store image metadata and alt text.
- Validate allowed file types and maximum file size.
- Optimize images and generate appropriate responsive sizes where supported.

### Media library
- Browse previously uploaded images.
- Search or filter assets.
- Reuse an existing image without uploading duplicates unnecessarily.
- Allow alt-text editing.
- Remove media only when it is safe to do so.
- Prevent accidental deletion of images still referenced by published content.

Use Supabase Storage if suitable for the existing project. Configure upload policies and file access securely. Do not make the Supabase service-role key available in client-side code.

---

# PART D: CATEGORIES, AUTHORS AND COMMENTS

## 11. Category Management

Build a complete category management interface.

Support:
- Create categories.
- Edit names and descriptions.
- Generate and edit slugs.
- SEO title and meta description.
- View the number of associated posts.
- Delete categories with a safe reassignment or confirmation workflow.
- Public category pages with relevant published posts.

Prevent duplicate or invalid slugs. Categories must be connected to posts through proper database relationships.

## 12. Author Management

Support:
- Create and edit authors.
- Name.
- Slug.
- Short biography.
- Profile image or avatar.
- Optional role or professional designation.
- Social links if required.
- Author SEO metadata where appropriate.
- View associated articles.
- Author profile pages where appropriate.

Deleting an author must not accidentally delete their articles. Use a reassignment or safe archival workflow.

## 13. Comment Moderation

If comments are enabled, create a dedicated moderation workspace.

Support:
- Pending, approved and rejected comments.
- Search and filtering.
- Approve and reject actions.
- Spam handling.
- Delete with confirmation.
- Links to the associated article.
- Clear moderation status and timestamps.

Use server-side authorization for every moderation action.

---

# PART E: SEO MANAGEMENT

## 14. SEO Panel Inside the Editor

Create a well-organized SEO panel containing:

- SEO title.
- Meta description.
- Focus keyword.
- Secondary keywords.
- Canonical URL override, with a safe default.
- Open Graph title.
- Open Graph description.
- Social sharing image.
- Search-result preview.
- Character-count guidance.
- Missing-field warnings.
- Image alt-text reminders.
- Heading and internal-link checks where practical.

Automatically generate sensible defaults from the article title, excerpt and site URL. Allow manual overrides.

SEO indicators should offer actionable guidance, not promise Google rankings or display arbitrary scores.

### Structured data
Generate valid Article or BlogPosting structured data from the actual article record. Include relevant fields such as headline, image, author, publication date, modification date and canonical URL.

Validate the output and avoid duplicate or contradictory structured data from the existing site.

---

# PART F: BACKEND AND DATABASE

## 15. Backend Architecture

Audit and rebuild the backend where necessary. Keep the existing Next.js and Supabase stack; do not introduce MySQL, PHP, another backend framework or an unnecessary external CMS.

Implement a clean separation between:
- Public read operations.
- Authenticated administrative operations.
- Content validation and business logic.
- Database access.
- File uploads.
- SEO metadata generation.
- Preview and publishing workflows.

Use Next.js Route Handlers or appropriate server-side actions consistently. Do not mix multiple competing patterns without a clear reason.

All sensitive operations must be validated and authorized on the server.

## 16. Database Requirements

Audit the current Supabase schema and ensure it supports the complete workflow. Add or modify migrations where necessary.

Expected entities include:

**Posts**
- ID.
- Title.
- Slug.
- Excerpt.
- Rich-text content.
- Featured image URL or storage path.
- Featured image alt text.
- Author reference.
- Category relationship.
- Status.
- SEO title.
- SEO description.
- Focus and secondary keywords.
- Canonical URL.
- Open Graph metadata.
- Created, updated and published timestamps.
- Scheduled publication timestamp where applicable.

**Categories**
- ID.
- Name.
- Slug.
- Description.
- SEO metadata.
- Created and updated timestamps.

**Authors**
- ID.
- Name.
- Slug.
- Biography.
- Avatar URL.
- Optional professional designation and social links.
- Created and updated timestamps.

**Comments, if enabled**
- ID.
- Post reference.
- Display name and relevant contact fields.
- Comment body.
- Moderation status.
- Created timestamp.
- Moderation timestamp and administrator reference where applicable.

**Redirects, if implemented**
- Old path.
- Destination path.
- HTTP status.
- Creation timestamp.

Use appropriate foreign keys, unique constraints, indexes and timestamp defaults. Prevent duplicate slugs and invalid references.

Do not blindly recreate tables or drop existing data. Review the current schema, create safe migrations, and preserve valid existing blog content where possible.

## 17. Authentication and Security

- Use Supabase Auth for administrator authentication.
- Protect every admin page and backend mutation.
- Use server-side session validation.
- Apply Row Level Security policies to relevant tables.
- Restrict administrative writes to authorized users.
- Prevent public access to drafts and unpublished content.
- Secure preview links and ensure they cannot expose private data.
- Validate all request payloads.
- Sanitize rich-text content and URLs.
- Prevent SQL injection, XSS and unauthorized file uploads.
- Implement rate limiting for login and public comment submissions where applicable.
- Never expose service-role credentials in browser code.
- Do not rely only on hiding dashboard links or client-side route guards.

Provide an explicit, secure process for authorizing blog administrators. Do not implement an unrestricted public signup route for admin accounts.

## 18. Publishing and Public Data Rules

- Public queries return only published articles whose publication time has arrived.
- Drafts are accessible only to authorized administrators or through secure previews.
- Publishing and unpublishing update the correct timestamps and public visibility.
- Category and author pages show only eligible public content.
- Scheduled publishing must use a reliable server-side mechanism and handle failures.
- Deleting a post must not leave broken category relationships or incorrect sitemap entries.
- Revalidate relevant Next.js pages and caches after content changes.
- Keep pagination, filters, search and article detail queries efficient.
- Avoid N+1 database queries and unnecessary full-table scans.

## 19. API and Validation

Every operation must have:
- Authentication and authorization checks where required.
- Server-side schema validation.
- Consistent success and error responses.
- Appropriate HTTP status codes.
- Safe error messages without leaking secrets or database internals.
- Loading, empty, error and success states in the interface.

Use transactions or other safe database workflows where multiple changes must succeed together.

---

# PART G: RESPONSIVENESS AND ACCESSIBILITY

## 20. Responsive Requirements

Test the complete public blog and admin dashboard at:
- Desktop: 1440px and 1280px.
- Tablet: 768px.
- Mobile: 390px and 360px.

Requirements:
- No horizontal overflow.
- No clipped text or overlapping controls.
- Readable article typography.
- Functional mobile navigation.
- Responsive tables or alternative mobile list layouts.
- Touch-friendly controls.
- Responsive images.
- Accessible editor controls.
- Usable forms without awkward scrolling.
- Proper keyboard navigation and visible focus states.

Use semantic HTML, associated form labels, sufficient contrast, accessible dialogs and meaningful ARIA attributes where needed.

---

# PART H: QUALITY AND ACCEPTANCE CRITERIA

## 21. Design Quality Gate

Before declaring the work complete, inspect every public and admin page.

The new experience must feel deliberately designed, consistent and premium. Do not stop when the pages merely render.

Check:
- Typography and visual hierarchy.
- Alignment and spacing.
- Image quality and cropping.
- Button and input consistency.
- Sidebar and header proportions.
- Table density and readability.
- Empty, loading, error and success states.
- Mobile behavior.
- Contrast and keyboard accessibility.
- Consistency between listing, detail, category and author pages.

**The new UI must be visibly and structurally different from the current blog implementation.** If the result looks like the old design with different colors, the redesign has failed.

## 22. Functional Testing

Verify the following end-to-end:
1. Administrator logs in securely.
2. Unauthorized users cannot access admin routes or mutations.
3. Administrator creates and saves a draft.
4. Editor formatting survives saving and reopening.
5. Featured images upload and display correctly.
6. Categories and authors can be created, edited and safely deleted or reassigned.
7. SEO fields persist and appear in generated metadata.
8. A draft can be previewed securely.
9. Publishing makes the article publicly accessible.
10. Unpublishing removes it from public listings and the sitemap.
11. Article pages render correct metadata and structured data.
12. Search, category filters and pagination work together.
13. Missing and unpublished slugs return appropriate responses.
14. Comments follow moderation rules if enabled.
15. Changes revalidate the correct cached pages.
16. No unrelated existing website pages break.

Run TypeScript checks, linting, production builds and relevant tests. Fix errors rather than suppressing them.

## 23. Final Delivery

After implementation, provide:
- A summary of the complete redesign.
- The new public and admin routes.
- Database migrations and instructions for applying them to Supabase.
- Required environment variables, without exposing secrets.
- Any Supabase Auth, Storage or RLS setup steps.
- Testing results and known limitations.
- Confirmation that the existing website's unrelated pages remain intact.

Do not deliver a partial mockup, static UI, disconnected buttons, hardcoded metrics or a dashboard full of placeholder data.

**Final objective:** Build a completely new, exceptionally polished Class Takers Pro blog platform with a premium public reading experience, a professional content-management dashboard, a reliable rich-text editor, complete SEO support, secure Supabase integration and a fully functional publishing workflow. Replace the current blog UI/UX entirely rather than trying to repair its visual design incrementally.