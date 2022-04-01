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

  function addBookBookshelf(add: string, remove1: string, remove2: string) {
    setDoc(doc(userRef, add, `Book ${volumeInfo.title}`), {
      id,
      volumeInfo,
    })
      .then(() =>
        console.log(
          `Book added successfully to 'To Read' shelf in firestore.` // do something visually
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
              isSignedIn
                ? addBookBookshelf("toReadBooks", "readingBooks", "readBooks")
                : null; // do something visually
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
                ? addBookBookshelf("readingBooks", "toReadBooks", "readBooks")
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
                ? addBookBookshelf("readBooks", "toReadBooks", "readingBooks")
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
