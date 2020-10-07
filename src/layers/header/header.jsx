import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, Nav, NavLink, LogoContainer } from './header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">{`{ CodeWithDavid }`}</Link>
      </LogoContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
