import Image from 'next/future/image';
import React from 'react';
import { AiOutlineFileText, AiOutlineMail } from 'react-icons/ai';

const Avatar = () => {
  return (
    <div className='flex w-40 flex-col border-b-2 border-primary shadow'>
      <figure className='relative float-right h-40 max-w-full overflow-hidden'>
        <Image
          src='https://res.cloudinary.com/djaiep6vj/image/upload/c_thumb,w_200,g_face/v1664380136/Images/IMG_2952_ahurxs.jpg'
          className='object-cover'
          alt='picture of Oli Saxon'
          fill
        />
      </figure>

      <div className='flex flex-col p-2'>
        <a
          href='mailto:oliverrsaxon@gmail.com'
          className='inline-flex items-center gap-2 border-b no-underline'
        >
          <AiOutlineMail />
          Email
        </a>
        <a
          href='mailto:oliverrsaxon@gmail.com'
          className='inline-flex items-center gap-2 no-underline'
        >
          <AiOutlineFileText />
          CV
        </a>
      </div>
    </div>
  );
};

export default Avatar;
