import { ShieldAlert, CloudOff, TriangleAlert } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <CloudOff className='w-8 h-8 text-accent' />,
      title: 'Fragmented Visibility',
      desc: 'Switching between multiple cloud CLIs makes it difficult to see the full picture.',
    },
    {
      icon: <ShieldAlert className='w-8 h-8 text-accent' />,
      title: 'Manual Compliance Mapping',
      desc: 'Engineers waste hours correlating configurations with security frameworks.',
    },
    {
      icon: <TriangleAlert className='w-8 h-8 text-accent' />,
      title: 'Configuration Drift Risks',
      desc: 'Untracked changes create hidden vulnerabilities across environments.',
    },
  ];

  return (
    <section
      id='problem'
      className='py-32 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted'
    >
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-foreground'>
          Cloud complexity shouldn’t cost your security.
        </h2>
        <p className='text-gray-400 mb-16 max-w-2xl mx-auto'>
          Managing multiple clouds often leads to blind spots, wasted time, and
          compliance risks.
        </p>
        <div className='grid gap-12 md:grid-cols-3'>
          {problems.map((p, i) => (
            <div
              key={i}
              className='bg-card p-8 rounded-2xl shadow-glow hover:shadow-lg transition-all'
            >
              <div className='flex justify-center mb-4'>{p.icon}</div>
              <h3 className='text-xl font-semibold mb-2 text-foreground'>
                {p.title}
              </h3>
              <p className='text-gray-400 text-sm'>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
