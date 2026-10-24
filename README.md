# Jitender Soni — 3D Full-Stack Developer Portfolio

A React + Vite portfolio with an interactive Three.js scene, project links, profile information, and contact options.

## Personal details

The portfolio profile is maintained in `src/constants/index.js`:

- Name: Jitender Soni
- Role: Full-Stack Developer
- Experience: 6 months at Webigeeks (specific dates and responsibilities intentionally omitted until confirmed)
- Email: `sonijitender221@gmail.com`
- LinkedIn: https://www.linkedin.com/in/jitender-soni-aa096b310
- GitHub: https://github.com/sonijitender221-byte

## Projects

Project cards are configured in `src/constants/index.js` and displayed by `src/pages/Projects.jsx`.

- Inventory Management System: https://github.com/sonijitender221-byte/inventory_management_systems
- Student Management System: https://github.com/sonijitender221-byte/Student_Management_System

Descriptions deliberately avoid claiming unverified features or technologies. Add verified stack details after checking each repository's README and source.

## Technology stack

- React 19 — component-based UI
- Vite 8 — development server and production build
- React Router DOM 7 — page navigation
- Three.js via React Three Fiber and Drei — 3D scene and GLB model loading
- React Spring Three — animation support
- Tailwind CSS 3, PostCSS, Autoprefixer — styling and CSS processing
- ESLint — static code checks

This is currently a frontend portfolio. The contact form uses a `mailto:` link to prepare a message in the visitor's default email app; it does not send mail through a server. A real backend/email provider would need to be configured for direct form delivery.

## Run on Windows

Use Node.js 20.19+ or a compatible newer LTS version and npm. Open PowerShell in the project root (`3D_PORTFOLIO`).

```powershell
npm ci
npm run dev
```

Vite prints a local URL, normally `http://localhost:5173`. Open that URL in your browser.

## Validate before deployment

```powershell
npm run lint
npm run build
npm run preview
```

Open the preview URL printed by Vite. Test the home page, About, Projects, Contact, every external link, and the 3D scene. A successful build alone does not prove that WebGL works on every device.

## Where to edit things

- `src/constants/index.js` — name, role, bio, email, LinkedIn, GitHub, experience, skills, and project repository URLs.
- `src/pages/Home.jsx` and `src/components/HomeInfo.jsx` — home screen and hero messages.
- `src/pages/About.jsx` — About content and technology list.
- `src/pages/Projects.jsx` — project cards and presentation.
- `src/pages/Contact.jsx` — contact links and mailto form.
- `src/components/Navbar.jsx` and `src/components/Footer.jsx` — navigation and footer.
- `src/models/` — 3D model components and interactions.
- `src/assets/3d/` — GLB models. Keep filenames/imports in sync if replacing assets.
- `src/index.css` and `tailwind.config.js` — styling and Tailwind settings.
- `index.html` — page title, description, and favicon.

## Troubleshooting

1. If dependencies are missing or the install is corrupted, close the dev server and run `npm ci` again.
2. If `npm ci` reports an optional native dependency error, remove `node_modules` and run `npm ci` again using a supported Node.js/npm version. Keep `package-lock.json` unless you intentionally update dependencies.
3. If the page is blank, open browser DevTools → Console and Network, and check failed JavaScript imports, GLB files, or WebGL errors.
4. If the 3D scene cannot render on a device, the scene error boundary displays a fallback message; other pages remain accessible.
5. The background music starts only after the visitor clicks the music control, because browsers restrict autoplay.

## Deployment

Run `npm run build`; upload the generated `dist/` folder to a static hosting provider. Configure SPA fallback/rewrite to `index.html` so `/about`, `/projects`, and `/contact` work when opened directly. For example, Vercel or Netlify can host the static build. Do not upload `.env` secrets or `node_modules`.

## Testing note

Lint and production-build commands should be run on the target machine after dependencies are installed. The source package should not include `node_modules`; npm reconstructs platform-specific packages from `package-lock.json` on install.
