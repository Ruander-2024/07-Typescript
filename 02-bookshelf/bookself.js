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
    };
    return Bookshelf;
}());
exports.Bookshelf = Bookshelf;
