"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Person_1 = require("./Person");
var Dealership_1 = require("./Dealership");
var hatchCar = new Car_1.default('Hatch', 2);
var sportCar = new Car_1.default('Sport', 2);
var carList = [hatchCar, sportCar];
var dealership = new Dealership_1.default('Rua Canelas', carList);
var person = new Person_1.default('Joe', 'Hatch');
dealership.getCarList().map(function (car) {
    if (car['model'] == person.getFavoriteCar()) {
        person.setCar(car);
    }
});
console.log(person.getCar());
