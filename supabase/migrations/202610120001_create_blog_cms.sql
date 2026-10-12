create extension if not exists pgcrypto;

create table if not exists public.blog_admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role text not null default 'admin' check (role in ('admin', 'editor')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  bio text,
  avatar_path text,
  avatar_url text,
  website_url text,
  social_links jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  seo_title text,
  meta_description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content_json jsonb,
  content_html text,
  featured_image_path text,
  featured_image_url text,
  featured_image_alt text,
  author_id uuid references public.blog_authors(id) on delete set null,
  status text not null default 'draft' check (status in ('draft', 'published', 'scheduled')),
  published_at timestamptz,
  scheduled_at timestamptz,
  seo_title text,
  meta_description text,
  canonical_url text,
  og_title text,
  og_description text,
  og_image_path text,
  og_image_url text,
  robots_index boolean not null default true,
  robots_follow boolean not null default true,
  focus_keyword text,
  reading_time_minutes integer,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_post_categories (
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  category_id uuid not null references public.blog_categories(id) on delete restrict,
  created_at timestamptz not null default now(),
  primary key (post_id, category_id)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger blog_admins_set_updated_at
before update on public.blog_admins
for each row execute function public.set_updated_at();

create trigger blog_authors_set_updated_at
before update on public.blog_authors
for each row execute function public.set_updated_at();

create trigger blog_categories_set_updated_at
before update on public.blog_categories
for each row execute function public.set_updated_at();

create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row execute function public.set_updated_at();

create index if not exists blog_posts_status_published_idx
on public.blog_posts(status, published_at desc);

create index if not exists blog_posts_author_idx
on public.blog_posts(author_id);

create index if not exists blog_post_categories_category_idx
on public.blog_post_categories(category_id);

create or replace function public.is_blog_admin()
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1
    from public.blog_admins ba
    where ba.user_id = auth.uid()
  );
$$;

revoke all on function public.is_blog_admin() from public;
grant execute on function public.is_blog_admin() to anon, authenticated;

alter table public.blog_admins enable row level security;
alter table public.blog_authors enable row level security;
alter table public.blog_categories enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_post_categories enable row level security;

create policy "public can read active authors"
on public.blog_authors
for select
using (is_active = true);

create policy "public can read published categories"
on public.blog_categories
for select
using (is_active = true);

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

create policy "public can read published posts"
on public.blog_posts
for select
using (status = 'published' and published_at <= now());

create policy "admin can manage authors"
on public.blog_authors
for all
using (public.is_blog_admin())
with check (public.is_blog_admin());

create policy "admin can manage categories"
on public.blog_categories
for all
using (public.is_blog_admin())
with check (public.is_blog_admin());

create policy "admin can manage posts"
on public.blog_posts
for all
using (public.is_blog_admin())
with check (public.is_blog_admin());

create policy "admin can manage post categories"
on public.blog_post_categories
for all
using (public.is_blog_admin())
with check (public.is_blog_admin());
