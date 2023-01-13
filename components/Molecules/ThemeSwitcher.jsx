'use client';

import { useTheme } from '@wits/next-themes';
import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';

export const ThemeSwitcher = () => {
  const themes = [
    'light',
    'dark',
    'synthwave',
    'cyberpunk',
    'aqua',
    'lofi',
    'dracula',
    'night',
  ];
  const { theme, setTheme } = useTheme();
  const [rotate, setRotate] = useState(false);
  const handleClick = () => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
    setRotate(!rotate);
  };

  return (
    <motion.div
      animate={{ rotate: rotate ? 360 : 0 }}
      transition={{ type: 'spring' }}
      onClick={handleClick}
      className='block'
    >
      <button className='btn-square btn'>theme</button>
    </motion.div>
  );
};

export default ThemeSwitcher;
