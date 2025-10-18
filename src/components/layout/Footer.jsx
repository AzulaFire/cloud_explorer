export default function Footer() {
  return (
    <footer className='mt-16 border-t border-border py-6 text-center text-text-secondary text-sm'>
      © {new Date().getFullYear()} Cloud Explorer. All rights reserved.
    </footer>
  );
}
