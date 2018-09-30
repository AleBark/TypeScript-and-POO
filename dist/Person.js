"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, favoriteCar) {
        this.name = name;
        this.favoriteCar = favoriteCar;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getFavoriteCar = function () {
        return this.favoriteCar;
    };
    Person.prototype.setCar = function (car) {
        this.car = car;
    };
    Person.prototype.getCar = function () {
        return this.car;
    };
    return Person;
}());
exports.default = Person;
