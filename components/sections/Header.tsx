import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../constants';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // For background blur effect
      setIsScrolled(window.scrollY > 10);

      // For active link highlighting
      let currentSectionId = '';
      // A little buffer for better UX
      const headerOffset = 80; 

      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - headerOffset) {
            currentSectionId = link.href;
          }
        }
      }
      
      // Check if user is at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
         const lastLink = NAV_LINKS[NAV_LINKS.length - 1];
         if(lastLink) currentSectionId = lastLink.href;
      }
      
      setActiveLink(currentSectionId || '#home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  
  const getLinkClass = (href: string) => {
    const isActive = activeLink === href;
    return `relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-navy-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
    } after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:bg-primary-500 dark:after:bg-primary-400 after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100`;
  };

  const getMobileLinkClass = (href: string) => {
    const isActive = activeLink === href;
    return `block text-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
        isActive
            ? 'bg-primary-100 dark:bg-navy-800 text-primary-600 dark:text-primary-400 font-semibold'
            : 'text-navy-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
    }`;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-navy-950/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Engr. Adil Waheed
            </a>
          </div>
          <div className="hidden md:block">
            <motion.ul
              className="ml-10 flex items-baseline space-x-4"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.name} variants={navItemVariants}>
                  <a href={link.href} className={getLinkClass(link.href)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="flex items-center">
             <ThemeToggle />
             <div className="md:hidden ml-2">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-navy-700 focus:outline-none"
                    aria-label="Open menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
             </div>
          </div>
        </div>
        {isMenuOpen && (
             <motion.div 
                className="md:hidden pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
             >
                <ul className="flex flex-col items-center space-y-2">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name} className="w-full">
                            <a
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={getMobileLinkClass(link.href)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;