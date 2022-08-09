import surveySelectReducer from "../../reducers/survey-select-reducer";
import * as c from "../../actions/ActionTypes";
import firebase from "firebase";

describe("surveySelectReducer", () => {

  const snapshot = new firebase.firestore.DocumentSnapshot();

  test("Should return default state if no action type is recognized", () => {
    expect(surveySelectReducer(null, { type: null })).toEqual(null);
  });

  test("Should store supplied survey as state if action type is SURVEY_SELECT", () => {
    expect(surveySelectReducer(null, { type: c.SURVEY_SELECT, survey: snapshot })).toEqual(snapshot);
  });
  
  test("Should store null as state if action type is SURVEY_DESELECT", () => {
    expect(surveySelectReducer(snapshot, { type: c.SURVEY_DESELECT})).toEqual(null);
  });

});