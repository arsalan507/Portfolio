# Arsalan Ahmed - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## Features

- **Modern Design**: Clean, professional design inspired by contemporary portfolio websites
- **Dark Mode**: Seamless light/dark theme switching with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations using Framer Motion
- **SEO Optimized**: Comprehensive meta tags and optimizations for search engines
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Type Safe**: Written in TypeScript for better code quality and maintainability

## Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Professional summary and highlights
- **Skills**: Categorized technical skills with progress indicators
- **Projects**: Showcase of featured projects from GitHub
- **Experience**: Work experience and education timeline
- **Contact**: Contact form and information

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arsalan507/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Contact Details**: Update email and social links in:
   - `components/Hero.tsx`
   - `components/Contact.tsx`

2. **Projects**: Modify the projects array in `components/Projects.tsx`

3. **Skills**: Update skill categories in `components/Skills.tsx`

4. **Experience**: Edit work experience and education in `components/Experience.tsx`

5. **Metadata**: Update SEO information in `app/layout.tsx`

### Styling

- Colors and theme can be customized in `app/globals.css`
- Tailwind configuration (if needed) can be added to `tailwind.config.ts`

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/arsalan507/portfolio)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`

### Deploy to GitHub Pages

1. Update `next.config.ts` with your repository name
2. Build and export: `npm run build`
3. Deploy the `out` folder to GitHub Pages

## GitHub Profile README

A professional GitHub profile README is included in `GITHUB_PROFILE_README.md`.

To use it:
1. Create a repository with the same name as your GitHub username (e.g., `arsalan507`)
2. Copy the contents of `GITHUB_PROFILE_README.md` to the repository's `README.md`
3. Commit and push to GitHub
4. Your profile will now display the enhanced README

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── providers/          # Theme provider
├── components/             # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/                 # Static assets
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Arsalan Ahmed - [@arsalan507](https://github.com/arsalan507)

Portfolio Link: [https://arsalan507.github.io](https://arsalan507.github.io)

---

Made with ❤️ by Arsalan Ahmed
