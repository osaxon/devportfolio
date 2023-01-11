'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@wits/next-themes';
import { useState } from 'react';

export const ThemeSwitcher = () => {
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
      <button className='btn-square btn'>?</button>
    </motion.div>
  );
};

export default ThemeSwitcher;
