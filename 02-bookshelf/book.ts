export class Book {
        private _bookWeight: number;

    constructor(
        private _title: string,
        private _author: string,
        private _releaseYear: Date,
        private _numberOfPages: number,)
        
        
    {
        this._bookWeight = _numberOfPages * 10 + 100;
    }


    public getBookInfo(): string {
        return `
        Title: ${this._title},
        Author: ${this._author},
        Year of release ${this._releaseYear.getFullYear()},
        Number of pages: ${this._numberOfPages},
        Book weight: ${this._bookWeight},
        `;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get releaseYear(): Date {
        return this._releaseYear;
    }

    get numberOfPages(): number {
        return this._numberOfPages;
    }

    get bookWeight(): number {
        return this._bookWeight;
    }
}




const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", new Date(1925), 180);

console.log(book.getBookInfo());





