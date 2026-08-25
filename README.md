# Subas Ali — Academic Website

Seven self-contained HTML pages. The CSS, JavaScript, and portrait photo are
baked INSIDE each .html file, so there are no folders and nothing that can break.

## How to publish on GitHub (replace the old site)
1. Open your repository on github.com.
2. Add file -> Upload files.
3. Drag in these 7 files: index.html, about.html, research.html,
   publications.html, teaching.html, conferences.html, contact.html
   (You can also drag in .nojekyll and this README, but they are optional.)
4. Commit changes. Your old index.html is overwritten by the new one.

That's it — no css/, js/, or assets/ folders to worry about. Uploading does not
delete other files, so any CNAME (custom domain) file stays in place.

## Contact form
No backend. The form opens the visitor's email app with the message pre-filled
to amjad.subas@edu.pte.hu. The email links work the same way.

(build_site.py and the css/js/assets folders are development sources only —
you do NOT need to upload them. Everything is already inlined into the .html files.)
