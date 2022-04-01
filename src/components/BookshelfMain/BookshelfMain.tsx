import {
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { database } from "../../services/firebase/clientApp";
import { RootState, Book } from "../../store/types";
import { useSelector } from "react-redux";
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
import { useEffect, useState } from "react";
import { BookPopover } from "../BookPopover/BookPopover";

export function BookshelfMain() {
  const [books, setBooks] = useState<Array<{}>>([]);

  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  useEffect(() => {
    const items: DocumentData[] = [];

    const userRef = doc(
      database,
      "users",
      isSignedIn ? isSignedIn.uid : "none"
    );

    const collectionId = () => {
      if (checkedOptState == "toReadOpt") {
        return "toReadBooks";
      } else if (checkedOptState == "readingOpt") {
        return "readingBooks";
      } else if (checkedOptState == "readOpt") {
        return "readBooks";
      }
    };

    async function loadBooks() {
      const querySnapshot = await getDocs(
        query(collection(userRef, collectionId()), where("id", "!=", null))
      );

      querySnapshot.forEach((doc: DocumentData) => {
        const data: DocumentData = doc.data();
        items.push(data);
      });
    }

    loadBooks().then(() => {
      setBooks(items);
    });
  }, [checkedOptState, isSignedIn]);

  return (
    <BookshelfMainComponent>
      <Link href="/" passHref>
        <button className="goBack">
          <BsFillReplyFill /> Home
        </button>
      </Link>
      <section>
        {books
          ? books.map((book: Book) => {
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
                        ? book.volumeInfo.title
                            .split(" ")
                            .slice(0, 4)
                            .join(" ") + "..."
                        : book.volumeInfo.title}
                    </h1>
                    <div
                      className={checkedOptState == "readOpt" ? "" : "addBtn"}
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                    >
                      {checkedOptState == "readOpt" ? (
                        <BookPopover
                          id={book.id}
                          volumeInfo={book.volumeInfo}
                          trigger={"Edit bookshelf"}
                        />
                      ) : (
                        "Add as read"
                      )}
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
                          <BookPopover
                            id={book.id}
                            volumeInfo={book.volumeInfo}
                            trigger={"Edit bookshelf"}
                          />
                        </BookModalAction>
                      </div>
                    </BookModalContent>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              );
            })
          : null}
      </section>
    </BookshelfMainComponent>
  );
}
