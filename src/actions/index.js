import * as c from "./ActionTypes";

export const goCreate = () => ({
  type: c.GO_CREATE
});

export const goEdit = () => ({
  type: c.GO_EDIT
});

export const goOther = () => ({
  type: c.GO_OTHER
});

export const surveySelect = (snapshot) => ({
  type: c.SURVEY_SELECT,
  survey: snapshot
});

export const surveyDeselect = () => ({
  type: c.SURVEY_DESELECT
});