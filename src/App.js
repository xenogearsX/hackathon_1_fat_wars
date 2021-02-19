import './App.css';
import {Switch, Route} from 'react-router-dom'
import Match from './components/Match'
import Home from './screen/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <APIimc />
      <Timer />
      <Match />
      {/* <Switch>
        <Route exact path='/' component={}/>
        <Route exact path='/' component={}/>
        <Route path='//:id' component={}/>
      </Switch> */}
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
