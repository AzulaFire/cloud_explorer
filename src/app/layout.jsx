import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SiteWrapper from '@/components/layout/SiteWrapper';

const inter = Inter({ subsets: ['latin'] });

// === SEO METADATA ===
export const metadata = {
  metadataBase: new URL('https://corelytics.cloud/'),
  title: {
    default: 'Cloud Explorer - See Your Clouds. Secure Your Future.',
    template: '%s | Cloud Explorer',
  },
  description:
    'Cloud Explorer is an intelligent orchestration and analysis framework that unifies visibility, compliance, and automation across complex multi-cloud environments. See your clouds. Secure your future.',
  keywords: [
    'Cloud Explorer',
    'multi-cloud visibility',
    'cloud security',
    'cloud compliance',
    'cloud inventory',
    'cloud resource visualization',
    'AI cloud analysis',
    'cloud orchestration tool',
    'compliance automation',
    'DevOps platform',
    'Corelytics Cloud',
  ],
  authors: [
    { name: 'Corelytics Cloud', url: 'https://corelytics.cloud/' },
    { name: 'Christopher Stacks' },
    { name: 'John Horn Jr.' },
  ],
  creator: 'Corelytics Cloud',
  publisher: 'Corelytics Cloud',
  openGraph: {
    title:
      'Cloud Explorer - Intelligent Multi-Cloud Orchestration & Security Platform',
    description:
      'Unify your multi-cloud visibility and compliance with Cloud Explorer. Discover, visualize, and secure your cloud environments through AI-powered orchestration and real-time analysis.',
    url: 'https://corelytics.cloud/',
    siteName: 'Cloud Explorer',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://corelytics.cloud/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <SiteWrapper>{children}</SiteWrapper>
        <Footer />
      </body>
    </html>
  );
}
