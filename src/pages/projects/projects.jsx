import React from 'react';

import { ProjectsContainer, ProjectsTitle, ProjectsList } from './projects.style';
import urlShortenerImage from '../../assets/project-images/url-shortener.png';
import ProjectItem from '../../components/project-item/project-item';

const ProjectsPage = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>My projects</ProjectsTitle>
      <ProjectsList>
        <ProjectItem
          title="URL shortener"
          icon={urlShortenerImage}
          github={'https://github.com/mamulini/url-shortener/'}
          page={'https://mamulini.github.io/url-shortener/'}
        />
        <ProjectItem
          title="URL shortener"
          icon={urlShortenerImage}
          github={'https://github.com/mamulini/url-shortener/'}
          page={'https://mamulini.github.io/url-shortener/'}
        />
        <ProjectItem
          title="URL shortener"
          icon={urlShortenerImage}
          github={'https://github.com/mamulini/url-shortener/'}
          page={'https://mamulini.github.io/url-shortener/'}
        />
        <ProjectItem
          title="URL shortener"
          icon={urlShortenerImage}
          github={'https://github.com/mamulini/url-shortener/'}
          page={'https://mamulini.github.io/url-shortener/'}
        />
        <ProjectItem
          title="URL shortener"
          icon={urlShortenerImage}
          github={'https://github.com/mamulini/url-shortener/'}
          page={'https://mamulini.github.io/url-shortener/'}
        />
        <ProjectItem
          title="URL shortener"
          icon={urlShortenerImage}
          github={'https://github.com/mamulini/url-shortener/'}
          page={'https://mamulini.github.io/url-shortener/'}
        />
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default ProjectsPage;
