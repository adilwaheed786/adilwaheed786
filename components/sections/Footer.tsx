import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {currentYear} Engr. Adil Waheed. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;