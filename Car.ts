import Vehicle from "./Vehicle";

export default class Car extends Vehicle {

    private ports: number

    constructor(model: string, wheels: number, ports: number) {
        super(model,wheels)
        this.ports = ports
    }
    public getPorts(): number {
        return this.ports
    }

    public setPorts(ports:number): void {
        this.ports = ports
    }
}
