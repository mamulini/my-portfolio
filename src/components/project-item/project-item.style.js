import styled from 'styled-components/macro';

export const ProjectItemContent = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
`;

export const ProjectItemContainer = styled.div`
  position: relative;
  width: 95%;
  overflow: hidden;
  text-align: center;
  border-radius: 7px;
  color: var(--lighter-color);
  box-shadow: 4px 4px 6px var(--secondary-color);

  /* @media screen and (max-width: 800px) and (min-width: 650px) {
    width: unset;
  } */
  &:hover ${ProjectItemContent} {
    position: absolute;
    background: #000024;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    transition: all 0.4s;
  }
`;

export const ProjectItemImg = styled.div`
  height: 300px;

  @media screen and (max-width: 940px) {
    height: 350px;
  }

  @media screen and (max-width: 800px) {
    height: 300px;
  }
  @media screen and (max-width: 460px) {
    height: 230px;
  }

  img {
    height: 100%;
  }
`;

export const ProjectItemTitle = styled.h2`
  padding-top: 10px;
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 459px) {
    font-size: 18px;
    padding-top: 5px;
  }
`;

export const ProjectItemSubtitle = styled.p`
  padding: 20px;
  font-size: 18px;
  text-align: left;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    padding: 10px;
  }

  @media screen and (max-width: 459px) {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
  }
`;

export const ProjectItemLinksWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const ProjectItemLink = styled.a`
  padding: 10px;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  border-radius: 7px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  @media screen and (max-width: 459px) {
    padding: 5px;
    font-weight: normal;
  }

  &:hover {
    color: #fff;
    box-shadow: 0 0 40px 40px var(--secondary-color) inset;
    outline: 0;
  }
`;
