# Blog Storage Setup

Create these buckets in the Supabase Storage dashboard or via the CLI:

- `ctp-blog-featured` for article cover images
- `ctp-blog-content` for inline article images

Recommended rules:

1. Buckets should be private or restricted by policy depending on whether you want public article images to be served directly.
2. Restrict uploads to `image/jpeg`, `image/png`, and `image/webp` only.
3. Reject SVG uploads unless a sanitized pipeline is explicitly implemented.
4. Keep file size under 5 MB and recommend a 1200x630 featured image ratio.
5. Require alt text in the app for meaningful images and allow empty alt text only for decorative images.
6. Use unique object keys such as `posts/<slug>/<timestamp>-featured.webp` and `posts/<slug>/<timestamp>-inline.webp` instead of raw filenames.
7. On replacement or deletion, clean up only the object that was uniquely uploaded for that post.

For a public-read featured image bucket with admin-only writes:

```sql
create policy "public read featured images"
on storage.objects for select
using (bucket_id = 'ctp-blog-featured');

create policy "admin uploads featured images"
on storage.objects for insert
with check (
  bucket_id = 'ctp-blog-featured'
  and public.is_blog_admin()
);
```

Repeat the admin-only insert policy for the content bucket if inline images are enabled:

```sql
create policy "admin uploads blog content images"
on storage.objects for insert
with check (
  bucket_id = 'ctp-blog-content'
  and public.is_blog_admin()
);
```

Example delete policy:

```sql
create policy "admin deletes blog images"
on storage.objects for delete
using (
  (bucket_id in ('ctp-blog-featured', 'ctp-blog-content'))
  and public.is_blog_admin()
);
```

The frontend should store the object path and derive a public URL consistently rather than duplicating multiple URLs for the same object.
