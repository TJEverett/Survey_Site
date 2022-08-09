import * as c from "../actions/ActionTypes";

const defaultState = {
  create: false,
  edit: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.GO_CREATE:
      return { create: true, edit: false };
    case c.GO_EDIT:
      return { create: false, edit: true };
    case c.GO_OTHER:
      return { create: false, edit: false };
    default:
      return state;
  }
}