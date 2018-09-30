import Car from './Car'
import Motorcycle from './Motorcycle'
import Person from './Person'
import Dealership from './Dealership'
import Vehicle from './Vehicle';
import Dao from './dao/GenericDao';
//import DealershipDao from './dao/DealershipDao'
//import PersonDao from './dao/PersonDao';


let hatchCar = new Car('Hatch', 4, 2)
let sportCar = new Car('Sport', 4, 2)
let motoCross = new Motorcycle('Motocross', 2)
let vehicleList: Array<Vehicle> = [hatchCar, sportCar, motoCross]

//let dealershipDao: DealershipDao = new DealershipDao() old, without generics
let genericDealerShipDao: Dao<Dealership> = new Dao<Dealership>()
let dealership = new Dealership('Rua Canelas', vehicleList)
genericDealerShipDao.insert(dealership);


//let personDao: PersonDao = new PersonDao() old, without generics
let genericPersonShipDao: Dao<Person> = new Dao<Person>()
let person = new Person('Joe', 'Motocross')
genericPersonShipDao.insert(person)


dealership.getVehicleList().map((vehicle: Vehicle) => {

    if (vehicle['model'] == person.getFavoriteVehicle()) {
        person.setVehicle(vehicle)
    }
})

let personFavoriteVehicle = person.getVehicle()

console.log(personFavoriteVehicle)
personFavoriteVehicle.speedUp()
console.log(personFavoriteVehicle.getSpeed())
