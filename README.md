# GritLife website

The GritLife marketing site, hosted on **GitHub Pages** at **https://gritlife.app**.
No framework, no build step.

## Structure

```
.
├── index.html              # Home page — a single self-contained file exported
│                           #   from Claude Design (all CSS, fonts and images
│                           #   inlined). Edit it in Claude Design and re-export.
├── terms/index.html        # Terms of service  (hand-authored static page)
├── privacy-policy/index.html  # Privacy policy  (hand-authored static page)
├── css/styles.css          # Styles for the terms / privacy pages
├── js/main.js              # Mobile menu, cookie notice, footer year (legal pages)
├── fonts/                  # Basier Square + Permanent Marker (woff2)
├── images/                 # Logo, app-store badges, favicons (used by legal pages)
├── CNAME                   # Custom domain for GitHub Pages (gritlife.app)
├── sitemap.xml / robots.txt
└── .nojekyll               # Serve files as-is (no Jekyll)
```

The **home page** (`index.html`) is a self-contained export from the Claude Design
project — it inlines everything and does not use `css/`, `js/`, `fonts/` or `images/`.
Those folders exist only for the **Terms** and **Privacy** pages, which are still the
original hand-authored static pages (the app stores link to `/privacy-policy/`).

## Editing

- **Home page:** edit in the Claude Design project, export the self-contained file,
  and replace `index.html`. Its footer "Privacy policy" / "Terms of service" links
  point at `/privacy-policy/` and `/terms/`.
- **Terms / Privacy:** plain HTML — edit `terms/index.html` / `privacy-policy/index.html`
  directly. Their header/footer are duplicated between the two files.

### Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploying

GitHub Pages publishes from the default branch — commit and push:

```sh
git add -A && git commit -m "Update site" && git push
```

Live at https://gritlife.app within a minute or two.
