import React, { useEffect } from 'react';
import './App.css';
import { NavWrap, Button } from './components/Nav'
import Login from './components/login/Login';
import { Switch, Route, useHistory, NavLink} from 'react-router-dom'
import Register from './components/sign-up/Register'
import { connect } from 'react-redux'
import { fetchData } from './action/action'




function App(props) {

  const { push } = useHistory();

  useEffect(()=> {
    // get request for user data with redux 
    props.fetchData()
}, []) 

const signOutSubmit = e => {
  e.preventDefault()
  localStorage.clear()
  push('/')

}

  return (
    <div className="App">
      <header>
        <NavWrap>
            <Button><a className="linkStyle" href="https://expactmarketing.netlify.app/#main">Home</a></Button>
            <Button><NavLink className="linkStyle" to="/">Login</NavLink></Button>
            <Button><NavLink className="linkStyle" to="/signup">Sign Up</NavLink> </Button>
            <Button onClick={signOutSubmit} ><NavLink className="linkStyle" to="/">log out</NavLink> </Button>
        </NavWrap>
      </header>
      {/* <Nav /> */}
      <Switch>
      <Route exact path='/'>
        <Login user={props.user} />
      </Route>  
      <Route path="/signup">
        <Register />
      </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      loading: state.loading,
      user: state.user,  
      error: state.error,
  } 

}
export default connect(
  mapStateToProps,
  { fetchData }
)(App);
