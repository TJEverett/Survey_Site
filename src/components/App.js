import React from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <h1>Dashboard</h1>
        </Route>
        <Route path="/account">
          <h1>Account</h1>
        </Route>
        <Route path="/">
          <h1>Surveys</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;