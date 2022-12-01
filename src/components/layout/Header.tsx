import { useTheme } from 'next-themes';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'olisaxon.co.uk' },
  { href: '/about', label: '/about' },
  { href: '/projects', label: '/projects' },
  { href: '/posts', label: '/blog' },
];

export default function Header() {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ];
  const { theme, setTheme } = useTheme();

  return (
    <header className='sticky top-0 z-50'>
      <div>
        <nav className='layout flex items-center justify-between'>
          <ul className='flex items-center justify-between space-x-3 text-sm md:space-x-4 md:text-base'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='group rounded-sm py-2 font-medium '
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>

          <button
            className='btn-square btn rounded-none'
            onClick={() =>
              setTheme(themes[Math.floor(Math.random() * themes.length)])
            }
          >
            ???
          </button>
        </nav>
      </div>
    </header>
  );
}
