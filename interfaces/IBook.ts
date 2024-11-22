import IAuthor from "./IAuthor";

interface IBook {
    id: string;
    title: string;
    author: IAuthor;
    genre: string;
    description: string;
    yearPublished: number;
};

export default IBook;