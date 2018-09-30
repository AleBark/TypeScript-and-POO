import Car from "./Car"
import Vehicle from "./Vehicle";

export default class Person {

    private name:string
    private favoriteVehicle: string
    private vehicle!: Vehicle

    constructor(name: string, favoriteVehicle: string) {
        this.name = name
        this.favoriteVehicle = favoriteVehicle
    }

    public getName():string{
        return this.name
    }

    public getFavoriteVehicle(): string {
        return this.favoriteVehicle
    }

    public setVehicle(vehicle: Vehicle): void {
        this.vehicle = vehicle
    }

    public getVehicle(): Vehicle{
        return this.vehicle
    }
}