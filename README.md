# cordova-mongodb-storage

This is a Cordova plugin that expose the functionality of MongoDB Mobile (beta) to a Cordova Android app.

**DISCLAIMER** This plugin is far from complete and wil contain bug. It also uses the MongoDB Mobile API which is still in beta. form more infomation on MongoDB Mobile (beta) please have a look [here](https://docs.mongodb.com/stitch/mongodb/mobile/mobile-overview/).

### Install
To install this plugin, clone this repository and run this command: 

`cordova plugin add <path to the cloned repo>`

MongoDB Mobile also uses some .so files, which are very big and so they are not on this repository. They can be found here:

[Android 7.0+ (Nougat) on armeabi-v7a](https://s3.amazonaws.com/mciuploads/mongodb-mongo-v4.0/embedded-sdk/embedded-sdk-android-x86_64-latest.tgz) <br>
[Android 7.0+ (Nougat) on arm64-v8a](https://s3.amazonaws.com/mciuploads/mongodb-mongo-v4.0/embedded-sdk/embedded-sdk-android-arm64-latest.tgz) <br>
[Android 7.0+ (Nougat) on x86_64](https://s3.amazonaws.com/mciuploads/mongodb-mongo-v4.0/embedded-sdk/embedded-sdk-android-x86_64-latest.tgz) <br>

The content of the `/libs` folder need to be placed in the `android/libs/<platform-name>` folder where <platform-name> is `armeabi-v7a`, `arm64-v8a`, `x86_64`. To get the files in the right folder in the Cordova project add these lines to your `plugin.xml`:
 
 ```
 
        <source-file src="src/android/libs/arm64-v8a/libbson-1.0.so" target-dir="app/src/main/jniLibs/arm64-v8a"/>
        <source-file src="src/android/libs/arm64-v8a/libmongo_embedded.so" target-dir="app/src/main/jniLibs/arm64-v8a"/>
        <source-file src="src/android/libs/arm64-v8a/libmongo_embedded_capi.so" target-dir="app/src/main/jniLibs/arm64-v8a"/>
        <source-file src="src/android/libs/arm64-v8a/libmongoc-1.0.so" target-dir="app/src/main/jniLibs/arm64-v8a"/>

        <source-file src="src/android/libs/armeabi-v7a/libbson-1.0.so" target-dir="app/src/main/jniLibs/armeabi-v7a"/>
        <source-file src="src/android/libs/armeabi-v7a/libmongo_embedded.so" target-dir="app/src/main/jniLibs/armeabi-v7a"/>
        <source-file src="src/android/libs/armeabi-v7a/libmongo_embedded_capi.so" target-dir="app/src/main/jniLibs/armeabi-v7a"/>
        <source-file src="src/android/libs/armeabi-v7a/libmongoc-1.0.so" target-dir="app/src/main/jniLibs/armeabi-v7a"/>

        <source-file src="src/android/libs/x86_64/libbson-1.0.so" target-dir="app/src/main/jniLibs/x86_64"/>
        <source-file src="src/android/libs/x86_64/libmongo_embedded.so" target-dir="app/src/main/jniLibs/x86_64"/>
        <source-file src="src/android/libs/x86_64/libmongo_embedded_capi.so" target-dir="app/src/main/jniLibs/x86_64"/>
        <source-file src="src/android/libs/x86_64/libmongoc-1.0.so" target-dir="app/src/main/jniLibs/x86_64"/>
 ```
 
 ### weird issue with MongoDB Mobile
 the library `libmongoc_embedded.so` has to be renamed to `libmongo_embedded_capi.so` for every platform for the plugin to work. For more context please refer to this [stackoverflow post]()https://stackoverflow.com/questions/53061872/error-loading-android-aarch64-libmongo-embedded-capi-so-for-mongodb-mobile


### Functionality

This is the funntionality the plugin provides right now:

---

`initiate(app-id: string)`

This function has to be called before doing anything else with the plugin <br>
`app-id` the id of this app.  <br>

---

 `findOne(database: string, collection: string, criteria: JSONObject)` 

[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` a JSON object that provides the criteria for the query. <br>

---

`replaceOne(database: string, collection: string, criteria: JSONObject, update: JSONObject)`  

[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` a JSON object that provides the criteria for the replace. <br>
`update` the object that is to be updates or inserted. <br>

---
`findAll(database: string, collection: string)`

[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/) <br>

Returns all the entries is a given database and collection.  <br>
`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>

---
`deleteOne(database: string, criteria: string, criteria)`

[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/) <br>

`database` the database that is to be queried. <br>
`collection` the collection that is to be queried <br>
`criteria` the criteria for the document te be deleted <br>


