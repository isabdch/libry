import Image from "next/image";
import { MainComponent } from "./MainStyles";
import { BsSearch } from "react-icons/bs";

export function Main() {
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
            <input type="text" placeholder="Search for books..." />
            <button type="submit">
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
