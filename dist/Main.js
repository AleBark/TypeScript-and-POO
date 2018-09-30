"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Motorcycle_1 = require("./Motorcycle");
var Person_1 = require("./Person");
var Dealership_1 = require("./Dealership");
var hatchCar = new Car_1.default('Hatch', 4, 2);
var sportCar = new Car_1.default('Sport', 4, 2);
var motoCross = new Motorcycle_1.default('Motocross', 2);
var vehicleList = [hatchCar, sportCar, motoCross];
var dealership = new Dealership_1.default('Rua Canelas', vehicleList);
var person = new Person_1.default('Joe', 'Motocross');
dealership.getVehicleList().map(function (vehicle) {
    if (vehicle['model'] == person.getFavoriteVehicle()) {
        person.setVehicle(vehicle);
    }
});
var personFavoriteVehicle = person.getVehicle();
console.log(personFavoriteVehicle);
personFavoriteVehicle.speedUp();
console.log(personFavoriteVehicle.getSpeed());
