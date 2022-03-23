import Head from "next/head";
import { createContext, useState } from "react";
import { BooksSection } from "../components/BooksSection/BooksSection";
import { Main } from "../components/Main/Main";
import { api } from "../services/api";

export const BooksContext = createContext({});
export const InputValueContext = createContext((payload: any) => {});

export default function Home() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function searchBooks(event: React.MouseEvent) {
    event.preventDefault();

    if (inputValue.trim()) {
      api
        .get(
          `volumes?q=${inputValue}&startIndex=0&maxResults=40&printType=books&key=AIzaSyDhXDyu4I3RBhMJASszVR2uVaxraNbqKso`
        )
        .then((response) => console.log(response.data))
        .catch((error) => error);
    }

    setInputValue("");
  }

  return (
    <>
      <Head>
        <title>Libry</title>
      </Head>
      <BooksContext.Provider value={{ books, setBooks }}>
        <InputValueContext.Provider value={setInputValue}>
          <Main
            searchBooks={(event) => searchBooks(event)}
            inputValue={inputValue}
          />
          <BooksSection />
        </InputValueContext.Provider>
      </BooksContext.Provider>
    </>
  );
}

