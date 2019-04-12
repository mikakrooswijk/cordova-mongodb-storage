

function mongodb() { }

mongodb.prototype.initiate = function(appId){
    return call('MongoDBStorage', 'initiate', [appId]);
};

mongodb.prototype.insertOne = function(database, collection, document){
    return call('MongoDBStorage', 'insertOne', [database, collection, document]);
};

mongodb.prototype.findOne = function(database, collection, filter){
    return call('MongoDBStorage', 'findOne', [database, collection, filter]);
};

mongodb.prototype.replaceOne = function(database, collection, filter, update){
    return call('MongoDBStorage', 'replaceOne', [database, collection, filter, update]);
};

mongodb.prototype.findAll = function(database, collection){
    return call('MongoDBStorage', 'findAll', [database, collection]);
};

mongodb.prototype.deleteOne = function(database, collection, filter){
    return call('MongoDBStorage', 'deleteOne', [database, collection, filter]);
};

mongodb.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.mongodb = new mongodb();
    return window.plugins.mongodb;
};
cordova.addConstructor(mongodb.install);

function call(className, action, options) {
    return new Promise( function(resolve, reject){
        cordova.exec(function (returnSuccess){ resolve(returnSuccess); }, function(returnError){ reject(returnError); }, className, action, options);
    });
}
