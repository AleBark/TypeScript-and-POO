import Car from "./Car"

export default class Dealership {

    private address: string
    private carList: Array<Car>

    constructor(address:string, carList: Array<Car>){
        this.address = address
        this.carList = carList
    }

    getAddress(): string{ 
        return this.address
    }

    getCarList() : Array<Car>{
        return this.carList
    }
}