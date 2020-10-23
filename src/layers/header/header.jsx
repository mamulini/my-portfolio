import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '../../components/navbar/navbar';
import BurgerButton from '../../components/burger-button/burger-button';
import { HeaderContainer, LogoContainer } from './header.style';
import logo from '../../assets/icons/DM__Logo.png';

const Header = ({ isSmallTablet }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoContainer>

      {isSmallTablet ? (
        <Navbar open={open} setOpen={setOpen} />
      ) : (
        <>
          <BurgerButton open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </>
      )}
    </HeaderContainer>
  );
};

Header.propTypes = {
  isSmallTablet: PropTypes.bool
};

export default Header;
