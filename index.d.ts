import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface BGLocationSenderConfig {
	url: string;
	methodType?: string;
	header?: any;
	firebaseEmail?: string;
	firebasePassword?: string;
	firebaseDBName?: string;
	firebaseDBKey?: string;
	notificationTitle?: string;
	notificationText?: string;
}
export interface BGLocationSenderOptions {
    storeType: string;
    parameters?: BGLocationSenderConfig;
    /**
	 * add your all body params with key value. This body params is store in db with lat long.
	 **/
    params?: any;
    locationSendIntervalTime?: number;
}

export declare class BGLocationSender extends IonicNativePlugin {
    /**
     * Get the device's current position.
     **/
    start(options: BGLocationSenderOptions): Observable<any>;
    stop(): Promise<any>;
    updateParams(options: BGLocationSenderOptions): Promise<any>;
    getLocation(): Promise<any>;
}