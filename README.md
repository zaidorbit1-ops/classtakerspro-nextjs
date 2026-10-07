# Class Takers Pro

The website and backend API run together as one Next.js application.

## Local development

1. Install dependencies from the project root:

   ```bash
   npm install
   ```

2. Configure the private CRM values in the root `.env.local` file:

   ```env
   CRM_ENDPOINT=
   CRM_WEBSITE_ID=
   CRM_SECRET=
   ```

   Keep `.env.local` private; it is excluded from Git. Never add CRM secrets to
   client-side code or variables prefixed with `NEXT_PUBLIC_`.

3. Start the website and API together:

   ```bash
   npm run dev
   ```

   Open the local URL printed by Next.js. Pages and `/api/leads` are served by
   the same Next.js server, so forms use the current host automatically.

Run the unit tests with `npm test`.

## Production

Deploy this project as a Node.js/Next.js application (not as a static React
build). Configure `CRM_ENDPOINT`, `CRM_WEBSITE_ID`, and `CRM_SECRET` as private
server-side environment variables in the hosting panel, then deploy with:

```bash
npm install
npm run build
npm start
```

The existing page URLs are preserved: `/`, `/online-class`, `/online-exams`,
`/online-course`, `/online-assignment`, `/contact`, `/privacy-policy`, and
`/terms-and-condition`.

The forms post to the relative path `/api/leads`. On the production site this
resolves automatically to `https://www.classtakerspro.com/api/leads`; no
localhost URL or separate frontend API URL is needed.
