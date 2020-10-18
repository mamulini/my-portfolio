import styled from 'styled-components/macro';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 80px;
`;

export const ProjectsTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const ProjectsList = styled.div`
  display: flex;
  width: 80vw;
  margin-top: 10%;

  @media screen and (max-width: 1023px) {
    width: 100vw;
  }

  @media screen and (max-width: 900px) and (orientation: landscape) {
    width: 80vw;
    top: 80%;
  }

  .rec-arrow {
    color: #fff;
    background: transparent;

    &:hover,
    &:focus {
      background: var(--secondary-color);
    }
  }

  .rec-dot {
    box-shadow: 0 0 1px 2px #fff;
  }

  .rec-dot_active {
    background: var(--secondary-color);
  }

  .rec-item-wrapper {
    padding-bottom: 10px !important;
  }
`;
