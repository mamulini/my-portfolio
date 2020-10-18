import React from 'react';
import PropTypes from 'prop-types';
import { StyledBurgerButton } from './burger-button.style';

const BurgerButton = ({ open, setOpen }) => (
  <StyledBurgerButton open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurgerButton>
);

BurgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default BurgerButton;
