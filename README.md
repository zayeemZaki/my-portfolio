# Modern Portfolio - Software Engineer & AI Specialist

A high-performance, modern portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. Designed to impress hiring managers at top tech companies with a clean, professional aesthetic and seamless user experience.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Roboto Mono (Google Fonts)

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glassmorphism navbar
│   │   ├── Footer.tsx           # Footer with social links
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero section with CTA
│   │       ├── Skills.tsx       # Categorized tech skills
│   │       ├── FeaturedExperience.tsx  # Latest work experience
│   │       ├── FeaturedProjects.tsx    # Top 2 projects showcase
│   │       └── Contact.tsx      # Contact section
│   ├── pages/
│   │   ├── Home.tsx            # Main landing page
│   │   ├── Experience.tsx      # Full resume/timeline view
│   │   └── ProjectDetails.tsx  # Individual project case study
│   ├── store/
│   │   └── data.ts            # All portfolio content (EDIT THIS!)
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── App.tsx                # Main app with routing
│   ├── main.tsx              # App entry point
│   ├── index.css             # Global styles + Tailwind
│   └── vite-env.d.ts         # Vite type definitions
├── public/                    # Static assets
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies

```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue-500 (#3b82f6)
- **Secondary**: Emerald-500 (#10b981)
- **Background**: Slate-900/950 (Dark theme)
- **Glassmorphism**: Backdrop blur effects for modern UI

### Typography
- **Primary Font**: Inter (300-900 weights)
- **Mono Font**: Roboto Mono (for code/technical elements)

### Key Design Elements
- ✨ Smooth scroll animations with Framer Motion
- 🎭 Glassmorphism navbar with blur effects
- 📱 Fully responsive (mobile-first design)
- 🌊 Gradient accents and hover effects
- ⚡ Lightning-fast page loads with Vite

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Update your personal information**:
   - Edit `src/store/data.ts` with your details (see customization guide below)
   - Add your profile photo to `/public/profile.jpeg`
   - Add your resume PDF to `/public/resume.pdf`
   - Add project thumbnails to `/public/projects/`

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Customization Guide

### Step 1: Update Personal Info

Edit `src/store/data.ts` → `personalInfo` section:

```typescript
personalInfo: {
  name: 'Your Full Name',
  title: 'Your Job Title',
  headline: 'Your compelling headline',
  subheadline: 'Your elevator pitch',
  email: 'your.email@example.com',
  location: 'City, State',
  profileImage: '/profile.jpg',  // Add image to public folder
  resumeUrl: '/resume.pdf',      // Add PDF to public folder
  bio: 'Your brief bio...',
  socialLinks: [
    { platform: 'GitHub', url: 'YOUR_GITHUB_URL', icon: 'github' },
    { platform: 'LinkedIn', url: 'YOUR_LINKEDIN_URL', icon: 'linkedin' },
  ]
}
```

### Step 2: Add Your Skills

Update the `skills` array:

```typescript
skills: [
  { name: 'Python', category: 'Languages' },
  { name: 'React', category: 'Frameworks' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'Docker', category: 'Tools' },
  // Add more...
]
```

Categories: `Languages`, `Frameworks`, `AI/ML`, `Tools`

### Step 3: Add Work Experience

Update the `experiences` array:

```typescript
{
  id: 'exp-1',
  role: 'Senior Software Engineer',
  company: 'Company Name',
  companyUrl: 'https://company.com',
  location: 'San Francisco, CA',
  startDate: '2022-01',
  endDate: 'Present',
  current: true,
  bullets: [
    {
      text: 'Achievement with metrics and impact',
      impact: '40% improvement'
    }
  ],
  technologies: ['React', 'Node.js', 'AWS']
}
```

### Step 4: Add Projects

Update the `projects` array:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  shortDescription: 'One-line description',
  fullDescription: 'Detailed description...',
  thumbnail: '/projects/project-name.jpg',  // Add to public/projects/
  techStack: ['React', 'Python', 'AWS'],
  category: 'AI/ML' or 'Full-Stack',
  featured: true,  // Shows on homepage (top 2 only)
  liveUrl: 'https://demo.com',
  repoUrl: 'https://github.com/you/repo',
  date: '2024-03',
  keyFeatures: ['Feature 1', 'Feature 2'],
  systemDesign: {
    description: 'Architecture overview',
    components: ['Frontend', 'API', 'Database'],
    imageUrl: '/projects/architecture.png'  // Optional
  },
  technicalChallenges: {
    situation: 'The problem...',
    task: 'What needed to be done...',
    action: 'How you solved it...',
    result: 'The outcome with metrics...'
  }
}
```

### Step 5: Add Assets

Place these files in the `/public` folder:
- `profile.jpg` - Your professional photo
- `resume.pdf` - Your resume PDF
- `my-icon.png` - Favicon
- `imgg.png` - Open Graph image
- `projects/` folder with project screenshots

## 🎯 Site Architecture

### Home Page (/) - Single Scroll Experience
1. **Hero Section**: Name, headline, photo, CTA buttons
2. **Skills Section**: Tech stack organized by category
3. **Featured Experience**: Most recent role expanded + 2 compact previous roles
4. **Featured Projects**: Top 2 projects with large cards
5. **Contact Section**: Email + social links (no calendar)

### Experience Page (/experience)
- Full professional timeline
- All roles with complete details
- Download resume button
- Vertical timeline layout

### Project Details Page (/project/:id)
- Project header with title, date, links
- Large hero image
- System Architecture section with diagram
- Technical Challenges (STAR method breakdown)
- Key Features list
- Full tech stack

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Deploy to Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy!

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📊 Performance Features

- ⚡ Vite for instant HMR and optimized builds
- 🎨 Tailwind CSS for minimal CSS bundle
- 🖼️ Lazy loading for images
- 📦 Code splitting with React Router
- 🔄 Smooth animations with Framer Motion (GPU accelerated)

## 🎓 Best Practices Implemented

- ✅ TypeScript strict mode for type safety
- ✅ Separation of concerns (data vs. presentation)
- ✅ Reusable component architecture
- ✅ Accessible (semantic HTML, ARIA labels)
- ✅ SEO optimized (meta tags, structured data)
- ✅ Mobile-first responsive design
- ✅ Clean, maintainable code structure

## 🐛 Troubleshooting

### Issue: Dependencies not installing
**Solution**: Use `npm install --legacy-peer-deps`

### Issue: Vite not starting
**Solution**: Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install --legacy-peer-deps
npm run dev
```

### Issue: Images not loading
**Solution**: Ensure images are in `/public` folder and paths start with `/`

### Issue: Routing not working in production
**Solution**: Configure your hosting provider for SPA routing (all routes → index.html)

## 📚 Key Files to Customize

**Must Edit:**
- `src/store/data.ts` - All your content
- `public/profile.jpg` - Your photo
- `public/resume.pdf` - Your resume

**Optional:**
- `tailwind.config.js` - Colors, fonts
- `src/components/Navbar.tsx` - Update logo
- `index.html` - Meta tags, site title

## 🎨 Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR',  // Main accent
  },
  emerald: {
    500: '#YOUR_COLOR',  // Secondary accent
  },
}
```

## 📧 Support

If you have questions:
1. Check the code comments in `src/store/data.ts`
2. Review TypeScript types in `src/types/index.ts`
3. Consult [React Router docs](https://reactrouter.com/)
4. Check [Tailwind CSS docs](https://tailwindcss.com/)

## 📄 License

This portfolio template is open source. Feel free to use it for your own portfolio!

---

**Built with ❤️ for Software Engineers and AI Specialists**

Good luck with your job search! 🚀
