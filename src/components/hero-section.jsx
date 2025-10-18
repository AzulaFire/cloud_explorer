'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cloud } from 'lucide-react';

const images = [
  '/images/hero_1.jpg',
  '/images/hero_2.jpg',
  '/images/hero_3.jpg',
  '/images/hero_4.jpg',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden'>
      {/* Rotating background images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0, // ensure it's behind content
          }}
        />
      ))}

      {/* Optional overlay for gradient / readability */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 to-transparent pointer-events-none z-10' />

      {/* Hero content */}
      <Cloud className='w-16 h-16 text-accent mb-6 animate-pulse relative z-20' />
      <h1 className='text-5xl font-bold mb-4 text-white bg-clip-text  relative z-20 shadow-2xl'>
        See Your Clouds. Secure Your Future.
      </h1>
      <p className='max-w-2xl text-gray-400 mb-8 relative z-20 shadow-2xl'>
        A unified multi-cloud JSON explorer for engineers, auditors, and
        compliance teams.
      </p>
      <div className='flex gap-4 relative z-20'>
        <Button className='bg-accent text-black font-semibold hover:bg-accent-hover shadow-2xl cursor-pointer hover:text-white'>
          Try the Demo
        </Button>
        <Button
          variant='outline'
          className='border-accent text-accent bg-primary hover:bg-accent/10 hover:text-white font-semibold shadow-2xl cursor-pointer'
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}
