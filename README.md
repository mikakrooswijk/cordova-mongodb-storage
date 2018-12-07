# cordova-mongodb-storage

This is a Cordova plugin that exposes the functionality of MongoDB Mobile to a Cordova Android app for local storage.
##### [NPM](https://www.npmjs.com/package/cordova-mongodb-storage)



**DISCLAIMER** 
This is WIP. The plugin is far from complete and will contain bugs. If you encounter one or want additional functionality please open an issue.

The plugin is only supported on Android as of this moment. I am working on an iOS version.

### Install
To install this plugin run `cordova plugin add cordova-mongodb-storage` in your projects root folder.


### Functionality

This is the funntionality the plugin provides right now, more will be added in the future.

---

#### initiate(`app-id: string`)

This function has to be called before doing anything else with the plugin <br>
`app-id` the id of this app.  <br>

---

#### findOne(`database: string`, `collection: string`, `criteria: JSONObject`)

[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` a JSON object that provides the criteria for the query. <br>

---

#### replaceOne(`database: string`, `collection: string`, `criteria: JSONObject`, `update: JSONObject`) 

[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` a JSON object that provides the criteria for the replace. <br>
`update` the object that is to be updates or inserted. <br>

---
#### findAll(`database: string`, `collection: string`)

[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/) <br>

Returns all the entries is a given database and collection.  <br>
`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>

---
#### deleteOne(`database: string`, `criteria: string`, `criteria`)

[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` the criteria for the document te be deleted <br>


