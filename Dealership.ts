import Vehicle from "./Vehicle";

export default class Dealership {

    private address: string
    private vehicleList: Array<Vehicle>

    constructor(address:string, vehicleList: Array<Vehicle>){
        this.address = address
        this.vehicleList = vehicleList
    }

    setAddress(address: string):void{
        this.address = address
    }

    getAddress(): string{ 
        return this.address
    }

    getVehicleList() : Array<Vehicle>{
        return this.vehicleList
    }
}