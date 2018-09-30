export default interface DaoInterface<T> {

    tableName: string

    insert(object: T): boolean

    update(object: T): boolean

    delete(id: number): T

    get(id: number): T

    getAll(): [T]
}