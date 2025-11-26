import { motion } from 'framer-motion';
import { Code, Layers, Wrench, Brain } from 'lucide-react';
import { portfolioData } from '../../store/data';
import { SectionWrapper, SectionHeader, Card, Badge } from '../ui';

const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, any> = {
    Languages: Code,
    Frameworks: Layers,
    Tools: Wrench,
    'AI/ML': Brain,
  };

  const categories = ['Languages', 'Frameworks', 'AI/ML', 'Tools'] as const;

  const groupedSkills = categories.map((category) => ({
    name: category,
    icon: categoryIcons[category],
    skills: skills.filter((skill) => skill.category === category),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="skills" background="default">
      <SectionHeader
        title="Technical Skills"
        subtitle="A comprehensive toolkit for building scalable, modern applications"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {groupedSkills.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div key={category.name} variants={itemVariants}>
              <Card variant="glass" hoverEffect="border">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-accent-primary/10 rounded-lg">
                    <Icon className="text-accent-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} hoverable variant="default">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
