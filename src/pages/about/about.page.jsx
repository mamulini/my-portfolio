import React from 'react';
import { useTranslation } from 'react-i18next';
import Skills from '../../components/skills/skills';
import { AboutContainer, AboutContent, AboutDescription, AboutTitle } from './about.style';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <AboutTitle>{t('aboutpage.title')}</AboutTitle>
      <AboutContent>
        <AboutDescription>{t('aboutpage.part1')}</AboutDescription>
        <br />
        <AboutDescription>{t('aboutpage.part2')}</AboutDescription>
        <br />
        <AboutDescription>{t('aboutpage.part3')}</AboutDescription>
        <Skills />
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;
