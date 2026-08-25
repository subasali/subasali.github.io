# Subas Ali — Academic Website

Static multi-page site (plain HTML/CSS/JS). No build step, no backend, no dependencies.

## Deploy on GitHub Pages
1. Upload all files to your repository (keep the folder structure: css/, js/, assets/).
2. In the repo: Settings → Pages → Build and deployment → Source: "Deploy from a branch",
   pick your branch and the root (/) folder. Save.
3. The `.nojekyll` file (included) tells GitHub Pages to serve every folder as-is.
4. Keep any existing `CNAME` file if you use a custom domain (e.g. subasali.com).

## Contact form
No backend is used. The "Send a message" form opens the visitor's own email app
with the message pre-filled to amjad.subas@edu.pte.hu. The email links/buttons work
the same way. (If you later want messages captured server-side, a free Formspree
endpoint can be dropped into the form's action — ask and it can be wired up.)

## Structure
- index.html, about.html, research.html, publications.html, teaching.html,
  conferences.html, contact.html
- css/styles.css, js/main.js, assets/portrait.png

Pages are generated from build_site.py (development helper; not needed to deploy).
