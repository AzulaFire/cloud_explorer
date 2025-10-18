import { Settings, Database, Cpu, DollarSign } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Settings className='w-8 h-8 text-accent' />,
      title: 'Control Mapping',
      desc: 'Align cloud resources with compliance frameworks like NIST 800-53.',
    },
    {
      icon: <Database className='w-8 h-8 text-accent' />,
      title: 'Drift Analysis',
      desc: 'Detect and visualize configuration drift across environments.',
    },
    {
      icon: <Cpu className='w-8 h-8 text-accent' />,
      title: 'AI Narratives',
      desc: 'Transform JSON data into readable summaries and insights.',
    },
    {
      icon: <DollarSign className='w-8 h-8 text-accent' />,
      title: 'Cost Insights',
      desc: 'Compare environments and identify usage inefficiencies instantly.',
    },
  ];

  return (
    <section
      id='features'
      className='py-32 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted'
    >
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-foreground'>
          Powerful features for modern cloud teams.
        </h2>
        <p className='text-gray-400 mb-16 max-w-2xl mx-auto'>
          Cloud Explorer bridges DevOps and Compliance with a single, intuitive
          interface.
        </p>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((f, i) => (
            <div
              key={i}
              className='bg-card p-8 rounded-2xl border border-muted hover:border-accent/50 hover:shadow-glow transition-all'
            >
              <div className='flex justify-center mb-4'>{f.icon}</div>
              <h3 className='text-xl font-semibold mb-2 text-foreground'>
                {f.title}
              </h3>
              <p className='text-gray-400 text-sm'>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
