import Vehicle from "./Vehicle";

export default class Motorcycle extends Vehicle {

    constructor(model: string, wheels: number) {
        super(model, wheels);
    }

    public speedUp(): void{
        this.speed = this.speed + 15
    }
}
