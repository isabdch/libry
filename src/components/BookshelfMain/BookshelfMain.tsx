import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import {
  BookCard,
  BookModalAction,
  BookModalCancel,
  BookModalContent,
  BookModalDescription,
  BookModalOverlay,
  BookModalTitle,
  BookshelfMainComponent,
} from "./BookshelfMainStyles";
import { BsFillReplyFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import Image from "next/image";
// import { BookshelfPopover } from "./BookshelfPopover/BookshelfPopover";

export function BookshelfMain() {
  // const toReadBooks = useSelector((state: RootState) => {
  //   return state.toRead;
  // });
  // const readingBooks = useSelector((state: RootState) => {
  //   return state.reading;
  // });
  // const readBooks = useSelector((state: RootState) => {
  //   return state.read;
  // });
  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  return (
    <BookshelfMainComponent>
      <Link href="/" passHref>
        <button className="goBack">
          <BsFillReplyFill /> Home
        </button>
      </Link>
      <section>
        <AlertDialog.Root key="" onOpenChange={() => open}>
          <BookCard>
            <div className="img">
              <Image src="/images/cover.png" alt="title" layout="fill" />
            </div>
            <h1>title</h1>
            <div className="addBtn" onClick={(event) => event.preventDefault()}>
              Add as read
            </div>
          </BookCard>
          <AlertDialog.Portal>
            <BookModalOverlay />
            <BookModalContent
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <div className="info">
                <div className="img">
                  <Image
                    src="/images/cover.png"
                    alt="title"
                    layout="fill"
                  />
                </div>
                <div className="infoContent">
                  <p>
                    Author
                  </p>
                  <p>
                    Page count
                  </p>
                  <p>
                    Published
                  </p>
                </div>
              </div>
              <div className="content">
                <BookModalTitle>title</BookModalTitle>
                <BookModalDescription>
                  desc
                </BookModalDescription>
                <BookModalCancel>
                  <BsXLg />
                </BookModalCancel>
                <BookModalAction onClick={(event) => event.preventDefault()}>
                  {/* <BookshelfPopover /> */}
                </BookModalAction>
              </div>
            </BookModalContent>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </section>
    </BookshelfMainComponent>
  );
}
