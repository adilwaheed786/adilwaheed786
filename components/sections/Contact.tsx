import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { CONTACT_INFO } from '../../constants';
import { Mail, Github, Linkedin,MessageSquare, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, rotate: 5 },
};

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-lg mb-8 text-navy-600 dark:text-gray-300">
          I'm currently open to new opportunities. Feel free to reach out via email or connect with me on social media.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
            <motion.a 
                href={`mailto:${CONTACT_INFO.email}`} 
                aria-label="Email" 
                className="p-3 bg-gray-200 dark:bg-navy-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
            >
                <Mail className="w-6 h-6 text-navy-700 dark:text-gray-200" />
            </motion.a>
            <motion.a 
                href={CONTACT_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub" 
                className="p-3 bg-gray-200 dark:bg-navy-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
            >
                <Github className="w-6 h-6 text-navy-700 dark:text-gray-200" />
            </motion.a>
            <motion.a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="p-3 bg-gray-200 dark:bg-navy-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
            >
                <Linkedin className="w-6 h-6 text-navy-700 dark:text-gray-200" />
            </motion.a>
             <motion.a 
                href={CONTACT_INFO.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="p-3 bg-gray-200 dark:bg-navy-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
            >
                <MessageSquare className="w-6 h-6 text-navy-700 dark:text-gray-200" />
            </motion.a>
        </div>

        <motion.a 
          href={CONTACT_INFO.cvPath} 
          download 
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV
        </motion.a>
      </div>
    </SectionWrapper>
  );
};

export default Contact;