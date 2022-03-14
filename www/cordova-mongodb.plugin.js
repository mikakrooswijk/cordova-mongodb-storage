(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Java =
  /*#__PURE__*/
  function () {
    function Java() {
      _classCallCheck(this, Java);
    }

    _createClass(Java, null, [{
      key: "call",
      value: function call(className, action, options) {
        return new Promise(function (resolve, reject) {
          cordova.exec(function (returnSucces) {
            resolve(returnSucces);
          }, function (returnError) {
            reject(returnError);
          }, className, action, options);
        });
      }
    }]);

    return Java;
  }();

  var CordovaMongodb =
  /*#__PURE__*/
  function () {
    function CordovaMongodb() {
      _classCallCheck(this, CordovaMongodb);
    }

    _createClass(CordovaMongodb, [{
      key: "initiate",
      value: function initiate(appId) {
        return Java.call('MongoDBStorage', 'initiate', [appId]);
      }
    }, {
      key: "insertOne",
      value: function insertOne(database, collection, document) {
        return Java.call('MongoDBStorage', 'insertOne', [database, collection, document]);
      }
    }, {
      key: "insertMany",
      value: function insertMany(database, collection, documents) {
        return Java.call('MongoDBStorage', 'insertMany', [database, collection, documents]);
      }
    }, {
      key: "findOne",
      value: function findOne(database, collection, filter) {
        return Java.call('MongoDBStorage', 'findOne', [database, collection, filter]);
      }
    }, {
      key: "replaceOne",
      value: function replaceOne(database, collection, filter, update) {
        return Java.call('MongoDBStorage', 'replaceOne', [database, collection, filter, update]);
      }
    }, {
      key: "findAll",
      value: function findAll(database, collection) {
        return Java.call('MongoDBStorage', 'findAll', [database, collection]);
      }
    }, {
      key: "find",
      value: function find(database, collection, filter) {
        var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var skip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
        var limit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
        var includeFields = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
        return Java.call('MongoDBStorage', 'find', [database, collection, filter, order, skip, limit, includeFields]);
      }
    }, {
      key: "count",
      value: function count(database, collection, filter) {
        return Java.call('MongoDBStorage', 'count', [database, collection, filter]);
      }
    }, {
      key: "deleteOne",
      value: function deleteOne(database, collection, filter) {
        return Java.call('MongoDBStorage', 'deleteOne', [database, collection, filter]);
      }
    }, {
      key: "deleteMany",
      value: function deleteMany(database, collection, filter) {
        return Java.call('MongoDBStorage', 'deleteMany', [database, collection, filter]);
      }
    }, {
      key: "deleteAll",
      value: function deleteAll(database, collection) {
        return Java.call('MongoDBStorage', 'deleteAll', [database, collection]);
      }
    }, {
      key: "updateOne",
      value: function updateOne(database, collection, filter, update) {
        return Java.call("MongoDBStorage", "updateOne", [database, collection, filter, update]);
      }
    }, {
      key: "updateMany",
      value: function updateMany(database, collection, filter, update) {
        return Java.call("MongoDBStorage", "updateMany", [database, collection, filter, update]);
      }
    }, {
      key: "createIndex",
      value: function createIndex(database, collection, indexProperty) {
        return Java.call('MongoDBStorage', 'createIndex', [database, collection, indexProperty]);
      }
    },
  ]);

    return CordovaMongodb;
  }();

  cordova.addConstructor(function () {
    if (!window['plugins']) {
      window['plugins'] = {};
    }

    window['plugins'].mongodb = new CordovaMongodb();
    return window['plugins'].mongodb;
  });

}());
