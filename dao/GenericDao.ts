import DaoInterface from "./DaoInterface";

export default class Dao<T> implements DaoInterface<T>{

    tableName: string = ''
    

    insert(object: T): boolean {
    console.log('insert logic')
        return true
    }
    update(object: T): boolean {
        //update logic
        return true
    }
    delete(id: number): T {
        //delete logic
        return Object()
    }
    get(id: number): T {
        //get logic
        return Object()
    }
    getAll(): [T] {
        //getAll logic
        return Object()
    }


}