# Supabase blog setup

## 1. Configure the local environment

Fill the Supabase values in the ignored `.env.local` file:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase Dashboard → Project Settings → API → Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase Dashboard → Project Settings → API → anon/public key
- `NEXT_PUBLIC_SITE_URL`: public website origin

Use only the anon/publishable key. This implementation does not need a service-role key: public reads follow RLS, OTP uses Supabase Auth, and admin operations use the signed-in user's cookies plus database authorization. Restart the Next.js dev server after saving `.env.local`.

## 2. Apply the migrations

Run these in order in Supabase SQL Editor:

1. `supabase/migrations/202610120001_create_blog_cms.sql`
2. `supabase/migrations/202610120002_public_blog_category_reads.sql`

They create the blog tables, RLS policies, admin-check helper, and indexes. Tables start empty; the former browser-only sample content is not copied into PostgreSQL.

## 3. Configure one-time email codes

In Supabase Dashboard → Authentication:

1. Enable the Email provider. Turn off public signups if this project must not accept new accounts.
2. Set the Email OTP template to include `{{ .Token }}`, for example: `Your Class Takers Pro blog login code is {{ .Token }}`. Do not use a magic-link-only template; this form asks the admin to enter the code.
3. Configure SMTP and the allowed site URLs as required by the Supabase project.

The login call sets `shouldCreateUser: false`; an email not already registered in Supabase Auth cannot create an account through this form.

## 4. Grant the first blog administrator

First create/invite the trusted account in Supabase Authentication → Users. Then grant that exact user blog access by running this in SQL Editor:

```sql
insert into public.blog_admins (user_id, role)
select id, 'admin'
from auth.users
where lower(email) = lower('your-admin@example.com')
on conflict (user_id) do update set role = excluded.role;
```

Only a project owner/DB administrator should run that grant. An Auth account alone cannot manage the blog: every admin API operation also checks `public.blog_admins`. Users who sign in but are not members are signed back out.

## 5. Routes and image storage

- Admin login: `/blog-admin/login`
- Dashboard: `/blog-admin`
- Posts: `/blog-admin/posts`
- Categories: `/blog-admin/categories`
- Authors: `/blog-admin/authors`
- Public listing: `/blog`

Public routes show only published posts with a publication time that has arrived. Duplicate slugs and category foreign-key restrictions return errors. For Storage bucket setup, see [blog-storage-setup.md](./blog-storage-setup.md). Featured-image URL and alt-text fields are persisted in PostgreSQL; browser file uploads to Supabase Storage are not yet implemented.
