export function SiteHeader() {
  return (
    <header className='fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-muted'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        <h1 className='text-accent font-semibold tracking-wide'>
          Cloud Explorer
        </h1>
        <nav className='flex gap-6 text-sm text-gray-300'>
          <a href='#features' className='hover:text-accent'>
            Features
          </a>
          <a href='#demo' className='hover:text-accent'>
            Demo
          </a>
          <a href='#contact' className='hover:text-accent'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
