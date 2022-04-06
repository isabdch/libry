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
