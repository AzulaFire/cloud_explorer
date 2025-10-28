'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import RequestDemoModal from './request-demo-model';
import Link from 'next/link';

export default function CTASection() {
  return (
    <motion.section
      className='py-24 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted text-center'
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ willChange: 'opacity, transform, filter' }}
    >
      <h2 className='text-3xl font-bold mb-6 text-foreground'>
        Ready to explore your clouds?
      </h2>
      <p className='text-gray-400 mb-10'>
        Start your journey toward secure, transparent, and compliant multi-cloud
        visibility. Join the early access program or try the interactive demo
        now.
      </p>

      <div className='flex justify-center gap-4'>
        {/* Regular Try button */}
        <Button className='bg-accent text-black hover:bg-accent-hover font-semibold cursor-pointer hover:text-white'>
          <Link
            href='https://cloud-explorer.azurewebsites.net/'
            target='_blank'
          >
            Try Cloud Explorer
          </Link>
        </Button>

        {/* Request Demo modal button */}
        <RequestDemoModal />
      </div>
    </motion.section>
  );
}
