import React from 'react';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ProjectItem from '../../components/project-item/project-item';
import { projectsData } from '../../data/projects.data';

import { ProjectsContainer, ProjectsTitle, ProjectsList } from './projects.style';

const ProjectsPage = ({ isSmallTablet, isMobile }) => {
  const { t } = useTranslation();

  return (
    <ProjectsContainer>
      <ProjectsTitle>{t('projectpage.title')}</ProjectsTitle>
      <ProjectsList>
        <Carousel itemsToShow={isSmallTablet ? 2 : 1} enableAutoPlay={false} showArrows={isMobile}>
          {projectsData.map(({ title, id, imageUrl, subtitle, github, page }) => (
            <ProjectItem
              key={id}
              title={title}
              image={imageUrl}
              subtitle={subtitle}
              github={github}
              page={page}
            />
          ))}
        </Carousel>
      </ProjectsList>
    </ProjectsContainer>
  );
};

ProjectsPage.propTypes = {
  isSmallTablet: PropTypes.bool,
  isMobile: PropTypes.bool
};

export default ProjectsPage;
