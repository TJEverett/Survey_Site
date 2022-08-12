import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as a from "../actions/index";

function Header(){
  //Style Logic
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr"
  }
  const styleLeft = {
    display: "flex",
    justifyContent: "flex-start"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center"
  };
  const styleRight = {
    display: "flex",
    justifyContent: "flex-end"
  };

  //Dispatch Logic
  const dispatch = useDispatch();
  function RedirectClear() {
    const action1 = a.surveyDeselect();
    const action2 = a.goOther();
    dispatch(action1);
    dispatch(action2);
  }

  //Return Logic
  return (
    <React.Fragment>
      <h1 style={styleCenter}>Survey Site</h1>
      
      <div style={styleTable}>
        <div style={styleLeft}>
          <Link to="/"><button onClick={RedirectClear}>Surveys</button></Link>
        </div>
        <div style={styleCenter}>
          <Link to="/dashboard"><button onClick={RedirectClear}>Dashboard</button></Link>
        </div>
        <div style={styleRight}>
          <Link to="/account"><button onClick={RedirectClear}>Account</button></Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;