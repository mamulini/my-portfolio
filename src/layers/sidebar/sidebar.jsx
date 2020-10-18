import React from 'react';

import SendMessage from '../../components/send-message/send-message';
import { SidebarContainer } from './sidebar.style';

const Sidebar = () => (
  <SidebarContainer>
    <SendMessage />
  </SidebarContainer>
);

export default Sidebar;
