import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home.jsx';
import Property from './pages/property/Property.jsx';
import Error from './pages/error/Error.jsx';
import Navbar from './pages/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/details'>
            <Property />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
