import React from "react";
import SurveyCreate from "./SurveyCreate";
import SurveyEdit from "./SurveyEdit";
import SurveyList from "./SurveyList";
import SurveyAnswerForm from "./SurveyAnswerForm";

function SurveyControl(){
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
  const newBool = false;
  const surveyStored = survey1;
  const editBool = false;
  const correctUserBool = false;


  //Routing Logic
  let currentComponent = null;
  if(newBool === true){
    currentComponent = <SurveyCreate />;
  }else if(surveyStored === null){
    currentComponent = <SurveyList listedSurveys={surveyList} />;
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
      currentComponent = <SurveyAnswerForm survey={surveyStored}/>;
    }
  }

  return (
    <React.Fragment>
      {currentComponent}
    </React.Fragment>
  );
}

export default SurveyControl;