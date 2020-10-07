import React from 'react';

import Message from '../../components/send-message/send-message';
import AboutMe from '../../components/about/about.component';
import { SidebarContainer } from './sidebar.style';
import './sidebar.style.css';

const Sidebar = () => {
  // const [isHidden, setIsHidden] = React.useState(true);

  return (
    <SidebarContainer>
      <Message />
      <AboutMe />
    </SidebarContainer>
  );
};

export default Sidebar;
