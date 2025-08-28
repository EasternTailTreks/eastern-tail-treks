# Eastern Tail Treks — Simple Website

This is a lightweight, single-page site for your dog-walking business.

## How to edit
- Open `index.html` in any text editor.
- Replace the Messenger link (`https://m.me/EasternTailTreks`) with your real Facebook Page messenger link if different.
- Replace the email `hello@easterntrailtreks.example` with your real email.
- Adjust hours, pricing, suburbs, and text as needed.
- Colours and fonts live in `styles.css` (brand palette is at the top).

## How to preview
- Double-click `index.html` to open it in your browser.
- For best results with fonts, use a simple local server (e.g., VS Code Live Server, or `python -m http.server` in this folder).

## How to publish (easy options)
- **Netlify**: Drag-and-drop the folder onto app.netlify.com (free).  
- **GitHub Pages**: Push to a repo and enable Pages in settings.  
- **Cloudflare Pages / Vercel**: Import from GitHub.

## SEO & Accessibility
- Meta tags and OpenGraph are included in `<head>`.
- Basic Schema.org LocalBusiness structured data is included.
- Buttons have accessible labels and sufficient colour contrast.

© 2025 Eastern Tail Treks


## Contact form (no login needed)
The booking form is wired to Formsubmit to send messages to **meganhjohnson123@gmail.com**.
- You can change this by editing the `<form action="https://formsubmit.co/meganhjohnson123@gmail.com" ...>` in `index.html`.
- A hidden field `_honey` acts as a spam honeypot.
- If you later switch to Formspree, just replace the `action` URL.
