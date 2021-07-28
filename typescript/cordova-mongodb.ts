import { Java } from "./Java";

export class CordovaMongodb {
    public initiate(appId: string): Promise<any> {
        return Java.call('MongoDBStorage', 'initiate', [appId]);
    }

    public insertOne(database: string, collection: string, document: object): Promise<any> {
        return Java.call('MongoDBStorage', 'insertOne', [database, collection, document]);
    }

    public insertMany(database: string, collection: string, documents: object): Promise<any> {
        return Java.call('MongoDBStorage', 'insertMany', [database, collection, documents]);
    }

    public findOne(database: string, collection: string, filter: object): Promise<any> {
        return Java.call('MongoDBStorage', 'findOne', [database, collection, filter]);
    }

    public replaceOne(database: string, collection: string, filter: object, update: object): Promise<any> {
        return Java.call('MongoDBStorage', 'replaceOne', [database, collection, filter, update]);
    }

    public findAll(database: string, collection: string): Promise<any> {
        return Java.call('MongoDBStorage', 'findAll', [database, collection]);
    }

    public find(database: string, collection: string, filter: object, order: object = {}, skip: number = -1, limit: number = -1, includeFields: string = ''): Promise<any> {
        return Java.call('MongoDBStorage', 'find', [database, collection, filter, order, skip, limit, includeFields]);
    }

    public count(database: string, collection: string, filter: object): Promise<any> {
        return Java.call('MongoDBStorage', 'count', [database, collection, filter]);
    }

    public deleteOne(database: string, collection: string, filter: object): Promise<any> {
        return Java.call('MongoDBStorage', 'deleteOne', [database, collection, filter]);
    }
    
    public deleteMany(database: string, collection: string, filter: object): Promise<any> {
        return Java.call('MongoDBStorage', 'deleteMany', [database, collection, filter]);
    }

    public deleteAll(database: string, collection: string): Promise<any> {
        return Java.call('MongoDBStorage', 'deleteAll', [database, collection]);
    }

    public updateOne(database: string, collection: string, filter: object, update: object){
        return Java.call("MongoDBStorage", "updateOne", [database, collection, filter, update]);
    }

    public updateMany(database: string, collection: string, filter: object, update: object){
        return Java.call("MongoDBStorage", "updateMany", [database, collection, filter, update]);
    }
}
