import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type CardVariant = 'default' | 'bordered' | 'elevated' | 'glass';
export type CardHoverEffect = 'lift' | 'glow' | 'border' | 'none';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  hoverEffect?: CardHoverEffect;
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = 'border',
  padding = 'lg',
  onClick,
  animate = false,
  animationDelay = 0,
}: CardProps) => {
  // Variant styles
  const variants = {
    default: 'bg-bg-secondary border border-border',
    bordered: 'bg-bg-primary border-2 border-border',
    elevated: 'bg-gradient-to-br from-bg-secondary to-bg-primary border border-border shadow-xl',
    glass: 'bg-bg-secondary/50 backdrop-blur-sm border border-border',
  };

  // Hover effect styles
  const hoverEffects = {
    lift: 'hover:scale-[1.02] hover:shadow-2xl',
    glow: 'hover:shadow-accent-primary/20 hover:shadow-2xl',
    border: 'hover:border-accent-primary/50',
    none: '',
  };

  // Padding styles
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const baseStyles = `
    rounded-xl 
    transition-all duration-300
    ${onClick ? 'cursor-pointer' : ''}
  `;

  const combinedClassName = `
    ${baseStyles} 
    ${variants[variant]} 
    ${hoverEffects[hoverEffect]} 
    ${paddings[padding]} 
    ${className}
  `.replace(/\s+/g, ' ').trim();

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
