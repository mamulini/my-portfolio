import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/navbar';
import BurgerButton from '../../components/burger-button/burger-button';
import { HeaderContainer, LogoContainer } from './header.style';
import logo from '../../assets/icons/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      {window.innerWidth < 941 ? (
        <>
          <BurgerButton open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </>
      ) : (
        <Navbar open={open} setOpen={setOpen} />
      )}
    </HeaderContainer>
  );
};

export default Header;
