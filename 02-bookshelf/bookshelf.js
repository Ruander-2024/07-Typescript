"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookshelf = void 0;
var Bookshelf = /** @class */ (function () {
    function Bookshelf() {
        this._books = [];
    }
    Bookshelf.prototype.addBook = function (book) {
        this._books.push(book);
    };
    Bookshelf.prototype.getBooks = function (year) {
        if (this._books.length === 0) {
            return 'Empty bookshelf';
        }
        return this._books.filter(function (book) { return book.releaseYear.getFullYear() === year; });
    };
    Bookshelf.prototype.getLightestAuthor = function () {
        if (this._books.length === 0) {
            return 'Empty bookshelf';
        }
        return this._books.reduce(function (lightestBook, currentBook) { return lightestBook.bookWeight < currentBook.bookWeight
            ? lightestBook
            : currentBook; }, this._books[0]).author;
        // lightestBook: Az aktuálisan legkönnyebb könyv, amit eddig talált a metódus
        // currentBook: Az éppen vizsgált könyv
        // Feltétel: Összehasonlítjuk a könyvek súlyát      lightestBook.bookWeight < currentBook.bookWeight
        // Ha igaz, akkor a lightestBook megtartja
        // Ha hamis, akkor lecseréli a lightestBook-ot a currentBook-ra
        // Az kezdőértékünk a this._books[0]
        // Ennek a könyvnek, a szerzőjét keressük       .author;
    };
    Bookshelf.prototype.getAuthorOfMostWrittenPages = function () {
        if (this._books.length === 0) {
            return 'Empty bookshelf!';
        }
        return this._books.reduce(function (longestBook, currentBook) {
            return longestBook.numberOfPages > currentBook.numberOfPages
                ? longestBook
                : currentBook;
        }, this._books[0]).author;
    };
    Bookshelf.prototype.printBooks = function () {
        if (this._books.length === 0) {
            console.log('Empty bookshelf!');
        }
        this._books.forEach(function (book) { return console.log(book.getBookInfo()); });
    };
    return Bookshelf;
}());
exports.Bookshelf = Bookshelf;
