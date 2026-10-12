drop policy if exists "blog media public read" on storage.objects;
create policy "blog media public read"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'ctp-blog-media');

drop policy if exists "blog admins upload media" on storage.objects;
create policy "blog admins upload media"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'ctp-blog-media'
  and public.is_blog_admin()
);
