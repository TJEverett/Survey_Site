import { combineReducers } from "redux";
import surveyNavReducer from "./survey-nav-reducer";
import surveySelectReducer from "./survey-select-reducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  surveyNav: surveyNavReducer,
  surveySelect: surveySelectReducer,
  firestore: firestoreReducer
});

export default rootReducer;