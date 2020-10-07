import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background: #a13333;
  text-align: center;
  border-radius: 7px;
  overflow: hidden;
`;

export const ProjectItemTitle = styled.h2`
  /* padding: 10px; */
  font-size: 18px;
  font-weight: bold;
`;

export const ProjectItemImg = styled.div`
  /* margin: 10px; */
`;

export const ProjectItemLinksContainer = styled.div``;

export const ProjectItemLink = styled.a`
  padding: 10px;

  &:hover {
    color: red;
  }
`;
