"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Author {
    // constructor
    constructor(first_name, last_name, gender) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
    }
    ;
    // methods and variables
    getFullName() {
        let fullName = `${this.first_name} ${this.last_name}`;
        return fullName;
    }
    ;
    getGender() {
        let gender = this.gender;
        return gender;
    }
    ;
}
exports.default = Author;
