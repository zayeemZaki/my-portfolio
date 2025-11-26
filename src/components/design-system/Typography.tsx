import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// ============================================
// TYPOGRAPHY DESIGN SYSTEM
// Enforces consistent font sizes, weights, and line heights
// ============================================

type HeadingLevel = 1 | 2 | 3 | 4;
type TextVariant = 'body' | 'lead' | 'small' | 'caption';
type TextAlign = 'left' | 'center' | 'right';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  align?: TextAlign;
  gradient?: boolean;
  animate?: boolean;
}

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  align?: TextAlign;
  color?: 'primary' | 'secondary' | 'muted';
  animate?: boolean;
}

// Heading Component (H1-H4)
export const Heading = ({ 
  level, 
  children, 
  className = '', 
  align = 'left',
  gradient = false,
  animate = false
}: HeadingProps) => {
  // Typography scale - consistent across entire app
  const styles = {
    1: 'text-5xl md:text-6xl font-bold leading-tight', // Page titles
    2: 'text-4xl md:text-5xl font-bold leading-tight', // Section titles
    3: 'text-2xl md:text-3xl font-bold leading-snug',  // Subsection titles
    4: 'text-xl md:text-2xl font-semibold leading-snug', // Card titles
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const gradientClass = gradient 
    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent'
    : 'text-text-primary';

  const combinedClassName = `${styles[level]} ${alignments[align]} ${gradientClass} ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {level === 1 && <h1 className={combinedClassName}>{children}</h1>}
        {level === 2 && <h2 className={combinedClassName}>{children}</h2>}
        {level === 3 && <h3 className={combinedClassName}>{children}</h3>}
        {level === 4 && <h4 className={combinedClassName}>{children}</h4>}
      </motion.div>
    );
  }

  if (level === 1) return <h1 className={combinedClassName}>{children}</h1>;
  if (level === 2) return <h2 className={combinedClassName}>{children}</h2>;
  if (level === 3) return <h3 className={combinedClassName}>{children}</h3>;
  return <h4 className={combinedClassName}>{children}</h4>;
};

// Text Component (Body, Lead, Small, Caption)
export const Text = ({ 
  variant = 'body', 
  children, 
  className = '',
  align = 'left',
  color = 'secondary',
  animate = false
}: TextProps) => {
  // Typography scale for body text
  const styles = {
    lead: 'text-xl leading-relaxed',      // Large body text (intros, important paragraphs)
    body: 'text-base leading-relaxed',     // Default body text
    small: 'text-sm leading-normal',       // Small text (metadata, secondary info)
    caption: 'text-xs leading-normal',     // Captions, labels, fine print
  };

  const colors = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-secondary/70',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const combinedClassName = `${styles[variant]} ${colors[color]} ${alignments[align]} ${className}`;

  if (animate) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={combinedClassName}
      >
        {children}
      </motion.p>
    );
  }

  return <p className={combinedClassName}>{children}</p>;
};

// Label Component (for form labels, tags, badges)
interface LabelProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

export const Label = ({ 
  children, 
  className = '', 
  color = 'secondary', 
  size = 'sm'
}: LabelProps) => {
  const colors = {
    primary: 'text-accent-primary',
    secondary: 'text-text-secondary',
    success: 'text-accent-secondary',
    warning: 'text-yellow-500',
  };

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
  };

  return (
    <span className={`${sizes[size]} ${colors[color]} font-semibold uppercase tracking-wider ${className}`}>
      {children}
    </span>
  );
};
