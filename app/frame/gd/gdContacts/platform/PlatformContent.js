import { AboutContent } from "../aboutContent/AboutContent";
var PlatformContent = /** @class */ (function () {
    function PlatformContent() {
        this._content = [];
        this.aboutContent = new AboutContent();
    }
    PlatformContent.prototype.close = function () {
        this.aboutContent.close();
        this._content = [];
    };
    PlatformContent.prototype.create = function () {
        this.aboutContent.create();
        this.addContent(this.aboutContent.layerStage);
    };
    PlatformContent.prototype.loadedContent = function () {
    };
    PlatformContent.prototype.addContent = function (content) { this._content.push(content); };
    Object.defineProperty(PlatformContent.prototype, "content", {
        get: function () { return this._content; },
        enumerable: true,
        configurable: true
    });
    return PlatformContent;
}());
export { PlatformContent };
