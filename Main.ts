import Car from './Car'
import Motorcycle from './Motorcycle'
import Person from './Person'
import Dealership from './Dealership'
import Vehicle from './Vehicle';


let hatchCar = new Car('Hatch',4,2 )
let sportCar = new Car('Sport',4,2)
let motoCross = new Motorcycle('Motocross',2)

let vehicleList: Array<Vehicle> = [hatchCar, sportCar, motoCross]
let dealership = new Dealership('Rua Canelas', vehicleList)
let person = new Person('Joe', 'Motocross')


dealership.getVehicleList().map((vehicle:Vehicle) => {
    
    if(vehicle['model'] == person.getFavoriteVehicle()){
        person.setVehicle(vehicle)
    }
})

let personFavoriteVehicle = person.getVehicle()

console.log(personFavoriteVehicle)
personFavoriteVehicle.speedUp()
console.log(personFavoriteVehicle.getSpeed())
