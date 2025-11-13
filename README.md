# Portfolio Website - Uttkarsh Tyagi

A modern, single-page portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📝 Customization Guide

### Updating Content

All content is centralized in `src/data/portfolio.ts`. Update the following:

#### Personal Information
- `personalInfo`: Update name, email, GitHub, LinkedIn, and CV link
- `heroContent`: Modify hero section text
- `aboutContent`: Update the about section text
- `skills`: Add or remove skills by category
- `projects`: Update project details, links, and descriptions
- `experience`: Update work experience entries
- `ctaContent`: Modify the call-to-action section
- `contactContent`: Update contact information
- `footerContent`: Change footer text

#### Project Links
Update the `codeLink` and `demoLink` properties in the `projects` array:
```typescript
{
  codeLink: "https://github.com/yourusername/project", // Your GitHub repo
  demoLink: "https://your-demo-url.com", // Your live demo URL (or null)
}
```

#### Experience Details
Update company names, dates, and bullet points in the `experience` array:
```typescript
{
  title: "Backend Intern – Your Company Name",
  period: "January 2024 – June 2024", // Update dates
  bullets: [
    "Your experience bullet points",
  ],
}
```

### Styling

#### Colors
Update accent colors in `tailwind.config.js`:
```javascript
colors: {
  accent: {
    primary: '#3b82f6', // Change to your primary color
    secondary: '#8b5cf6', // Change to your secondary color
  },
}
```

#### Custom Styles
Add custom utility classes in `src/index.css` under the `@layer utilities` section.

### Adding CV File

1. Place your CV PDF in the `public` folder
2. Update the `cv` path in `src/data/portfolio.ts`:
```typescript
cv: "/your-cv-filename.pdf",
```

## 🏗️ Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.tsx
│   ├── Section.tsx
│   ├── ProjectCard.tsx
│   └── ExperienceCard.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/            # Content data
│   └── portfolio.ts
├── utils/           # Utility functions
│   └── scroll.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Dark theme with glassmorphism effects
- ✅ Sticky navigation with scroll detection
- ✅ Mobile-friendly hamburger menu
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Optimized for performance
- ✅ TypeScript for type safety

## 📦 Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations

## 🚢 Deployment

### Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy (automatic on push)

### Netlify
1. Push your code to GitHub
2. Import the repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available for personal use.
