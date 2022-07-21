import React from "react";
import Header from "./Header";
import SurveyControl from "./SurveyControl";
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
          <SurveyControl />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;