'use client';
import { Brain, Cloud, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SolutionSection() {
  // Animation variants for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id='solution'
      className='py-32 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted'
    >
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>
        {/* Left side: Text content */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className='text-3xl font-bold mb-6 text-foreground'>
            Unified insights across AWS, Azure, and GCP.
          </h2>
          <p className='text-gray-400 mb-8'>
            Cloud Explorer connects your CLI commands to compliance frameworks —
            instantly visualizing risk, drift, and control mappings across cloud
            providers.
          </p>

          <ul className='space-y-4 text-gray-300'>
            <li className='flex items-center gap-3'>
              <ShieldCheck className='w-5 h-5 text-accent' />
              Automated control mapping (NIST 800-53, CIS Benchmarks)
            </li>
            <li className='flex items-center gap-3'>
              <Brain className='w-5 h-5 text-accent' />
              AI analysis for drift and anomaly detection
            </li>
            <li className='flex items-center gap-3'>
              <Cloud className='w-5 h-5 text-accent' />
              Unified JSON explorer across multi-cloud environments
            </li>
          </ul>
        </motion.div>

        {/* Right side: Glowing Dashboard Preview */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='relative flex justify-center w-full'
        >
          <motion.div
            initial={{
              boxShadow: '0 0 25px rgba(0, 102, 255, 0.4)',
              backgroundColor: 'rgba(0, 102, 255, 0.05)',
            }}
            animate={{
              boxShadow: [
                '0 0 25px rgba(0, 102, 255, 0.4)',
                '0 0 40px rgba(0, 102, 255, 0.7)',
                '0 0 25px rgba(0, 102, 255, 0.4)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='w-full max-w-[600px] aspect-video rounded-2xl border border-accent/40 backdrop-blur-sm bg-gradient-to-br from-accent/10 to-accent-hover/5 flex items-center justify-center overflow-hidden'
          >
            <Image
              src='/images/dashboard.png'
              alt='Dashboard'
              width={600}
              height={400}
              className='rounded-2xl'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
