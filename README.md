# Photography studio site — starter

A working scaffold for a wedding/portfolio photography site (modelled on
the plan for thephotostore.in): Astro + Tailwind, content stored as
Markdown/MDX files in the repo (no CMS account needed), a contact form
via Web3Forms, and video embedded from YouTube/Vimeo instead of
self-hosted. Everything here runs on free tiers, so the only real
recurring cost once it's live is the domain.

## What's inside

- `src/content/weddings|editorial|films|blog/*.mdx` — every gallery item
  and blog post is one file. Add a new one, fill in the frontmatter, and
  it appears on the site automatically — that's the whole "maintenance"
  workflow.
- `src/content/config.ts` — the schema for each content type (Zod). If a
  new `.mdx` file's frontmatter doesn't match, the build fails loudly
  instead of shipping a broken page.
- `src/components/GalleryGrid.astro` — one grid component reused by the
  Wedding, Editorial and Films hub pages.
- `src/pages/contact.astro` — posts straight to Web3Forms, no backend.
- `public/images/placeholders/*.svg` — placeholder art so the site
  renders. **Replace every one of these with real photos before launch**
  (see "Adding real photos" below).

## Run it locally

```bash
npm install
cp .env.example .env      # then paste a free Web3Forms key into .env
npm run dev
```

Open the URL it prints (usually http://localhost:4321).

## Adding real photos

Drop optimized JPGs/WebP files into `public/images/...` and point a
content file's `cover`/`gallery` fields at them, e.g.
`/images/weddings/priya-arjun/01.jpg`. For real production use, consider
moving to Astro's built-in `<Image />` component (`astro:assets`) for
automatic responsive sizing — this scaffold uses plain `<img>` tags to
keep things simple to start with.

## Adding a new wedding / blog post / film

Copy an existing file in the matching `src/content/<type>/` folder,
rename it, and edit the frontmatter + body. No CMS login, no server
restart — just commit and push (see Deploy below) and it's live.

## Contact form

1. Get a free access key at https://web3forms.com (no signup required).
2. Put it in `.env` as `PUBLIC_WEB3FORMS_KEY=...` for local dev.
3. Add the same variable in your host's environment-variables settings
   for production (Cloudflare Pages → Settings → Environment variables).

## Deploying (Cloudflare Pages — free, unlimited bandwidth)

1. Push this project to a GitHub repo.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages →
   Connect to Git → pick the repo.
3. Build command: `npm run build` — output directory: `dist`.
4. Add the `PUBLIC_WEB3FORMS_KEY` environment variable.
5. Deploy. Every push to `main` redeploys automatically; every other
   branch/PR gets its own preview URL — that's your staging environment,
   for free.

## Pointing your GoDaddy domain at it

1. In Cloudflare Pages, open the project → Custom domains → add your
   domain.
2. Cloudflare shows you the DNS record(s) to add.
3. In GoDaddy: My Products → the domain → DNS → add those records.
4. DNS can take a few minutes to ~24 hours to propagate. Once it
   resolves, confirm the padlock (HTTPS) is active before calling it live.

## Before launch checklist

- [ ] Replace every placeholder image under `public/images/`
- [ ] Replace every "Example content" paragraph in `src/content/`
- [ ] Update the studio name in `src/layouts/BaseLayout.astro` and
      `src/components/Header.astro` / `Footer.astro`
- [ ] Set the real `site` URL in `astro.config.mjs`
- [ ] Swap the real Web3Forms key into production env vars
- [ ] Point a free uptime monitor (UptimeRobot) at the live URL
- [ ] Run `npm run build` locally once and check for warnings
# Demo-1
