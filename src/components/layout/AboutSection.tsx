import Avatar from '@/components/Avatar';
import NextSVG from '@/components/NextSVG';
import NodeSVG from '@/components/NodeSVG';
import ReactSVG from '@/components/ReactSVG';
import SvgElemTwo from '@/components/SvgElemTwo';
import TailwindSVG from '@/components/TailwindSVG';

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen pt-20'>
      <div className='layout'>
        <h2>About</h2>

        <h1 className='mt-1'>Oli Saxon</h1>
        <div className='flex'>
          <article className='prose z-50 mt-4 text-justify font-medium'>
            <p className='prose text-xl md:text-justify'>
              Hi! I&apos;m Oli. I&apos;ve been learning web development since
              February 2021 when I enrolled on a Full Stack coding bootcamp with
              Manchester University. I&apos;ve worked in the IT industry for
              over 10 years and always enjoyed the more creative and technical
              aspect that coding and development offers.
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
