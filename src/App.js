import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Match from './components/Match'
import Home from './components/Home'
import APIimc from './components/APIimc.js';
import Timer from './components/Timer';
import Credits from './components/Credits';
import Logo from './components/Logo';
import CharacterDetails from "./components/CharacterDetails"


function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/APIimc' component={APIimc} />
        <Route exact path='/match' component={Match} />
        <Route path="/match/:id" component={CharacterDetails} />
        <Route path='/training' component={Timer} />
        <Route path='/credits' component={Credits} />
      </Switch>
      {/* <Credits />
      <APIimc />
      <Timer />
      <Match /> */}
    </div>
  );
}

export default App;
