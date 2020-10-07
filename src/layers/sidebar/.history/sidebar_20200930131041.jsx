import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.style.css';
import PopupTest from '../../components/pupup/popup';
import Aboutme from '../../components/about/about-component';
import aboutIcon from '../../assets/78911-200.png';
import contactsIcon from '../../assets/contacts.png';
import Testpopup from '../../components/test-popup/test-popup';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="about">
        <Testpopup
          trigger={
            <div className="about_logo-wrapper">
              <img className="about_logo" src={aboutIcon} />
              <span className="subtitle">About</span>
            </div>
          }
          // position={'center'}
        >
          <Aboutme />
        </Testpopup>
      </div>
      <div className="contacts">
        <div className="about_logo-wrapper">
          <img className="about_logo" src={contactsIcon} />
          <span className="subtitle">Contacts</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
