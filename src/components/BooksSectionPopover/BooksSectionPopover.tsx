import { Book, RootState } from "../../store/types";
import { database } from "../../services/firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import * as Popover from "@radix-ui/react-popover";
import {
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./BooksSectionPopoverStyles";

export function BookshelfPopover({ id, volumeInfo }: Book) {
  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  const userRef = doc(database, "users", isSignedIn ? isSignedIn.uid : "none");

  return (
    <Popover.Root>
      <PopoverTrigger asChild={true}>
        <div>Add to bookshelf</div>
      </PopoverTrigger>
      <Popover.Anchor />
      <PopoverContent>
        <PopoverClose>
          <span
            className="option"
            onClick={() => {
              isSignedIn
                ? setDoc(
                    doc(userRef, "toReadBooks", `${volumeInfo.title}-${id}`),
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
                    doc(userRef, "readingBooks", `${volumeInfo.title}-${id}`),
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
                    doc(userRef, "readBooks", `${volumeInfo.title}-${id}`),
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
