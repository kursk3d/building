import { StyleColor } from "./StyleColor";
var DesignDataElement = /** @class */ (function () {
    function DesignDataElement() {
        this._classBase = '';
        this._class = '';
        this._styleBase = '';
        this._style = '';
        this.color = new StyleColor();
    }
    Object.defineProperty(DesignDataElement.prototype, "styleBase", {
        set: function (str) {
            this._styleBase = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "addStyleBase", {
        set: function (str) {
            this._styleBase += str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "addStyle", {
        set: function (str) {
            this._style += str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (str) {
            this._style = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "styleHD", {
        get: function () {
            return this._styleBase + this._style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "classBase", {
        set: function (str) {
            this._classBase = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "addClassBase", {
        set: function (str) {
            this._classBase += ' ' + str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "addClass", {
        set: function (str) {
            this._class += ' ' + str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignDataElement.prototype, "classHD", {
        get: function () {
            return this._classBase + ' ' + this._class;
        },
        enumerable: true,
        configurable: true
    });
    return DesignDataElement;
}());
export { DesignDataElement };
