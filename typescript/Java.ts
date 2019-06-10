declare let cordova: any

export class Java {
    public static call(className: string, action: string, options?: object): Promise<any> {
        return new Promise<any>((resolve, reject): void => {
            cordova.exec(
                (returnSucces: any): void => { resolve(returnSucces) },
                (returnError: any): void => { reject(returnError) },
                className,
                action,
                options
            )
        })

    }
}
