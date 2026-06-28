# GritLife website

The GritLife marketing site, hosted on **GitHub Pages** at **https://gritlife.app**.
No framework, no build step.

The whole site is **three self-contained pages exported from the Claude Design
project** — each HTML file inlines its own CSS/images (the Newsreader serif loads
from Google Fonts). They cross-link to each other as flat files.

## Structure

```
.
├── index.html        # Home — "Face your fears, one small step at a time"
├── privacy.html      # Privacy policy
├── terms.html        # Terms of service
├── CNAME             # Custom domain (gritlife.app)
├── sitemap.xml / robots.txt
└── .nojekyll         # Serve files as-is (no Jekyll)
```

All three cross-link via flat relative paths (`index.html`, `privacy.html`,
`terms.html`), so the site also works when opened directly from disk (file://).

## Editing

Edit the pages in the **Claude Design project**, export each as a self-contained
file, and replace the matching file here (`index.html`, `privacy.html`,
`terms.html`). Then commit and push.

### Preview locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000   # http://localhost:8000
```

## Deploying

GitHub Pages publishes from the default branch — commit and push:

```sh
git add -A && git commit -m "Update site" && git push
```

Live at https://gritlife.app within a minute or two.

> Note: the privacy/terms URLs are now `/privacy.html` and `/terms.html` (they were
> previously `/privacy-policy/` and `/terms/`). If the App Store / Google Play
> listings link to the old paths, update them to the new ones.
