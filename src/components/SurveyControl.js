import React from "react";
import SurveyCreate from "./SurveyCreate";
import SurveyEdit from "./SurveyEdit";
import SurveyList from "./SurveyList";
import SurveyAnswerForm from "./SurveyAnswerForm";
import SurveyResults from "./SurveyResult";
import { useSelector } from "react-redux";

function SurveyControl(props){
  //Temp prop values
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
  const correctUserBool = true;

  //Redux Values
  const surveyNav = useSelector((state) => state.surveyNav);
  const surveySelect = useSelector((state) => state.surveySelect);

  //Routing Logic
  let currentComponent = null;
  if(surveyNav.create === true){
    currentComponent = <SurveyCreate />;
  }else if(surveySelect === null){
    currentComponent = <SurveyList />;
  }else if(surveyNav.edit === true){
    if(correctUserBool === true){
      currentComponent = <SurveyEdit survey={surveySelect} />;
    }else{
      currentComponent = <h2>Please log in to edit</h2>;
    }
  }else{
    if(correctUserBool === true){
      currentComponent = <SurveyResults responses={resultList} survey={surveySelect} />;
    }else{
      currentComponent = <SurveyAnswerForm survey={surveySelect} />;
    }
  }

  return (
    <React.Fragment>
      {currentComponent}
    </React.Fragment>
  );
}

export default SurveyControl;