import React from 'react';
import './App.css';
import Login from './components/login___signup/login'
import {Switch, Route, useHistory} from 'react-router-dom'
import Nav from "./components/navBar"
import SignUp from './components/login___signup/signup';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/login">
      <Login />
</Route>
    <Route path='/signup'>
      <SignUp />
    </Route>
    </div>
  );
}

export default App;
