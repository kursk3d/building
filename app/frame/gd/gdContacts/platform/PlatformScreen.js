import { DesignStagePlatform } from "./screen/DesignStagePlatform";
var PlatformScreen = /** @class */ (function () {
    function PlatformScreen() {
        this.name = 'def-name_platform';
        this.spinnerSize = 10;
        this.stage = new DesignStagePlatform();
        this.baseParams();
    }
    PlatformScreen.getInstance = function () {
        if (!PlatformScreen.instance) {
            PlatformScreen.instance = new PlatformScreen();
        }
        return PlatformScreen.instance;
    };
    PlatformScreen.prototype.baseParams = function () {
        this.stage.styleBase = 'background-color:rgba(79, 92, 113, .5);';
        this.stage.addStyleBase = 'position:absolute;';
        this.stage.addStyleBase = 'top:0;left:0;';
        this.spinnerSize = Math.round(this.w * .1);
    };
    PlatformScreen.prototype.wideScreen = function () {
        this.stage.backgroundLink = '/aw/' + this.w;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:' + this.w + 'px;height:' + this.h + 'px;';
        this.stage.btnClose.size = Math.round(this.h * .05);
        // this.spinnerSize = Math.round(this.w*.1);
    };
    PlatformScreen.prototype.narrowScreen = function () {
        this.stage.backgroundLink = '/ah/' + this.h;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:' + this.w + 'px;height:' + this.h + 'px;';
        this.stage.btnClose.size = Math.round(this.w * .05);
    };
    Object.defineProperty(PlatformScreen.prototype, "sizePlatform", {
        get: function () {
            return { width: this.w, height: this.h };
        },
        enumerable: true,
        configurable: true
    });
    PlatformScreen.prototype.sizePlatformSet = function (width, height) {
        this.w = width;
        this.h = height;
    };
    Object.defineProperty(PlatformScreen.prototype, "spinnerData", {
        get: function () {
            return { width: this.w, height: this.h, size: this.spinnerSize };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformScreen.prototype, "stageData", {
        get: function () {
            return this.stage;
        },
        enumerable: true,
        configurable: true
    });
    return PlatformScreen;
}());
export { PlatformScreen };
