import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import * as a from "../actions/index";

function SurveyEdit() {
  //Variable Deceleration
  const firestore = useFirestore();
  const survey = useSelector(state => state.surveySelect);

  //CSS Styling
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 2fr",
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
  function BuildSelect(idValue, defaultValue) {
    const optionsList = [{ optionValue: "stars", displayString: "1-5 Stars" }, { optionValue: "text", displayString: "Blank Text Form" }];
    let selectListOptions = [];
    optionsList.forEach((entry, index) => {
      if(entry.optionValue === defaultValue){
        selectListOptions.push(<option key={index} value={entry.optionValue}>{entry.displayString}</option>);
      }
    });
    const selectList = <select name={idValue} id={idValue}>{selectListOptions}</select>;
    return (<React.Fragment>{selectList}</React.Fragment>);
  }

  //Dispatch Logic
  const dispatch = useDispatch();
  function FormSubmit(event) {
    event.preventDefault();
    const action1 = a.goOther();
    const action2 = a.surveyDeselect();
    dispatch(action1);
    dispatch(action2);
    const updatedProperties = {
      title: event.target.title.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
      question4: event.target.question4.value,
      question5: event.target.question5.value
    };
    return firestore.update({collection: "surveys", doc: survey.id}, updatedProperties);
  }

  //Return Logic
  return (
    <React.Fragment>
      <h1 style={styleCenter}>Survey Editor</h1>
      <form onSubmit={FormSubmit}>
        <div style={styleTable}>
          <div style={StylePosition(1, 1)}>
            <p>Old Survey Title:</p>
            <p>{survey.title}</p>
          </div>
          <div style={StylePosition(1, 2)}>
            <p>New Survey Title:</p>
            <br/>
            <input
              type="text"
              name="title"
              required={true}
              placeholder="Survey Title"
              defaultValue={survey.title} />
          </div>
          <div style={StylePosition(2, 1)}>
            <p>Old Questions</p>
          </div>
          <div style={StylePosition(2, 2)}>
            <p>New Questions</p>
          </div>
          <div style={StylePosition(2, 3)}>
            <p>Answer Type</p>
          </div>
          <div style={StylePosition(3, 1)}>
            <p>{survey.question1}</p>
          </div>
          <div style={StylePosition(3, 2)}>
            <textarea
              name="question1"
              required={true}
              placeholder="Question #1"
              defaultValue={survey.question1}
              style={styleTextArea} />
          </div>
          <div style={StylePosition(3, 3)}>
            {BuildSelect("answer1", survey.answer1)}
          </div>
          <div style={StylePosition(5, 1)}>
            <p>{survey.question2}</p>
          </div>
          <div style={StylePosition(5, 2)}>
            <textarea
              name="question2"
              required={true}
              placeholder="Question #2"
              defaultValue={survey.question2}
              style={styleTextArea} />
          </div>
          <div style={StylePosition(5, 3)}>
            {BuildSelect("answer2", survey.answer2)}
          </div>
          <div style={StylePosition(7, 1)}>
            <p>{survey.question3}</p>
          </div>
          <div style={StylePosition(7, 2)}>
            <textarea
              name="question3"
              required={true}
              placeholder="Question #3"
              defaultValue={survey.question3}
              style={styleTextArea} />
          </div>
          <div style={StylePosition(7, 3)}>
            {BuildSelect("answer3", survey.answer3)}
          </div>
          <div style={StylePosition(9, 1)}>
            <p>{survey.question4}</p>
          </div>
          <div style={StylePosition(9, 2)}>
            <textarea
              name="question4"
              required={true}
              placeholder="Question #4"
              defaultValue={survey.question4}
              style={styleTextArea} />
          </div>
          <div style={StylePosition(9, 3)}>
            {BuildSelect("answer4", survey.answer4)}
          </div>
          <div style={StylePosition(11, 1)}>
            <p>{survey.question5}</p>
          </div>
          <div style={StylePosition(11, 2)}>
            <textarea
              name="question5"
              required={true}
              placeholder="Question #5"
              defaultValue={survey.question5}
              style={styleTextArea} />
          </div>
          <div style={StylePosition(11, 3)}>
            {BuildSelect("answer5", survey.answer5)}
          </div>
          <div style={StylePosition(12, 4)}>
            <button type="submit">Modify Survey</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SurveyEdit;