import Car from "./Car"

export default class Person {

    private name:string
    private favoriteCar: string
    private car!: Car

    constructor(name: string, favoriteCar: string) {
        this.name = name
        this.favoriteCar = favoriteCar
    }

    public getName():string{
        return this.name
    }

    public getFavoriteCar(): string {
        return this.favoriteCar
    }

    public setCar(car: Car): void {
        this.car = car
    }

    public getCar(): Car{
        return this.car
    }
}