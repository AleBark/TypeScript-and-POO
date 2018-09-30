"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, favoriteVehicle) {
        this.name = name;
        this.favoriteVehicle = favoriteVehicle;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getFavoriteVehicle = function () {
        return this.favoriteVehicle;
    };
    Person.prototype.setVehicle = function (vehicle) {
        this.vehicle = vehicle;
    };
    Person.prototype.getVehicle = function () {
        return this.vehicle;
    };
    return Person;
}());
exports.default = Person;
