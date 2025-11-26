# Intelligence & Engineering Color System Guide

## Overview
This portfolio uses a cohesive color palette based on **Tailwind's Zinc (neutrals)** and **Indigo (brand)** colors, ensuring perfect consistency across Light and Dark modes.

---

## 🎨 Color Palette Rules

### Neutrals (Backgrounds & Borders)

#### Light Mode
- **Main Surface:** `bg-white`
- **Secondary Surface (Cards):** `bg-zinc-50`
- **Tertiary Surface (Hover):** `bg-zinc-100`
- **Borders:** `border-zinc-200` (default) or `border-zinc-100` (subtle)

#### Dark Mode
- **Main Surface:** `bg-zinc-950` (NOT pure black)
- **Secondary Surface (Cards):** `bg-zinc-900`
- **Tertiary Surface (Hover):** `bg-zinc-800`
- **Borders:** `border-zinc-800` (default) or `border-zinc-900` (subtle)

### Typography

#### Light Mode
- **Headings:** `text-zinc-900`
- **Body Text:** `text-zinc-600`
- **Muted Text:** `text-zinc-500`

#### Dark Mode
- **Headings:** `text-zinc-50`
- **Body Text:** `text-zinc-400`
- **Muted Text:** `text-zinc-500`

### Brand / Primary Action

#### Light Mode
- **Primary Color:** `bg-indigo-600` / `text-indigo-600`
- **Hover State:** `bg-indigo-700` / `text-indigo-700`
- **Light Background:** `bg-indigo-50`

#### Dark Mode
- **Primary Color:** `bg-indigo-500` / `text-indigo-500`
- **Hover State:** `bg-indigo-400` / `text-indigo-400`
- **Dark Background:** `bg-indigo-950`

---

## 📦 Component Patterns

### 1. Cards & Modals

```tsx
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-lg shadow-zinc-200/50 dark:shadow-none">
  <h3 className="text-zinc-900 dark:text-zinc-50 font-semibold mb-2">
    Card Title
  </h3>
  <p className="text-zinc-600 dark:text-zinc-400">
    Card description text goes here.
  </p>
</div>
```

### 2. Primary Button (Already Implemented)

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="md">
  Click Me
</Button>
```

**Generated Classes:**
```css
bg-indigo-600 hover:bg-indigo-700 
dark:bg-indigo-500 dark:hover:bg-indigo-400 
text-white shadow-lg
```

### 3. Secondary/Outline Button (Already Implemented)

```tsx
<Button variant="outline" size="md">
  Learn More
</Button>
```

**Generated Classes:**
```css
bg-transparent 
border-2 border-zinc-200 dark:border-zinc-800 
text-zinc-900 dark:text-zinc-100 
hover:bg-zinc-50 dark:hover:bg-zinc-900
hover:border-indigo-600 dark:hover:border-indigo-500
```

### 4. Glassmorphic Header (Already Implemented)

The Navbar uses:
```tsx
className={`
  bg-white/80 dark:bg-zinc-950/80 
  backdrop-blur-md 
  border-b border-zinc-100 dark:border-zinc-800
`}
```

Or use the utility class:
```tsx
<div className="glass border-b border-zinc-100 dark:border-zinc-800">
  Glassmorphic content
</div>
```

### 5. Links & Navigation

```tsx
<a 
  href="#" 
  className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
>
  Nav Link
</a>
```

### 6. Input Fields

```tsx
<input
  type="text"
  className="
    bg-white dark:bg-zinc-900 
    border border-zinc-200 dark:border-zinc-800 
    text-zinc-900 dark:text-zinc-50
    placeholder:text-zinc-400 dark:placeholder:text-zinc-500
    focus:border-indigo-600 dark:focus:border-indigo-500
    focus:ring-2 focus:ring-indigo-500/20
    rounded-lg px-4 py-2
    transition-colors
  "
  placeholder="Enter text..."
/>
```

### 7. Dividers / Separators

```tsx
<hr className="border-t border-zinc-200 dark:border-zinc-800" />
```

### 8. Section Backgrounds

```tsx
{/* Alternate section background */}
<section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
  <div className="max-w-7xl mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### 9. Badges / Tags

```tsx
{/* Tech stack tag */}
<span className="
  px-3 py-1 
  bg-zinc-100 dark:bg-zinc-800 
  text-zinc-700 dark:text-zinc-300 
  text-sm font-mono rounded-full
">
  React
</span>

{/* Primary badge */}
<span className="
  px-3 py-1 
  bg-indigo-50 dark:bg-indigo-950 
  text-indigo-700 dark:text-indigo-300 
  text-sm font-medium rounded-full
  border border-indigo-200 dark:border-indigo-800
">
  Featured
</span>
```

### 10. Loading States / Skeletons

```tsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2"></div>
</div>
```

---

## 🛠️ CSS Variables (for Advanced Use)

If you need to use RGB values in custom styles, the following CSS variables are available:

### Backgrounds
- `--bg-primary` (white / zinc-950)
- `--bg-secondary` (zinc-50 / zinc-900)
- `--bg-tertiary` (zinc-100 / zinc-800)

### Text
- `--text-primary` (zinc-900 / zinc-50)
- `--text-secondary` (zinc-600 / zinc-400)
- `--text-tertiary` (zinc-500 / zinc-500)

### Borders
- `--border-primary` (zinc-200 / zinc-800)
- `--border-secondary` (zinc-100 / zinc-900)

### Accent
- `--accent-primary` (indigo-600 / indigo-500)
- `--accent-hover` (indigo-700 / indigo-400)
- `--accent-light` (indigo-50 / indigo-950)

**Usage:**
```css
.custom-element {
  background-color: rgb(var(--bg-primary));
  color: rgb(var(--text-primary));
}
```

---

## ✅ Quick Reference Cheatsheet

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| **Page Background** | `bg-white` | `bg-zinc-950` |
| **Card Background** | `bg-zinc-50` | `bg-zinc-900` |
| **Heading Text** | `text-zinc-900` | `text-zinc-50` |
| **Body Text** | `text-zinc-600` | `text-zinc-400` |
| **Border** | `border-zinc-200` | `border-zinc-800` |
| **Primary Button** | `bg-indigo-600` | `bg-indigo-500` |
| **Primary Hover** | `hover:bg-indigo-700` | `hover:bg-indigo-400` |
| **Link Color** | `text-zinc-500` | `text-zinc-400` |
| **Link Hover** | `hover:text-indigo-600` | `hover:text-indigo-400` |

---

## 🚀 Migration Checklist

When updating old components to the new system:

- [ ] Replace `bg-primary` → `bg-white dark:bg-zinc-950`
- [ ] Replace `bg-secondary` → `bg-zinc-50 dark:bg-zinc-900`
- [ ] Replace `text-primary` → `text-zinc-900 dark:text-zinc-50`
- [ ] Replace `text-secondary` → `text-zinc-600 dark:text-zinc-400`
- [ ] Replace `border-border` → `border-zinc-200 dark:border-zinc-800`
- [ ] Replace `accent-primary` → `indigo-600 dark:indigo-500`
- [ ] Replace any `blue-*` with `indigo-*`
- [ ] Ensure shadows are `shadow-zinc-200/50 dark:shadow-none`
- [ ] Update hover states to use `indigo-*` colors

---

## 🎯 Best Practices

1. **Always use both light and dark classes together**
   ```tsx
   ✅ className="bg-white dark:bg-zinc-950"
   ❌ className="bg-white"
   ```

2. **Use semantic color choices**
   - Backgrounds: `zinc-*`
   - Text: `zinc-*`
   - Brand/Actions: `indigo-*`
   - Success: `green-*`
   - Error: `red-*`

3. **Maintain consistent spacing**
   - Use `gap-*`, `space-x-*`, `space-y-*` for consistent spacing
   - Stick to 4px increments (1, 2, 3, 4, 6, 8, 12, 16...)

4. **Add transitions for smooth theme switching**
   ```tsx
   className="transition-colors duration-200"
   ```

5. **Use the Button component for consistency**
   - Don't create custom button styles
   - Use the variants: `primary`, `secondary`, `outline`, `ghost`

---

## 📝 Example: Complete Page Component

```tsx
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const ExamplePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Building intelligent systems with modern engineering practices.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg">
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="
                  bg-white dark:bg-zinc-900 
                  border border-zinc-200 dark:border-zinc-800 
                  rounded-lg p-6 
                  hover:border-indigo-600 dark:hover:border-indigo-500
                  transition-all duration-200
                  shadow-lg shadow-zinc-200/50 dark:shadow-none
                "
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Project {i}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  A brief description of this amazing project.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono rounded">
                    TypeScript
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamplePage;
```

---

## 🎉 You're All Set!

Your portfolio now has a cohesive, professional color system that:
- ✅ Works perfectly in both light and dark modes
- ✅ Uses industry-standard Zinc and Indigo colors
- ✅ Maintains consistent spacing and typography
- ✅ Provides excellent contrast and accessibility
- ✅ Feels modern, clean, and engineered

**Happy coding!** 🚀

