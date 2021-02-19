import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './screen/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <link href="https://fr.allfont.net/allfont.css?fonts=star-jedi" rel="stylesheet" type="text/css" />
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
