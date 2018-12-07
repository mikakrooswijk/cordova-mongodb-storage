

function mongodb() { }

mongodb.prototype.initiate = function(appId){
    return call('MongoDBStorage', 'initiate', [appId]);
};

mongodb.prototype.insertOne = function(database, collection, document){
    return call('MongoDBStorage', 'insertOne', [database, collection, document]);
};

mongodb.prototype.findOne = function(database, collection, criteria){
    return call('MongoDBStorage', 'findOne', [database, collection, criteria]);
};

mongodb.prototype.replaceOne = function(database, collection, criteria, update){
    return call('MongoDBStorage', 'replaceOne', [database, collection, criteria, update]);
};

mongodb.prototype.findAll = function(database, collection){
    return call('MongoDBStorage', 'findAll', [database, collection]);
};

mongodb.prototype.deleteOne = function(database, collection, criteria){
    return call('MongoDBStorage', 'deleteOne', [database, collection, criteria]);
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
    return new Promise((resolve, reject) => {
        cordova.exec(function (returnSuccess){ resolve(returnSuccess); }, function(returnError){ reject(returnError); }, className, action, options);
    });
}
