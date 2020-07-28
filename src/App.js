import React from 'react';
import './App.css';
import { NavWrap, Button } from './components/Nav'
import Login from './components/login/Login';
import { Switch, Route, useHistory, NavLink} from 'react-router-dom'
import Register from './components/sign-up/Register'
import { connect } from 'react-redux'



function App() {
  return (
    <div className="App">
      <header>
        <NavWrap>
            <Button><a className="linkStyle" href="https://expactmarketing.netlify.app/#main">Home</a></Button>
            <Button><NavLink className="linkStyle" to="/">Login</NavLink></Button>
            <Button><NavLink className="linkStyle" to="/signup">Sign Up</NavLink> </Button>

        </NavWrap>
      </header>
      {/* <Nav /> */}
      <Switch>
      <Route exact path='/'>
        <Login />
      </Route>  
      <Route path="/signup">
        <Register />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
