"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var bookself_1 = require("./bookself");
var lordOfTheRings = new book_1.Book('Lord Of The Rings', 'J.R.R. Tolkien', new Date('2021'), 1774);
var mrMercedes = new book_1.Book('Mr. Mercedes', 'Stephen King', new Date('2021'), 557);
var uglyLove = new book_1.Book('Ugly Love', 'Colleen Hoover', new Date('2018'), 325);
var userInterface = /** @class */ (function () {
    function userInterface() {
        this._userBookSelf = new bookself_1.Bookshelf();
    }
    Object.defineProperty(userInterface.prototype, "userBookshelf", {
        get: function () {
            return this._userBookSelf;
        },
        enumerable: false,
        configurable: true
    });
    return userInterface;
}());
var myBookSelf = new userInterface();
myBookSelf.userBookshelf.addBook(lordOfTheRings);
myBookSelf.userBookshelf.addBook(mrMercedes);
myBookSelf.userBookshelf.addBook(uglyLove);
console.table(myBookSelf);
myBookSelf.userBookshelf.printBooks();
console.log('--------2018---------');
console.table(myBookSelf.userBookshelf.getBooks(2018));
console.log('-----Legtöbb oldal------');
console.table(myBookSelf.userBookshelf.getAuthorOfMostWrittenPages());
console.log('-----Legkönnyebb Könyv------');
console.table(myBookSelf.userBookshelf.getLightestAuthor());
