import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  HomepageContainer,
  GreetingsTitle,
  GreetingsName,
  GreetingsSubtitle,
  GreetingsWrapper
} from './homepage.style';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <HomepageContainer>
      <GreetingsWrapper>
        <GreetingsTitle>{t('homepage.greetings')}</GreetingsTitle>
        <GreetingsName>{t('homepage.name.first')}</GreetingsName>
        <GreetingsName>{t('homepage.name.second')}</GreetingsName>
        <GreetingsSubtitle>{t('homepage.subtitle')}</GreetingsSubtitle>
      </GreetingsWrapper>
    </HomepageContainer>
  );
};

export default Homepage;

// {
//   /* <HomepageContainer>
// <GreetingsWrapper>
//   <GreetingsTitle>Hi i&apos;m</GreetingsTitle>
//   <GreetingsName>
//     David <br /> Mamulia.
//   </GreetingsName>
//   <GreetingsSubtitle>The front-end developer.</GreetingsSubtitle>
// </GreetingsWrapper>
// </HomepageContainer> */
// }
