import { BookInfo, RootState } from "../../store/types";
import { database } from "../../services/firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";
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
                ? setDoc(
                    doc(
                      userRef,
                      "toReadBooks",
                      `${new Date().getSeconds()}${new Date().getMinutes()}${new Date().getHours()}${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()} - ${
                        volumeInfo.title
                      }`
                    ),
                    {
                      id,
                      volumeInfo,
                    }
                  )
                    .then(() =>
                      console.log(
                        "Book added successfully to 'To Read' shelf in firestore." // do something visually
                      )
                    )
                    .catch((error) => error) // do something visually
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
                ? setDoc(
                    doc(
                      userRef,
                      "readingBooks",
                      `${new Date().getSeconds()}${new Date().getMinutes()}${new Date().getHours()}${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()} - ${
                        volumeInfo.title
                      }`
                    ),
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
                ? setDoc(
                    doc(
                      userRef,
                      "readBooks",
                      `${new Date().getSeconds()}${new Date().getMinutes()}${new Date().getHours()}${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()} - ${
                        volumeInfo.title
                      }`
                    ),
                    {
                      id,
                      volumeInfo,
                    }
                  )
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
