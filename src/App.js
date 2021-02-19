import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import APIimc from './components/APIimc.js';
import Header from './components/Header.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Switch>
        <Route path='/APIimc' component={APIimc}/>
        <Route exact path= '/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
