import * as Popover from "@radix-ui/react-popover";
import {
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./BookshelfPopoverStyles";

export function BookshelfPopover() {
  return (
    <Popover.Root>
      <PopoverTrigger asChild={true}>
        <div>Add to bookshelf</div>
      </PopoverTrigger>
      <Popover.Anchor />
      <PopoverContent>
        <PopoverClose>
          <span className="option">To read</span>
        </PopoverClose>
        <PopoverClose>
          <span className="option center">Reading</span>
        </PopoverClose>
        <PopoverClose>
          <span className="option">Read</span>
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Root>
  );
}
