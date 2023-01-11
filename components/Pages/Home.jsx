import React from 'react';

import { Intro, Projects, Skills } from '../Organisms';

export const Home = async () => {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />
    </main>
  );
};
