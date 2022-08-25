import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as a from "../actions/index";
import firebase from "firebase";
import { isLoaded, useFirestore, useFirestoreConnect } from "react-redux-firebase";

function Dashboard() {
  //Database Connection
  useFirestoreConnect([
    {collection: "surveys"}
  ]);
  const firestore = useFirestore();

  //Variable Decelerations
  const auth = firebase.auth();
  const surveyDbList = useSelector(state => state.firestore.ordered.surveys);
  let surveyList = [];
  

  //CSS Styling
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "5fr 1fr",
    gridTemplateRows: "1fr"
  };
  const styleBubble = {
    position: "relative",
    padding: "10px",
    borderRadius: "20px",
    marginRight: "10%",
    marginLeft: "10%",
    backgroundColor: "bisque"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center"
  };
  function StylePosition(fromTop, fromLeft) {
    let tempString = fromTop + " / " + fromLeft;
    return { gridArea: tempString, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" };
  };

  //Dispatch Logic
  const dispatch = useDispatch();
  function RedirectToSurvey(survey) {
    const action1 = a.surveySelect(survey);
    const action2 = a.goOther();
    dispatch(action1);
    dispatch(action2);
  }
  function RedirectToEdit(survey) {
    const action1 = a.surveySelect(survey);
    const action2 = a.goEdit();
    dispatch(action1);
    dispatch(action2);
  }
  function RedirectToCreate() {
    const action1 = a.goCreate()
    dispatch(action1);
  }
  function DeleteAction(id) {
    firestore.delete({collection: "surveys", doc: id});
  }
  

  //Return Logic
  if(!isLoaded(auth) || !isLoaded(surveyList)){
    return(
      <h1>Loading...</h1>
    )
  }
  if(isLoaded(auth) && auth.currentUser != null){
    surveyList = surveyDbList.filter((survey) => survey.creator === auth.currentUser.uid);
    return (
      <React.Fragment>
        <h1 style={styleCenter}>Dashboard</h1>
        <div style={styleBubble}>
          <Link to="/" onClick={RedirectToCreate}><h3 style={styleCenter}>NEW</h3></Link>
        </div>
        <br />
        {surveyList.map(entry => {
          return (
            <div key={entry.id}>
              <div style={{...styleTable, ...styleBubble}}>
                <div style={StylePosition(1, 1)}>
                  <Link to="/" onClick={() => RedirectToSurvey(entry)}><h3>{entry.title} Details</h3></Link>
                </div>
                <div style={StylePosition(1, 2)}>
                  <Link to="/" onClick={() => RedirectToEdit(entry)}><button>Update</button></Link>
                  <Link to="/dashboard" onClick={() => DeleteAction(entry.id)}><button>Delete</button></Link>
                </div>
              </div>
              <br/>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
  if(isLoaded(auth) && auth.currentUser == null){
    return (
      <React.Fragment>
        <h1 style={styleCenter}>Please log in to view your dashboard</h1>
      </React.Fragment>
    );
  }
}

export default Dashboard;