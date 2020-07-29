import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav'
import Login from './components/login/Login';
import Footer from './components/Footer.jsx'
import { Switch, Route, useHistory, NavLink, Link} from 'react-router-dom'
import Register from './components/sign-up/Register'
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard';
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
      <Nav />

      <Switch>
      <Route path="/signup">
        <Register />
      </Route> 
      <Route exact path='/explore'>
        <Dashboard />
      </Route>
      <Route exact path='/'>
        <Login user={props.user} />
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
  { fetchData }
)(App);
