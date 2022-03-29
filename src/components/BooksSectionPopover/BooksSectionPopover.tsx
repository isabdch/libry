import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import * as Popover from "@radix-ui/react-popover";
import {
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./BooksSectionPopoverStyles";
import { Book } from "../../store/types";

export function BookshelfPopover({ id, volumeInfo }: Book) {
  const dispatch = useDispatch<Dispatch<Action>>();

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
            onClick={() =>
              dispatch({
                type: "ADD_BOOK_TO_READ",
                payload: { id, volumeInfo },
              })
            }
          >
            To read
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option center"
            onClick={() =>
              dispatch({
                type: "ADD_BOOK_READING",
                payload: { id, volumeInfo },
              })
            }
          >
            Reading
          </span>
        </PopoverClose>
        <PopoverClose>
          <span
            className="option"
            onClick={() =>
              dispatch({
                type: "ADD_BOOK_READ",
                payload: { id, volumeInfo },
              })
            }
          >
            Read
          </span>
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Root>
  );
}
