import {Book} from './book';
import {Bookshelf} from './bookself';

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

class userInterface {
    private _userBookSelf: Bookshelf = new Bookshelf();
    constructor(){

    }
    get userBookshelf(){
        return this._userBookSelf;
    }
}

const myBookSelf: userInterface = new userInterface();  

myBookSelf.userBookshelf.addBook(lordOfTheRings);
myBookSelf.userBookshelf.addBook(mrMercedes);
myBookSelf.userBookshelf.addBook(uglyLove)


console.table(myBookSelf);
myBookSelf.userBookshelf.printBooks()

console.log('--------2018---------');
console.table
(myBookSelf.userBookshelf.getBooks(2018))
console.log('-----Legtöbb oldal------');
console.table(myBookSelf.userBookshelf.getAuthorOfMostWrittenPages())

console.log('-----Legkönnyebb Könyv------');
console.table(myBookSelf.userBookshelf.getLightestAuthor())
