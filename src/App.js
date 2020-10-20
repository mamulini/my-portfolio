import React from 'react';
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
