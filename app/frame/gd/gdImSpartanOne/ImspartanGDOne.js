import $ from "jquery-ts";
import { ImspartanSliderGDOne } from "./slider/ImspartanSliderGDOne";
import { ImspartanScreenDataGDOne } from "./screen/ImspartanScreenDataGDOne";
import { ImspartanProviderGDOne } from "./provider/ImspartanProviderGDOne";
import { ImspartanPlatformGDOne } from "./platform/ImspartanPlatformGDOne";
export class ImspartanGDOne {
    constructor(params = {}) {
        this.resizeInit = true;
        this.jData = new ImspartanProviderGDOne();
        this.screenData = new ImspartanScreenDataGDOne('imspartan');
        this.platform = new ImspartanPlatformGDOne();
        this.slider = new ImspartanSliderGDOne();
        this.platform.baseLink = this.jData.baseLink();
        this.slider.dataContent = this.jData.sliderData();
        $(window).resize(() => {
            // this.resizePlatform();
        });
        var mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
            console.log('Текущая Портретная ориентация');
        }
        else {
            console.log('Текущая Горизонтальная ориентация');
        }
        // Прослушка события изменения ориентации
        mql.addListener((m) => {
            if (m.matches) {
                console.log('// Изменено на портретный режим');
            }
            else {
                console.log('// Изменено на горизонтальный режим');
            }
            this.resizePlatform();
        });
        console.log('Запустили спартанца -=> ' + this.screenData.namePair);
    }
    show() {
        this.platform.showPlatform();
        this.slider.showSlider();
        this.platform.addContent(this.slider.stage);
    }
    close() {
        this.platform.closePlatform();
        delete this.jData;
        delete this.platform;
        delete this.screenData;
    }
    resizePlatform() {
        console.log('resize');
        this.platform.closePlatform();
        if (this.resizeInit) {
            this.resizeInit = false;
            setTimeout(() => {
                this.screenData.updateParamsScreen();
                this.platform.showPlatform();
                this.slider.showSlider();
                this.platform.addContent(this.slider.stage);
                console.log('resize ON!!!');
                this.resizeInit = true;
            }, 500);
        }
    }
}
