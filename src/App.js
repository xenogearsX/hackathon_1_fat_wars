import './App.css';
import {Switch, Route} from 'react-router-dom'
import Timer from './components/Timer';
import Header from './components/Header';
import APIimc from './components/APIimc';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <APIimc />
      {/* <Switch>
        <Route exact path='/' component={}/>
        <Route exact path='/' component={}/>
        <Route path='//:id' component={}/>
      </Switch> */}
    </div>
  );
}

export default App;
