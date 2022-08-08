import React from "react";
import SurveyCreate from "./SurveyCreate";
import SurveyEdit from "./SurveyEdit";
import SurveyList from "./SurveyList";
import SurveyAnswerForm from "./SurveyAnswerForm";
import SurveyResults from "./SurveyResult";

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
  const result1 = {
    id: "q1",
    surveyId: "1a",
    response1: "4 Star",
    response2: "1 Star",
    response3: "none",
    response4: "5 Star",
    response5: "Moonstruck, Reese's, Hershey"
  };
  const result2 = {
    id: "w2",
    surveyId: "2b",
    response1: "1 Star",
    response2: "1 Star",
    response3: "depends on the seasoning",
    response4: "1 Star",
    response5: "salads are garbage"
  };
  const result3 = {
    id: "e3",
    surveyId: "1a",
    response1: "2 Star",
    response2: "5 Star",
    response3: "mango, guava, pineapple",
    response4: "3 Star",
    response5: "Starburst, Skittles, Mike & Ikes"
  };
  const result4 = {
    id: "r4",
    surveyId: "3c",
    response1: "4 Star",
    response2: "1 Star",
    response3: "I am pescatarian",
    response4: "2 Star",
    response5: "shrimp, scallops, cod"
  };
  const result5 = {
    id: "t5",
    surveyId: "3c",
    response1: "5 Star",
    response2: "5 Star",
    response3: "T-bone, sirloin, ribs",
    response4: "1 Star",
    response5: "beef is all I need"
  };
  const result6 = {
    id: "y6",
    surveyId: "2b",
    response1: "5 Star",
    response2: "4 Star",
    response3: "pickles, tomatoes, broccoli",
    response4: "2 Star",
    response5: "I only eat cesar salads"
  };
  const resultList = [result1, result2, result3, result4, result5, result6];
  
  //Temp values to control routing
  const newBool = false;
  const surveyStored = survey1;
  const editBool = false;
  const correctUserBool = true;


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
      currentComponent = <SurveyResults survey={surveyStored} responses={resultList}/>;
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