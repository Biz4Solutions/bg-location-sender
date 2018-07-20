var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

var BGLocationSender = (function (_super) {
    __extends(BGLocationSender, _super);
    function BGLocationSender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device's current position.
     */
    BGLocationSender.prototype.start = function (options) { return; };
	BGLocationSender.prototype.stop = function () { return; };
	BGLocationSender.prototype.updateParams = function (options) { return; };
	BGLocationSender.prototype.getLocation = function () { return; };
   
    BGLocationSender.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BGLocationSender.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
			observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BGLocationSender.prototype, "start", null);
	__decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BGLocationSender.prototype, "stop", null);
	__decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BGLocationSender.prototype, "updateParams", null);
	__decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BGLocationSender.prototype, "getLocation", null);
    BGLocationSender = __decorate([
        Plugin({
            pluginName: 'BGLocationSender',
            plugin: 'cordova-plugin-bg-location-sender',
            pluginRef: 'cordova.plugins.BGLocationSender',
            repo: 'https://github.com/Biz4Solutions/cordova-plugin-bg-location-sender',
            install: 'ionic cordova plugin add cordova-plugin-bg-location-sender --save',
            platforms: ['Android', 'iOS']
        })
    ], BGLocationSender);
    return BGLocationSender;
}(IonicNativePlugin));
export { BGLocationSender };
//# sourceMappingURL=index.js.map