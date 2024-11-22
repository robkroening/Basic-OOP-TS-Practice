import IAuthor from '../interfaces/IAuthor';

class Author implements IAuthor {
    // setup
    first_name: string;
    last_name: string;
    gender: string;
    // constructor
    constructor(first_name: string, last_name: string, gender: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
    };
    // methods and variables
    getFullName(): string {
        let fullName = `${this.first_name} ${this.last_name}`;
        return fullName;
    };

    getGender(): string {
        let gender = this.gender;
        return gender;
    };
}

export default Author;