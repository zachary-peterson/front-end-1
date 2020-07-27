import React from 'react';
import './App.css';
import Login from './components/login___signup/login'
import {Switch, Route, useHistory} from 'react-router-dom'
import Nav from "./components/navBar"


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/login">
      <Login />

    </Route>
    </div>
  );
}

export default App;
