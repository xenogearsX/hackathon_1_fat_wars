import './App.css';
import {Switch, Route} from 'react-router-dom'
import Match from './components/Match'

function App() {
  return (
    <div className="App">
      
      poulet
      {/* <Switch>
        <Route exact path='/' component={}/>
        <Route exact path='/' component={}/>
        <Route path='//:id' component={}/>
      </Switch> */}
     <Match />
    </div>
  );
}

export default App;
