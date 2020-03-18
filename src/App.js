import React from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import './pages/homepage/homepage.styles.scss';

import Homepage from './pages/homepage/homepage.component';

const Hats = () => (
  <div>
    <h1>
      HATS
    </h1>
  </div>
  );

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={Hats} />
    </Switch>
  </div>
}

export default App;
