import surveyNavReducer from "../../reducers/survey-nav-reducer";
import * as c from "../../actions/ActionTypes";
import firebase from "firebase";

describe("surveyNavReducer", () => {

  const magicState = {
    create: true,
    edit: true
  };

  test("Should return default state if no action type is recognized", () => {
    expect(surveyNavReducer(magicState, { type: null })).toEqual(magicState);
  });

  test("Should return only true create if action type is GO_Create", () => {
    expect(surveyNavReducer(magicState, { type: c.GO_CREATE })).toEqual({ create: true, edit: false });
  });

  test("Should return only true edit if action type is GO_Edit", () => {
    expect(surveyNavReducer(magicState, { type: c.GO_EDIT })).toEqual({ create: false, edit: true });
  });

  test("Should return false edit and create if action type is GO_OTHER", () => {
    expect(surveyNavReducer(magicState, { type: c.GO_OTHER })).toEqual({ create: false, edit: false });
  });

});