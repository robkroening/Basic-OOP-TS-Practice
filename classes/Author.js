"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author = /** @class */ (function () {
    // constructor
    function Author(first_name, last_name, gender) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
    }
    ;
    // methods and variables
    Author.prototype.getFullName = function () {
        var fullName = "".concat(this.first_name, " ").concat(this.last_name);
        return fullName;
    };
    ;
    Author.prototype.getGender = function () {
        var gender = this.gender;
        return gender;
    };
    ;
    return Author;
}());
exports.default = Author;
