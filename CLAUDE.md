# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server with Turbo (runs on http://localhost:3000)
- `pnpm run lint` - Run Next.js linting
- `pnpm run build` - Build the production application

### Deployment
- `pnpm run deploy` - Build, export, and deploy to GitHub Pages

## Architecture

This is a Next.js 15 portfolio website using the App Router architecture with TypeScript and Tailwind CSS.

### Key Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main homepage with all portfolio sections
  - `contact/page.tsx` - Contact page
  - `projects/page.tsx` - Projects page with extended project listing
- `/src/components/` - Reusable React components, each with its own module CSS
  - Main sections: Splash, Education, Honors, Skills, Experience, Projects
  - Utility components: Nav, Footer, BackToTop
- `/public/` - Static assets including images and resume files
- Styling: Combination of CSS Modules (*.module.css) and Tailwind CSS
- AOS (Animate On Scroll) library for scroll animations
- React Icons and Font Awesome for iconography

### Component Pattern
Components follow a consistent pattern:
- Named exports from dedicated folders
- Separate CSS module files for styling
- Client components when using hooks or browser APIs
- TypeScript interfaces for props when needed

### Path Alias
- `@/*` maps to `./src/*` for clean imports