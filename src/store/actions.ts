import { Book } from "./types";

export const addBook = (value: Book) => {
  return { type: "ADD_BOOK", payload: value };
};

export const removeBook = (value: Book) => {
  return { type: "REMOVE_BOOK", payload: value };
};
