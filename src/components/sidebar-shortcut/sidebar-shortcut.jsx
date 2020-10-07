import React from 'react';
import PropTypes from 'prop-types';
import { ShortcatContainer, ShortcutIconWrapper, ShortcutTitle } from './sidebar-shortcut.style';

const Shortcut = ({ title, icon, eventHandler }) => {
  return (
    <ShortcatContainer onClick={() => eventHandler(false)}>
      <ShortcutIconWrapper>
        <img src={icon} alt="icon" />
        <ShortcutTitle>{title}</ShortcutTitle>
      </ShortcutIconWrapper>
    </ShortcatContainer>
  );
};

Shortcut.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  eventHandler: PropTypes.func
};

export default Shortcut;
