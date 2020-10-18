import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { NavbarContainer, NavbarLink } from './navbar.style';

const Navbar = ({ open, setOpen }) => {
  useEffect(() => {
    const app = document.getElementById('app');

    if (open) {
      app.classList.add('app_overflow');
    } else {
      app.classList.remove('app_overflow');
    }
  }, [open]);

  return (
    <NavbarContainer open={open}>
      <NavbarLink to="/" onClick={() => setOpen(false)}>
        Home
      </NavbarLink>
      <NavbarLink to="/about" onClick={() => setOpen(false)}>
        About
      </NavbarLink>
      <NavbarLink to="/projects" onClick={() => setOpen(false)}>
        Projects
      </NavbarLink>
      <NavbarLink to="/contact" onClick={() => setOpen(false)}>
        Contact
      </NavbarLink>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Navbar;
