import DaoInterface from './DaoInterface'
import Person from './../Person'

export default class PersonDao implements DaoInterface {

    tableName: string = 'people'

    insert(object: Person): boolean {
    console.log('insert logic')
        return true
    }
    update(object: Person): boolean {
        //update logic
        return true
    }
    delete(id: number): Person {
        //delete logic
        return new Person('', '')
    }
    get(id: number): Person {
        //get logic
        return new Person('', '')
    }
    getAll(): [Person] {
        //getAll logic
        return [new Person('', '')]
    }



}