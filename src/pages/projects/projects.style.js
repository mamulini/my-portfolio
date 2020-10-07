import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 70vw;
  /* height: 60vh; */
  /* background: #f5ebd8; */
  padding: 10px;
  border-radius: 10px;
  /* box-shadow: 15px 15px 6px #a13333; */
`;
