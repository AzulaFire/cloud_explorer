import { Brain, Cloud, ShieldCheck } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section
      id='solution'
      className='py-32 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70border-t border-muted'
    >
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>
        <div>
          <h2 className='text-3xl font-bold mb-6 text-foreground'>
            Unified insights across AWS, Azure, and GCP.
          </h2>
          <p className='text-gray-400 mb-8'>
            Cloud Explorer connects your CLI commands to compliance frameworks —
            instantly visualizing risk, drift, and control mapping across
            providers.
          </p>
          <ul className='space-y-4 text-gray-300'>
            <li className='flex items-center gap-3'>
              <ShieldCheck className='w-5 h-5 text-accent' /> Automated control
              mapping (NIST 800-53)
            </li>
            <li className='flex items-center gap-3'>
              <Brain className='w-5 h-5 text-accent' /> AI analysis for drift
              and anomaly detection
            </li>
            <li className='flex items-center gap-3'>
              <Cloud className='w-5 h-5 text-accent' /> Unified JSON explorer
              across clouds
            </li>
          </ul>
        </div>
        <div className='relative flex justify-center'>
          <div className='w-[90%] aspect-video rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hover/5 border border-accent/30 flex items-center justify-center'>
            <span className='text-accent'>[Dashboard Preview Placeholder]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
