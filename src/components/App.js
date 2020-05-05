import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './Header/Header.js'
import LandingPage from './LandingPage.js'
import ChampionBase from './champions/ChampionBase';

const App = () => {
  return (
      <div className='container'>
        <Router history={history}>
          <form className='grey darken-3 z-depth-1'>
            <Header />
            <div className='divider' />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/champion/:id" exact component={ChampionBase} />
            </Switch>
          </form>
        </Router>
      </div>
  )
}

export default App;