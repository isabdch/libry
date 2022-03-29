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
import { BookshelfPopover } from "./BookshelfPopover/BookshelfPopover";

export function BookshelfMain() {
  const toReadBooks = useSelector((state: RootState) => {
    return state.toRead;
  });
  const readingBooks = useSelector((state: RootState) => {
    return state.reading;
  });
  const readBooks = useSelector((state: RootState) => {
    return state.read;
  });
  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  if (checkedOptState == "toReadOpt") {
    return (
      <BookshelfMainComponent>
        <Link href="/" passHref>
          <button className="goBack">
            <BsFillReplyFill /> Home
          </button>
        </Link>
        <section>
          {toReadBooks.map((book) => {
            return (
              <AlertDialog.Root key="" onOpenChange={() => open}>
                <BookCard>
                  <div className="img">
                    <Image
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? "/images/cover.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                      layout="fill"
                    />
                  </div>
                  <h1>
                    {book.volumeInfo.title.split(" ").filter((n) => n != "")
                      .length > 5
                      ? book.volumeInfo.title.split(" ").slice(0, 4).join(" ") +
                        "..."
                      : book.volumeInfo.title}
                  </h1>
                  <div
                    className="addBtn"
                    onClick={(event) => event.preventDefault()}
                  >
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
                          src={
                            book.volumeInfo.imageLinks === undefined
                              ? "/images/cover.png"
                              : `${book.volumeInfo.imageLinks.thumbnail}`
                          }
                          alt={book.volumeInfo.title}
                          layout="fill"
                        />
                      </div>
                      <div className="infoContent">
                        <p>
                          {book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : "--"}
                        </p>
                        <p>
                          Page count:{" "}
                          {book.volumeInfo.pageCount
                            ? book.volumeInfo.pageCount
                            : "--"}
                        </p>
                        <p>
                          Published:{" "}
                          {book.volumeInfo.publishedDate
                            ? book.volumeInfo.publishedDate
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      <BookModalTitle>{book.volumeInfo.title}</BookModalTitle>
                      <BookModalDescription>
                        {book.volumeInfo.description
                          ? book.volumeInfo.description
                          : "-- No description provided --"}
                      </BookModalDescription>
                      <BookModalCancel>
                        <BsXLg />
                      </BookModalCancel>
                      <BookModalAction
                        onClick={(event) => event.preventDefault()}
                      >
                        <BookshelfPopover
                          id={book.id}
                          volumeInfo={book.volumeInfo}
                        />
                      </BookModalAction>
                    </div>
                  </BookModalContent>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            );
          })}
        </section>
      </BookshelfMainComponent>
    );
  } else if (checkedOptState == "readingOpt") {
    return (
      <BookshelfMainComponent>
        <Link href="/" passHref>
          <button className="goBack">
            <BsFillReplyFill /> Home
          </button>
        </Link>
        <section>
          {readingBooks.map((book) => {
            return (
              <AlertDialog.Root key="" onOpenChange={() => open}>
                <BookCard>
                  <div className="img">
                    <Image
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? "/images/cover.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                      layout="fill"
                    />
                  </div>
                  <h1>
                    {book.volumeInfo.title.split(" ").filter((n) => n != "")
                      .length > 5
                      ? book.volumeInfo.title.split(" ").slice(0, 4).join(" ") +
                        "..."
                      : book.volumeInfo.title}
                  </h1>
                  <div
                    className="addBtn"
                    onClick={(event) => event.preventDefault()}
                  >
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
                          src={
                            book.volumeInfo.imageLinks === undefined
                              ? "/images/cover.png"
                              : `${book.volumeInfo.imageLinks.thumbnail}`
                          }
                          alt={book.volumeInfo.title}
                          layout="fill"
                        />
                      </div>
                      <div className="infoContent">
                        <p>
                          {book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : "--"}
                        </p>
                        <p>
                          Page count:{" "}
                          {book.volumeInfo.pageCount
                            ? book.volumeInfo.pageCount
                            : "--"}
                        </p>
                        <p>
                          Published:{" "}
                          {book.volumeInfo.publishedDate
                            ? book.volumeInfo.publishedDate
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      <BookModalTitle>{book.volumeInfo.title}</BookModalTitle>
                      <BookModalDescription>
                        {book.volumeInfo.description
                          ? book.volumeInfo.description
                          : "-- No description provided --"}
                      </BookModalDescription>
                      <BookModalCancel>
                        <BsXLg />
                      </BookModalCancel>
                      <BookModalAction
                        onClick={(event) => event.preventDefault()}
                      >
                        <BookshelfPopover
                          id={book.id}
                          volumeInfo={book.volumeInfo}
                        />
                      </BookModalAction>
                    </div>
                  </BookModalContent>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            );
          })}
        </section>
      </BookshelfMainComponent>
    );
  } else if (checkedOptState == "readOpt") {
    return (
      <BookshelfMainComponent>
        <Link href="/" passHref>
          <button className="goBack">
            <BsFillReplyFill /> Home
          </button>
        </Link>
        <section>
          {readBooks.map((book) => {
            return (
              <AlertDialog.Root key="" onOpenChange={() => open}>
                <BookCard>
                  <div className="img">
                    <Image
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? "/images/cover.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                      layout="fill"
                    />
                  </div>
                  <h1>
                    {book.volumeInfo.title.split(" ").filter((n) => n != "")
                      .length > 5
                      ? book.volumeInfo.title.split(" ").slice(0, 4).join(" ") +
                        "..."
                      : book.volumeInfo.title}
                  </h1>
                  <div
                    className="addBtn"
                    onClick={(event) => event.preventDefault()}
                  >
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
                          src={
                            book.volumeInfo.imageLinks === undefined
                              ? "/images/cover.png"
                              : `${book.volumeInfo.imageLinks.thumbnail}`
                          }
                          alt={book.volumeInfo.title}
                          layout="fill"
                        />
                      </div>
                      <div className="infoContent">
                        <p>
                          {book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : "--"}
                        </p>
                        <p>
                          Page count:{" "}
                          {book.volumeInfo.pageCount
                            ? book.volumeInfo.pageCount
                            : "--"}
                        </p>
                        <p>
                          Published:{" "}
                          {book.volumeInfo.publishedDate
                            ? book.volumeInfo.publishedDate
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      <BookModalTitle>{book.volumeInfo.title}</BookModalTitle>
                      <BookModalDescription>
                        {book.volumeInfo.description
                          ? book.volumeInfo.description
                          : "-- No description provided --"}
                      </BookModalDescription>
                      <BookModalCancel>
                        <BsXLg />
                      </BookModalCancel>
                      <BookModalAction
                        onClick={(event) => event.preventDefault()}
                      >
                        <BookshelfPopover
                          id={book.id}
                          volumeInfo={book.volumeInfo}
                        />
                      </BookModalAction>
                    </div>
                  </BookModalContent>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            );
          })}
        </section>
      </BookshelfMainComponent>
    );
  }
}
