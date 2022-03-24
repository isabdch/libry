import Image from "next/image";
import {
  BookCard,
  BooksSectionComponent,
  BooksSectionContainer,
} from "./BooksSectionStyles";

type Images = {
  thumbnail: string;
  smallThumbnail: string;
};

type BookInfo = {
  authors: string[];
  categories: string[];
  description: string;
  imageLinks: Images;
  pageCount: number;
  publishedDate: string;
  subtitle: string;
  title: string;
};

type Books = {
  id: string;
  volumeInfo: BookInfo;
};

type BooksSectionProps = {
  books: Books[];
};

export function BooksSection({ books }: BooksSectionProps) {
  return (
    <BooksSectionComponent id="books-section">
      <BooksSectionContainer>
        {books != undefined
          ? books.map((book) => {
              return (
                <BookCard key={book.id}>
                  <span className="img">
                    <Image
                      src={
                        book.volumeInfo.imageLinks === undefined
                          ? "/images/cover.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      alt={book.volumeInfo.title}
                      height="220px"
                      width="170px"
                    />
                  </span>
                  <h1>{book.volumeInfo.title}</h1>
                  <button>Add to bookshelf</button>
                </BookCard>
              );
            })
          : ""}
      </BooksSectionContainer>
    </BooksSectionComponent>
  );
}
