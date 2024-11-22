"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("../classes/Author"));
const Book_1 = __importDefault(require("../classes/Book"));
const Library_1 = __importDefault(require("../classes/Library"));
// Creating Author instances
const author1 = new Author_1.default("J.K.", "Rowling", "Female");
const author2 = new Author_1.default("Isaac", "Asimov", "Male");
// Creating Book instances
const book1 = new Book_1.default('Harry Potter', author1, "Fantasy", "so mythical and cool", 1999);
const book2 = new Book_1.default("Tesla", author2, "Sci-Fi", "Mysterious. Yet Thrilling", 1951);
// Creating Library instance
let books = [];
const library = new Library_1.default(books);
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);
console.log(library.listBooksInLibrary());
