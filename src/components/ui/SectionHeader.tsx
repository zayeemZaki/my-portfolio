import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animate?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  animate = true,
}: SectionHeaderProps) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const containerAlignments = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  const content = (
    <div className={`flex flex-col ${containerAlignments[align]} mb-12 md:mb-16 ${className}`}>
      <h2 className={`text-4xl md:text-5xl font-bold text-text-primary mb-4 ${alignments[align]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-secondary text-lg max-w-2xl ${alignments[align]}`}>
          {subtitle}
        </p>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default SectionHeader;
