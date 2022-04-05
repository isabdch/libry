import Head from "next/head";
import { withAuth, useMounted } from "./HOC/withAuth";
import { BookshelfHeader } from "../components/BookshelfHeader/BookshelfHeader";
import { BookshelfMain } from "../components/BookshelfMain/BookshelfMain";

function MyBookshelf() {
  const mounted = useMounted();

  return (
    mounted && (
      <>
        <Head>
          <title>Libry | My bookshelf</title>
        </Head>
        <BookshelfHeader />
        <BookshelfMain />
      </>
    )
  );
}

export default withAuth(MyBookshelf);
