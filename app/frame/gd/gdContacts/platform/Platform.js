import { PlatformContent } from "./PlatformContent";
import { PlatformElem } from "./PlatformElem";
import { PlatformScreen } from "./PlatformScreen";
import { PlatformProvider } from "./provider/PlatformProvider";
var Platform = /** @class */ (function () {
    function Platform(params) {
        if (params === void 0) { params = {}; }
        // Собираем сюда все элементы
        this.packElements = {};
        // отображается ли в данный момент платфрома компании
        this.visibility = false;
        this.showData = params;
        this.screen = PlatformScreen.getInstance();
        this.jData = new PlatformProvider();
        this.pltElem = new PlatformElem(this.screen.name);
        this.content = new PlatformContent();
    }
    Platform.prototype.closePlatform = function () {
        this.content.close();
        this.packElements.stagePlatform.remove();
        this.packElements = {};
        this.visibility = false;
    };
    Platform.prototype.showPlatform = function () {
        if (this.visibility) {
            this.closePlatform();
        }
        this.run();
        this.visibility = true;
    };
    Platform.prototype.run = function () {
        var _this = this;
        this.packElements.stagePlatform = this.pltElem.createStage(this.screen.stageData);
        this.packElements.spinner = this.pltElem.createSpinner(this.jData.spinnerLink, this.screen.spinnerData, this.packElements.stagePlatform);
        if (this.showData.btnClose) {
            this.btnClose = this.pltElem.createBtnClose(this.jData.baseLink.closeLink, this.screen.stageData.btnClose, this.packElements.stagePlatform);
        }
        this.pltElem.action.one(PlatformElem.SPINNER_LOADED, function () { _this.createPlatform(); });
    };
    Platform.prototype.createPlatform = function () {
        var _this = this;
        this.content.create();
        this.pltElem.action.one(PlatformElem.LOADED_BASE_ELEM, function () { _this.showContent(); });
        // создаем и загружаем картинки для основного слоя (декорации)
        this.pltElem.createBaseElements(this.jData.baseLink, this.screen.stageData.backgroundLink, this.packElements.stagePlatform);
    };
    Platform.prototype.showContent = function () {
        this.packElements.spinner.remove();
        for (var i = 0; i < this.content.content.length; i++) {
            this.packElements.stagePlatform.prepend(this.content.content[i]);
        }
    };
    return Platform;
}());
export { Platform };
