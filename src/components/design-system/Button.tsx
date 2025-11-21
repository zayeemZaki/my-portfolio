import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// ============================================
// BUTTON DESIGN SYSTEM
// Single source of truth for all button styles
// ============================================

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

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
  // ============================================
  // STANDARDIZED BUTTON STYLES
  // ============================================
  
  // Variant styles - CONSISTENT ACROSS APP
  const variants = {
    primary: `
      bg-blue-500 hover:bg-blue-600 
      text-white 
      shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
    `,
    secondary: `
      bg-emerald-500 hover:bg-emerald-600 
      text-white 
      shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40
    `,
    outline: `
      border-2 border-blue-500 
      text-blue-500 
      hover:bg-blue-500/10
    `,
    ghost: `
      border-2 border-slate-700 
      hover:border-blue-500 
      text-slate-300 hover:text-white
    `,
  };

  // Size styles - STANDARDIZED
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',  // Default size
    lg: 'px-8 py-4 text-lg',
  };

  // Icon sizes based on button size
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  // Base styles - CONSISTENT
  const baseStyles = `
    inline-flex items-center justify-center space-x-2 
    font-semibold 
    rounded-lg 
    transition-all duration-200 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
  `;

  const combinedClassName = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon 
          size={iconSizes[size]} 
          className="group-hover:translate-x-1 transition-transform" 
        />
      )}
    </>
  );

  // Render as link if href provided
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

  // Render as button
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
