"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.tableName = '';
    }
    Dao.prototype.insert = function (object) {
        console.log('insert logic');
        return true;
    };
    Dao.prototype.update = function (object) {
        //update logic
        return true;
    };
    Dao.prototype.delete = function (id) {
        //delete logic
        return Object();
    };
    Dao.prototype.get = function (id) {
        //get logic
        return Object();
    };
    Dao.prototype.getAll = function () {
        //getAll logic
        return Object();
    };
    return Dao;
}());
exports.default = Dao;
