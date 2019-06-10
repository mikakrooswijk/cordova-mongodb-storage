import { Java } from "./Java";

export class CordovaMongodb {
    public initiate(appId: string): Promise<any> {
        return Java.call('MongoDBStorage', 'initiate', [appId]);
    }

    public insertOne(database: string, collection: string, document: any): Promise<any> {
        return Java.call('MongoDBStorage', 'insertOne', [database, collection, document]);
    }

    public findOne(database: string, collection: string, filter: any): Promise<any> {
        return Java.call('MongoDBStorage', 'findOne', [database, collection, filter]);
    }

    public replaceOne(database: string, collection: string, filter: any, update: any): Promise<any> {
        return Java.call('MongoDBStorage', 'replaceOne', [database, collection, filter, update]);
    }

    public findAll(database: string, collection: string): Promise<any> {
        return Java.call('MongoDBStorage', 'findAll', [database, collection]);
    }

    public deleteOne(database: string, collection: string, filter: any): Promise<any> {
        return Java.call('MongoDBStorage', 'deleteOne', [database, collection, filter]);
    }
}
