'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vision', href: '/vision' },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkClasses = (isActive) =>
    cn(
      'relative inline-block text-text-secondary font-medium transition-colors overflow-visible',
      'before:content-[""] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-accent before:to-brand before:transition-all',
      'hover:text-brand hover:before:w-full',
      isActive && 'text-brand font-semibold before:w-full'
    );

  return (
    <header className='fixed top-0 w-full z-50 bg-gradient-to-r from-accent to-accent/0'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo / Home */}

        <Link href='/' className='text-2xl font-heading font-bold text-brand'>
          Cloud Explorer
        </Link>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={linkClasses(pathname === item.href)}
            >
              {item.name}
            </Link>
          ))}
          <Button className='ml-4 bg-gradient-brand text-white hover:opacity-90 cursor-pointer'>
            Join
          </Button>
        </nav>

        {/* Mobile nav */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' className='p-2'>
                <Menu className='w-6 h-6 text-text-primary' />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-64 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/70 text-text-primary'
            >
              <SheetHeader>
                <SheetTitle className='text-lg font-bold'>
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className='mt-4 flex flex-col py-4 px-6 gap-4'>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={linkClasses(pathname === item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className='mt-4 bg-gradient-brand text-white hover:opacity-90 cursor-pointer'>
                  Join
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
