import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'default';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  hoverable = false,
  onClick,
}: BadgeProps) => {
  // Variant styles
  const variants = {
    primary: 'bg-accent-primary/90 text-white',
    secondary: 'bg-accent-secondary/90 text-white',
    success: 'bg-green-500/90 text-white',
    warning: 'bg-yellow-500/90 text-gray-900',
    default: 'bg-bg-secondary text-text-secondary border border-border',
  };

  // Size styles
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  // Hover styles
  const hoverStyles = hoverable
    ? 'hover:bg-accent-primary/10 hover:text-accent-primary transition-all duration-200 cursor-default'
    : '';

  const baseStyles = `
    inline-flex items-center justify-center
    rounded-full font-medium
    ${onClick ? 'cursor-pointer' : ''}
  `;

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${hoverStyles} ${className}`;

  if (hoverable && !onClick) {
    return (
      <motion.span whileHover={{ scale: 1.05 }} className={combinedClassName}>
        {children}
      </motion.span>
    );
  }

  if (onClick) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }

  return <span className={combinedClassName}>{children}</span>;
};

export default Badge;
