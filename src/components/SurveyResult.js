import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

class SurveyResults extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      responseList: []
    }
  }

  componentDidMount(){
    let relevantResponses = [];
    let tempValue = null;
    this.props.firestore.get({ collection: "responses" })
      .then((response) => {
        response.forEach(doc => {
          tempValue = doc.data();
          if (tempValue.surveyId === this.props.survey.id) {
            relevantResponses.push(tempValue);
          };
        })
      })
      .then(() => {
        this.setState({responseList: relevantResponses});
      });
  }

  //State Modifying Functions
  PositionUp = () => {
    this.setState((previousState) => {
      return {position: (previousState.position + 1)};
    });
  }

  PositionDown = () => {
    this.setState((previousState) => {
      return {position: (previousState.position - 1)};
    });
  }

  render() {
    //CSS Styling
    const styleTable = {
      display: "grid",
      gridTemplateColumns: "1fr 2fr 2fr 1fr",
      gridTemplateRows: "1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr"
    };
    const styleCenter = {
      display: "flex",
      justifyContent: "center"
    };
    function StylePosition(fromTop, fromLeft) {
      let tempString = fromTop + " / " + fromLeft;
      return { gridArea: tempString };
    };

    //Component Logic
    let backButton = <button onClick={this.PositionDown}>Last Response</button>;
    let forwardButton = <button onClick={this.PositionUp}>Next Response</button>;
    if(this.state.position < 1){
      backButton = <button disabled>Last Response</button>
    }
    if(this.state.position >= (this.state.responseList.length - 1)){
      forwardButton = <button disabled>Next Response</button>
    }

    //Return Logic
    if(this.state.responseList.length >= 1){
      return (
        <React.Fragment>
          <h1 style={styleCenter}>Survey Results</h1>
          <div style={styleTable}>
            <div style={StylePosition(1, 1)}>
              <p>{backButton}</p>
            </div>
            <div style={StylePosition(1, 2)}>
              <p><strong>{this.props.survey.title}</strong></p>
            </div>
            <div style={StylePosition(1, 4)}>
              <p>{forwardButton}</p>
            </div>
            <div style={StylePosition(2, 2)}>
              <p>{this.props.survey.question1}</p>
            </div>
            <div style={StylePosition(2, 3)}>
              <p>{this.state.responseList[this.state.position].response1}</p>
            </div>
            <div style={StylePosition(4, 2)}>
              <p>{this.props.survey.question2}</p>
            </div>
            <div style={StylePosition(4, 3)}>
              <p>{this.state.responseList[this.state.position].response2}</p>
            </div>
            <div style={StylePosition(6, 2)}>
              <p>{this.props.survey.question3}</p>
            </div>
            <div style={StylePosition(6, 3)}>
              <p>{this.state.responseList[this.state.position].response3}</p>
            </div>
            <div style={StylePosition(8, 2)}>
              <p>{this.props.survey.question4}</p>
            </div>
            <div style={StylePosition(8, 3)}>
              <p>{this.state.responseList[this.state.position].response4}</p>
            </div>
            <div style={StylePosition(10, 2)}>
              <p>{this.props.survey.question5}</p>
            </div>
            <div style={StylePosition(10, 3)}>
              <p>{this.state.responseList[this.state.position].response5}</p>
            </div>
            <div style={StylePosition(11, 1)}>
              <p>{backButton}</p>
            </div>
            <div style={StylePosition(11, 4)}>
              <p>{forwardButton}</p>
            </div>
          </div>
        </React.Fragment>
      );
    }
    if(this.state.responseList.length === 0){
      return(
        <React.Fragment>
          <h1 style={styleCenter}>Survey Results</h1>
          <h3>No Results have been submitted</h3>
        </React.Fragment>
      )
    }
  }
}

SurveyResults.propTypes = {
  survey: PropTypes.object
};

const mapStateToProps = state => {
  return {
    survey: state.surveySelect
  }
}

SurveyResults = connect(mapStateToProps)(SurveyResults);

export default withFirestore(SurveyResults);