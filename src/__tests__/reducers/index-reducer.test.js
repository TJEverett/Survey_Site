import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import surveyNavReducer from "../../reducers/survey-nav-reducer";
import surveySelectReducer from "../../reducers/survey-select-reducer";
import * as c from "../../actions/ActionTypes";
import firebase from "firebase";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      surveyNav: { create: false, edit: false},
      surveySelect: null
    });
  });

  test("Check that initial state of surveyNavReducer matches rootReducer", () => {
    expect(store.getState().surveyNav).toEqual(surveyNavReducer(undefined, { type: null }));
  });

  test("Check that initial state of surveySelectReducer matches rootReducer", () => {
    expect(store.getState().surveySelect).toEqual(surveySelectReducer(undefined, { type: null }));
  });

  test("Check that GO_CREATE action works for both surveyNavReducer and rootReducer", () => {
    const action = { type: c.GO_CREATE };
    store.dispatch(action);
    expect(store.getState().surveyNav).toEqual(surveyNavReducer({ create: false, edit: false }, action));
  });

  test("Check that SURVEY_SELECT action works for both surveySelectReducer and rootReducer", () => {
    const snapshot = new firebase.firestore.DocumentSnapshot();
    const action = { type: c.SURVEY_SELECT, survey: snapshot };
    store.dispatch(action);
    expect(store.getState().surveySelect).toEqual(surveySelectReducer(null, action));
  });

});