import React from 'react';

import {
  HomepageContainer,
  GreetingsTitle,
  GreetingsName,
  GreetingsSubtitle,
  GreetingsWrapper
} from './homepage.style';

const Homepage = () => (
  <HomepageContainer>
    <GreetingsWrapper>
      <GreetingsTitle>Hi i&apos;m</GreetingsTitle>
      <GreetingsName>
        David <br /> Mamulia.
      </GreetingsName>
      <GreetingsSubtitle>The front-end developer.</GreetingsSubtitle>
    </GreetingsWrapper>
  </HomepageContainer>
);

export default Homepage;
