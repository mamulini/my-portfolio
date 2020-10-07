import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './layers/sidebar/sidebar';
import './App.css';
import './components/fontAwsomeIcons/fontAwsomeIcons';

import Homepage from './pages/homepage/homepage';
import AboutPage from './pages/about/about';
import Header from './layers/header/header';
import Contact from './pages/contact/contact';
import ProjectsPage from './pages/projects/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
