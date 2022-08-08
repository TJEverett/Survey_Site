import React from "react";
import { Link } from "react-router-dom";

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

  //Return Logic
  return (
    <React.Fragment>
      <h1 style={styleCenter}>Survey Site</h1>
      
      <div style={styleTable}>
        <div style={styleLeft}>
          <Link to="/"><button>Surveys</button></Link>
        </div>
        <div style={styleCenter}>
          <Link to="/dashboard"><button>Dashboard</button></Link>
        </div>
        <div style={styleRight}>
          <Link to="/account"><button>Account</button></Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;