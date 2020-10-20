import React from 'react';
import PropTypes from 'prop-types';
import { ShortcatContainer, ShortcutIconWrapper, ShortcutTitle } from './sidebar-shortcut.style';

const Shortcut = ({ title, icon, eventHandler }) => {
  return (
    <ShortcatContainer onClick={() => eventHandler(false)}>
      <ShortcutIconWrapper>
        <img src={icon} alt="icon" />
      </ShortcutIconWrapper>
      <ShortcutTitle>{title}</ShortcutTitle>
    </ShortcatContainer>
  );
};

Shortcut.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
  eventHandler: PropTypes.func
};

export default Shortcut;
