import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Image from "next/image";
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

type Images = {
  thumbnail: string;
  smallThumbnail: string;
};

type BookInfo = {
  authors: string[];
  categories: string[];
  description: string;
  imageLinks: Images;
  pageCount: number;
  publishedDate: string;
  subtitle: string;
  title: string;
};

type Books = {
  id: string;
  volumeInfo: BookInfo;
};

type BooksSectionProps = {
  books: Books[];
};

export function BooksSection({ books }: BooksSectionProps) {
  const dispatch = useDispatch<Dispatch<Action>>();

  return (
    <BooksSectionComponent id="books-section">
      <BooksSectionContainer>
        {books != undefined
          ? books.map((book) => {
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
                    <h1>{book.volumeInfo.title}</h1>
                    <span
                      className="addBtn"
                      onClick={() => {
                        dispatch({ type: "ADD_BOOK_TO_READ", payload: book });
                      }}
                    >
                      Add to bookshelf
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
                          onClick={(event) =>
                            event.type === "touchstart" && event.cancelable
                              ? event.preventDefault()
                              : null
                          }
                        >
                          Add to bookshelf
                        </BookModalAction>
                      </div>
                    </BookModalContent>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              );
            })
          : "Nothing found."}
      </BooksSectionContainer>
    </BooksSectionComponent>
  );
}
