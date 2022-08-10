import * as actions from "../../actions/index";
import * as c from "../../actions/ActionTypes";
import firebase from "firebase";

describe("survey site actions", () => {

  test("goCreate should create GO_CREATE action", () => {
    expect(actions.goCreate()).toEqual({
      type: c.GO_CREATE
    });
  });

  test("goEdit should create GO_EDIT action", () => {
    expect(actions.goEdit()).toEqual({
      type: c.GO_EDIT
    });
  });

  test("goOther should create GO_OTHER action", () => {
    expect(actions.goOther()).toEqual({
      type: c.GO_OTHER
    });
  });

  test("surveySelect should create SURVEY_SELECT action", () => {
    const snapshot = new firebase.firestore.DocumentSnapshot();
    expect(actions.surveySelect(snapshot)).toEqual({
      type: c.SURVEY_SELECT,
      survey: snapshot
    });
  });

  test("surveyDeselect should create SURVEY_DESELECT action", () => {
    expect(actions.surveyDeselect()).toEqual({
      type: c.SURVEY_DESELECT
    });
  });

});