import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './pages/about/about.page';
import Sidebar from './layers/sidebar/sidebar';
import './components/fontAwsomeIcons/fontAwsomeIcons';
import Homepage from './pages/homepage/homepage';
import Header from './layers/header/header';
import Contact from './pages/contact/contact.page';
import ProjectsPage from './pages/projects/projects.page';
import { AppContainer, GlobalStyles } from './global.style';

function App() {
  return (
    <AppContainer id="app">
      <GlobalStyles />
      <Header />
      {window.innerWidth > 1023 ? <Sidebar /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </AppContainer>
  );
}

export default App;
