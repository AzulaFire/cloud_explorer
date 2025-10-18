export default function DemoSection() {
  return (
    <section
      id='demo'
      className='py-32 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted text-center'
    >
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-6 text-foreground'>
          Watch Cloud Explorer in action.
        </h2>
        <p className='text-gray-400 mb-12'>
          Experience the simplicity of exploring multi-cloud resources through
          an intuitive, visual interface.
        </p>
        <div className='relative rounded-2xl overflow-hidden border border-accent/30 shadow-glow'>
          <div className='aspect-video bg-gradient-to-br from-accent/10 to-accent-hover/5 flex items-center justify-center'>
            <span className='text-accent'>[Demo video placeholder]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
