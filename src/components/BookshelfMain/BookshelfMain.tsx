import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Link from "next/link";
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

export function BookshelfMain() {
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
              <Image src="/images/cover.png" alt="cover" layout="fill" />
            </div>
            <h1>Title</h1>
            <button onClick={(event) => event.preventDefault()}>
              Add as read
            </button>
          </BookCard>
          <AlertDialog.Portal>
            <BookModalOverlay />
            <BookModalContent
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <div className="info">
                <div className="img">
                  <Image src="/images/cover.png" alt="cover" layout="fill" />
                </div>
                <div className="infoContent">
                  <p>Author</p>
                  <p>Page count</p>
                  <p>Published</p>
                </div>
              </div>
              <div className="content">
                <BookModalTitle>Title</BookModalTitle>
                <BookModalDescription>Description</BookModalDescription>
                <BookModalCancel>
                  <BsXLg />
                </BookModalCancel>
                <BookModalAction onClick={(event) => event.preventDefault()}>
                  Edit bookshelf
                </BookModalAction>
              </div>
            </BookModalContent>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </section>
    </BookshelfMainComponent>
  );
}
