import { Book } from "./book";

export class Bookshelf{
    private readonly _books: Book[] = [];

    public addBook(book: Book): void{
        this._books.push(book);
    }

    public getBooks(year: number): Book[] | string{
        if(this._books.length === 0){
            return 'Empty bookshelf';
        }
        return this._books.filter((book) => book.releaseYear.getFullYear() === year)
    }
    public getLightestAuthor(): string{
        if(this._books.length === 0){
            return 'Empty bookshelf';
        }
        return this._books.reduce((lightestBook, currentBook) => lightestBook.bookWeight < currentBook.bookWeight
        ?lightestBook
        :currentBook, this._books[0]).author;
    }
}