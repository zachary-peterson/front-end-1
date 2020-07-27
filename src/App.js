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
      <Route path="/">
      <Login />
    </Route>
    <Route exact path='/signup' component={Register} />
    </div>
  );
}

export default App;
