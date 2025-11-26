import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  disabled = false,
  type = 'button',
  fullWidth = false,
}: ButtonProps) => {
  // Variant styles - Updated with Zinc/Indigo system
  const variants = {
    // Primary: Indigo background, white text
    primary: `
      bg-indigo-600 hover:bg-indigo-700 
      dark:bg-indigo-500 dark:hover:bg-indigo-400 
      text-white 
      shadow-lg shadow-indigo-500/25 
      hover:shadow-xl hover:shadow-indigo-500/40
      border border-transparent
    `,
    
    // Secondary: Zinc background, darker text
    secondary: `
      bg-zinc-100 hover:bg-zinc-200 
      dark:bg-zinc-800 dark:hover:bg-zinc-700 
      text-zinc-900 dark:text-zinc-50 
      shadow-sm
      border border-zinc-200 dark:border-zinc-700
    `,
    
    // Outline: Transparent with border
    outline: `
      bg-transparent 
      border-2 border-zinc-200 dark:border-zinc-800 
      text-zinc-900 dark:text-zinc-100 
      hover:bg-zinc-50 dark:hover:bg-zinc-900
      hover:border-indigo-600 dark:hover:border-indigo-500
      hover:text-indigo-600 dark:hover:text-indigo-400
    `,
    
    // Ghost: Minimal styling
    ghost: `
      bg-transparent 
      text-zinc-600 dark:text-zinc-400 
      hover:bg-zinc-100 dark:hover:bg-zinc-800 
      hover:text-zinc-900 dark:hover:text-zinc-50
    `,
  };

  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg 
    transition-all duration-200 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
  `;

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.replace(/\s+/g, ' ').trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon 
          size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} 
          className="group-hover:translate-x-1 transition-transform" 
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`${combinedClassName} group`}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${combinedClassName} group`}
    >
      {content}
    </motion.button>
  );
};

export default Button;
