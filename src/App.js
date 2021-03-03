import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserDashboard from './pages/UserDashboard';

export default function App() {

  // Logged in User
  const loggedIn = () => {
    return localStorage.getItem("token") !== null;
  }
  // Secure Route
  const SecureRoute = ({component: Component, ...rest}) => (
    <Route 
      {...rest}
      render={props =>
        loggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
      
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <SecureRoute exact path="/dashboard" component={UserDashboard}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}

