import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { database } from "../../services/firebase/clientApp";
import { RootState, Book } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
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
import { BookPopover } from "../BookPopover/BookPopover";
import { BsFillReplyFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export function BookshelfMain() {
  const [books, setBooks] = useState<DocumentData>([]);

  const dispatch = useDispatch<Dispatch<Action>>();

  const checkedOptState = useSelector((state: RootState) => {
    return state.checkOpt;
  });

  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  function changeCheckedOptState() {
    if (checkedOptState == "toReadOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "TO_READ" });
      }, 0.1);
    } else if (checkedOptState == "readingOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "READING" });
      }, 0.1);
    } else if (checkedOptState == "readOpt") {
      dispatch({ type: "NONE" });
      setTimeout(() => {
        dispatch({ type: "READ" });
      }, 0.1);
    }
  }

  async function removeBook(bookTitle: string) {
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
      } else if (checkedOptState == "any") {
        return "any";
      }
    };

    const q = query(
      collection(userRef, collectionId()),
      where("title", "==", bookTitle)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((document) => {
      try {
        deleteDoc(document.ref).then(() =>
          toast.info(`${document.data().title} removed from your bookshelf.`, {
            theme: "colored",
          })
        );
      } catch {
        toast.error(
          `Something went wrong. It was not possible to remove ${
            document.data().title
          } from your bookshelf.`,
          { theme: "colored" }
        );
      }
    });
  }

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
      } else if (checkedOptState == "any") {
        return "any";
      }
    };

    const q = query(
      collection(userRef, collectionId()),
      where("id", "!=", null),
      orderBy("id", "desc")
    );

    async function loadBooks() {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc: DocumentData) => {
        const data: DocumentData = doc.data();
        items.push(data);
        items.sort((a, b) => Number(b.date) - Number(a.date));
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
        {books.length != 0 ? (
          books.map((book: Book) => {
            return (
              <AlertDialog.Root key={book.id} onOpenChange={() => open}>
                <BookCard>
                  <div className="img">
                    <Image
                      unoptimized={true}
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
                      book.volumeInfo.authors != undefined
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
                  <div className="btns">
                    <span
                      className="trashBtn"
                      onClick={(event) => {
                        event.preventDefault();
                        removeBook(book.volumeInfo.title).then(() =>
                          changeCheckedOptState()
                        );
                      }}
                    >
                      <FaTrashAlt />
                    </span>
                    <span
                      className="addBtn"
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <BookPopover
                        id={book.id}
                        volumeInfo={book.volumeInfo}
                        trigger={"Edit bookshelf"}
                      />
                    </span>
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
                          unoptimized={true}
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
                            book.volumeInfo.authors != undefined
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
                        <div className="btns">
                          <span
                            className="trashBtn"
                            onClick={(event) => {
                              event.preventDefault();
                              removeBook(book.volumeInfo.title);
                              changeCheckedOptState();
                            }}
                          >
                            <FaTrashAlt />
                          </span>
                          <span>
                            <BookPopover
                              id={book.id}
                              volumeInfo={book.volumeInfo}
                              trigger={"Edit bookshelf"}
                            />
                          </span>
                        </div>
                      </BookModalAction>
                    </div>
                  </BookModalContent>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            );
          })
        ) : (
          <p className="nothingHereMsg">-- Nothing here --</p>
        )}
      </section>
    </BookshelfMainComponent>
  );
}
