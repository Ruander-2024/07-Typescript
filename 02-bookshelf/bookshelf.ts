import { Book } from "./book";

export class Bookshelf{
    private readonly _books: Book[] = [];

    public addBook(book: Book): void{    // visszatérési értékünk nincs (void)
        this. _books.push(book);
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

        // lightestBook: Az altuálisan a legkönyebb könyv, amit eddig talált a metódus
        // currentBook: Az éppen vizsgált könyv
        
        // Feltétel vizsgálat: összehasonlítjuk a könyvek súlyát  : lightestBook.bookWeight < currentBook.bookWeight
        // Ha igaz, akkor a lightestBook megtartja 
        // Ha hamis, akkor lecseréli a lightestBokk -ot a currentBook -ra

        // A kezdőértékünk a this._books[0] eleme

        // Ennek a konyvnek a szerzőjét keressük        .author;

    }

    public getAuthorOfMostWrittenPages(): string{
        if(this._books.length === 0){
            return 'Empty bookshelf';
            
        }
        return this._books.reduce((longestBook, currentBook) => longestBook.numberOfPages > currentBook.numberOfPages
        ?longestBook
        :currentBook, this._books[0]).author
        }


        public printBooks(): void{
            if(this._books.length === 0){
                console.log('Empty bookshelf!');
            }
            this._books.forEach((book) => console.log(book.getBookInfo()));
        }


    }        