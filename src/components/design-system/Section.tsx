import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// ============================================
// SECTION DESIGN SYSTEM
// Enforces uniform spacing, max-width, and padding
// ============================================

type SectionBackground = 'primary' | 'secondary' | 'gradient' | 'transparent';
type SectionWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: SectionBackground;
  width?: SectionWidth;
  paddingY?: SectionPadding;
  paddingX?: boolean; // true for responsive horizontal padding
  animate?: boolean;
}

const Section = ({
  children,
  id,
  className = '',
  background = 'primary',
  width = 'lg',
  paddingY = 'lg',
  paddingX = true,
  animate = false,
}: SectionProps) => {
  // Background colors - STANDARDIZED
  const backgrounds = {
    primary: 'bg-slate-950',        // Main dark background
    secondary: 'bg-slate-900',      // Alternate dark background
    gradient: 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950', // Gradient
    transparent: 'bg-transparent',   // No background
  };

  // Container max-widths - STANDARDIZED
  const widths = {
    sm: 'max-w-3xl',   // Narrow content (blogs, single column)
    md: 'max-w-5xl',   // Medium content (about, experience)
    lg: 'max-w-7xl',   // Wide content (projects grid, main sections)
    xl: 'max-w-[1400px]', // Extra wide (full-width layouts)
    full: 'max-w-full',   // Full width (no constraint)
  };

  // Vertical padding - STANDARDIZED
  const paddingsY = {
    none: 'py-0',
    sm: 'py-12',  // Small sections
    md: 'py-16',  // Medium sections
    lg: 'py-20',  // Large sections (default for most sections)
    xl: 'py-24',  // Extra large sections
  };

  // Horizontal padding - STANDARDIZED (responsive)
  const paddingXClass = paddingX ? 'px-4 sm:px-6 lg:px-8' : '';

  const WrapperComponent = animate ? motion.section : 'section';
  const animationProps = animate
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <WrapperComponent
      id={id}
      className={`${backgrounds[background]} ${paddingsY[paddingY]} ${paddingXClass} ${className}`}
      {...animationProps}
    >
      <div className={`${widths[width]} mx-auto`}>
        {children}
      </div>
    </WrapperComponent>
  );
};

export default Section;
