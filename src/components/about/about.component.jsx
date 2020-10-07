import React, { useState } from 'react';
import Window from '../window/window';
import aboutIcon from '../../assets/icons/about-icon.png';
import Shortcut from '../sidebar-shortcut/sidebar-shortcut';
import { AboutContent } from './about.style';

const AboutMe = () => {
  const [hideAbout, setHideAbout] = useState(true);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);
  const margin = 'auto';

  return (
    <>
      {hideAbout ? null : (
        <Window
          title="About me"
          isHidden={hideAbout}
          setIsHidden={setHideAbout}
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          minimize={minimize}
          setMinimize={setMinimize}
          maximize={maximize}
          setMaximize={setMaximize}
          margin={margin}
        >
          <AboutContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium incidunt,
            perspiciatis impedit id non, optio nisi inventore assumenda, explicabo exercitationem
            eligendi magni doloremque ipsam amet consequuntur commodi deleniti! Corrupti!
          </AboutContent>
        </Window>
      )}
      <Shortcut title="About" icon={aboutIcon} eventHandler={setHideAbout} />
    </>
  );
};

export default AboutMe;

// <div className="about" onClick={() => setHideAbout(false)}>
//   <div className="about_logo-wrapper">
//     <img className="about_logo" src={aboutIcon} />
//   </div>
//   <span className="subtitle">About</span>
// </div>
