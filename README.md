# vinith.in

This is the source for my personal site, [vinith.in](https://vinith.in). The site uses [Astro](https://astro.build). It is a static site: the build makes HTML files only.

The `main` branch has the source. The `gh-pages` branch has the old 2022 Jekyll blog. It is not published.

## Run the site on your computer

You must have Node.js 20 or later.

```sh
npm install
npm run dev        # open http://localhost:4321
```

## Update the site

| To change | Edit |
| --- | --- |
| Your X (Twitter) handle, Strava and other profile links | `TWITTER`, `STRAVA_ID` and `links` in `src/data/site.ts` |
| The timeline, "What I built", and projects on the home page | `src/data/site.ts` |
| The text on the About page | `src/pages/about.astro` |
| The headline and the text on the home page | `src/pages/index.astro` |
| The colors and the fonts | `src/styles/global.css` |
| The resume PDF | Replace `public/Vinith_Sudhir_Resume.pdf` |

Do not put a phone number in the public resume PDF.

## Write a blog post

1. Make a Markdown file in `src/content/blog/`, for example `my-post.md`. The file name becomes the URL: `/blog/my-post/`.
2. Add this front matter at the top of the file:

   ```md
   ---
   title: My post
   date: 2026-11-24
   summary: One sentence about the post.
   draft: true
   ---
   ```

3. Write the post in Markdown.
4. When the post is ready, remove `draft: true`. Posts with `draft: true` do not appear on the site.

## Build

```sh
npm run build      # output goes to dist/
npm run preview    # look at the built site
```

## Publish

GitHub Pages publishes the site at [vinith.in](https://vinith.in). The workflow `.github/workflows/deploy.yml` builds the site and publishes `dist/` each time you push to `main`. You can also start it manually in the **Actions** tab.

- **Settings > Pages > Source** must be **GitHub Actions**.
- The custom domain is `vinith.in`. The file `public/CNAME` also sets this domain.
- The DNS records for `vinith.in` are at Gandi.
- `blog.vinith.in` forwards to `vinith.in/blog/` with Gandi web forwarding.
