import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className='py-24 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 border-t border-muted text-center'>
      <h2 className='text-3xl font-bold mb-6 text-foreground'>
        Ready to explore your clouds?
      </h2>
      <p className='text-gray-400 mb-10'>
        Start your journey toward secure, transparent, and compliant multi-cloud
        visibility. Join the early access program or try the interactive demo
        now.
      </p>
      <div className='flex justify-center gap-4'>
        <Button className='bg-accent text-black hover:bg-accent-hover font-semibold cursor-pointer hover:text-white'>
          Try Cloud Explorer
        </Button>
        <Button
          variant='outline'
          className='border-accent text-accent bg-primary hover:bg-accent/10 hover:text-white font-semibold cursor-pointer'
        >
          Request Access
        </Button>
      </div>
    </section>
  );
}
