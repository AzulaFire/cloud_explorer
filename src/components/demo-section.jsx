'use client';
import { motion } from 'framer-motion';

export default function DemoSection() {
  return (
    <section
      id='demo'
      className='py-32 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted text-center'
    >
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-6 text-foreground'>
          Watch Cloud Explorer in action.
        </h2>
        <p className='text-gray-400 mb-12'>
          Experience how Cloud Explorer turns complex multi-cloud data into a
          unified, visual interface.
        </p>

        {/* Glowing Video Container */}
        <motion.div
          initial={{
            boxShadow: '0 0 25px rgba(0, 102, 255, 0.5)',
            backgroundColor: 'rgba(0, 102, 255, 0.05)',
          }}
          animate={{
            boxShadow: [
              '0 0 25px rgba(0, 102, 255, 0.5)',
              '0 0 35px rgba(0, 102, 255, 0.7)',
              '0 0 25px rgba(0, 102, 255, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='relative rounded-2xl overflow-hidden border border-accent/60 backdrop-blur-sm'
        >
          <div className='aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center'>
            <iframe
              className='w-full h-full rounded-2xl'
              src='https://www.youtube.com/embed/hsjNpciV-A8?autoplay=1&mute=1&loop=1&playlist=hsjNpciV-A8'
              title='Cloud Explorer Demo'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
