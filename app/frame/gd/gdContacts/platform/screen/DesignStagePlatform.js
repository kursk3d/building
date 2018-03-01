var DesignStagePlatform = /** @class */ (function () {
    function DesignStagePlatform(name) {
        if (name === void 0) { name = 'def_stage-platform'; }
        this.name = '';
        this._width = 0;
        this._height = 0;
        this._classBase = '';
        this._class = '';
        this._styleBase = '';
        this._style = '';
        this.backgroundLink = '';
        this.btnClose = { size: 10 };
        this.name = name;
    }
    Object.defineProperty(DesignStagePlatform.prototype, "styleBase", {
        set: function (str) {
            this._styleBase = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "addStyleBase", {
        set: function (str) {
            this._styleBase += str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "addStyle", {
        set: function (str) {
            this._style += str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (str) {
            this._style = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "styleHD", {
        get: function () {
            return this._styleBase + this._style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "classBase", {
        set: function (str) {
            this._classBase = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "addClassBase", {
        set: function (str) {
            this._classBase += str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "addClass", {
        set: function (str) {
            this._class += ' ' + str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (str) {
            this._class = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesignStagePlatform.prototype, "classHD", {
        get: function () {
            return this._classBase + this._class;
        },
        enumerable: true,
        configurable: true
    });
    DesignStagePlatform.prototype.setSize = function (width, height) {
        this._width = width;
        this._height = height;
    };
    return DesignStagePlatform;
}());
export { DesignStagePlatform };
