import React from "react";
import PropTypes from "prop-types";

function SurveyList(props) {
  //Value Logic
  const { listedSurveys } = props;

  //Return Logic
  return (
    <React.Fragment>
      <ul>
        {listedSurveys.map((entry) => {
          return <li key={entry.id}><strong>{entry.title}</strong></li>
        })}
      </ul>
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  listedSurveys: PropTypes.array
}

export default SurveyList;