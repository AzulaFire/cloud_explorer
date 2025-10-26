import { ShieldAlert, CloudOff, TriangleAlert } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <CloudOff className='w-8 h-8 text-accent' />,
      title: 'Fragmented Visibility',
      problem:
        'Switching between AWS, Azure, and GCP CLIs makes it hard to see the full picture.',
      solution: 'Cloud Explorer connects them in one unified JSON view.',
    },
    {
      icon: <ShieldAlert className='w-8 h-8 text-accent' />,
      title: 'Manual Compliance Mapping',
      problem:
        'Engineers spend hours matching configurations to frameworks like NIST or CIS.',
      solution: 'Cloud Explorer automates that correlation instantly.',
    },
    {
      icon: <TriangleAlert className='w-8 h-8 text-accent' />,
      title: 'Configuration Drift Risks',
      problem:
        'Untracked changes create hidden vulnerabilities across environments.',
      solution: 'AI-powered drift detection keeps your posture consistent.',
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
          compliance drift. Cloud Explorer unifies your cloud story — turning
          fragmented data into clarity.
        </p>

        <div className='grid gap-12 md:grid-cols-3'>
          {problems.map((p, i) => (
            <div
              key={i}
              className='bg-card p-8 rounded-2xl shadow-glow hover:shadow-lg transition-all text-left'
            >
              <div className='flex justify-center mb-4'>{p.icon}</div>
              <h3 className='text-xl font-semibold mb-3 text-center text-foreground'>
                {p.title}
              </h3>

              <p className='text-gray-400 text-sm mb-3 text-center'>
                {p.problem}
              </p>

              <div className='flex items-center justify-center text-accent text-sm font-medium mt-2'>
                <span className='text-accent'>→</span>
                <span className='ml-2 text-accent/90'>{p.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
