'use client';
import TeamHero from '@/components/hero-team';
import SocialLink from '@/components/social-link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Github } from 'lucide-react';

// TEAM DATA
const team = [
  {
    name: 'Christopher Stacks',
    title: 'Founder & CEO',
    image: '/images/team/christopher_stacks.png',
    bio: `I’m Christopher Stacks, Founder and CEO of Corelytics Cloud and creator of Cloud Explorer. 
    With over 15 years in cloud engineering, DevOps, and compliance automation, I’ve built and led platforms 
    that bring transparency, security, and scale to complex multi-cloud environments. 
    As a Navy Veteran and architect at heart, I’m driven by a simple mission — 
    to unify visibility, compliance, and automation so teams can operate with confidence across any cloud.`,
    socials: {
      linkedin: 'https://www.linkedin.com/in/stackattack/',
      github: 'https://github.com/centerupt-stacks',
    },
  },
  {
    name: 'John Horn Jr.',
    title: 'Front-End Architecture & UX Engineering',
    image: '/images/team/john_horn.png',
    bio: `As the front-end architect of Cloud Explorer, I craft modular, scalable interfaces that 
    turn complex cloud data into clear, actionable insights. 
    I’m passionate about design systems, component-driven development, and delivering smooth, intuitive experiences 
    that bridge aesthetics with engineering precision.`,
    socials: {
      linkedin: 'https://www.linkedin.com/in/johnhornjr/',
      github: 'https://github.com/AzulaFire/',
    },
  },
];

// MAIN PAGE
export default function TeamPage() {
  return (
    <section className='bg-[#0B0E12] min-h-screen'>
      <TeamHero />

      <div className='max-w-6xl mx-auto px-6 py-24'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-3xl font-bold text-foreground mb-4'>
            Meet the Corelytics Cloud Team
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Two engineers united by a vision: to bring clarity, compliance, and
            automation to every cloud.
          </p>
          <Separator className='w-16 mx-auto mt-6 bg-accent/40' />
        </motion.div>

        {/* TEAM MEMBERS */}
        <div className='space-y-28'>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`flex flex-col-reverse lg:flex-row ${
                i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              {/* CARD */}
              <motion.div
                whileHover={{
                  boxShadow: '0 0 25px rgba(0, 102, 255, 0.35)',
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className='relative rounded-2xl p-[2px] bg-gradient-to-tr from-accent/50 via-transparent to-accent/30 w-full'
              >
                <Card className='bg-[#12161C]/80 border border-muted p-8 rounded-2xl h-full'>
                  <h3 className='text-2xl font-semibold text-white'>
                    {member.name}
                  </h3>
                  <p className='text-accent text-sm mb-4'>{member.title}</p>
                  <p className='text-gray-400 text-md leading-relaxed mb-6'>
                    {member.bio}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className='flex space-x-5'>
                    <SocialLink href={member.socials.linkedin}>
                      <Linkedin className='w-5 h-5' />
                    </SocialLink>
                    <SocialLink href={member.socials.github}>
                      <Github className='w-5 h-5' />
                    </SocialLink>
                  </div>
                </Card>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 102, 255, 0.4)',
                }}
                transition={{ duration: 0.3 }}
                className='relative w-56 h-56 rounded-full overflow-hidden border border-accent/40 shadow-xl flex-shrink-0'
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover hover:scale-110 transition-transform duration-500'
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
