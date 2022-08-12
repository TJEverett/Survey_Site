import React from "react";
import { useDispatch } from "react-redux";
import * as a from "../actions/index";

function SurveyCreate(){
  //CSS Styling
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 3fr",
    gridTemplateRows: "2fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr"
  };
  const styleCenter = {
    display: "flex",
    justifyContent: "center"
  };
  const styleTextArea = {
    resize: "none",
    width: "95%",
    height: "95%"
  }

  function StylePosition(fromTop, fromLeft){
    let tempString = fromTop + " / " + fromLeft;
    return {gridArea: tempString};
  };

  //Element Functions
  function BuildSelect(idValue){
    const optionsList = [{ optionValue: "stars", displayString: "1-5 Stars" }, { optionValue: "text", displayString: "Blank Text Form" } ];
    let selectListOptions = [];
    optionsList.forEach((entry, index) => {
      selectListOptions.push(<option key={index} value={entry.optionValue}>{entry.displayString}</option>);
    }); 
    const selectList = <select name={idValue} id={idValue}>{selectListOptions}</select>;
    return (<React.Fragment>{selectList}</React.Fragment>);
  }

  const dispatch = useDispatch();
  function FormSubmit(event){
    event.preventDefault();
    const action1 = a.goOther();
    dispatch(action1);
    const newSurvey = {
      title: event.target.title.value,
      question1: event.target.question1.value,
      answer1: event.target.answer1.value,
      question2: event.target.question2.value,
      answer2: event.target.answer2.value,
      question3: event.target.question3.value,
      answer3: event.target.answer3.value,
      question4: event.target.question4.value,
      answer4: event.target.answer4.value,
      question5: event.target.question5.value,
      answer5: event.target.answer5.value
    };
    console.log(newSurvey); //Replace with firestore .add()
  }

  //Return Logic
  return (
    <React.Fragment>
      <h1 style={styleCenter}>Survey Creator</h1>
      <form onSubmit={FormSubmit}>
        <div style={styleTable}>
          <div style={StylePosition(1, 1)}>
            <p>Survey Title:</p>
            <br/>
            <input
              type="text"
              name="title"
              required={true}
              placeholder="Survey Title" />
          </div>
          <div style={StylePosition(2, 1)}>
            <p>Questions</p>
          </div>
          <div style={StylePosition(2, 2)}>
            <p>Answer Type</p>
          </div>
          <div style={StylePosition(3, 1)}>
            <textarea
              name="question1"
              required={true}
              placeholder="Question #1"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(3, 2)}>
            {BuildSelect("answer1")}
          </div>
          <div style={StylePosition(5, 1)}>
            <textarea
              name="question2"
              required={true}
              placeholder="Question #2"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(5, 2)}>
            {BuildSelect("answer2")}
          </div>
          <div style={StylePosition(7, 1)}>
            <textarea
              name="question3"
              required={true}
              placeholder="Question #3"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(7, 2)}>
            {BuildSelect("answer3")}
          </div>
          <div style={StylePosition(9, 1)}>
            <textarea
              name="question4"
              required={true}
              placeholder="Question #4"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(9, 2)}>
            {BuildSelect("answer4")}
          </div>
          <div style={StylePosition(11, 1)}>
            <textarea
              name="question5"
              required={true}
              placeholder="Question #5"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(11, 2)}>
            {BuildSelect("answer5")}
          </div>
          <div style={StylePosition(12, 3)}>
            <button type="submit">Create Survey</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SurveyCreate;