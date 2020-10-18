import styled from 'styled-components/macro';

export const HomepageContainer = styled.div`
  display: flex;
  text-align: left;
  margin: 0 auto;
  align-items: center;
  height: 90vh;

  @media screen and (max-width: 1023px) {
    position: absolute;
    top: 100px;
    height: auto;
  }
`;

export const GreetingsWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    width: 70vw;
  }
`;

export const GreetingsTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const NameTitle = styled.h1`
  font-size: 94px;
  color: var(--lighter-color);
  text-shadow: 1px 7px 2px var(--secondary-color);
  font-weight: bolder;
  line-height: 1.2;
  @media screen and (max-width: 767px) {
    font-size: 52px;
  }
`;

export const Tagline = styled.h2`
  font-size: 54px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;
