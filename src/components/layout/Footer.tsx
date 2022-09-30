import React from 'react';
import { SocialIcon } from 'react-social-icons';

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/osaxon',
    icon: (props: { url: string | undefined }) => (
      <SocialIcon style={{ height: 25, width: 25 }} url={props.url} />
    ),
  },
];

const Footer = () => {
  return (
    <footer className='bg-zinc-50 pb-2'>
      <div className='layout mx-auto py-8 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon url={item.href} aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center text-base text-gray-400'>
            &copy; 2022 WebJenga, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
