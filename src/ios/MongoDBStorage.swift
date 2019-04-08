import StitchCore
import StitchLocalMongoDBService
import MongoSwift


@objc(MongoDBStorage) class MongoDBStorage : CDVPlugin {

    var client: StitchAppClient?
    var localClient: MongoClient?
    var setupDone: Bool = false

    @objc(initiate:)
    func initiate(_ command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        do {
            self.client = try Stitch.initializeDefaultAppClient( withClientAppID: "CordovaTestApp")
            self.localClient = try client!.serviceClient(fromFactory: mongoClientFactory)

           pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: "MongoDB initiated succesfully"
            )
        }catch let error {
            print("----------")
            print(error)
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_ERROR,
                messageAs:  "error"
            )
        }
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
}
