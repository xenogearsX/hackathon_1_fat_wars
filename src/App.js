import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './screen/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
