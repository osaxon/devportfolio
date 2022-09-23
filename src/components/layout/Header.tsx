import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from 'use-dark-mode';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '/posts', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  // const [isDarkMode, setDarkMode] = useState(false);
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });

  // const toggleDarkMode = (checked: boolean) => {
  //   setDarkMode(checked);
  // };

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-zinc-50 dark:bg-zinc-800'>
        <nav className='layout flex items-center justify-between py-4'>
          <ul className='flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='group rounded-sm py-2 font-medium text-zinc-900 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-zinc-50 dark:hover:text-primary-300'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <DarkModeSwitch
            checked={darkMode.value}
            onChange={darkMode.toggle}
            size={28}
          />
        </nav>
      </div>
    </header>
  );
}
