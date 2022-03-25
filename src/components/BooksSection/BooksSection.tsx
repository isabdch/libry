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
                        height="220px"
                        width="170px"
                      />
                    </div>
                    <h1>{book.volumeInfo.title}</h1>
                    <button>Add to bookshelf</button>
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
                            height="220px"
                            width="170px"
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
                        <div className="buttons">
                          <BookModalCancel>
                            <BsXLg />
                          </BookModalCancel>
                          <BookModalAction
                            onClick={(event) => event.preventDefault()}
                          >
                            Add to bookshelf
                          </BookModalAction>
                        </div>
                      </div>
                    </BookModalContent>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              );
            })
          : ""}
      </BooksSectionContainer>
    </BooksSectionComponent>
  );
}
