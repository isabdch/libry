import Head from "next/head";
import { BookshelfHeader } from "../components/BookshelfHeader/BookshelfHeader";
import { BookshelfMain } from "../components/BookshelfMain/BookshelfMain";
import { withAuth, useMounted } from "./HOC/withAuth";

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
