import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Portfolio, Skills, Home } from './pages';
import { Header } from './layout';

import './App.css';

function App(){

  return(
    <>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route path="/skills"><Skills /></Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );

};

export default App;
