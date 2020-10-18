import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  background: transparent;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    height: 1px;
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid var(--secondary-color);
    opacity: 0.5;
  }
`;

export const LogoContainer = styled.div`
  width: 90px;
  margin-top: 5px;
  margin-left: 30px;

  @media screen and (max-width: 460px) {
    margin-left: 10px;
    width: 60px;
  }
`;
