import { combineReducers } from "redux";
import surveyNavReducer from "./survey-nav-reducer";
import surveySelectReducer from "./survey-select-reducer";

const rootReducer = combineReducers({
  surveyNav: surveyNavReducer,
  surveySelect: surveySelectReducer
});

export default rootReducer;