# cordova-mongodb-storage

This is a Cordova plugin that expose the functionality of MongoDB Mobile (beta) to a Cordova Android app.

**DISCLAIMER** This plugin is far from complete and wil contain bug. It also uses the MongoDB Mobile API which is still in beta. form more infomation on MongoDB Mobile (beta) please have a look [here](https://docs.mongodb.com/stitch/mongodb/mobile/mobile-overview/).

### Install
To install this plugin, clone this repository and run this command: 

`cordova plugin add <path to the cloned repo>`


### Functionality

This is the funntionality the plugin provides right now:

* `initiate(app-id: string)`

This function has to be called before doing anything else with the plugin <br>
`app-id` the id of this app.  <br>

* `findOne(database: string, collection: string, criteria: JSONObject)` 

[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` a JSON object that provides the criteria for the query. <br>

* `replaceOne(database: string, collection: string, criteria: JSONObject, update: JSONObject)`  

[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` a JSON object that provides the criteria for the replace. <br>
`update` the object that is to be updates or inserted. <br>

* `findAll(database: string, collection: string)`

[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/) <br>

Returns all the entries is a given database and collection.  <br>
`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>

* `deleteOne(database: string, criteria: string, criteria)`

[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` the criteria for the document te be deleted <br>


