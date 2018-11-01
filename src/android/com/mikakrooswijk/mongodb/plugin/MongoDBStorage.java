package com.mikakrooswijk.mongodb.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.util.Log;
import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import android.Manifest;

// Base Stitch Packages
import com.mongodb.DocumentToDBRefTransformer;
import com.mongodb.client.FindIterable;
import com.mongodb.embedded.client.MongoEmbeddedSettings;
import com.mongodb.stitch.android.core.Stitch;
import com.mongodb.stitch.android.core.StitchAppClient;

// Packages needed to interact with MongoDB and Stitch
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;

// Necessary component for working with MongoDB Mobile
import com.mongodb.stitch.android.services.mongodb.local.LocalMongoDbService;

import org.bson.BsonString;
import org.bson.Document;

import java.util.ArrayList;

public class MongoDBStorage extends CordovaPlugin {

    protected CallbackContext context;
    private DatabaseControl database = new DatabaseControl();

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {

        context = callbackContext;
        boolean result = true;
        if (action.equals("initiate")) {
            try {
                database.initiate(args.getString(0));
                callbackContext.success("true");
            } catch (Exception e) {
                callbackContext.error(e.toString());
            }
        } else if (action.equals("insertOne")) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Document document = database.insertOne(args.getString(0), args.getString(1),
                                args.getJSONObject(2));
                        callbackContext.success(document.toJson());
                    } catch (Exception e) {
                        callbackContext.error(e.toString());
                    }
                }
            });
        } else if (action.equals("findOne")) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Document document = database.findOne(args.getString(0), args.getString(1),
                                args.getJSONObject(2));
                        callbackContext.success(document.toJson());
                    } catch (Exception e) {
                        callbackContext.error(e.toString());
                    }
                }
            });
        } else if (action.equals("replaceOne")) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Document document = database.replaceOne(args.getString(0), args.getString(1),
                                args.getJSONObject(2), args.getJSONObject(3));
                        callbackContext.success(document.toJson());
                    } catch (Exception e) {
                        callbackContext.error(e.toString());
                    }
                }
            });
        } else if (action.equals("findAll")) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        ArrayList<Document> document = database.findAll(args.getString(0), args.getString(1));
                        JSONArray returnJSON = new JSONArray();
                        for (int i = 0; i < document.size(); i++) {
                            JSONObject json = new JSONObject(document.get(i).toJson());
                            returnJSON.put(json);
                        }
                        callbackContext.success(returnJSON);
                    } catch (Exception e) {
                        callbackContext.error(e.toString());
                    }
                }
            });
        } else if (action.equals("deleteOne")) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Document document = database.deleteOne(args.getString(0), args.getString(1),
                                args.getJSONObject(2));
                        callbackContext.success(document.toJson());
                    } catch (Exception e) {
                        callbackContext.error(e.toString());
                    }
                }
            });
        } else {
            context.error("Invalid Action");
            result = false;
        }

        return result;

    }
}
