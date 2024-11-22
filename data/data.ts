import Author from "../../classes/Author";
import Book from "../../classes/Book";
import Library from "../../classes/Library";

// Creating Author instances
const author1 = new Author("J.K.", "Rowling", "Female");
const author2 = new Author("Isaac", "Asimov", "Male");

// Creating Book instances
const book1 = new Book('Harry Potter', author1, "Fantasy", "so mythical and cool", 1999);
const book2 = new Book("Tesla", author2, "Sci-Fi", "Mysterious. Yet Thrilling", 1951);

// Creating Library instance
let books: Book[] = [];
const library = new Library(books);
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);

console.log(library.listBooksInLibrary());