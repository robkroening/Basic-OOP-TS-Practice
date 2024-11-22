"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    // constructor
    function Book(title, author, genre, description, yearPublished) {
        this.id = (Math.random() * (100 - 1)).toString();
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.yearPublished = yearPublished;
    }
    ;
    // methods and variables
    Book.prototype.getBookTitle = function () {
        return this.title;
    };
    Book.prototype.getBookDescription = function () {
        var description = this.description;
        return description;
    };
    ;
    Book.prototype.getBookId = function () {
        var id = this.id;
        return id;
    };
    ;
    return Book;
}());
;
exports.default = Book;
