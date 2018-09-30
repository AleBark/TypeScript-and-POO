import Car from './Car'
import Person from './Person'
import Dealership from './Dealership'


let hatchCar = new Car('Hatch', 2)
let sportCar = new Car('Sport',2)
let carList: Array<Car> = [hatchCar, sportCar]
let dealership = new Dealership('Rua Canelas', carList)
let person = new Person('Joe', 'Hatch')


dealership.getCarList().map((car:Car) => {
    
    if(car['model'] == person.getFavoriteCar()){
        person.setCar(car)
    }
})

console.log(person.getCar())