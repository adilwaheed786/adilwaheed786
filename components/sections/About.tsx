import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-navy-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate Full Stack Developer currently working on modern web apps using .NET, React, Node.js, and SQL. 
          With a knack for problem-solving and a love for clean code, I strive to create efficient, scalable, and user-friendly applications. 
          When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;