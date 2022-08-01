import React from "react";

function SurveyCreate(){
  //CSS Styling
  const styleTable = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 3fr",
    gridTemplateRows: "1fr 3fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr"
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

  //Return Logic
  return (
    <React.Fragment>
      <h1 style={styleCenter}>Survey Creator</h1>
      <form onSubmit={null}>
        <div style={styleTable}>
          <div style={StylePosition(1, 1)}>
            <p>Questions</p>
          </div>
          <div style={StylePosition(1, 2)}>
            <p>Answer Type</p>
          </div>
          <div style={StylePosition(2, 1)}>
            <textarea
              name="question1"
              placeholder="Question #1"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(2, 2)}>
            {BuildSelect("answer1")}
          </div>
          <div style={StylePosition(4, 1)}>
            <textarea
              name="question2"
              placeholder="Question #2"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(4, 2)}>
            {BuildSelect("answer2")}
          </div>
          <div style={StylePosition(6, 1)}>
            <textarea
              name="question3"
              placeholder="Question #3"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(6, 2)}>
            {BuildSelect("answer3")}
          </div>
          <div style={StylePosition(8, 1)}>
            <textarea
              name="question4"
              placeholder="Question #4"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(8, 2)}>
            {BuildSelect("answer4")}
          </div>
          <div style={StylePosition(10, 1)}>
            <textarea
              name="question5"
              placeholder="Question #5"
              style={styleTextArea} />
          </div>
          <div style={StylePosition(10, 2)}>
            {BuildSelect("answer5")}
          </div>
          <div style={StylePosition(11, 3)}>
            <button type="submit">Create Survey</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SurveyCreate;