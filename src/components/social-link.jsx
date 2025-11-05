'use client';
import Link from 'next/link';

export default function SocialLink({ href, children }) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-gray-400 hover:text-accent transition-colors hover:scale-110 transform'
    >
      {children}
    </Link>
  );
}
