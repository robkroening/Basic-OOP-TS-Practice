import IBook from "../interfaces/IBook";
import Genre from "../types/GenreTypes";
import Author from "./Author";

class Book implements IBook {
    // setup
    id: string;
    title: string;
    author: Author;
    genre: Genre;
    description: string;
    yearPublished: number;
    // constructor
    constructor(title: string, author: Author, genre: Genre, description: string, yearPublished: number) {
        this.id = (Math.random() * (100 - 1)).toString();
        this.title = title;
        this.author = author;
        this.genre = genre
        this.description = description;
        this.yearPublished = yearPublished;
    };
    // methods and variables
    getBookTitle(): string {
        return this.title;
    }

    getBookDescription(): string {
        let description = this.description;
        return description;
    };

    getBookId(): string {
        let id = this.id;
        return id;
    };
};

export default Book;