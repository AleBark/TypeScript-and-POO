"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership_1 = require("./../Dealership");
var DealershipDao = /** @class */ (function () {
    function DealershipDao() {
        this.tableName = 'dealerships';
    }
    DealershipDao.prototype.insert = function (object) {
        console.log('insert logic');
        return true;
    };
    DealershipDao.prototype.update = function (object) {
        //update logic
        return true;
    };
    DealershipDao.prototype.delete = function (id) {
        //delete logic
        return new Dealership_1.default('', []);
    };
    DealershipDao.prototype.get = function (id) {
        //get logic
        return new Dealership_1.default('', []);
    };
    DealershipDao.prototype.getAll = function () {
        //getAll logic
        return [new Dealership_1.default('', [])];
    };
    return DealershipDao;
}());
exports.default = DealershipDao;
