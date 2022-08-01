import React from "react";
import SurveyCreate from "./SurveyCreate";
import SurveyEdit from "./SurveyEdit";

function SurveyControl(){
  //Temp prop values
  const survey1 = {
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
  }
  
  //Temp values to control routing
  const newBool = true;
  const surveyStored = survey1;
  const editBool = true;
  const correctUserBool = true;


  //Routing Logic
  let currentComponent = null;
  if(newBool === true){
    currentComponent = <SurveyCreate />;
  }else if(surveyStored === null){
    currentComponent = <h1>SURVEY LIST</h1>;
  }else if(editBool === true){
    if(correctUserBool === true){
      currentComponent = <SurveyEdit survey={surveyStored} />;
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