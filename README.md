# oscar-site

Personal site: profile, blog, and resume. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, role, social links, nav | `src/data/site.ts` |
| Resume content | `src/data/resume.json` |
| Blog posts (Markdown/MDX) | `src/content/blog/` |
| Home page | `src/pages/index.astro` |
| Theme colors and type | `src/styles/global.css` |

New post: add `src/content/blog/my-post.md` with `title`, `description`, `pubDate` (and `draft: true` while writing).

Resume PDF: open `/resume/` and click **Save as PDF** (print styles hide the site chrome).

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml` and publishes to GitHub Pages.
Live at https://oscarrodar.com (custom domain set in Settings → Pages; DNS on Cloudflare).
The canonical URL lives in `astro.config.mjs` (`SITE_URL`).
