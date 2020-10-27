import React from 'react';
import { useTranslation } from 'react-i18next';

import { SkillsContainer, SkillsTitle, SkillsItemsContainer, SkillsItem } from './skills.style';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <SkillsContainer>
      <SkillsTitle>{t('skills.title')}</SkillsTitle>
      <SkillsItemsContainer>
        <SkillsItem>
          <img src="https://img.icons8.com/color/144/000000/html-5.png" alt="HTML" />
          <span>HTML5</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/color/144/000000/css3.png" alt="CSS" />
          <span>CSS</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/color/144/000000/sass-avatar.png" alt="SASS" />
          <span>SASS</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap" />
          <span>Bootstrap</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/color/144/000000/javascript.png" alt="JS" />
          <span>JavaScript</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/officel/160/000000/react.png" alt="React" />
          <span>ReactJS</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/color/144/000000/redux.png" alt="Redux" />
          <span>Redux</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/color/144/000000/firebase.png" alt="Firebase" />
          <span>Firebase</span>
        </SkillsItem>
        <SkillsItem>
          <img src="https://img.icons8.com/wired/64/000000/api-settings.png" alt="Rest" />
          <span>REST</span>
        </SkillsItem>
        {/* <SkillsItem>
          <img src="https://img.icons8.com/dusk/64/000000/webpack.png" alt="Webpack" />
          <span>Webpack</span>
        </SkillsItem> */}
        <SkillsItem>
          <img src="https://img.icons8.com/color/96/000000/git.png" alt="Git" />
          <span>Git</span>
        </SkillsItem>
      </SkillsItemsContainer>
    </SkillsContainer>
  );
};

export default Skills;
