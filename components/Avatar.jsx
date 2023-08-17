import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='mask mask-hexagon w-32'>
        <Image
          src='https://res.cloudinary.com/djaiep6vj/image/upload/v1664380757/IMG_6400_rlqvp6.jpg'
          alt='picture of Oli Saxon '
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Avatar;
