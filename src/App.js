import React from 'react';
import { Link, Route } from 'wouter';
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Detail from './pages/Detail/Detail'

import './App.css';

const App = () => {

  return (

    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt='Giffy logo' src='/logo.png' />
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword" />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}

export default App