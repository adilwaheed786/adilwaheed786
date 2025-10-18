import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { WORK_EXPERIENCE } from '../../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import type { WorkExperienceItem } from '../../types';

const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const TimelineItem: React.FC<{ item: WorkExperienceItem, isLast: boolean }> = ({ item, isLast }) => (
    <motion.div 
        className="relative pl-8 sm:pl-40 py-6 group"
        variants={timelineItemVariants}
    >
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-20 before:h-full before:px-px before:bg-gray-300 dark:before:bg-navy-600 before:self-start before:-translate-x-1/2 before:translate-y-3">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 mb-3 sm:mb-0 text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-navy-800 rounded-full whitespace-nowrap">{item.duration}</time>
            <div className="text-xl font-bold text-navy-900 dark:text-white">{item.role}</div>
        </div>
        <div className="text-primary-700 dark:text-primary-400 font-semibold mb-2">{item.company}</div>
        <div className="text-navy-600 dark:text-gray-400">{item.description}</div>
    </motion.div>
);


const WorkExperience: React.FC = () => {
    const currentWork = WORK_EXPERIENCE.find(w => w.isCurrent);
    const previousWork = WORK_EXPERIENCE.filter(w => !w.isCurrent);
  
    return (
        <SectionWrapper id="experience" title="Work Experience">
            {currentWork && (
                 <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold text-center mb-6 text-navy-800 dark:text-gray-100">Current Role</h3>
                    <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-navy-900 p-6 rounded-lg shadow-lg border border-primary-200 dark:border-navy-700">
                        <div className="flex items-center mb-2">
                           <Briefcase className="w-6 h-6 mr-3 text-primary-500"/>
                           <h4 className="text-xl font-bold text-navy-900 dark:text-white">{currentWork.role}</h4>
                        </div>
                        <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">{currentWork.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{currentWork.duration}</p>
                        <p className="text-navy-700 dark:text-gray-300">{currentWork.description}</p>
                    </div>
                </motion.div>
            )}
            
            <div>
                <h3 className="text-2xl font-semibold text-center mb-10 text-navy-800 dark:text-gray-100">Previous Roles</h3>
                <motion.div 
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.3 }}
                >
                    {previousWork.map((item, index) => (
                        <TimelineItem key={index} item={item} isLast={index === previousWork.length - 1} />
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default WorkExperience;