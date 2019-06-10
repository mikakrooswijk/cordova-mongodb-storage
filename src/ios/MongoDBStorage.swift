import StitchCore
import StitchLocalMongoDBService
import MongoSwift


@objc(MongoDBStorage) class MongoDBStorage : CDVPlugin {

    var localClient: MongoClient?
    var setupDone: Bool = false

    @objc(initiate:)
    func initiate(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let mongoClient = try Stitch.initializeDefaultAppClient( withClientAppID: command.arguments![0] as! String)
            self.localClient = try mongoClient.serviceClient(fromFactory: mongoClientFactory)

           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: true
            )
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  false
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(insertOne:)
    func insertOne(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let document = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![2], options: .prettyPrinted))
            let result = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).insertOne(document)
        
           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: [command.arguments![2]]
            )
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(findAll:)
    func findAll(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let resultsDocuments = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).find([])
        
            var resultsJson: [Any] = []
            for result in resultsDocuments {
                resultsJson.append(convertToDictionary(text: result.extendedJSON)!)
            }

           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: resultsJson
            )
            
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(deleteOne:)
    func deleteOne(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let document = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![2], options: .prettyPrinted))
            let result = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).deleteOne(document)

            if(result?.deletedCount == 0){
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: false
                )
            } else{
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: [command.arguments![2]]
                )
            }    
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(findOne:)
    func findOne(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let filter = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![2], options: .prettyPrinted))
            let resultsDocuments = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).find(filter)
            

            var resultsJson: [Any] = []
            for result in resultsDocuments {
                resultsJson.append(convertToDictionary(text: result.extendedJSON)!)
            }
            
            if(resultsJson.count == 0){
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: false
                )
            } else {
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: [resultsJson[0]]
                )
            }
            
           
            
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(replaceOne:)
    func replaceOne(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let filter = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![2], options: .prettyPrinted))
            let update = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![3], options: .prettyPrinted))
            let result = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).replaceOne(filter: filter, replacement: update, options: ReplaceOptions(upsert: true))

           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: true
            )
        
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(updateOne:)
    func updateOne(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let filter = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![2], options: .prettyPrinted))
            let update = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![3], options: .prettyPrinted))
            let result = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).updateOne(filter: filter, update: update)

           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: true
            )
        
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(updateMany:)
    func updateMany(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            let filter = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![2], options: .prettyPrinted))
            let update = try Document(fromJSON: JSONSerialization.data(withJSONObject: command.arguments![3], options: .prettyPrinted))
            let result = try self.localClient!.db(command.arguments![0] as! String).collection(command.arguments![1] as! String).updateMany(filter: filter, update: update)

           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: true
            )
        
        }catch {
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error, please see xcode logs"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    // Credit to @ayaio on stackoverflow.com for this function.
    func convertToDictionary(text: String) -> [String: Any]? {
    if let data = text.data(using: .utf8) {
        do {
            return try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any]
        } catch {
            print(error.localizedDescription)
        }
    }
    return nil
}

}
