import React from "react";
import SurveyCreate from "./SurveyCreate";

function SurveyControl(){
  //Temp values to control routing
  const newBool = true;
  const surveyStored = null;
  const editBool = false;
  const correctUserBool = false;

  //Routing Logic
  let currentComponent = null;
  if(newBool === true){
    currentComponent = <SurveyCreate />;
  }else if(surveyStored === null){
    currentComponent = <h1>SURVEY LIST</h1>;
  }else if(editBool === true){
    if(correctUserBool === true){
      currentComponent = <h1>EDIT</h1>;
    }else{
      currentComponent = <h2>Please log in to edit</h2>;
    }
  }else{
    if(correctUserBool === true){
      currentComponent = <h1>RESULTS</h1>;
    }else{
      currentComponent = <h1>SURVEY FORM</h1>;
    }
  }

  return (
    <React.Fragment>
      {currentComponent}
    </React.Fragment>
  );
}

export default SurveyControl;