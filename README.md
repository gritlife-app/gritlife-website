# GritLife website

The GritLife marketing site — a plain, static HTML/CSS site with no framework and
no build step. Hosted on **GitHub Pages** at **https://gritlife.app**.

## Structure

```
.
├── index.html              # Home ("Nail your fears!")
├── our-story/index.html    # Our story
├── terms/index.html        # Terms of service
├── privacy-policy/index.html
├── 404.html                # Not-found page (served automatically by Pages)
├── css/styles.css          # All styles. Design tokens live in :root at the top.
├── js/main.js              # Mobile menu, cookie notice, footer year
├── fonts/                  # Self-hosted Basier Square + Permanent Marker (woff2)
├── images/                 # Logo, app screenshots, story photos, icons
├── CNAME                   # Custom domain for GitHub Pages (gritlife.app)
├── sitemap.xml / robots.txt
└── .nojekyll               # Tells Pages to serve files as-is (no Jekyll)
```

## Editing

Everything is hand-editable HTML/CSS — no tooling required.

- **Text / page content:** edit the relevant `*.html` file directly.
- **Colours, fonts, spacing:** edit the CSS custom properties in the `:root` block
  at the top of `css/styles.css`.
- **The header and footer are repeated in each page.** If you change one, apply the
  same change to the others (home, our-story, terms, privacy-policy, 404).

### Preview locally

No build needed. Serve the folder with any static server, e.g.:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

(Use a server rather than opening the files directly so the root-absolute paths
like `/css/styles.css` resolve.)

## Deploying

GitHub Pages publishes automatically from the default branch — just commit and push:

```sh
git add -A
git commit -m "Update content"
git push
```

Changes go live at https://gritlife.app within a minute or two.

## Notes

- The newsletter form posts to the existing MailChimp list.
- App store links and social links live inline in each page's header/footer.
- This site was migrated from a Gatsby + Netlify CMS project; the CMS was dropped
  in favour of editing the static files directly.
