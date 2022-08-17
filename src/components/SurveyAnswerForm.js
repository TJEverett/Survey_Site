import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as a from "../actions/index";

function SurveyAnswerForm(props) {
  //CSS Styling
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr",
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

  function StylePosition(fromTop, fromLeft) {
    let tempString = fromTop + " / " + fromLeft;
    return { gridArea: tempString };
  };

  //Element Functions
  function BuildSelect(idValue) {
    const optionsList = [{ optionValue: "1 Star", displayString: "1 Star" }, { optionValue: "2 Star", displayString: "2 Star" }, { optionValue: "3 Star", displayString: "3 Star" }, { optionValue: "4 Star", displayString: "4 Star" }, { optionValue: "5 Star", displayString: "5 Star" }];
    let selectListOptions = [];
    optionsList.forEach((entry, index) => {
      selectListOptions.push(<option key={index} value={entry.optionValue}>{entry.displayString}</option>);
    });
    const selectList = <select name={idValue} id={idValue}>{selectListOptions}</select>;
    return (<React.Fragment>{selectList}</React.Fragment>);
  }

  function BuildField(idValue, fieldType){
    if(fieldType === "stars"){
      return BuildSelect(idValue);
    } else {
      return <textarea name={idValue} placeholder="Response" style={styleTextArea} />
    }
  }

  //Value Logic
  const { survey } = props;

  const dispatch = useDispatch();
  function FormSubmit(event){
    event.preventDefault();
    const action1 = a.surveyDeselect();
    dispatch(action1);
    const newResponse = {
      surveyId: survey.id,
      response1: event.target.response1.value,
      response2: event.target.response2.value,
      response3: event.target.response3.value,
      response4: event.target.response4.value,
      response5: event.target.response5.value
    }
    console.log(newResponse); //Replace with firestore .add()
  }

  //Return Logic
  return (
    <React.Fragment>
      <h1 style={styleCenter}>Survey Response</h1>
      <form onSubmit={FormSubmit}>
        <div style={styleTable}>
          <div style={StylePosition(1, 1)}>
            <p>{survey.title}:</p>
          </div>
          <div style={StylePosition(2, 1)}>
            <p>Questions:</p>
          </div>
          <div style={StylePosition(2, 2)}>
            <p>Your Answers:</p>
          </div>
          <div style={StylePosition(3, 1)}>
            {survey.question1}
          </div>
          <div style={StylePosition(3, 2)}>
            {BuildField("response1", survey.answer1)}
          </div>
          <div style={StylePosition(5, 1)}>
            {survey.question2}
          </div>
          <div style={StylePosition(5, 2)}>
            {BuildField("response2", survey.answer2)}
          </div>
          <div style={StylePosition(7, 1)}>
            {survey.question3}
          </div>
          <div style={StylePosition(7, 2)}>
            {BuildField("response3", survey.answer3)}
          </div>
          <div style={StylePosition(9, 1)}>
            {survey.question4}
          </div>
          <div style={StylePosition(9, 2)}>
            {BuildField("response4", survey.answer4)}
          </div>
          <div style={StylePosition(11, 1)}>
            {survey.question5}
          </div>
          <div style={StylePosition(11, 2)}>
            {BuildField("response5", survey.answer5)}
          </div>
          <div style={StylePosition(12, 3)}>
            <button type="submit">Respond to Survey</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

SurveyAnswerForm.propTypes = {
  survey: PropTypes.object
}

export default SurveyAnswerForm;