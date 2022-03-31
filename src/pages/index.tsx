import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { BooksSection } from "../components/BooksSection/BooksSection";
import { Main } from "../components/Main/Main";
import { api } from "../services/api";
import { auth, isSignedIn } from "../services/auth/auth";

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
        .then((response) => setBooks(response.data.items))
        .then(() => setInputValue(""))
        .catch((error) => error);
    }
  }

  return (
    <>
      <Head>
        <title>Libry</title>
      </Head>
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
