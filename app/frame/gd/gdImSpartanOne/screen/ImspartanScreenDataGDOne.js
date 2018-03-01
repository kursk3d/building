import { ImspartanPlatformScreenGDOne } from "../platform/ImspartanPlatformScreenGDOne";
import { ImspartanSliderScreenGDOne } from "../slider/ImspartanSliderScreenGDOne";
import { ScreenCore } from "../../core/screen/ScreenCore";
export class ImspartanScreenDataGDOne extends ScreenCore {
    constructor(namePair = 'def-name') {
        super();
        this.namePairComp = namePair.trim();
        this.platform = ImspartanPlatformScreenGDOne.getInstance();
        this.platform.name = this.namePairComp;
        this.slider = ImspartanSliderScreenGDOne.getInstance();
        this.slider.name = this.namePairComp;
        this.setParams();
    }
    setParams() {
        if (this.getOrientScreenWhat(ScreenCore.WIDESCREEN)) {
            this.setParamsWideScreen();
        }
        else {
            this.setParamsNarrowScreen();
        }
    }
    setParamsWideScreen() {
        this.slider.wBase = this.platform.w = this.screenW;
        this.slider.hBase = this.platform.h = this.screenH;
        this.platform.wideScreen();
        this.slider.wideScreen();
    }
    setParamsNarrowScreen() {
        this.slider.wBase = this.platform.w = this.screenW;
        this.slider.hBase = this.platform.h = this.screenH;
        this.platform.narrowScreen();
        this.slider.narrowScreen();
    }
    // обновляем параметры для отрисовки экрана
    updateParamsScreen() {
        this.screenCurrentSize();
        this.setParams();
    }
    get namePair() {
        return this.namePairComp;
    }
}
