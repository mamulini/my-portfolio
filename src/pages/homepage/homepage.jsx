import React from 'react';

import {
  HomepageContainer,
  GreetingsTitle,
  NameTitle,
  Tagline,
  GreetingsWrapper
} from './homepage.style';

const Homepage = () => (
  <HomepageContainer>
    <GreetingsWrapper>
      <GreetingsTitle>{`Hi i'm`}</GreetingsTitle>
      <NameTitle>
        David <br /> Mamulia.
      </NameTitle>
      <Tagline>The front-end developer.</Tagline>
    </GreetingsWrapper>
  </HomepageContainer>
);

export default Homepage;
