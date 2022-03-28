import { BookshelfHeaderComponent } from "./BookshelfHeaderStyles";

export function BookshelfHeader() {
    return (
        <BookshelfHeaderComponent>
            <div>To read</div>
            <div id="currentlyReading">Currently reading</div>
            <div className="checked">Read</div>
        </BookshelfHeaderComponent>
    )
}