import styled from 'styled-components/macro';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 80px;
`;

export const AboutTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const AboutContent = styled.div`
  max-width: 850px;
  /* height: 70vh; */
  margin: 0 50px 20px 50px;
  background: var(--lighter-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 8px 8px 6px var(--secondary-color);
  color: var(--primary-color);

  @media screen and (max-width: 940px) {
    width: 90vw;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    text-align: center;
    margin-bottom: 20px;
    align-items: center;
    width: 80vw;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-height: 1200px) {
    width: 750px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: left;
  }
`;
