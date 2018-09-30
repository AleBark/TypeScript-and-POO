"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(model, portNumber) {
        this.model = model;
        this.portNumber = portNumber;
        this.speed = 0;
    }
    Car.prototype.getPortNumber = function () {
        return this.portNumber;
    };
    Car.prototype.speedUp = function () {
        this.speed = this.speed + 10;
    };
    Car.prototype.stop = function () {
        this.speed = 0;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
exports.default = Car;
