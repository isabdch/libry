import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/types";
import { BookshelfHeaderComponent } from "./BookshelfHeaderStyles";

export function BookshelfHeader() {
  const dispatch = useDispatch<Dispatch<Action>>();

  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  useEffect(() => {
    if (localStorage.getItem("checkedOpt") == null) {
      localStorage.setItem("checkedOpt", "TO_READ");
    } else {
      dispatch({ type: localStorage.getItem("checkedOpt") });
    }
  }, [dispatch]);

  return (
    <BookshelfHeaderComponent>
      <div
        onClick={() => {
          dispatch({ type: "TO_READ" });
          localStorage.setItem("checkedOpt", "TO_READ");
        }}
        className={checkedOptState == "toReadOpt" ? "checked" : ""}
      >
        To read
      </div>
      <div
        onClick={() => {
          dispatch({ type: "READING" });
          localStorage.setItem("checkedOpt", "READING");
        }}
        className={checkedOptState == "readingOpt" ? "checked" : ""}
        id="currentlyReading"
      >
        Currently reading
      </div>
      <div
        onClick={() => {
          dispatch({ type: "READ" });
          localStorage.setItem("checkedOpt", "READ");
        }}
        className={checkedOptState == "readOpt" ? "checked" : ""}
      >
        Read
      </div>
    </BookshelfHeaderComponent>
  );
}
