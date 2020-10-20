import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;

  @media screen and (max-width: 940px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background: #000000;
    margin-right: -20px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    width: 70%;
    height: 100vh;
    text-align: left;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 7;
    opacity: 0.7;
  }
`;

export const NavbarLink = styled(Link)`
  padding: 20px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  margin-left: 10px;

  @media screen and (max-width: 940px) {
    padding: 10px;
    margin-left: 0;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: var(--secondary-color);
    transition: width 0.4s ease-in;
  }

  &:hover:after {
    opacity: 1;
    width: 100%;
  }
`;
