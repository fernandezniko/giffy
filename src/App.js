import React from 'react';
import { Link, Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';

import './App.css';

function App() {

  return (

    <div className="App-content">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/pandas'>Gifs de pandas</Link>
        <Link to='/gif/perros'>Gifs de perros</Link>
        <Link to='/gif/gatos'>Gifs de gatos</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
