import styled from 'styled-components/macro';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
`;

export const SkillsTitle = styled.h3`
  padding: 20px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const SkillsItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 940px) {
    justify-content: space-around;
  }
`;

export const SkillsItem = styled.div`
  /* max-width: 60px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;

  @media screen and (max-width: 940px) {
    flex: 0 0 15%;
  }

  img {
    max-width: 40px;
  }

  span {
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
  }
`;
