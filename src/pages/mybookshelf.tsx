import Head from "next/head";
import { BookshelfHeader } from "../components/BookshelfHeader/BookshelfHeader";
import { BookshelfMain } from "../components/BookshelfMain/BookshelfMain";

export default function MyBookshelf() {
  return (
    <>
      <Head>
        <title>Libry | My bookshelf</title>
      </Head>
      <BookshelfHeader />
      <BookshelfMain />
    </>
  );
}