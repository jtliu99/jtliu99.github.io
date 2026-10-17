# Junting Liu

Personal academic website at https://jtliu99.github.io/.

The website uses plain HTML, CSS, and JavaScript. GitHub Pages serves the files
from the root of the `main` branch; `.nojekyll` disables Jekyll processing.

## Editing

- `index.html`: introduction and contact information.
- `research.html`: publications and working papers.
- `discussions.html`: conference discussions.
- `cv.html` and `CV-Junting.pdf`: curriculum vitae.
- `style.css`: Latin Modern typography, spacing, and light/dark colors.
- `theme.js`: theme toggle and saved visitor preference.
- `sitemap.xml` and `robots.txt`: page discovery for search engines. Update the
  sitemap and each page's canonical URL when adding or renaming pages.

The Latin Modern Roman font files and their license are in `assets/fonts/`.
No build step or external font service is required.

## Local preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this folder,
then open http://127.0.0.1:8765/.
