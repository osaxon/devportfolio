import Image from 'next/image';

import NextSVG from '@/components/NextSVG';
import NodeSVG from '@/components/NodeSVG';
import ReactSVG from '@/components/ReactSVG';
import SvgElemTwo from '@/components/SvgElemTwo';
import TailwindSVG from '@/components/TailwindSVG';

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen '>
      <div className='layout py-8'>
        <h2>About</h2>
        <h1 className='mt-1'>Oli Saxon</h1>

        <div className='mt-4 flex flex-col md:flex-row md:items-start'>
          <article className='prose z-50 max-w-prose dark:prose-invert'>
            <figure className='float-right ml-4 bg-rose-400 pt-1  dark:bg-teal-400 md:ml-8'>
              <Image
                src='https://res.cloudinary.com/djaiep6vj/image/upload/c_thumb,w_200,g_face/v1664380136/Images/IMG_2952_ahurxs.jpg'
                className='grayscale'
                alt='picture of Oli Saxon'
                objectFit='cover'
                width={150}
                height={200}
              />
            </figure>
            <p className='md:text-justify'>
              Hi! I&apos;m Oli. I&apos;ve been learning web development since
              February 2021 when I enrolled on a Full Stack coding bootcamp with
              Manchester University. I&apos;ve worked in the IT industry for
              over 10 years and always enjoyed the more creative and technical
              aspect of coding and development, so decided to invest and give it
              a go properly.
            </p>

            <p>
              After graduating in August 2021, I realised there&apos;s so much
              more to learn still yet and I&apos;m enjoying the ongoing
              challenge of learning as much as I can from small projects.
            </p>
            <p>
              I&apos;m currently trying to improve my web design and UX by
              researching other web developers and designers for inspiration.
            </p>
            <aside className='mt-4'>
              <h4>Current stack</h4>
              <p>The technology I most enjoying working with at the moment.</p>
              <div className='mt-4 flex gap-2'>
                <ReactSVG />
                <NextSVG />
                <NodeSVG />
                <TailwindSVG />
              </div>
            </aside>
          </article>
          <SvgElemTwo className='absolute -bottom-20 right-10 z-0  w-[calc(100%-1rem)] transform-gpu fill-rose-600 opacity-25 dark:fill-teal-600 md:w-[800px] ' />
        </div>
      </div>
    </section>
  );
}
