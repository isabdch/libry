import { BookInfo, RootState } from "../../store/types";
import { database } from "../../services/firebase/clientApp";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
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
  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  const userRef = doc(database, "users", isSignedIn ? isSignedIn.uid : "none");

  function addBookToToReadBooks() {
    setDoc(doc(userRef, "toReadBooks", `Book ${volumeInfo.title}`), {
      id,
      volumeInfo,
    })
      .then(() =>
        console.log(
          "Book added successfully to 'To Read' shelf in firestore." // do something visually
        )
      )
      .catch((error) => error);

    deleteDoc(doc(userRef, "readingBooks", `Book ${volumeInfo.title}`))
      .then(() =>
        console.log(
          "Book removed successfully from 'Reading' shelf in firestore." // do something visually
        )
      )
      .catch((error) => error);

    deleteDoc(doc(userRef, "readBooks", `Book ${volumeInfo.title}`))
      .then(() =>
        console.log(
          "Book removed successfully from 'Read' shelf in firestore." // do something visually
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
              isSignedIn ? addBookToToReadBooks() : null; // do something visually
            }}
          >
            To read
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option center"
            onClick={() => {
              isSignedIn
                ? setDoc(
                    doc(userRef, "readingBooks", `Book ${volumeInfo.title}`),
                    {
                      id,
                      volumeInfo,
                    }
                  )
                    .then(() =>
                      console.log(
                        "Book added successfully to 'Reading' shelf in firestore."
                      )
                    )
                    .catch((error) => error)
                : null;
            }}
          >
            Reading
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option"
            onClick={() => {
              isSignedIn
                ? setDoc(doc(userRef, "readBooks", `Book ${volumeInfo.title}`), {
                    id,
                    volumeInfo,
                  })
                    .then(() =>
                      console.log(
                        "Book added successfully to 'Read' shelf in firestore."
                      )
                    )
                    .catch((error) => error)
                : null;
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
