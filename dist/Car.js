"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, wheels, ports) {
        var _this = _super.call(this, model, wheels) || this;
        _this.ports = ports;
        return _this;
    }
    Car.prototype.getPorts = function () {
        return this.ports;
    };
    Car.prototype.setPorts = function (ports) {
        this.ports = ports;
    };
    return Car;
}(Vehicle_1.default));
exports.default = Car;
