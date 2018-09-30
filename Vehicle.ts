export default class Vehicle {

    private model:string
    protected speed: number
    private wheels: number

    constructor(model:string, wheels: number){
        this.model = model
        this.speed = 0
        this.wheels = wheels
    }

    public getModel(): string{
        return this.model
    }

    public getWheels(): number{
        return this.wheels
    }

    public speedUp(): void{
        this.speed = this.speed + 10
    }

    public stop(): void{
        this.speed = 0
    }

    public getSpeed(): number{
        return this.speed
    }
}
