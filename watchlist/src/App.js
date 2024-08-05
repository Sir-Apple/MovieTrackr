import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Watched } from './components/Watched';
import { Watchlist } from './components/Watchlist';
import { Addmovie } from './components/Addmovie';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>

        <Switch>
          <Route exact path='/'>
            <Addmovie/>
          </Route>
          <Route path='/Watched'>
            <Watched/>
          </Route>
          <Route path='/Watchlist'>
            <Watchlist/>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App;
