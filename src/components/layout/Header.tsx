import * as React from 'react';
import { VscColorMode } from 'react-icons/vsc';
import useDarkMode from 'use-dark-mode';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'olisaxon.co.uk' },
  { href: '/about', label: '/about' },
  { href: '/projects', label: '/projects' },
  { href: '/posts', label: '/blog' },
  { href: '#contact', label: '/contact' },
];

export default function Header() {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-zinc-50 dark:bg-zinc-700'>
        <nav className='layout flex items-center justify-between py-4'>
          <ul className='flex items-center justify-between space-x-3 text-sm md:space-x-4 md:text-base'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='group rounded-sm py-2 font-medium text-zinc-900 transition-colors hover:text-rose-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-zinc-50 dark:hover:text-teal-300'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>

          <VscColorMode
            className='h-6 w-6 rotate-45 cursor-pointer fill-slate-700 dark:fill-slate-100'
            onClick={darkMode.toggle}
          />
        </nav>
      </div>
    </header>
  );
}
