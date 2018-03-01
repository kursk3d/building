import { AboutProvider } from "./provider/AboutProvider";
import { AboutScreen } from "./AboutScreen";
import { AboutElem } from "./AboutElem";
var AboutContent = /** @class */ (function () {
    function AboutContent() {
        // название компаненет
        this.nameStage = 'base-name_about-content';
        this._layer = {};
        this.visibility = false;
        this._screen = AboutScreen.getInstance();
        this.dataProvider = new AboutProvider();
        this.elem = new AboutElem(this._screen.name);
        // this.create();
    }
    AboutContent.prototype.create = function () {
        this._layer.stage = this.elem.createStage(this._screen.stage);
        this._layer.aboutInfo = this.elem.createAbout(this.dataProvider.aboutInfo, this._screen.about);
        this._layer.bank = this.elem.createInfoBank(this.dataProvider.coinInfo, this._screen.about);
        this._layer.aboutInfo.appendTo(this._layer.stage);
        this._layer.bank.appendTo(this._layer.stage);
        this.visibility = true;
    };
    AboutContent.prototype.close = function () {
        this._layer.stage.remove();
        this._layer = {};
    };
    Object.defineProperty(AboutContent.prototype, "layerStage", {
        get: function () {
            return this._layer.stage;
        },
        enumerable: true,
        configurable: true
    });
    return AboutContent;
}());
export { AboutContent };
