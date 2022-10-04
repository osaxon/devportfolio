import Image from 'next/future/image';
import React from 'react';
import { AiOutlineFileText, AiOutlineMail } from 'react-icons/ai';

const Avatar = () => {
  return (
    <div className='bg-zinc-70/50 flex w-40 flex-col border-b-2 border-teal-300 shadow'>
      <figure className='relative float-right h-40 max-w-full overflow-hidden'>
        <Image
          src='https://res.cloudinary.com/djaiep6vj/image/upload/c_thumb,w_200,g_face/v1664380136/Images/IMG_2952_ahurxs.jpg'
          className='object-cover grayscale'
          alt='picture of Oli Saxon'
          fill
        />
      </figure>

      <div className='prose flex flex-col p-2 dark:prose-invert'>
        <a
          href='mailto:oliverrsaxon@gmail.com'
          className='prose-lg inline-flex items-center gap-2 border-b no-underline'
        >
          <AiOutlineMail />
          Email
        </a>
        <a
          href='mailto:oliverrsaxon@gmail.com'
          className='prose-lg inline-flex items-center gap-2 no-underline'
        >
          <AiOutlineFileText />
          CV
        </a>
      </div>
    </div>
  );
};

export default Avatar;
