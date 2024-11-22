"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author_1 = require("../classes/Author");
var Book_1 = require("../classes/Book");
var Library_1 = require("../classes/Library");
// Creating Author instances
var author1 = new Author_1.default("J.K.", "Rowling", "Female");
var author2 = new Author_1.default("Isaac", "Asimov", "Male");
// Creating Book instances
var book1 = new Book_1.default('Harry Potter', author1, "Fantasy", "so mythical and cool", 1999);
var book2 = new Book_1.default("Tesla", author2, "Sci-Fi", "Mysterious. Yet Thrilling", 1951);
// Creating Library instance
var books = [];
var library = new Library_1.default(books);
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);
console.log(library.listBooksInLibrary());
