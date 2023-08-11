'use client';
import Avatar from '@/components/Avatar';
import NextSVG from '@/components/NextSVG';
import NodeSVG from '@/components/NodeSVG';
import ReactSVG from '@/components/ReactSVG';
import SvgElemTwo from '@/components/SvgElemTwo';
import TailwindSVG from '@/components/TailwindSVG';

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen py-10'>
      <div className='layout'>
        <h2>About</h2>

        <h1 className='mt-1'>Oli Saxon</h1>
        <div className='flex'>
          <article className='prose z-50 mt-4 text-justify font-medium'>
            <p className='prose text-xl md:text-justify'>
              Hi! I&apos;m Oli. I&apos;m a front end web developer.
            </p>
            <p>
              In 2021, I took a full-stack coding bootcamp with the University
              of Manchester and have been obsessed since! What I enjoy most is
              turning ideas into working projects and solving complex problems.
            </p>
            <p>
              Throughout my career in IT, I&apos;ve had the opportunity to work
              with some experienced developers and learnt alot from my peers. My
              commercial experience is mostly on the management side, having
              most recently been a Product Manager and Developer for a
              specialist automation platform called ServiceNow; not quite
              fulfilling my passion for programming, after further building on
              my programming skills with some small freelance projects, I
              decided to invest fully into a career in web development
              full-time.
            </p>

            <aside className='not-prose flex items-center justify-between gap-4 border-t border-b py-4'>
              <Avatar />
              <div className='flex flex-col'>
                <h4 className='text-base-content'>Current stack</h4>
                <p>
                  The technology I most enjoying working with at the moment.
                </p>
                <div className='flex gap-2'>
                  <ReactSVG />
                  <NextSVG />
                  <NodeSVG />
                  <TailwindSVG />
                </div>
              </div>
            </aside>
          </article>
          <SvgElemTwo className='absolute -bottom-20 right-10 z-0  w-[calc(100%-1rem)] transform-gpu fill-primary opacity-25  md:w-[800px] ' />
        </div>
      </div>
    </section>
  );
}
