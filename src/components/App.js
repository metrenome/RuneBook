import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import ChampionBase from './champions/ChampionBase';
import ChampionGrid from './champions/ChampionGrid';

const App = () => {
  return (
      <div className='container'>
        <Router history={history}>
          <form className='grey darken-3 z-depth-1'>
            <Switch>
                <Route path="/" exact component={ChampionGrid} />
                <Route path="/champion/:id" exact component={ChampionBase} />
            </Switch>
          </form>
        </Router>
      </div>
  )
}

export default App;