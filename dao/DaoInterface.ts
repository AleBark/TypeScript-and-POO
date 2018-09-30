export default interface DaoInterface {

    tableName: string

    insert(object: any): boolean

    update(object: any): boolean

    delete(id: number): any

    get(id: number): any

    getAll(): [any]
}