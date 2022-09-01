import React from "react";
import SurveyCreate from "./SurveyCreate";
import SurveyEdit from "./SurveyEdit";
import SurveyList from "./SurveyList";
import SurveyAnswerForm from "./SurveyAnswerForm";
import SurveyResults from "./SurveyResult";
import { useSelector } from "react-redux";
import firebase from "firebase";

function SurveyControl(){
  //Value Logic
  const surveyNav = useSelector((state) => state.surveyNav);
  const surveySelect = useSelector((state) => state.surveySelect);
  const currentUser = firebase.auth().currentUser;
  let correctUserBool = false;
  
  if(surveySelect != null){
    correctUserBool = (currentUser.uid === surveySelect.creator);
  }

  //Routing Logic
  let currentComponent = null;
  if(surveyNav.create === true){
    currentComponent = <SurveyCreate />;
  }else if(surveySelect === null){
    currentComponent = <SurveyList />;
  }else if(surveyNav.edit === true){
    if(correctUserBool === true){
      currentComponent = <SurveyEdit />;
    }else{
      currentComponent = <h2>Please log in to edit</h2>;
    }
  }else{
    if(correctUserBool === true){
      currentComponent = <SurveyResults />;
    }else{
      currentComponent = <SurveyAnswerForm />;
    }
  }

  //Return Logic
  return (
    <React.Fragment>
      {currentComponent}
    </React.Fragment>
  );
}

export default SurveyControl;