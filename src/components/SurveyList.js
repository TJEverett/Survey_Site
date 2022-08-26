import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import * as a from "../actions/index";

function SurveyList() {
  //Database Connection
  useFirestoreConnect([
    {collection: "surveys"}
  ]);

  //Value Logic
  const listedSurveys = useSelector(state => state.firestore.ordered.surveys);

  //Dispatch Logic
  const dispatch = useDispatch();
  function RedirectToSurvey(survey){
    const action1 = a.surveySelect(survey);
    dispatch(action1);
  }

  //CSS Logic
  const styleBubble = {
    position: "relative",
    border: "solid 5px burlywood",
    borderRadius: "25px",
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: "1%",
    backgroundColor: "cornsilk"
  };

  //Return Logic
  if(!isLoaded(listedSurveys)){
    return(
      <h1>Loading...</h1>
    );
  }else{
    return (
      <React.Fragment>
        <ul>
          {listedSurveys.map((entry) => {
            return <li style={styleBubble} key={entry.id} onClick={() => RedirectToSurvey(entry)}><h2>{entry.title}</h2></li>
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default SurveyList;