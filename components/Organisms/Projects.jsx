'use client'
import React from 'react';

export default function Projects ({projects}) {
  return (
    <section className='bg-base z-50 min-h-screen border bg-base-100'>
      <div className='layout'>
        <h2 className='text-center'>Projects</h2>
        <ul className='flex flex-col gap-4'>
          {projects &&
            projects.map((p) => (
              <React.Fragment key={p.slug}>
                <p>{p.name}</p>
              </React.Fragment>
            ))}
        </ul>
      </div>
    </section>
  );
};
