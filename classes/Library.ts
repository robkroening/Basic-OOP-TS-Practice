import Book from "./Book";
import Author from "./Author";
import Genre from "../types/GenreTypes";

class Library {
    // setup
    // 1 - library is a collection of books
    private books: Book[]; // making the books private so they can only be changed in the library
    // constructor
    // 2 - 
    constructor(books: Book[]) {
        this.books = []; // this makes books into an empty array when you make a new library instance
    }
    // methods and variables
    // 3 - make some methods for the library
    addBookToLibrary(book: Book): void {
        this.books.push(book);
    };

    listBooksInLibrary(): string[] {
        return this.books.map(book => book.getBookTitle());
    };
    // findBookById(bookId: string): Book {
        
    // };
};

export default Library;