import React from 'react';

import { Intro, Projects, Skills } from '../Organisms';

export default async function Home () {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />
    </main>
  );
};
