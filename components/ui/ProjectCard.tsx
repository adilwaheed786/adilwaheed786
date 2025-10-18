import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-navy-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="overflow-hidden">
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">{project.title}</h3>
        <p className="text-navy-600 dark:text-gray-300 flex-grow">{project.description}</p>
        {(project.githubLink || project.liveLink) && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-navy-700 flex items-center space-x-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 transition-colors font-medium text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            )}
            {project.liveLink && (
               <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-medium text-sm"
               >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Preview
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;