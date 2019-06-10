import { CordovaMongodb } from "./cordova-mongodb";

declare let cordova: any;
declare let window: any;


cordova.addConstructor((): CordovaMongodb => {
    if(!window['plugins']){
        window['plugins'] = {}
    }

    window['plugins'].mongodb = new CordovaMongodb();
    return window['plugins'].mongodb;
})
