import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as a from "../actions/index";

function Dashboard() {
  //Temp prop values
  const survey1 = {
    id: "1a",
    title: "Fruit Survey",
    question1: "Rate your enjoyment of eating",
    answer1: "stars",
    question2: "Rate your enjoyment of fruit",
    answer2: "stars",
    question3: "What are your 3 favorite fruits?",
    answer3: "text",
    question4: "Rate your enjoyment of candy",
    answer4: "stars",
    question5: "What are your 3 favorite candies?",
    answer5: "text"
  };
  const survey2 = {
    id: "2b",
    title: "Veggie Survey",
    question1: "Rate your enjoyment of eating",
    answer1: "stars",
    question2: "Rate your enjoyment of vegetables",
    answer2: "stars",
    question3: "What are your 3 favorite vegetables?",
    answer3: "text",
    question4: "Rate your enjoyment of salads",
    answer4: "stars",
    question5: "What are your 3 favorite types of salad?",
    answer5: "text"
  };
  const survey3 = {
    id: "3c",
    title: "Protein Survey",
    question1: "Rate your enjoyment of eating",
    answer1: "stars",
    question2: "Rate your enjoyment of meat",
    answer2: "stars",
    question3: "What are your 3 favorite meats?",
    answer3: "text",
    question4: "Rate your enjoyment of seafood",
    answer4: "stars",
    question5: "What are your 3 favorite types of seafood?",
    answer5: "text"
  };
  const surveyList = [survey1, survey2, survey3];

  //Temp values to control routing
  const loggedIn = true;

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
    console.log("pressed delete on " + id); //Replace with firestore .delete
  }
  

  //Return Logic
  if(loggedIn === true){
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
  if(loggedIn === false){
    return (
      <React.Fragment>
        <h1 style={styleCenter}>Please log in to view your dashboard</h1>
      </React.Fragment>
    );
  }
}

export default Dashboard;