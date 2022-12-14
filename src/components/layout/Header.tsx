import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';
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
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'aqua',
    'lofi',
    'dracula',
    'night',
  ];
  const { theme, setTheme } = useTheme();
  const [rotate, setRotate] = useState(false);
  const [angle, setAngle] = useState(90);
  const handleClick = () => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
    if (angle === 360) {
      setAngle(90);
    } else {
      setAngle(angle + 90);
    }
    setRotate(!rotate);
  };

  return (
    <header className='from-base sticky top-0 z-50 w-full bg-gradient-to-b to-transparent backdrop-blur-lg'>
      <nav className='layout border-b-2'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/'>
            <a className='font-mono text-2xl font-bold text-base-content'>
              Oli Saxon
            </a>
          </Link>
          <div className='flex items-center gap-4'>
            <Link href='/posts'>Blog</Link>
            <motion.div
              animate={{ rotate: rotate ? angle : 0 }}
              onClick={handleClick}
              className='block'
            >
              <button className='btn-square btn'>?</button>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
}
