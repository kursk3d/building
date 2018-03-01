import { PlatformContent } from "./PlatformContent";
import { PlatformElem } from "./PlatformElem";
import { PlatformScreen } from "./PlatformScreen";
import { PlatformProvider } from "./provider/PlatformProvider";
export class Platform {
    constructor(params = {}) {
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
    closePlatform() {
        this.content.close();
        this.packElements.stagePlatform.remove();
        this.packElements = {};
        this.visibility = false;
    }
    showPlatform() {
        if (this.visibility) {
            this.closePlatform();
        }
        this.run();
        this.visibility = true;
    }
    run() {
        this.packElements.stagePlatform = this.pltElem.createStage(this.screen.stageData);
        this.packElements.spinner = this.pltElem.createSpinner(this.jData.spinnerLink, this.screen.spinnerData, this.packElements.stagePlatform);
        if (this.showData.btnClose) {
            this.btnClose = this.pltElem.createBtnClose(this.jData.baseLink.closeLink, this.screen.stageData.btnClose, this.packElements.stagePlatform);
        }
        this.pltElem.action.one(PlatformElem.SPINNER_LOADED, () => { this.createPlatform(); });
    }
    createPlatform() {
        this.content.create();
        this.pltElem.action.one(PlatformElem.LOADED_BASE_ELEM, () => { this.showContent(); });
        // создаем и загружаем картинки для основного слоя (декорации)
        this.pltElem.createBaseElements(this.jData.baseLink, this.screen.stageData.backgroundLink, this.packElements.stagePlatform);
    }
    showContent() {
        this.packElements.spinner.remove();
        for (let i = 0; i < this.content.content.length; i++) {
            this.packElements.stagePlatform.prepend(this.content.content[i]);
        }
    }
}
