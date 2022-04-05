import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/types";
import { BookshelfHeaderComponent } from "./BookshelfHeaderStyles";

export function BookshelfHeader() {
  const dispatch = useDispatch<Dispatch<Action>>();

  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  return (
    <BookshelfHeaderComponent>
      <div
        onClick={() => dispatch({ type: "TO_READ" })}
        className={checkedOptState == "toReadOpt" ? "checked" : ""}
      >
        To read
      </div>
      <div
        onClick={() => dispatch({ type: "READING" })}
        className={checkedOptState == "readingOpt" ? "checked" : ""}
        id="currentlyReading"
      >
        Currently reading
      </div>
      <div
        onClick={() => dispatch({ type: "READ" })}
        className={checkedOptState == "readOpt" ? "checked" : ""}
      >
        Read
      </div>
    </BookshelfHeaderComponent>
  );
}
