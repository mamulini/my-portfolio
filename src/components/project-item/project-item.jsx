import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectItemContainer,
  ProjectItemTitle,
  ProjectItemImg,
  ProjectItemLinksContainer,
  ProjectItemLink
} from './project-item.style';

const ProjectItem = ({ title, icon, page, github }) => {
  return (
    <ProjectItemContainer>
      <ProjectItemImg>
        <img src={icon} alt="URL shortener" />
      </ProjectItemImg>
      <ProjectItemTitle>{title}</ProjectItemTitle>
      <ProjectItemLinksContainer>
        <ProjectItemLink href={github} target="_blank" rel="noopener noreferrer">
          View on github
        </ProjectItemLink>
        <ProjectItemLink href={page} target="_blank" rel="noopener noreferrer">
          Go live
        </ProjectItemLink>
      </ProjectItemLinksContainer>
    </ProjectItemContainer>
  );
};

ProjectItem.propTypes = {
  icon: PropTypes.node.isRequired,
  github: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ProjectItem;
