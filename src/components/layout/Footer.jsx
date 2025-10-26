import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mt-32 border-t border-border bg-[#0B0E12] py-10 text-center text-gray-400 text-sm relative'>
      <div className='max-w-5xl mx-auto px-6 flex flex-col items-center space-y-6'>
        {/* Branding and tagline */}
        <div className='space-y-2'>
          <Link
            href='/'
            className='text-2xl font-heading font-bold text-white flex justify-center items-center'
          >
            {/* Logo / Home */}
            <Image
              src='/images/logo.png'
              alt='Logo'
              width={50}
              height={50}
              className='mr-2'
            />
            Cloud Explorer
          </Link>
          <p className='text-gray-500 text-xs'>
            Unifying cloud visibility, compliance, and AI-driven insights.
          </p>
        </div>

        {/* Social icons */}
        <div className='flex space-x-6'>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-accent transition-colors hover:scale-110 transform'
          >
            <Linkedin className='w-5 h-5' />
          </Link>
          <Link
            href='https://x.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-accent transition-colors hover:scale-110 transform'
          >
            <Twitter className='w-5 h-5' />
          </Link>
          <Link
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-accent transition-colors hover:scale-110 transform'
          >
            <Github className='w-5 h-5' />
          </Link>
          <Link
            href='https://youtube.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-accent transition-colors hover:scale-110 transform'
          >
            <Youtube className='w-5 h-5' />
          </Link>
        </div>

        {/* Divider line */}
        <div className='w-16 border-t border-accent/30' />

        {/* Developer’s note */}
        <div className='text-xs text-gray-500 leading-relaxed max-w-md'>
          <p className='text-[11px] mt-1 text-gray-600'>
            Designed for modern cloud teams to bridge DevOps, security, and
            compliance with clarity and confidence.
          </p>
        </div>

        {/* Copyright */}
        <div className='pt-4 text-[11px] text-gray-600'>
          © {new Date().getFullYear()} Cloud Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
