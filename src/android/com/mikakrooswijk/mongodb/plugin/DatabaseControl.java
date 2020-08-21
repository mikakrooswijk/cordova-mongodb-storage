package com.mikakrooswijk.mongodb.plugin;

import com.mongodb.DocumentToDBRefTransformer;
import com.mongodb.client.FindIterable;
import com.mongodb.embedded.client.MongoEmbeddedSettings;
import com.mongodb.client.model.UpdateOptions;
import org.bson.BsonString;
import org.bson.Document;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.util.Log;
import org.bson.types.ObjectId;
import com.mongodb.client.result.DeleteResult;


// Base Stitch Packages
import com.mongodb.stitch.android.core.Stitch;
import com.mongodb.stitch.android.core.StitchAppClient;

// Packages needed to interact with MongoDB and Stitch
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;

// Necessary component for working with MongoDB Mobile
import com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService;

import java.util.ArrayList;

public class DatabaseControl {

    MongoClient mobileClient;

    public void initiate(String appID) {    
        final StitchAppClient client = Stitch.initializeDefaultAppClient(appID);
        mobileClient = client.getServiceClient(LocalMongoDbService.clientFactory);
    }

    public Document insertOne(String database, String collection, JSONObject document) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        localCollection.insertOne(Document.parse(document.toString()));
        return Document.parse(document.toString());
    }

    public ArrayList<Document> insertMany(String database, String collection, JSONArray documents) throws JSONException {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        
        ArrayList<Document> documentsParsed = new ArrayList<Document>();
        for (int i = 0; i < documents.length(); i++) {
            JSONObject document = documents.getJSONObject(i);
            documentsParsed.add(Document.parse(document.toString()));
        }

        localCollection.insertMany(documentsParsed);
        return documentsParsed;
    }

    public Document findOne(String database, String collection, JSONObject filter) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        Document query = Document.parse(filter.toString());

        Document document;
        Document queryResult = localCollection.find(query).first();

        if(queryResult == null){
            document = new Document();
        } else {
            document = queryResult;
        }
        
        return document;
    }

    public Document replaceOne(String database, String collection, JSONObject filter, JSONObject updateJSON) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        Document query = Document.parse(filter.toString());
        Document updateDoc = Document.parse(updateJSON.toString());
        localCollection.replaceOne(query, updateDoc, new UpdateOptions().upsert(true));

        return Document.parse(updateJSON.toString());
    }

    public ArrayList<Document> findAll(String database, String collection) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        FindIterable<Document> cursor = localCollection.find();
        ArrayList<Document> results = (ArrayList<Document>) cursor.into(new ArrayList<Document>());
        return results;
    }

    public DeleteResult deleteOne(String database, String collection, JSONObject filter) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        Document query = Document.parse(filter.toString());
        DeleteResult deleteResult = localCollection.deleteOne(query);
        return deleteResult;
    }

    public Boolean deleteAll(String database, String collection) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        localCollection.drop();
        return true;
    }

    public Document findById(String database, String collection, String id) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        Document query = new Document();
        query.put("_id", new ObjectId(id));
        return localCollection.find(query).first();
    }

    public Document updateOne(String database, String collection, JSONObject filter, JSONObject updateJSON) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        Document query = Document.parse(filter.toString());
        Document updateDoc = Document.parse(updateJSON.toString());
        localCollection.updateOne(query, updateDoc);

        return Document.parse(updateJSON.toString());
    }

    public Document updateMany(String database, String collection, JSONObject filter, JSONObject updateJSON) {
        MongoCollection<Document> localCollection = mobileClient.getDatabase(database).getCollection(collection);
        Document query = Document.parse(filter.toString());
        Document updateDoc = Document.parse(updateJSON.toString());
        localCollection.updateMany(query, updateDoc);

        return Document.parse(updateJSON.toString());
    }
}