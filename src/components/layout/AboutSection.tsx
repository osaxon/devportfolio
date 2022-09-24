import Image from 'next/image';

import LaravelSVG from '@/components/LaravelSVG';
import NextSVG from '@/components/NextSVG';
import TailwindSVG from '@/components/TailwindSVG';

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen bg-zinc-50 dark:bg-zinc-700'>
      <div className='layout py-20'>
        <h2>About</h2>
        <h1 className='mt-1'>Oli Saxon</h1>
        <div className='mt-4 flex flex-col items-center md:flex-row md:items-start'>
          <article className='max-w-prose'>
            <p>
              Hi! I&apos;m Oli. I&apos;ve been learning web development since
              February 2021 when I enrolled on a Full Stack coding bootcamp with
              Manchester University. I&apos;ve worked in the IT industry for
              over 10 years and always enjoyed the more creative and technical
              aspect of coding and development, so decided to invest and give it
              a go properly.
            </p>
            <br />
            <p>
              After graduating in August 2021, I realised there&apos;s so much
              more to learn still yet and I&apos;m enjoying the ongoing
              challenge of learning as much as I can from small projects.
            </p>
            <br />
            <p>
              I&apos;m currently trying to improve my web design and UX by
              researching other web developers and designers for inspiration.
            </p>
            <aside className='mt-4'>
              <h4>Current stack</h4>
              <p>The technology I most enjoying working with at the moment.</p>
              <div className='mt-4 flex gap-2'>
                <NextSVG />
                <TailwindSVG />
                <LaravelSVG />
              </div>
            </aside>
          </article>

          <div className='mt-10 flex-shrink-0 px-10 md:mt-0'>
            <Image
              src='https://res.cloudinary.com/djaiep6vj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1663946907/Images/Me_and_Violetta_qsna4r.png'
              className='rounded-full'
              alt='picture of me with my cat'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
