export default class Car {

    private model:string
    private portNumber: number
    private speed: number

    constructor(model:string, portNumber: number){
        this.model = model
        this.portNumber = portNumber
        this.speed = 0
    }

    public getPortNumber(): number{
        return this.portNumber
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
