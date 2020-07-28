import React from 'react';
import './App.css';
import Login from './components/login/Login';
import {Switch, Route, useHistory} from 'react-router-dom'
import Nav from "./components/Nav";
import Dashboard from './components/Dashboard';
import Register from './components/sign-up/Register';



function App() {
  return (
    <div className="App">
      <Nav />
    <Switch>
      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>
    <Route exact path='/signup'>
      <Register />
    </Route>
      <Route path="/">
      <Login />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
