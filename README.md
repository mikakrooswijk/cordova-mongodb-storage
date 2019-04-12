# cordova-mongodb-storage

This is a Cordova plugin that exposes the functionality of MongoDB Mobile to a Cordova Android or iOS app for local storage.
##### [NPM](https://www.npmjs.com/package/cordova-mongodb-storage)



**DISCLAIMER** 
This is WIP. The plugin is far from complete and will contain bugs. If you encounter one or want additional functionality please open an issue.

### Install
To install this plugin run `cordova plugin add cordova-mongodb-storage` in your projects root folder.


### Functionality

This is the funntionality the plugin provides right now, more will be added in the future.

---

#### initiate(`app-id: string`) -> `boolean`

This function has to be called before doing anything else with the plugin. <br>
`app-id` the id of this app.  <br>

`returns` true if the initiation was succesfull, false if it failed. 

---

#### findOne(`database: string`, `collection: string`, `filter: JSONObject`) -> `JSONObject | boolean`

[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the query. <br>

`returns` A JSONObject of the first document that was found matching the filter, or false if there was no document found matching the filter.

---

#### replaceOne(`database: string`, `collection: string`, `filter: JSONObject`, `update: JSONObject`) -> `JSONObject`

[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` a JSON object that provides the filter for the replace. <br>
`update` the object that is to be updates or inserted. <br>
`returns` A JSONObject of the document that was either updated or inserted.


---
#### findAll(`database: string`, `collection: string`) -> `JSONArray`

[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/) <br>

Returns all the entries is a given database and collection.  <br>
`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`returns` A JSONArray with all the documents in de specified database and collection.

---
#### deleteOne(`database: string`, `filter: string`, `filter`) -> `JSONObject | boolean`

[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`filter` the filter for the document te be deleted <br>

`returns` A JSONObject of the document deleted, false if there was no document found matching the filter.


