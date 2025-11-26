import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// ============================================
// CARD DESIGN SYSTEM
// Standardized container with consistent styles
// ============================================

type CardVariant = 'default' | 'bordered' | 'elevated' | 'glass';
type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type CardHoverEffect = 'none' | 'lift' | 'glow' | 'border';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  padding?: CardPadding;
  hoverEffect?: CardHoverEffect;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hoverEffect = 'border',
  onClick,
  animate = false,
  animationDelay = 0,
}: CardProps) => {
  // ============================================
  // STANDARDIZED CARD STYLES
  // ============================================

  // Variant styles - CONSISTENT PATTERNS
  const variants = {
    default: `
      bg-bg-secondary 
      border border-border
    `,
    bordered: `
      bg-bg-primary 
      border-2 border-border
    `,
    elevated: `
      bg-gradient-to-br from-bg-secondary to-bg-primary 
      border border-border 
      shadow-xl
    `,
    glass: `
      bg-bg-secondary/80 
      backdrop-blur-sm 
      border border-border
    `,
  };

  // Padding styles - STANDARDIZED
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',    // Default
    lg: 'p-8',
    xl: 'p-8 md:p-12',
  };

  // Hover effects - STANDARDIZED
  const hoverEffects = {
    none: '',
    lift: 'hover:scale-[1.02] hover:shadow-2xl',
    glow: 'hover:shadow-accent-primary/20 hover:shadow-2xl',
    border: 'hover:border-accent-primary/50',
  };

  // Base styles - CONSISTENT
  const baseStyles = `
    rounded-xl 
    transition-all duration-300
    ${onClick ? 'cursor-pointer' : ''}
  `;

  const combinedClassName = `
    ${baseStyles} 
    ${variants[variant]} 
    ${paddings[padding]} 
    ${hoverEffects[hoverEffect]} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: animationDelay }}
        whileHover={hoverEffect === 'lift' ? { y: -5 } : {}}
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
