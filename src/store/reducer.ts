import { User } from "firebase/auth";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  checkOpt: checkOptionReducer,
  isUserSignedIn: isSignedInReducer,
});

function isSignedInReducer(
  state: null | User = null,
  action: { type: string; payload: User }
) {
  switch (action.type) {
    case "SET_USER_ON":
      return (state = action.payload);
    case "SET_USER_OFF":
      return (state = null);
    default:
      return state;
  }
}

function checkOptionReducer(
  state: string = "toReadOpt",
  action: { type: string }
) {
  switch (action.type) {
    case "TO_READ":
      return (state = "toReadOpt");
    case "READING":
      return (state = "readingOpt");
    case "READ":
      return (state = "readOpt");
    default:
      return state;
  }
}
