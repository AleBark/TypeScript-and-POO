import DaoInterface from './DaoInterface'
import Dealership from './../Dealership'

export default class DealershipDao implements DaoInterface {

    tableName: string = 'dealerships'

    insert(object: Dealership): boolean {
    console.log('insert logic')
        return true
    }
    update(object: Dealership): boolean {
        //update logic
        return true
    }
    delete(id: number): Dealership {
        //delete logic
        return new Dealership('', [])
    }
    get(id: number): Dealership {
        //get logic
        return new Dealership('', [])
    }
    getAll(): [Dealership] {
        //getAll logic
        return [new Dealership('', [])]
    }



}