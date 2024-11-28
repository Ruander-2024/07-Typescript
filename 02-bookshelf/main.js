"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var bookshelf_1 = require("./bookshelf");
var lordOfTheRings = new book_1.Book('Lord Of The Rings', 'J.R.R. Tolkien', new Date('2021'), 1774);
var mrMercedes = new book_1.Book('Mr. Mercedes', 'Stephen King', new Date('2021'), 557);
var uglyLove = new book_1.Book('Ugly Love', 'Colleen Hoover', new Date('2018'), 325);
var UserInterface = /** @class */ (function () {
    function UserInterface() {
        this._usersBookshelf = new bookshelf_1.Bookshelf();
    }
    Object.defineProperty(UserInterface.prototype, "userBookshelf", {
        get: function () {
            return this._usersBookshelf;
        },
        enumerable: false,
        configurable: true
    });
    return UserInterface;
}());
var myBookshelf = new UserInterface();
myBookshelf.userBookshelf.addBook(lordOfTheRings);
myBookshelf.userBookshelf.addBook(mrMercedes);
myBookshelf.userBookshelf.addBook(uglyLove);
console.log(myBookshelf);
console.log('----- Összes könyv adata -----');
myBookshelf.userBookshelf.printBooks();
console.log('----- 2018-as könyv -----');
console.table(myBookshelf.userBookshelf.getBooks(2018));
console.log('----- Leghosszabb könyv -----');
console.log(myBookshelf.userBookshelf.getAuthorOfMostWrittenPages());
console.log('----- Legkönnyebb könyv -----');
console.log(myBookshelf.userBookshelf.getLightestAuthor());
