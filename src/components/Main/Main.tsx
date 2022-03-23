import Image from "next/image";
import { MainComponent } from "./MainStyles";
import { BsSearch } from "react-icons/bs";
import React, { useContext } from "react";
import { InputValueContext } from "../../pages";

type MainProps = {
  searchBooks: (event: React.MouseEvent) => void;
  inputValue: string;
};

export function Main({ searchBooks, inputValue }: MainProps) {
  const setInputValue = useContext(InputValueContext);

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
        </section>
        <div className="img">
          <Image src="/images/image.svg" alt="Books" layout="fill" />
        </div>
      </MainComponent>
    </>
  );
}
