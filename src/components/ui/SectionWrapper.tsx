import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'gradient' | 'transparent';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  animate?: boolean;
}

const SectionWrapper = ({
  children,
  id,
  className = '',
  background = 'default',
  containerSize = 'lg',
  padding = 'lg',
  animate = true,
}: SectionWrapperProps) => {
  // Background styles
  const backgrounds = {
    default: 'bg-bg-primary',
    gradient: 'bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary',
    transparent: 'bg-transparent',
  };

  // Container max-width
  const containerSizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  // Padding styles
  const paddings = {
    none: 'py-0',
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
  };

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
      className={`${backgrounds[background]} ${paddings[padding]} px-4 sm:px-6 lg:px-8 ${className}`}
      {...animationProps}
    >
      <div className={`${containerSizes[containerSize]} mx-auto`}>
        {children}
      </div>
    </WrapperComponent>
  );
};

export default SectionWrapper;
