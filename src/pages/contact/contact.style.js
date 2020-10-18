import styled from 'styled-components/macro';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 80px;
`;

export const ContactTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  width: 850px;
  margin: 0 50px 0 50px;
  background: var(--lighter-color);
  border-radius: 10px;
  padding: 40px 40px 0 40px;
  color: var(--primary-color);
  box-shadow: 8px 8px 6px var(--secondary-color);

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

export const BlockWrapper = styled.div`
  min-height: 20px;
  width: 45%;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
