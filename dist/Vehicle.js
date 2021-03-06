"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(model, wheels) {
        this.model = model;
        this.speed = 0;
        this.wheels = wheels;
    }
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getWheels = function () {
        return this.wheels;
    };
    Vehicle.prototype.speedUp = function () {
        this.speed = this.speed + 10;
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
    };
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
exports.default = Vehicle;
