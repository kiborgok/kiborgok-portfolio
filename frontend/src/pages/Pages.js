import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './me/Me';
import Projects from './projects/Projects';
import Work from './work/Work';
import Education from './education/Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;