import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { SKILLS } from '../../constants';
import SkillBadge from '../ui/SkillBadge';
import { motion } from 'framer-motion';
import type { Skill } from '../../types';

const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
        }
    },
};

const SkillCategory: React.FC<{ title: string, skills: Skill[] }> = ({ title, skills }) => (
    <motion.div 
        className="bg-gray-50 dark:bg-navy-900 p-6 rounded-lg shadow-md"
        variants={categoryVariants}
    >
        <h3 className="text-xl font-semibold mb-4 text-center text-primary-600 dark:text-primary-400">{title}</h3>
        <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
            ))}
        </div>
    </motion.div>
);

const Skills: React.FC = () => {
  const frontendSkills = SKILLS.filter((s) => s.category === 'Frontend');
  const backendSkills = SKILLS.filter((s) => s.category === 'Backend');
  const databaseSkills = SKILLS.filter((s) => s.category === 'Database');
  const toolsSkills = SKILLS.filter((s) => s.category === 'Tools');

  return (
    <SectionWrapper id="skills" title="My Skills">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Database" skills={databaseSkills} />
        <SkillCategory title="Tools" skills={toolsSkills} />
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;