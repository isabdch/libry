import { Book, RootState } from "../../store/types";
import { signOutGoogle } from "../../services/auth/auth";
import { app, database } from "../../services/firebase/clientApp";
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

  return (
    <Popover.Root>
      <PopoverTrigger asChild={true}>
        <div>Add to bookshelf</div>
      </PopoverTrigger>
      <Popover.Anchor />
      <PopoverContent>
        <PopoverClose>
          <span className="option" onClick={() => {}}>
            To read
          </span>
        </PopoverClose>
        <PopoverClose>
          <span className="option center" onClick={() => {}}>
            Reading
          </span>
        </PopoverClose>
        <PopoverClose>
          <span className="option" onClick={() => {}}>
            Read
          </span>
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Root>
  );
}
