import { BookInfo, RootState } from "../../store/types";
import { database } from "../../services/firebase/clientApp";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
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

  function changeCheckedOptState() {
    if (checkedOptState == "toReadOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "TO_READ" });
      }, 0.1);
    } else if (checkedOptState == "readingOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "READING" });
      }, 0.1);
    } else if (checkedOptState == "readOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "READ" });
      }, 0.1);
    }
  }

  async function addBookBookshelf(
    add: string,
    remove1: string,
    remove2: string
  ) {
    const userRef = doc(
      database,
      "users",
      isSignedIn ? isSignedIn.uid : "none"
    );

    const q = query(
      collection(userRef, add),
      where("title", "==", volumeInfo.title)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((document) => {
      deleteDoc(doc(userRef, remove1, document.id))
        .then(() =>
          console.log(
            `Book ${
              document.data().title
            } removed successfully from '${remove1}' shelf in firestore.` // do something visually
          )
        )
        .catch((error) => error);

      deleteDoc(doc(userRef, remove2, document.id))
        .then(() =>
          console.log(
            `Book ${
              document.data().title
            } removed successfully from '${remove2}' shelf in firestore.` // do something visually
          )
        )
        .catch((error) => error);

      deleteDoc(doc(userRef, add, document.id))
        .then(() =>
          console.log(
            `Book ${
              document.data().title
            } removed successfully from '${add}' shelf in firestore.` // do something visually
          )
        )
        .catch((error) => error);
    });

    await setDoc(
      doc(
        userRef,
        add,
        `${new Date().getFullYear()}${("0" + new Date().getMonth()).slice(
          -2
        )}${("0" + new Date().getDate()).slice(-2)}${(
          "0" + new Date().getHours()
        ).slice(-2)}${("0" + new Date().getMinutes()).slice(-2)}${(
          "0" + new Date().getSeconds()
        ).slice(-2)} - ${volumeInfo.title}`
      ),
      {
        id,
        volumeInfo,
        title: volumeInfo.title,
        date: `${new Date().getFullYear()}${("0" + new Date().getMonth()).slice(
          -2
        )}${("0" + new Date().getDate()).slice(-2)}${(
          "0" + new Date().getHours()
        ).slice(-2)}${("0" + new Date().getMinutes()).slice(-2)}${(
          "0" + new Date().getSeconds()
        ).slice(-2)}`,
      },
      { merge: true }
    )
      .then(() =>
        console.log(
          `Book added successfully to '${add}' shelf in firestore.` // do something visually
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
                addBookBookshelf(
                  "toReadBooks",
                  "readingBooks",
                  "readBooks"
                ).then(() => changeCheckedOptState());
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
                addBookBookshelf(
                  "readingBooks",
                  "toReadBooks",
                  "readBooks"
                ).then(() => changeCheckedOptState());
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
                addBookBookshelf(
                  "readBooks",
                  "toReadBooks",
                  "readingBooks"
                ).then(() => changeCheckedOptState());
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
