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
    'cupcake',
    'bumblebee',
    'emerald',
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
    'dracula',
    'cmyk',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
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
    <header className='fixed top-0 z-50 w-full border-b border-b-accent bg-gradient-to-b from-base-100 to-transparent backdrop-blur-lg'>
      <nav className='layout'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/'>
            <a className='font-mono text-2xl font-bold'>Oli Saxon</a>
          </Link>
          <motion.div
            animate={{ rotate: rotate ? angle : 0 }}
            onClick={handleClick}
            className='block'
          >
            <button className='btn-square btn'>?</button>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
