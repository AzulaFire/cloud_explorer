import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SiteWrapper from '@/components/layout/SiteWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cloud Explorer - See your clouds. Secure your future.',
  description:
    'Cloud Explorer is a Multi-Cloud Resource & Security Inventory Tool. See your clouds. Secure your future.',
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
