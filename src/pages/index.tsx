import Link from 'next/link';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import AboutSection from '@/components/layout/AboutSection';
import Layout from '@/components/layout/Layout';
import ProjectsSection from '@/components/layout/ProjectsSections';
import Seo from '@/components/Seo';
import SvgElem from '@/components/SvgElem';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='flex min-h-screen flex-col justify-center bg-zinc-50 dark:bg-zinc-800'>
          <article className='layout z-50'>
            <h1 className='text-2xl md:text-4xl xl:text-5xl'>Hello there</h1>
            <h2 className='mt-1 text-3xl md:text-5xl xl:text-6xl'>
              My name&apos;s Oliver
            </h2>
            <p className='mt-4 max-w-4xl md:mt-6 md:text-lg'>
              I&apos;m a freelance web developer specialising in React and
              Next.JS
            </p>
            <div className='mt-6 flex flex-wrap gap-4'>
              <Link href='#contact'>
                <Button variant='custom'>Get in touch</Button>
              </Link>
              <Link href='#about'>
                <Button variant='custom'>Read more</Button>
              </Link>
            </div>
          </article>
          <SvgElem className='absolute bottom-0 right-0 z-0 translate-y-[30%] translate-x-[25%] scale-50 transform-gpu fill-teal-600 opacity-70 dark:fill-rose-700 dark:opacity-50 md:right-6' />
        </section>
        <AboutSection />
        <ProjectsSection />
      </main>
    </Layout>
  );
}
