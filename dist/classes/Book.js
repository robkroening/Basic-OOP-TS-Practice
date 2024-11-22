"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    // constructor
    constructor(title, author, genre, description, yearPublished) {
        this.id = (Math.random() * (100 - 1)).toString();
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.yearPublished = yearPublished;
    }
    ;
    // methods and variables
    getBookTitle() {
        return this.title;
    }
    getBookDescription() {
        let description = this.description;
        return description;
    }
    ;
    getBookId() {
        let id = this.id;
        return id;
    }
    ;
}
;
exports.default = Book;
