import Link from 'next/link';

import ThemeSwitcher from '@/components/Molecules/ThemeSwitcher';

export default function Header() {
  return (
    <header className='from-base sticky top-0 z-50 w-full bg-gradient-to-b to-transparent backdrop-blur-lg'>
      <nav className='layout border-b-2'>
        <div className='flex h-16 items-center justify-between'>
          <Link
            className='font-mono text-2xl font-bold text-base-content'
            href='/'
          >
            Oli Saxon
          </Link>
          <div className='flex items-center gap-4'>
            <Link href='/posts/all'>Blog</Link>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
