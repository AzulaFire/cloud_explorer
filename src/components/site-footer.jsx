export function SiteFooter() {
  return (
    <footer className='border-t border-muted mt-24 py-8 text-center text-sm text-gray-500'>
      <p>© 2025 Cloud Explorer. Built with ❤️ in Japan.</p>
      <div className='mt-2 flex justify-center gap-4 text-gray-400'>
        <a href='/docs' className='hover:text-accent'>
          Docs
        </a>
        <a href='/github' className='hover:text-accent'>
          GitHub
        </a>
        <a href='/privacy' className='hover:text-accent'>
          Privacy
        </a>
      </div>
    </footer>
  );
}
