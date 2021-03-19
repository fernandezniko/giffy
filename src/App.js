import React from 'react';
import { Link, Route } from 'wouter';
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Detail from './pages/Detail/Detail'
import { GifsContextProvider } from './context/GifsContext'
import './App.css';
require('dotenv').config()

const App = () => {

  return (

    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt='Giffy logo' src='/logo.png' />
          </figure>
        </Link>
        <GifsContextProvider>
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
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App