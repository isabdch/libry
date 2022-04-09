import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import { BooksState } from "../../store/types";
import {
  BookCard,
  BookModalAction,
  BookModalCancel,
  BookModalContent,
  BookModalDescription,
  BookModalOverlay,
  BookModalTitle,
  BooksSectionComponent,
  BooksSectionContainer,
} from "./BooksSectionStyles";
import { BsXLg } from "react-icons/bs";
import { BookPopover } from "../BookPopover/BookPopover";
import Link from "next/link";

export function BooksSection({ books }: BooksState) {
  return (
    <BooksSectionComponent id="books-section">
      <BooksSectionContainer>
        {books != undefined ? (
          books.map((book) => {
            return (
              <AlertDialog.Root key={book.id} onOpenChange={() => open}>
                <BookCard>
                  <div className="img">
                    <Image
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? "/images/book-cover.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                      layout="fill"
                      priority
                    />
                  </div>
                  <Link
                    href={
                      book.volumeInfo.authors[0] != undefined
                        ? `https://www.google.com/search?q=${book.volumeInfo.title.replaceAll(
                            " ",
                            "+"
                          )}+${book.volumeInfo.authors[0].replaceAll(
                            " ",
                            "+"
                          )}&tbm=shop`
                        : `https://www.google.com/search?q=${book.volumeInfo.title.replaceAll(
                            " ",
                            "+"
                          )}+book&tbm=shop`
                    }
                  >
                    <a target="_blank">
                      <h1>
                        {book.volumeInfo.title.split(" ").filter((n) => n != "")
                          .length > 5
                          ? book.volumeInfo.title
                              .split(" ")
                              .slice(0, 4)
                              .join(" ") + "..."
                          : book.volumeInfo.title}
                      </h1>
                    </a>
                  </Link>
                  <span
                    className="addBtn"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <BookPopover
                      id={book.id}
                      volumeInfo={book.volumeInfo}
                      trigger={"Add to bookshelf"}
                    />
                  </span>
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
                              ? "/images/book-cover.png"
                              : `${book.volumeInfo.imageLinks.thumbnail}`
                          }
                          alt={book.volumeInfo.title}
                          layout="fill"
                          priority
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
                      <BookModalTitle>
                        <Link
                          href={
                            book.volumeInfo.authors[0] != undefined
                              ? `https://www.google.com/search?q=${book.volumeInfo.title.replaceAll(
                                  " ",
                                  "+"
                                )}+${book.volumeInfo.authors[0].replaceAll(
                                  " ",
                                  "+"
                                )}&tbm=shop`
                              : `https://www.google.com/search?q=${book.volumeInfo.title.replaceAll(
                                  " ",
                                  "+"
                                )}+book&tbm=shop`
                          }
                        >
                          <a target="_blank">{book.volumeInfo.title}</a>
                        </Link>
                      </BookModalTitle>
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
                        <BookPopover
                          id={book.id}
                          volumeInfo={book.volumeInfo}
                          trigger={"Add to bookshelf"}
                        />
                      </BookModalAction>
                    </div>
                  </BookModalContent>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            );
          })
        ) : (
          <p className="nothingFoundMsg">-- Nothing found --</p>
        )}
      </BooksSectionContainer>
    </BooksSectionComponent>
  );
}
