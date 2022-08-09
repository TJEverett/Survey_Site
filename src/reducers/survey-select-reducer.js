import * as c from "../actions/ActionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case c.SURVEY_SELECT:
      return action.survey;
    case c.SURVEY_DESELECT:
      return null;
    default:
      return state;
  }
}