'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className='min-h-screen bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/90 to-[#0B0E12] text-gray-300 py-24 px-6'>
      <div className='max-w-5xl mx-auto'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Cloud Explorer Overview
          </h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Intelligent visualization meets AI-powered storytelling for your
            cloud.
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='space-y-8 leading-relaxed text-lg text-gray-300'
        >
          <p>
            <span className='text-accent font-semibold'>Cloud Explorer</span> is
            an intelligent, interactive platform designed to help engineers,
            architects, and security teams see and understand their cloud
            environments like never before. It transforms raw cloud data into an
            intuitive visual and narrative experience — blending deep
            infrastructure insights with AI-powered analysis and storytelling.
            Whether you’re managing Azure, AWS, or multi-cloud deployments,
            Cloud Explorer gives you a single, unified lens for discovery,
            compliance, and operational awareness.
          </p>

          <p>
            At its core, Cloud Explorer dynamically maps your cloud
            infrastructure using live API calls, constructing a real-time
            topology of your environment — from virtual networks and workloads
            to identity and compliance controls. Behind the scenes, a hybrid AI
            engine analyzes relationships between assets, highlights risks, and
            narrates what it finds. It doesn’t just show data; it{' '}
            <span className='text-foreground font-medium'>
              explains what the data means
            </span>{' '}
            — surfacing potential misconfigurations, unused resources, and
            opportunities for optimization.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-24'
        >
          <h2 className='text-3xl font-bold text-foreground mb-6 text-center'>
            How It Works
          </h2>
          <ul className='space-y-6 text-gray-300'>
            {[
              {
                title: 'Live Discovery',
                desc: 'Connects to your cloud providers via secure APIs, automatically enumerating subscriptions, resources, and dependencies.',
              },
              {
                title: 'AI Narration',
                desc: 'An embedded language model interprets discovered data, producing human-readable summaries, risk insights, and actionable recommendations.',
              },
              {
                title: 'Unified Visualization',
                desc: 'Interactive maps and dashboards reveal relationships between compute, storage, network, and identity layers.',
              },
              {
                title: 'Smart Compliance Layer',
                desc: 'Integrates NIST 800-53, CIS, and FedRAMP benchmarks to auto-assess compliance posture.',
              },
              {
                title: 'Cross-Platform Reach',
                desc: 'Works seamlessly across Azure Commercial, Azure Gov, and AWS environments.',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className='border border-accent/40 rounded-2xl p-6 backdrop-blur-sm hover:border-accent/80 transition-colors'
              >
                <h3 className='text-xl font-semibold text-accent mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-400'>{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Why It Stands Out */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mt-24 text-center'
        >
          <h2 className='text-3xl font-bold text-foreground mb-6'>
            Why It Stands Out
          </h2>
          <p className='text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Cloud Explorer isn’t just a visualization tool — it’s an{' '}
            <span className='text-accent font-semibold'>
              AI co-pilot for cloud understanding.
            </span>{' '}
            It speaks the language of both engineers and executives,
            automatically generating narrative summaries that explain your
            environment in plain English (or any supported language). By
            blending automation, compliance intelligence, and storytelling, it
            turns complex infrastructure into an accessible, living document of
            your cloud.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
