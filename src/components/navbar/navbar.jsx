import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LanguageSelector from '../../components/language-selector/language-selector';
import { NavbarContainer, NavbarLink } from './navbar.style';

const Navbar = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const handleClickOutside = event => {
    if (open === true && ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  useEffect(() => {
    const app = document.getElementById('app');

    if (open) {
      app.classList.add('app_overflow');
    } else {
      app.classList.remove('app_overflow');
    }
  }, [open]);

  return (
    <NavbarContainer ref={ref} open={open}>
      <NavbarLink to="/" onClick={() => setOpen(false)}>
        {t('navbar.home')}
      </NavbarLink>
      <NavbarLink to="/about" onClick={() => setOpen(false)}>
        {t('navbar.about')}
      </NavbarLink>
      <NavbarLink to="/projects" onClick={() => setOpen(false)}>
        {t('navbar.projects')}
      </NavbarLink>
      <NavbarLink to="/contact" onClick={() => setOpen(false)}>
        {t('navbar.contact')}
      </NavbarLink>
      <LanguageSelector />
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Navbar;
