// import React from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import './App.css';
import './assets/style/style.css'
import Header from './components/Header';
import Main from './components/Main';
import Users from './components/Users';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAddressBook, faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App container">
      <Header />
      <Router>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Redirect to='/users' />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
