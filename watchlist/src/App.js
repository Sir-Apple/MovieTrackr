import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Watched } from './components/Watched';
import { Watchlist } from './components/Watchlist';
import { Addmovie } from './components/Addmovie';
import './App.css';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path='/'>
          <Watchlist/>
        </Route>
        <Route path='/Watched'>
          <Watched/>
        </Route>
        <Route path='/Addmovie'>
          <Addmovie/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
