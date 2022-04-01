import { BookInfo, RootState } from "../../store/types";
import { database } from "../../services/firebase/clientApp";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import * as Popover from "@radix-ui/react-popover";
import {
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./BookPopoverStyles";

type BookPopoverProps = {
  id: string;
  volumeInfo: BookInfo;
  trigger: string;
};

export function BookPopover({ id, volumeInfo, trigger }: BookPopoverProps) {
  const dispatch = useDispatch<Dispatch<Action>>();

  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  const userRef = doc(database, "users", isSignedIn ? isSignedIn.uid : "none");

  function changeCheckedOptState() {
    if (checkedOptState == "toReadOpt") {
      dispatch({ type: "READ" });
      setTimeout(() => {
        dispatch({ type: "TO_READ" });
      }, 0.1);
    } else if (checkedOptState == "readingOpt") {
      dispatch({ type: "TO_READ" });
      setTimeout(() => {
        dispatch({ type: "READING" });
      }, 0.1);
    } else if (checkedOptState == "readOpt") {
      dispatch({ type: "TO_READ" });
      setTimeout(() => {
        dispatch({ type: "READ" });
      }, 0.1);
    }
  }

  function addBookBookshelf(add: string, remove1: string, remove2: string) {
    setDoc(doc(userRef, add, `Book ${volumeInfo.title}`), {
      id,
      volumeInfo,
    })
      .then(() =>
        console.log(
          `Book added successfully to '${add}' shelf in firestore.` // do something visually
        )
      )
      .catch((error) => error);

    deleteDoc(doc(userRef, remove1, `Book ${volumeInfo.title}`))
      .then(() =>
        console.log(
          `Book removed successfully from '${remove1}' shelf in firestore.` // do something visually
        )
      )
      .catch((error) => error);

    deleteDoc(doc(userRef, remove2, `Book ${volumeInfo.title}`))
      .then(() =>
        console.log(
          `Book removed successfully from '${remove2}' shelf in firestore.` // do something visually
        )
      )
      .catch((error) => error);
  }

  return (
    <Popover.Root>
      <PopoverTrigger asChild={true}>
        <div>{trigger}</div>
      </PopoverTrigger>
      <Popover.Anchor />
      <PopoverContent>
        <PopoverClose>
          <span
            className="option"
            onClick={() => {
              if (isSignedIn) {
                addBookBookshelf("toReadBooks", "readingBooks", "readBooks");
                changeCheckedOptState();
              }
            }}
          >
            To read
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option center"
            onClick={() => {
              if (isSignedIn) {
                addBookBookshelf("readingBooks", "toReadBooks", "readBooks");
                changeCheckedOptState();
              }
            }}
          >
            Reading
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option"
            onClick={() => {
              if (isSignedIn) {
                addBookBookshelf("readBooks", "toReadBooks", "readingBooks");
                changeCheckedOptState();
              }
            }}
          >
            Read
          </span>
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Root>
  );
}
