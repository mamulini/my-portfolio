import React from 'react';
import Carousel from 'react-elastic-carousel';

import ProjectItem from '../../components/project-item/project-item';
import { projectsData } from '../../data/projects.data';

import { ProjectsContainer, ProjectsTitle, ProjectsList } from './projects.style';

const ProjectsPage = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>My projects</ProjectsTitle>
      <ProjectsList>
        <Carousel
          itemsToShow={window.innerWidth > 800 ? 2 : 1}
          enableAutoPlay={false}
          showArrows={window.innerWidth > 460 ? true : false}
        >
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

export default ProjectsPage;
