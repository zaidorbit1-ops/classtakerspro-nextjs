drop policy if exists "blog admins can manage admins"
on public.blog_admins;

grant execute on function public.is_blog_admin() to anon, authenticated;

drop policy if exists "public can read categories for published posts"
on public.blog_post_categories;

create policy "public can read categories for published posts"
on public.blog_post_categories
for select
using (
  exists (
    select 1
    from public.blog_posts p
    join public.blog_categories c on c.id = blog_post_categories.category_id
    where p.id = blog_post_categories.post_id
      and p.status = 'published'
      and p.published_at <= now()
      and c.is_active = true
  )
);
