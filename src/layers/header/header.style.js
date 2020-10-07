import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background: transparent;
  width: 100%;
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
    border-bottom: 1px solid #a13333;
    opacity: 0.5;
  }

  a {
    padding: 20px;
  }
`;

export const LogoContainer = styled.div`
  padding: 20px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  padding: 20px;

  &:hover {
    color: #a13333;
  }
`;
