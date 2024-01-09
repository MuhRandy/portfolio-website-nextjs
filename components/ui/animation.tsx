import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type DefaultAnimationProps = {
  className?: ClassValue;
  children: ReactNode;
};

function ButtonAnimation({ className, children }: DefaultAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, left: '-50px' }}
      whileInView={{ opacity: 1, left: '0px' }}
      transition={{ duration: 2, type: 'spring' }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  );
}

function DefaultAnimation({ className, children }: DefaultAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: '-20px' }}
      whileInView={{ opacity: 1, bottom: '0px' }}
      transition={{ duration: 2, type: 'spring' }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  );
}

function CardAnimation({ className, children }: DefaultAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, left: '50px' }}
      whileInView={{ opacity: 1, left: '0px' }}
      transition={{ duration: 2, type: 'spring' }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  );
}

export { ButtonAnimation, DefaultAnimation, CardAnimation };
