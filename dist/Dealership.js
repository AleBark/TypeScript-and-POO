"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership = /** @class */ (function () {
    function Dealership(address, vehicleList) {
        this.address = address;
        this.vehicleList = vehicleList;
    }
    Dealership.prototype.setAddress = function (address) {
        this.address = address;
    };
    Dealership.prototype.getAddress = function () {
        return this.address;
    };
    Dealership.prototype.getVehicleList = function () {
        return this.vehicleList;
    };
    return Dealership;
}());
exports.default = Dealership;
