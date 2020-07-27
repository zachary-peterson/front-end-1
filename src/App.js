import React from 'react';
import './App.css';
import Login from './components/login/Login';
import {Switch, Route, useHistory} from 'react-router-dom'
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/">
      <Login />
    </Route>
    </div>
  );
}

export default App;
