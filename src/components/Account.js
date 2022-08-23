import React from "react";
import firebase from "firebase/app";
import { withFirestore, isLoaded } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Account extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      redirectTo: null
    }
  }

  //Internal Functions
  redirectFunction = (consoleMessage, location = null) => {
    console.log(consoleMessage);
    this.setState({
      redirectTo: location
    });
  }

  //Auth Functions
  DoSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.redirectFunction("Successfully signed up", "/dashboard"))
      .catch(function(error){
        console.log(error.message);
      });
  }

  DoSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.redirectFunction("Successfully signed in", "/dashboard"))
      .catch(function(error){
        console.log(error.message);
      });
  }

  DoSignOut = () => {
    firebase.auth().signOut()
      .then(this.redirectFunction("Successfully signed out", "/"))
      .catch(function(error){
        console.log(error.message);
      });
  }

  render(){
    const auth = this.props.firebase.auth();
    
    if(this.state.redirectTo !== null){
      return(
        <Redirect to={this.state.redirectTo} />
      )
    }
    if(!isLoaded(auth)){
      return(
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      return (
        <React.Fragment>
          <h1>Sign Out</h1>
          <button onClick={this.DoSignOut}>Sign out</button>
        </React.Fragment>
      );
    }
    if(isLoaded(auth) && auth.currentUser == null){
      return (
        <React.Fragment>
          <h1>Sign In</h1>
          <form onSubmit={this.DoSignIn}>
            <input
              type="text"
              name="signInEmail"
              placeholder="email" />
            <input
              type="password"
              name="signInPassword"
              placeholder="Password" />
            <button type="submit">Sign in</button>
          </form>
    
          <br />
          <br />
          <h1>OR</h1>
          <br />
          <br />
  
          <h1>Sign up</h1>
          <form onSubmit={this.DoSignUp}>
            <input
              type="text"
              name="email"
              placeholder="email" />
            <input
              type="password"
              name="password"
              placeholder="Password" />
            <button type="submit">Sign up</button>
          </form>
        </React.Fragment>
      );
    }
  }
}

export default withFirestore(Account);