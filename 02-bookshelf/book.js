"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(_title, _author, _releaseYear, _numberOfPages) {
        this._title = _title;
        this._author = _author;
        this._releaseYear = _releaseYear;
        this._numberOfPages = _numberOfPages;
        this._bookWeight = _numberOfPages * 10 + 100;
    }
    Book.prototype.getBookInfo = function () {
        return "\n        Title: ".concat(this._title, ",\n        Author: ").concat(this._author, ",\n        Year of release ").concat(this._releaseYear.getFullYear(), ",\n        Number of pages: ").concat(this._numberOfPages, ",\n        Book weight: ").concat(this._bookWeight, ",\n        ");
    };
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "releaseYear", {
        get: function () {
            return this._releaseYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "numberOfPages", {
        get: function () {
            return this._numberOfPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "bookWeight", {
        get: function () {
            return this._bookWeight;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
exports.Book = Book;
var book = new Book("The Great Gatsby", "F. Scott Fitzgerald", new Date(1925, 0, 10), 180);
console.log(book.getBookInfo());
