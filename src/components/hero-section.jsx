'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const images = [
  '/images/hero_1.jpg',
  '/images/hero_2.jpg',
  '/images/hero_3.jpg',
  '/images/hero_4.jpg',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // 🖼️ Preload images to prevent initial stutter
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 🔁 Rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // 🌫️ Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  // 🔮 Smooth animation variants
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      willChange: 'opacity, transform, filter',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // smooth cubic-bezier
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18, // slightly faster stagger
        delayChildren: 0.15, // start a bit earlier
      },
    },
  };

  const handleScrollToSolution = () => {
    const section = document.getElementById('solution');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden'>
      {/* 🪶 Parallax rotating background images */}
      {images.map((src, index) => (
        <motion.div
          key={index}
          style={{
            y,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* 🌌 Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#0B0E12]/95 via-[#0B0E12]/70 to-transparent pointer-events-none z-10' />

      {/* 🔥 Animated hero content */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={container}
        className='relative z-20 flex flex-col items-center'
      >
        {/* 🌟 Title with glowing pulse */}
        <motion.h1
          variants={fadeUp}
          style={{ willChange: 'transform, opacity, filter' }}
          animate={{
            textShadow: [
              '0 0 0px #0070f3',
              '0 0 12px #0070f3',
              '0 0 0px #0070f3',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className='text-5xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]'
        >
          See Your Clouds. Secure Your Future.
        </motion.h1>

        {/* 💬 Subtitle */}
        <motion.p
          variants={fadeUp}
          style={{ willChange: 'transform, opacity, filter' }}
          className='max-w-2xl text-gray-400 mb-10'
        >
          A unified multi-cloud visibility platform that maps your
          infrastructure to compliance frameworks in real time — empowering
          engineers, auditors, and security teams to eliminate blind spots.
        </motion.p>

        {/* 🎛️ Buttons */}
        <motion.div variants={fadeUp} className='flex gap-4'>
          <Button className='bg-accent text-black font-semibold hover:bg-accent-hover hover:text-white shadow-2xl cursor-pointer'>
            <Link
              href='https://cloud-explorer.azurewebsites.net/'
              target='_blank'
            >
              Try Cloud Explorer
            </Link>
          </Button>
          <Button
            variant='outline'
            onClick={handleScrollToSolution}
            className='border-accent text-accent bg-primary hover:bg-accent/10 hover:text-white font-semibold shadow-2xl cursor-pointer'
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
