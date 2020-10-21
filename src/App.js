import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContainer, GlobalStyles } from './global.style';

import Homepage from './pages/homepage/homepage';
import AboutPage from './pages/about/about.page';
import Header from './layers/header/header';
import ProjectsPage from './pages/projects/projects.page';
import Sidebar from './layers/sidebar/sidebar';
import Contact from './pages/contact/contact.page';
import './components/fontAwsomeIcons/fontAwsomeIcons';

function App() {
  const [isTablet, setTablet] = useState(window.innerWidth > 1023);
  const [isSmallTablet, setSmalltablet] = useState(window.innerWidth > 941);
  const [isMobile, setMobile] = useState(window.innerWidth > 440);
  console.log(isTablet);

  const updateMedia = () => {
    setTablet(window.innerWidth > 1023);
    setSmalltablet(window.innerWidth > 941);
    setMobile(window.innerWidth > 440);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <AppContainer id="app">
      <GlobalStyles />
      <Header isSmallTablet={isSmallTablet} />
      {isTablet ? <Sidebar /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/projects"
          render={props => (
            <ProjectsPage {...props} isSmallTablet={isSmallTablet} isMobile={isMobile} />
          )}
        />
      </Switch>
    </AppContainer>
  );
}

export default App;
