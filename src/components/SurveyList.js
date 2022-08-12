import React from "react";
import { useDispatch } from "react-redux";
import * as a from "../actions/index";

function SurveyList(props) {
  //Temp Values
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
  const surveys = [survey1, survey2, survey3];

  //Value Logic
  const listedSurveys = surveys;

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

export default SurveyList;