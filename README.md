# Adanian Labs UK site (React + Vite)

Three pages: Who We Are (`/`), Impact (`/impact`), Markets & Partners (`/markets`).

    npm install
    npm run dev      # local dev server
    npm run build    # production build in /dist

## Where to edit
- `src/content/site.js`: all copy, nav, links and the contact email.
- `src/content/images.js` and `public/images/`: image slots. All images are placeholders exported from the Figma mockup. Replace the file (keep the name) or change the path.
- `src/styles/global.css`: colour and type tokens at the top (`:root`).
- `public/logo.png`: 150px placeholder taken from the mockup. Swap for the SVG logo.

## Notes
- CTA buttons open `mailto:` to `SITE.contactEmail` with a subject per direction. Swap `CtaButton` in `src/components/ui.jsx` for a form or CRM link when one exists.
- SPA rewrites are included for Vercel (`vercel.json`) and Netlify/Render (`public/_redirects`).
- Fonts load from Google Fonts: Sora (headings) and Figtree (body).
