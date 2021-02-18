import './App.css';
import {Switch, Route} from 'react-router-dom'
import Timer from './components/Timer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      {/* <Switch>
        <Route exact path='/' component={}/>
        <Route exact path='/' component={}/>
        <Route path='//:id' component={}/>
      </Switch> */}
    </div>
  );
}

export default App;
