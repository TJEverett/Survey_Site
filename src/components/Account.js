import React from "react";

function Account() {
  //Temp values to control routing
  const loggedIn = false;

  //Return Logic
  if(loggedIn === true){
    return (
      <React.Fragment>
        <h1>Sign Out</h1>
        <button>Sign out</button>
      </React.Fragment>
    );
  }
  if(loggedIn === false){
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form>
          <input
            type="text"
            name="signinEmail"
            placeholder="email" />
          <input
            type="password"
            name="signinPassword"
            placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
  
        <br />
        <br />
        <h1>OR</h1>
        <br />
        <br />

        <h1>Sign up</h1>
        <form>
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

export default Account;