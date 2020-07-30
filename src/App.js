import React, { useEffect,useState } from 'react';
import './App.css';
import { NavWrap, Button } from './components/Nav';
import Login from './components/login/Login';
import Footer from './components/Footer';
import { Switch, Route, useHistory, NavLink, Link} from 'react-router-dom';
import Register from './components/sign-up/Register';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { fetchData } from './action/action';
import { fetchPosts } from './action/fetchPosts';
import AddPost from './components/Dashboard/addPost'
import UpdatePost from './components/Dashboard/updatePost'
import PrivateRoute from './components/PrivateRoute';

function App(props) {
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])

  const { push } = useHistory();

  useEffect(()=> {
    // get request for user data with redux 
    props.fetchData()
    props.fetchPosts()
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
            <Button><a className="linkStyle" href="https://expatmarketing.netlify.app/index.html">Home</a></Button>
            <Button><NavLink className="linkStyle" to="/login">Login</NavLink></Button>
            <Button><NavLink className="linkStyle" to="/signup">Sign Up</NavLink> </Button>
            <Button onClick={signOutSubmit} ><NavLink className="linkStyle" to="/">log out</NavLink> </Button>
            <Link id='home' exact to="/dashboard">Dashboard</Link>
        </NavWrap>
      </header>
     {// <Nav /> Stacey' nav (not used) ]
     }
      <Switch>

        <PrivateRoute  path='/dashboard'  component={Dashboard} />

        <Route exact path='/login'>
          <Login user={props.user} />
        </Route>  

        <Route path="/signup">
          <Register />
        </Route> 

        <Route  path="/addpost">
            <AddPost /> 
        </Route>
        
        <Route path="/updatepost/:id">
          <UpdatePost />
        </Route>
           
      </Switch>

      <Footer />
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
  { fetchData, fetchPosts }
)(App);
