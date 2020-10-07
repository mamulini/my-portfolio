import React from 'react';

import { HomepageContainer, GreetingsTitle, NameTitle, Tagline } from './homepage.style';

const Homepage = () => {
  return (
    <HomepageContainer>
      <div style={{ width: '50vw', margin: '0 auto' }}>
        <GreetingsTitle>Hi, I&apos;m</GreetingsTitle>
        <NameTitle>David Mamulia.</NameTitle>
        <Tagline>I like to make stuff for the web.</Tagline>
      </div>
    </HomepageContainer>
  );
};

export default Homepage;
