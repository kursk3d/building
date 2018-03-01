import { ImspartanPlatformElemGDOne } from "../platform/ImspartanPlatformElemGDOne";
import { ImspartanPlatformScreenGDOne } from "../platform/ImspartanPlatformScreenGDOne";
// import $ from "jquery-ts";
export class ImspartanPlatformGDOne {
    constructor() {
        // Собираем сюда все элементы
        this.packElements = {};
        this.contentData = [];
        // отображается ли в данный момент платфрома компании
        this.visibility = false;
        this.baseElem = new ImspartanPlatformElemGDOne();
        this.screen = ImspartanPlatformScreenGDOne.getInstance();
    }
    closePlatform() {
        this.removeContent();
        this.packElements.stagePlatform.remove();
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
        this.packElements.stagePlatform = this.baseElem.createStageScreen(this.screen);
        this.packElements.spinner = this.baseElem.createSpinner(this.baseLink.spinnerLink);
        this.packElements.stagePlatform.on(ImspartanPlatformElemGDOne.SPINNER_LOADED, () => {
            console.log('createContent ON');
            this.createContent();
        });
    }
    createContent() {
        this.packElements.stagePlatform.on(ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM, () => {
            this.packElements.spinner.remove();
            this.showContent();
        });
        // создаем и загружаем картинки для основного слоя декорации
        this.baseElem.createBaseElements(this.baseLink);
    }
    addContent(content) {
        this.contentData.push(content);
        console.log('add content to slider');
    }
    showContent() {
        for (let i = 0; i < this.contentData.length; i++) {
            this.packElements.stagePlatform.prepend(this.contentData[i]);
        }
    }
    removeContent() {
        for (let i = 0; i < this.contentData.length; i++) {
            this.contentData[i].remove();
        }
        this.contentData = [];
    }
}
