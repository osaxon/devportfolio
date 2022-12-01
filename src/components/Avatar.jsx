import Image from 'next/future/image';
import React from 'react';

const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='mask mask-hexagon w-32'>
        <Image
          src='https://res.cloudinary.com/djaiep6vj/image/upload/c_thumb,w_200,g_face/v1664380136/Images/IMG_2952_ahurxs.jpg'
          alt='picture of Oli Saxon '
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Avatar;
