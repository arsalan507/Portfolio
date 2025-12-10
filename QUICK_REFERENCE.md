# Quick Reference Guide

## 🚀 Development Server is Running!

Your portfolio is now live at: **http://localhost:3000**

Open this URL in your browser to see your portfolio!

---

## 📝 Quick Commands

```bash
# Development
npm run dev          # Start dev server (already running!)
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npx tsc --noEmit    # Type check
```

---

## 🔧 Must Update Before Deployment

### 1. Email Addresses
Search and replace `your.email@example.com` with your real email in:
- [components/Hero.tsx](components/Hero.tsx) - Line 14
- [components/Contact.tsx](components/Contact.tsx) - Line 12

### 2. Verify Social Links
Check these links are correct:
- GitHub: https://github.com/arsalan507
- LinkedIn: https://linkedin.com/in/arsalan507
- Instagram: https://instagram.com/arsalan507
- Twitter: https://twitter.com/arsalan507

### 3. Update Work Experience
Edit [components/Experience.tsx](components/Experience.tsx):
- Replace example work experience with your real experience
- Update education details
- Adjust dates

### 4. Personalize About Section
Edit [components/About.tsx](components/About.tsx):
- Write your own story
- Update the description
- Make it authentic

---

## 📂 Key Files to Customize

| File | What to Update | Priority |
|------|---------------|----------|
| `components/Hero.tsx` | Email, social links, tagline | 🔴 High |
| `components/Contact.tsx` | Email, contact info | 🔴 High |
| `components/Experience.tsx` | Work history, education | 🔴 High |
| `components/About.tsx` | Personal story | 🟡 Medium |
| `components/Projects.tsx` | Project details, links | 🟡 Medium |
| `components/Skills.tsx` | Skill levels | 🟢 Low |
| `app/layout.tsx` | SEO metadata | 🟢 Low |

---

## 🎨 Customization Examples

### Change Colors
Edit [app/globals.css](app/globals.css):
```css
/* Find and change these gradient colors */
from-blue-600 to-purple-600
/* Change to your preferred colors */
from-green-600 to-teal-600
```

### Add Your Resume
1. Place your PDF in `/public/resume.pdf`
2. The download button will automatically work!

### Update Projects
Edit the `projects` array in [components/Projects.tsx](components/Projects.tsx):
```typescript
{
  title: 'Your New Project',
  description: 'Description here',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/yourusername/repo',
  demo: 'https://your-demo-url.com',
  featured: true,
}
```

---

## 🌐 Deployment Quick Start

### Deploy to Vercel (Recommended - 5 minutes)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/arsalan507/portfolio.git
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! ✅

### Alternative: Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → Import from Git
4. Select your repo
5. Deploy!

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for more options.

---

## 📱 GitHub Profile Setup (10 minutes)

1. **Create Repository:**
   - Go to GitHub
   - Create new repository named `arsalan507` (your username)
   - Make it public
   - Initialize with README

2. **Copy Content:**
   - Open [GITHUB_PROFILE_README.md](GITHUB_PROFILE_README.md)
   - Copy all content
   - Paste into your new repository's README.md

3. **Customize:**
   - Update email address
   - Verify links
   - Update current projects

See [GITHUB_PROFILE_SETUP.md](GITHUB_PROFILE_SETUP.md) for detailed instructions.

---

## 🔍 Testing Checklist

Before deploying, test these:

- [ ] Open http://localhost:3000
- [ ] Check all sections load correctly
- [ ] Toggle dark mode (top right)
- [ ] Test mobile menu (resize browser)
- [ ] Click all navigation links
- [ ] Verify all external links work
- [ ] Test on mobile device (use browser dev tools)
- [ ] Check contact form displays correctly

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| [GETTING_STARTED.md](GETTING_STARTED.md) | Complete getting started guide |
| [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) | Deployment instructions |
| [GITHUB_PROFILE_SETUP.md](GITHUB_PROFILE_SETUP.md) | GitHub profile guide |
| [SETUP_SUMMARY.md](SETUP_SUMMARY.md) | What was created |
| [README.md](README.md) | Project documentation |
| QUICK_REFERENCE.md | This file - quick help |

---

## 🆘 Common Issues

### Port Already in Use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Dark Mode Not Working
- Make sure you didn't remove `suppressHydrationWarning` from `<html>` tag in layout.tsx

### Images Not Showing
- Place images in `/public/` folder
- Reference with `/image.png` (with leading slash)

---

## 📊 Project Stats

- **Components:** 8 (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer)
- **Pages:** 1 (Home)
- **Technologies:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Build Time:** ~7 seconds
- **Build Status:** ✅ Successful

---

## 🎯 Next Actions (In Order)

1. **Now:** Browse http://localhost:3000 and explore your portfolio
2. **Next 30 min:** Update personal information (email, social links, experience)
3. **Next 1 hour:** Customize content (about, projects, skills)
4. **Next 2 hours:** Deploy to Vercel
5. **Next 3 hours:** Set up GitHub profile
6. **Done!** Share your portfolio everywhere!

---

## 💡 Pro Tips

- Keep your portfolio updated with new projects
- Add blog posts in the future (optional)
- Use Vercel Analytics to track visitors
- Share on LinkedIn, Twitter, and in your resume
- Connect a custom domain for more professionalism

---

## 🔗 Important Links

- **Local Dev:** http://localhost:3000
- **GitHub Repo:** https://github.com/arsalan507/portfolio
- **Vercel:** https://vercel.com (for deployment)
- **Your GitHub:** https://github.com/arsalan507

---

## 📞 Need More Help?

1. Check [GETTING_STARTED.md](GETTING_STARTED.md)
2. Review [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
3. Read the component comments
4. Check Next.js documentation
5. Search Stack Overflow

---

**Remember:** Your portfolio is a work in progress. Start with the basics, deploy it, and improve it over time!

🎉 **Good luck with your portfolio!**

---

*Last Updated: December 10, 2025*
