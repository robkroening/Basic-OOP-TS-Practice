"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library = /** @class */ (function () {
    // constructor
    // 2 - 
    function Library(books) {
        this.books = []; // this makes books into an empty array when you make a new library instance
    }
    // methods and variables
    // 3 - make some methods for the library
    Library.prototype.addBookToLibrary = function (book) {
        this.books.push(book);
    };
    ;
    Library.prototype.listBooksInLibrary = function () {
        return this.books.map(function (book) { return book.getBookTitle(); });
    };
    ;
    return Library;
}());
;
exports.default = Library;
