import HeroSection from '@/components/hero-section';
import ProblemSection from '@/components/problem-section';
import SolutionSection from '@/components/solution-section';
import FeaturesSection from '@/components/features-section';
import DemoSection from '@/components/demo-section';
import CTASection from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DemoSection />
      <CTASection />
    </>
  );
}
