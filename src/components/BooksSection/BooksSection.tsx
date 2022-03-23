import Image from "next/image";
import {
  BookCard,
  BooksSectionComponent,
  BooksSectionContainer,
} from "./BooksSectionStyles";

export function BooksSection() {
  return (
    <BooksSectionComponent>
      <BooksSectionContainer>
        <BookCard>
          <Image
            src="/images/the-winternight.jpg"
            alt="Book case"
            height="200px"
            width="150px"
          />
          <h1>The Winternight</h1>
          <button>Add to bookshelf</button>
        </BookCard>
      </BooksSectionContainer>
    </BooksSectionComponent>
  );
}
