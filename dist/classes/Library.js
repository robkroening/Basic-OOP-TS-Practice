"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    // constructor
    // 2 - 
    constructor(books) {
        this.books = []; // this makes books into an empty array when you make a new library instance
    }
    // methods and variables
    // 3 - make some methods for the library
    addBookToLibrary(book) {
        this.books.push(book);
    }
    ;
    listBooksInLibrary() {
        return this.books.map(book => book.getBookTitle());
    }
    ;
}
;
exports.default = Library;
