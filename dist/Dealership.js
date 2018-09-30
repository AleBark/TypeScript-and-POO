"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership = /** @class */ (function () {
    function Dealership(address, carList) {
        this.address = address;
        this.carList = carList;
    }
    Dealership.prototype.getAddress = function () {
        return this.address;
    };
    Dealership.prototype.getCarList = function () {
        return this.carList;
    };
    return Dealership;
}());
exports.default = Dealership;
