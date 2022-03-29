import { BookshelfHeaderComponent } from "./BookshelfHeaderStyles";

export function BookshelfHeader() {
    return (
        <BookshelfHeaderComponent>
            <div className="checked">To read</div>
            <div id="currentlyReading">Currently reading</div>
            <div>Read</div>
        </BookshelfHeaderComponent>
    )
}