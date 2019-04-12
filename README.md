# cordova-mongodb-storage

This is a Cordova plugin that exposes the functionality of MongoDB Mobile to a Cordova Android or iOS app for local storage.
##### [NPM](https://www.npmjs.com/package/cordova-mongodb-storage)

---

### Install
To install this plugin run `cordova plugin add cordova-mongodb-storage` in your projects root folder.

#### Android
* Update `defaultMinSdkVersion` in the `build.gradle` file to `21` instead of the standard `19`.



#### iOS
* Run pod install in iOS folder of your project. For more information on cocoapods please look [here](https://guides.cocoapods.org/using/getting-started.html).
* Be sure to set the `Deployment Target` to at least iOS `11.0` in your `.xcodeproj` file.


---


### Functionality

This is the funntionality the plugin provides right now, it is limited but provides the basic CRUD functionality. More will be added in the future.

---

#### initiate(`app-id: string`) -> `boolean`

This function has to be called before doing anything else with the plugin. <br>
`app-id` the id of this app.  <br>

`returns` true if the initiation was succesfull, false if it failed. 

---

#### insertOne(`database: string`, `collection: string`, `document: JSONObject`) -> `JSONArray | boolean`

[API reference for insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`document` a JSON object that is to be inserted into te database. <br>

`returns` A JSONArray containing the inserted document, false if the insert failed.

---

#### findOne(`database: string`, `collection: string`, `filter: JSONObject`) -> `JSONArray | boolean`

[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the query. <br>

`returns` A JSONArray containing the first document that was found matching the filter, or false if there was no document found matching the filter.

---

#### replaceOne(`database: string`, `collection: string`, `filter: JSONObject`, `update: JSONObject`) -> `boolean`

[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the replace. <br>
`update` the object that is to be updates or inserted. <br>
`returns` true when the replace was succesfull, false when it failed.

##### ! upsert is set to true for this function.


---
#### findAll(`database: string`, `collection: string`) -> `JSONArray`

[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/) <br>

Returns all the entries is a given database and collection.  <br>
`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`returns` A JSONArray with all the documents in de specified database and collection.

---
#### deleteOne(`database: string`, `filter: string`, `filter`) -> `JSONArray | boolean`

[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` the filter for the document te be deleted <br>

`returns` A JSONArray containing the document deleted, false if there was no document found matching the filter.


