import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectItemContainer,
  ProjectItemTitle,
  ProjectItemImg,
  ProjectItemContent,
  ProjectItemLink,
  ProjectItemSubtitle,
  ProjectItemLinksWrapper
} from './project-item.style';

const ProjectItem = ({ title, subtitle, image, page, github }) => {
  return (
    <ProjectItemContainer>
      <ProjectItemImg>
        <img src={image} alt="project img" />
      </ProjectItemImg>
      <ProjectItemContent>
        <ProjectItemTitle>{title}</ProjectItemTitle>
        <ProjectItemSubtitle>{subtitle}</ProjectItemSubtitle>
        <ProjectItemLinksWrapper>
          <ProjectItemLink href={github} target="_blank" rel="noopener noreferrer">
            On github
          </ProjectItemLink>
          <ProjectItemLink href={page} target="_blank" rel="noopener noreferrer">
            Go live
          </ProjectItemLink>
        </ProjectItemLinksWrapper>
      </ProjectItemContent>
    </ProjectItemContainer>
  );
};

ProjectItem.propTypes = {
  image: PropTypes.node.isRequired,
  github: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default ProjectItem;
