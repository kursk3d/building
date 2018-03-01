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
import { ScreenCore } from "../../core/screen/ScreenCore";
import { PlatformScreen } from "../platform/PlatformScreen";
import { AboutScreen } from "../aboutContent/AboutScreen";
var Screen = /** @class */ (function (_super) {
    __extends(Screen, _super);
    function Screen(namePair) {
        if (namePair === void 0) { namePair = 'def-name'; }
        var _this = _super.call(this) || this;
        _this._name = namePair.trim();
        _this.platformScr = PlatformScreen.getInstance();
        _this.platformScr.name = _this._name;
        _this.aboutScr = AboutScreen.getInstance();
        _this.aboutScr.name = _this._name;
        _this.setParams();
        return _this;
    }
    Screen.prototype.setParams = function () {
        this.baseData();
        if (this.getOrientScreenWhat(ScreenCore.WIDESCREEN)) {
            this.setParamsWideScreen();
        }
        else {
            this.setParamsNarrowScreen();
        }
    };
    Screen.prototype.baseData = function () {
        this.platformScr.sizePlatformSet(this.screenW, this.screenH);
        this.platformScr.baseParams();
        this.aboutScr.sizePlatformSet(this.screenW, this.screenH);
        this.aboutScr.baseParams();
    };
    Screen.prototype.setParamsWideScreen = function () {
        this.platformScr.wideScreen();
        this.aboutScr.wideScreen();
    };
    Screen.prototype.setParamsNarrowScreen = function () {
        this.platformScr.narrowScreen();
        this.aboutScr.narrowScreen();
    };
    // обновляем параметры для отрисовки экрана
    Screen.prototype.updateParamsScreen = function () {
        this.screenCurrentSize();
        this.setParams();
    };
    Object.defineProperty(Screen.prototype, "namePair", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Screen;
}(ScreenCore));
export { Screen };
