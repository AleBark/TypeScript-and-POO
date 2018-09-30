"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./../Person");
var PersonDao = /** @class */ (function () {
    function PersonDao() {
        this.tableName = 'people';
    }
    PersonDao.prototype.insert = function (object) {
        console.log('insert logic');
        return true;
    };
    PersonDao.prototype.update = function (object) {
        //update logic
        return true;
    };
    PersonDao.prototype.delete = function (id) {
        //delete logic
        return new Person_1.default('', '');
    };
    PersonDao.prototype.get = function (id) {
        //get logic
        return new Person_1.default('', '');
    };
    PersonDao.prototype.getAll = function () {
        //getAll logic
        return [new Person_1.default('', '')];
    };
    return PersonDao;
}());
exports.default = PersonDao;
