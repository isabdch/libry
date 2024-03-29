import { useEffect, useRef } from "react";
import { Book } from "../../store/types";
import Image from "next/image";
import { MainComponent } from "./MainStyles";
import { BsSearch } from "react-icons/bs";

type MainProps = {
  searchBooks: (event: React.MouseEvent) => void;
  inputValue: string;
  setInputValue: (arg0: string) => void;
  books: Book[];
};

export function Main({
  searchBooks,
  inputValue,
  setInputValue,
  books,
}: MainProps) {
  const scrollSpan = useRef<HTMLSpanElement>(null);
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollSpan.current.scrollIntoView({ behavior: "smooth" });
  }, [books]);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <>
      <MainComponent>
        <section className="searchSection">
          <h1>What book are you looking for?</h1>
          <p>Not sure what to read next?</p>
          <p>
            Explore thousands of books and save them on your bookshelf to
            organize your readings!
          </p>
          <form>
            <input
              ref={inputElement}
              autoFocus
              type="text"
              placeholder="Search for books..."
              className="searchBooksInput"
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
            <button type="submit" onClick={(event) => searchBooks(event)}>
              <BsSearch />
            </button>
          </form>
          <div className="img">
            <Image
              unoptimized={true}
              src="/images/image.svg"
              alt="book illustration"
              layout="fill"
              priority
            />
          </div>
        </section>
        <span ref={scrollSpan}></span>
      </MainComponent>
    </>
  );
}
