# Bookshelf (könyvespolc)

Készíts TypeScript nyelven egy programot, ami könyveket tud tárolni egy könyvespolcban.
A Bookshelf osztály példányosítását egy külön osztály (pl. `UserInterface`) kezelje.

## Könyv (Book)

Az osztály neve: `Book`

A constructor a következő sorrendben várja a paramétereket:

- cím (title)
- szerző (author)
- kiadási év (releaseYear)
- oldalak száma (numberOfPages)

A könyv tömegét az oldalak tömegének összege és a könyv borító tömegének összege alapján kapjuk meg:
- 1 oldal tömege: 10 gram
- A könyv borító tömege: 100 gram

## Könyvespolc (Bookshelf)

Az osztály neve: `Bookshelf`

- Legyen egy `addBook()` függvénye, aminek segítségével a paraméterben megadott könyvet el lehet tárolni a polcban
- Legyen egy `getBooks()` függvénye, aminek legyen egy year paramétere. Azon könyveket adja vissza egy listában / tömbben, amik a year évében lettek kiadva.
- Legyen egy `getLightestAuthor()` függvénye, ami visszaadja annak a szerzőnek a nevét, aki a legkönnyebb könyvet írta.
- Legyen egy `getAuthorOfMostWrittenPages()` függvénye, ami visszaadja annak a szerzőnek a nevét, aki a legtöbb oldalt írta.
- Legyen egy `printBooks()` függvénye, ami kiírja az összes könyv adatát. Soronként kiírja a könyvek getBookInfo() visszatérési értékét


class Book {
  private title: string;
  private author: string;
  private releaseYear: number;
  private numberOfPages: number;

  constructor(title: string, author: string, releaseYear: number, numberOfPages: number) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.numberOfPages = numberOfPages;
  }

  public getWeight(): number {
    const pageWeight = 10; // gram
    const coverWeight = 100; // gram
    return this.numberOfPages * pageWeight + coverWeight;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getReleaseYear(): number {
    return this.releaseYear;
  }

  public getNumberOfPages(): number {
    return this.numberOfPages;
  }

  public getBookInfo(): string {
    return `${this.title} by ${this.author}, published in ${this.releaseYear}, ${this.numberOfPages} pages`;
  }
}

class Bookshelf {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBooks(year: number): Book[] {
    return this.books.filter(book => book.getReleaseYear() === year);
  }

  public getLightestAuthor(): string {
    if (this.books.length === 0) return "No books available";
    const lightestBook = this.books.reduce((lightest, current) =>
      current.getWeight() < lightest.getWeight() ? current : lightest
    );
    return lightestBook.getAuthor();
  }

  public getAuthorOfMostWrittenPages(): string {
    if (this.books.length === 0) return "No books available";
    const authorPages: Map<string, number> = new Map();

    this.books.forEach(book => {
      const author = book.getAuthor();
      const pages = book.getNumberOfPages();
      authorPages.set(author, (authorPages.get(author) || 0) + pages);
    });

    let maxAuthor = "";
    let maxPages = 0;

    authorPages.forEach((pages, author) => {
      if (pages > maxPages) {
        maxPages = pages;
        maxAuthor = author;
      }
    });

    return maxAuthor;
  }

  public printBooks(): void {
    if (this.books.length === 0) {
      console.log("No books on the shelf.");
    } else {
      this.books.forEach(book => console.log(book.getBookInfo()));
    }
  }
}

class UserInterface {
  private bookshelf: Bookshelf;

  constructor() {
    this.bookshelf = new Bookshelf();
  }

  public run(): void {
    const book1 = new Book("Book One", "Author A", 2000, 300);
    const book2 = new Book("Book Two", "Author B", 2005, 150);
    const book3 = new Book("Book Three", "Author A", 2010, 500);

    this.bookshelf.addBook(book1);
    this.bookshelf.addBook(book2);
    this.bookshelf.addBook(book3);

    console.log("Books from 2005:");
    console.log(this.bookshelf.getBooks(2005));

    console.log("Lightest author:");
    console.log(this.bookshelf.getLightestAuthor());

    console.log("Author of most written pages:");
    console.log(this.bookshelf.getAuthorOfMostWrittenPages());

    console.log("All books:");
    this.bookshelf.printBooks();
  }
}

// Program execution
const ui = new UserInterface();
ui.run();
