import { User } from "firebase/auth";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  checkOpt: checkOptionReducer,
  isUserSignedIn: isSignedInReducer,
  switch: switchDarkMode,
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
    case "NONE":
      return (state = "any");
    default:
      return state;
  }
}

function switchDarkMode(
  state: null | boolean = null,
  action: { type: string }
) {
  switch (action.type) {
    case "NOT_CHECKED":
      return (state = false);
    case "CHECKED":
      return (state = true);
    default:
      return state;
  }
}
