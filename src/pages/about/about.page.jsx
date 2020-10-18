import React from 'react';
import Skills from '../../components/skills/skills';
import { AboutContainer, AboutContent, AboutDescription, AboutTitle } from './about.style';

const AboutPage = () => (
  <AboutContainer>
    <AboutTitle>Who am I ?</AboutTitle>
    <AboutContent>
      <AboutDescription>
        I&apos;m David Mamulia, a front-end web developer with a sysadmin background, living in
        Kyiv, with beautiful wife and cute jack russel terrier.
      </AboutDescription>
      <br />
      <AboutDescription>
        I completed font-end developer basics course at PowerCode Academy in Kyiv, JavaScript
        advanced and ReactJS courses on Udemy.com, i love reading books and articles about
        programing, learning new skills and practicing what i have learnt already. I take every
        opportunity to learn and build projects.
      </AboutDescription>
      <br />
      <AboutDescription>
        When i&apos;m not working or learning, i like to do sport, listen to music, hiking in
        nature.
      </AboutDescription>
      <Skills />
    </AboutContent>
  </AboutContainer>
);

export default AboutPage;
