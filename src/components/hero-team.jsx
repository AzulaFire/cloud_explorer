'use client';
import { motion } from 'framer-motion';

export default function TeamHero() {
  return (
    <motion.div
      className='relative py-32 overflow-hidden text-center border-b border-border bg-gradient-to-b from-[#0B0E12] via-[#0F131A]/70 to-[#0B0E12]'
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background accents */}
      <div className='absolute inset-0'>
        <div className='absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 max-w-3xl mx-auto px-6'>
        <h1 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
          The People Behind
          <span className='block text-accent'>Cloud Explorer</span>
        </h1>
        <p className='text-gray-400 text-sm sm:text-base max-w-2xl mx-auto'>
          Our leadership team combines deep cloud engineering, DevOps, and UX
          design expertise to create a unified platform for visibility,
          compliance, and innovation.
        </p>
      </div>
    </motion.div>
  );
}
