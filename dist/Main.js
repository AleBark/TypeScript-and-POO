"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Motorcycle_1 = require("./Motorcycle");
var Person_1 = require("./Person");
var Dealership_1 = require("./Dealership");
var GenericDao_1 = require("./dao/GenericDao");
//import DealershipDao from './dao/DealershipDao'
//import PersonDao from './dao/PersonDao';
var hatchCar = new Car_1.default('Hatch', 4, 2);
var sportCar = new Car_1.default('Sport', 4, 2);
var motoCross = new Motorcycle_1.default('Motocross', 2);
var vehicleList = [hatchCar, sportCar, motoCross];
//let dealershipDao: DealershipDao = new DealershipDao() old, without generics
var genericDealerShipDao = new GenericDao_1.default();
var dealership = new Dealership_1.default('Rua Canelas', vehicleList);
genericDealerShipDao.insert(dealership);
//let personDao: PersonDao = new PersonDao() old, without generics
var genericPersonShipDao = new GenericDao_1.default();
var person = new Person_1.default('Joe', 'Motocross');
genericPersonShipDao.insert(person);
dealership.getVehicleList().map(function (vehicle) {
    if (vehicle['model'] == person.getFavoriteVehicle()) {
        person.setVehicle(vehicle);
    }
});
var personFavoriteVehicle = person.getVehicle();
console.log(personFavoriteVehicle);
personFavoriteVehicle.speedUp();
console.log(personFavoriteVehicle.getSpeed());
