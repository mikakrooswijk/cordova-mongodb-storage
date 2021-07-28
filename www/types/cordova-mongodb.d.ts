export declare class CordovaMongodb {
    initiate(appId: string): Promise<any>;
    insertOne(database: string, collection: string, document: object): Promise<any>;
    insertMany(database: string, collection: string, documents: object): Promise<any>;
    findOne(database: string, collection: string, filter: object): Promise<any>;
    replaceOne(database: string, collection: string, filter: object, update: object): Promise<any>;
    findAll(database: string, collection: string): Promise<any>;
    find(database: string, collection: string, filter: object, order?: object, skip?: number, limit?: number, includeFields?: string[]): Promise<any>;
    count(database: string, collection: string, filter: object): Promise<any>;
    deleteOne(database: string, collection: string, filter: object): Promise<any>;
    deleteMany(database: string, collection: string, filter: object): Promise<any>;
    deleteAll(database: string, collection: string): Promise<any>;
    updateOne(database: string, collection: string, filter: object, update: object): Promise<any>;
    updateMany(database: string, collection: string, filter: object, update: object): Promise<any>;
}
