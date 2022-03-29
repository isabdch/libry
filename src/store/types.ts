import { allReducers } from "./reducer";

// books types
export type Images = {
  thumbnail: string;
  smallThumbnail: string;
};

export type BookInfo = {
  authors: string[];
  categories: string[];
  description: string;
  imageLinks: Images;
  pageCount: number;
  publishedDate: string;
  subtitle: string;
  title: string;
};

export type Book = {
  id: string;
  volumeInfo: BookInfo;
};

export type BooksState = {
  books: Book[];
};

export type RootState = ReturnType<typeof allReducers>
