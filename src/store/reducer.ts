import { combineReducers } from "redux";
import { Book } from "./types";

export const allReducers = combineReducers({
  toRead: createReducerWithNamedType("TO_READ"),
  reading: createReducerWithNamedType("READING"),
  read: createReducerWithNamedType("READ"),
  checkOpt: checkOptionReducer,
});

function createReducerWithNamedType(ReducerName: string = "") {
  return function bookshelfReducer(
    state: [] = [],
    action: { type: string; payload: Book }
  ) {
    switch (action.type) {
      case `ADD_BOOK_${ReducerName}`:
        return [...state, action.payload];
      case `REMOVE_BOOK_${ReducerName}`:
        return state.filter((book: Book) => action.payload.id != book.id);
      default:
        return state;
    }
  };
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
