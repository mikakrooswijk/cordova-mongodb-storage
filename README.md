![npm](https://img.shields.io/npm/v/cordova-mongodb-storage.svg)
![npm](https://img.shields.io/npm/dt/cordova-mongodb-storage.svg)

# cordova-mongodb-storage-tpm

This is an update of https://github.com/mikakrooswijk/cordova-mongodb-storage

This is a Cordova plugin that exposes the functionality of MongoDB Mobile to a Cordova Android or iOS app for local storage.

##### [NPM](https://www.npmjs.com/package/cordova-mongodb-storage-tpm)

---

### Install

To install this plugin run `cordova plugin add cordova-mongodb-storage-tpm` in your projects root folder.

#### Android

- Update `defaultMinSdkVersion` in the `build.gradle` file to `21` instead of the standard `19`.

#### iOS

- Run pod install in iOS folder of your project. For more information on cocoapods please look [here](https://guides.cocoapods.org/using/getting-started.html).
- Be sure to set the `Deployment Target` to at least iOS `11.0` in your `.xcodeproj` file.

---

### Functionality

This is the functionality the plugin provides right now, it is limited but provides the basic CRUD functionality. More will be added in the future.

---

#### initiate(`app-id: string`) -> `boolean`

This function has to be called before doing anything else with the plugin. <br>
`app-id` the id of this app. <br>

`returns` true if the initiation was successful, false if it failed.

```js
window.plugins.mongodb.initiate("appId")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### insertOne(`database: string`, `collection: string`, `document: JSONObject`) -> `Promise<JSONArray | boolean>`

[API reference for insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`document` a JSON object that is to be inserted into the database. <br>

`returns` A promsie that resolves to a JSONArray containing the inserted document, false if the insert failed.

#### Example usage:

```js
window.plugins.mongodb.insertOne('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```

---

#### insertMany(`database: string`, `collection: string`, `documents: JSONArray`) -> `Promise<JSONArray>`

[API reference for insertMany](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`documents` a JSON array that are to be inserted into the database. <br>

`returns` A promsie that resolves to a JSONArray containing the inserted documents.

#### Example usage:

```js
window.plugins.mongodb.insertMany('exampleDatabase', 'exampleCollection', [{"exampleKey": "exampleValue"}, {"exampleKey2": "exampleValue2"}])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```

---

#### findOne(`database: string`, `collection: string`, `filter: JSONObject`) -> `Promise<JSONArray | boolean>`

[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the query. <br>

`returns` A promsie that resolves to a JSONArray containing the first document that was found matching the filter, or false if there was no document found matching the filter.

#### Example usage:

```js
window.plugins.mongodb.findOne('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### replaceOne(`database: string`, `collection: string`, `filter: JSONObject`, `update: JSONObject`) -> `Promise<boolean>`

[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the replace. <br>
`update` the object that is to be updates or inserted. <br>
`returns` A promsie that resolves to  totrue when the replace was successful, and to false when it failed.

##### ! upsert is set to true for this function.

#### Example usage:

```js
window.plugins.mongodb.replaceOne('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"}, {"exampleKey": "newExampleValue"})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### updateOne(`database: string`, `collection: string`, `filter: JSONObject`, `update: JSONObject`) -> `Promise<boolean>`

[API reference for updateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the update. <br>
`update` the update to be made. <br>
`returns` A promsie that resolves to  totrue when the update was successful, and to false when it failed.

In the update object be sure to use the Update operators, such as `$set` and `$rename`

#### Example usage:

```js
window.plugins.mongodb.updateOne('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"}, {$set: {"exampleKey": "newExampleValue"}})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### updateMany(`database: string`, `collection: string`, `filter: JSONObject`, `update: JSONObject`) -> `Promise<boolean>`

[API reference for updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the update. <br>
`update` the updates to be made <br>
`returns` A promsie that resolves to  totrue when the update was successful, and to false when it failed.

In the update object be sure to use the Update operators, such as `$set` and `$rename`

#### Example usage:

```js
window.plugins.mongodb.updateMany('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"}, {$set: {"exampleKey": "newExampleValue"}})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### findAll(`database: string`, `collection: string`) -> `romise<JSONArray>`

[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/) <br>

Returns all the entries is a given database and collection. <br>
`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`returns` A promsie that resolves to a JSONArray with all the documents in the specified database and collection.

```js
window.plugins.mongodb.findAll('exampleDatabase', 'exampleCollection')
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### count(`database: string`, `collection: string`, `filter: JSONObject`) -> `Promise<long>`

[API reference for count](https://docs.mongodb.com/manual/reference/method/db.collection.count/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the query. <br>

`returns` A promsie that resolves to a long with the number of records.

#### Example usage:

```js
window.plugins.mongodb.count('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
---

#### deleteOne(`database: string`, `filter: string`, `filter`) -> `Promise<JSONArray | boolean>`

[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` the filter for the document to be deleted <br>

`returns` A promsie that resolves to a JSONArray containing the document deleted, false if there was no document found matching the filter.

```js
window.plugins.mongodb.deleteOne('exampleDatabase', 'exampleCollection', {"exampleKey": "exampleValue"})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```


#### deleteAll(`database: string`, `collection: string`) -> `Promise<boolean>`

`database` the database that is to be queried. <br>
`collection` the collection that is to be removed <br>

`returns` A promsie that resolves to  totrue when the update was successful, and to false when it failed.

```js
window.plugins.mongodb.deleteAll('exampleDatabase', 'exampleCollection')
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
```
