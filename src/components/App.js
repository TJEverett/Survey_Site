import React from "react";
import Header from "./Header";
import Account from "./Account";
import Dashboard from "./Dashboard";
import SurveyControl from "./SurveyControl";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <SurveyControl />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;