import { Book } from "./book";
import { Bookshelf } from "./bookshelf";

const lordOfTheRings: Book = new Book(
    'Lord Of The Rings',
    'J.R.R. Tolkien',
    new Date('2021'),
    1774
);

const mrMercedes: Book = new Book(
    'Mr. Mercedes',
    'Stephen King',
    new Date('2021'),
    557
  );
  
const uglyLove: Book = new Book(
    'Ugly Love',
    'Colleen Hoover',
    new Date('2018'),
    325
);

class UserInterface {
    private _usersBookshelf: Bookshelf = new Bookshelf();
    constructor(){

    }

    get userBookshelf() {
        return this._usersBookshelf;
    }
}

const myBookshelf: UserInterface = new UserInterface();

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