import Head from "next/head";
import { useRef, useState } from "react";
import { BooksSection } from "../components/BooksSection/BooksSection";
import { Main } from "../components/Main/Main";
import { api } from "../services/api";
import { GoArrowUp } from "react-icons/go";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const scrollArrowUp = useRef(null);

  function searchBooks(event: React.MouseEvent) {
    event.preventDefault();

    if (inputValue.trim()) {
      api
        .get(
          `volumes?q=${inputValue}&startIndex=0&maxResults=40&printType=books&key=AIzaSyDhXDyu4I3RBhMJASszVR2uVaxraNbqKso`
        )
        .then((response) => setBooks(response.data.items))
        .then(() => setInputValue(""))
        .catch((error) => error);
    }
  }

  function goUp() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <span ref={scrollArrowUp}></span>
      <Head>
        <title>Libry</title>
      </Head>
      <GoArrowUp onClick={goUp} className="arrowUp" />
      <Main
        searchBooks={(event) => searchBooks(event)}
        inputValue={inputValue}
        setInputValue={setInputValue}
        books={books}
      />
      <BooksSection books={books} />
    </>
  );
}
