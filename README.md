# Developer Portfolio

A responsive developer portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Component structure

Each main page section has its own component so you can update it independently:

```text
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Projects.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Services.jsx
    ├── ContactCTA.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── SectionLabel.jsx
```

`App.jsx` only imports the sections and arranges them in page order.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

1. Extract the ZIP file.
2. Open the extracted `developer-portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Where to make changes

- Hero text and code illustration: `src/components/Hero.jsx`
- Projects, images, descriptions, and URLs: `src/components/Projects.jsx`
- About content: `src/components/About.jsx`
- Skill cards: `src/components/Skills.jsx`
- Services: `src/components/Services.jsx`
- Contact details and form: `src/components/Contact.jsx`
- Navigation links and mobile menu: `src/components/Navbar.jsx`
- Footer: `src/components/Footer.jsx`
- Global styling and background texture: `src/index.css`
- Page section order: `src/App.jsx`

## Before publishing

Replace the following placeholders in the relevant component files:

- `Your Name`
- `hello@example.com`
- `https://wa.me/` with your WhatsApp link in international format, e.g. `https://wa.me/233XXXXXXXXX` (digits only)
- GitHub and LinkedIn URLs
- Project details and preview images; add live and repository links where appropriate

The contact form currently opens the visitor's default email application using a `mailto:` link. It does not send form submissions to a database or email API.

## Build for deployment

```bash
npm run build
```

Vite outputs the production website to the `dist` folder. Deploy that folder to Vercel, Netlify, or another static host.
