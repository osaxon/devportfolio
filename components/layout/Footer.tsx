import React from 'react';

const Footer = () => {
  return (
    <footer className='pb-2'>
      <div className='layout mx-auto py-8 md:flex md:items-center md:justify-between lg:px-8'>
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
