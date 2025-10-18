export default function SiteWrapper({ children }) {
  return (
    <main className='pt-20 min-h-screen bg-[#0a0a0a] text-text-primary'>
      {children}
    </main>
  );
}
