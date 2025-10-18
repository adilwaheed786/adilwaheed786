
import React from 'react';
// FIX: Import the `Variants` type from framer-motion to correctly type the animation variants.
import { motion, Variants } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  // FIX: Explicitly type `badgeVariants` with `Variants`. This resolves the error
  // where TypeScript infers `transition.type` as a generic `string` instead of
  // the specific literal type expected by framer-motion.
  const badgeVariants: Variants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="bg-primary-50 dark:bg-navy-800 text-navy-700 dark:text-gray-200 px-4 py-2 rounded-lg text-center font-medium shadow-sm"
      variants={badgeVariants}
      whileHover="hover"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;
