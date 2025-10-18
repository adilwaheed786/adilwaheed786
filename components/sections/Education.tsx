import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { EDUCATION } from '../../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import type { EducationItem } from '../../types';

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <motion.div 
        className="bg-gray-50 dark:bg-navy-900 p-6 rounded-lg shadow-md flex items-start space-x-4"
        variants={cardVariants}
    >
        <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-100 dark:bg-navy-800 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
        </div>
        <div>
            <p className="text-sm font-semibold text-primary-500">{item.year}</p>
            <h3 className="text-lg font-bold text-navy-900 dark:text-white">{item.degree}</h3>
            <p className="text-navy-600 dark:text-gray-400">{item.institution}</p>
        </div>
    </motion.div>
);


const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <motion.div 
        className="max-w-3xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {EDUCATION.map((edu, index) => (
          <EducationCard key={index} item={edu} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Education;