# Vercel Static Site (HTML/CSS/JS)

This repository contains a minimal static website designed for deployment on Vercel.

Files:
- `index.html` — main page
- `styles.css` — styles
- `script.js` — small JavaScript for nav and contact form

How to deploy on Vercel:
1. Push this repository to GitHub (branch `main` recommended).
2. Sign in to Vercel (https://vercel.com) and click "Import Project" → "Import Git Repository".
3. Select this repository; Vercel will detect it as a static site. No build command is required.
4. Set the root directory to `/` and deploy. Subsequent pushes to `main` will auto-deploy.

Customizing:
- Replace text, colors, or assets in the files above.
- To hook the contact form to a real backend, replace the simulated send in `script.js` with a `fetch()` call to your API or a form service (Formspree, Netlify forms, etc.).

License: MIT (copy or change as you like)