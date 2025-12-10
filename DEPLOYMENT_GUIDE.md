# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Quick Start

1. Update your personal information in the components
2. Test locally: `npm run dev`
3. Build for production: `npm run build`
4. Choose a deployment platform below

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/arsalan507/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

**Advantages:**
- Automatic deployments on git push
- Free SSL certificates
- Global CDN
- Zero configuration needed
- Free for personal projects

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

**Advantages:**
- Simple deployment process
- Free tier available
- Form handling built-in
- Continuous deployment

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. **Update next.config.ts**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch
   - Save

Your site will be available at: `https://arsalan507.github.io/portfolio/`

**Note:** GitHub Pages has some limitations with Next.js dynamic features.

---

## Option 4: Deploy to Custom Server (VPS/Cloud)

### Using Docker:

1. **Create Dockerfile** (already in your project if you used the template)

2. **Build Docker image**
   ```bash
   docker build -t portfolio .
   ```

3. **Run container**
   ```bash
   docker run -p 3000:3000 portfolio
   ```

### Using PM2 (Node.js process manager):

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

---

## Environment Variables

If you need environment variables:

1. Create `.env.local` file (copy from `.env.example`)
2. Add your variables
3. In Vercel/Netlify: Add them in the dashboard under "Environment Variables"

---

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify dark mode toggle works
- [ ] Check mobile responsiveness
- [ ] Test contact form (if implemented)
- [ ] Verify social media links
- [ ] Check page load speed
- [ ] Test on different browsers
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to search engines

---

## Troubleshooting

### Build Errors

1. **TypeScript errors**
   ```bash
   npm run build
   ```
   Fix any TypeScript errors that appear

2. **Missing dependencies**
   ```bash
   npm install
   ```

3. **Clear cache**
   ```bash
   rm -rf .next
   npm run build
   ```

### Deployment Issues

1. **Vercel deployment fails**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

2. **Images not loading**
   - Check image paths (use `/` prefix for public folder)
   - Verify image optimization settings

3. **Dark mode not working**
   - Ensure next-themes is properly installed
   - Check if suppressHydrationWarning is in `<html>` tag

---

## Performance Optimization

1. **Optimize images**
   - Use WebP format
   - Compress images before uploading
   - Use Next.js Image component

2. **Enable caching**
   - Most platforms enable this by default
   - Configure cache headers if using custom server

3. **Monitor performance**
   - Use Vercel Analytics
   - Google PageSpeed Insights
   - Lighthouse scores

---

## Support

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review platform-specific guides (Vercel, Netlify, etc.)
3. Check GitHub issues in this repository

---

Good luck with your deployment! 🚀
