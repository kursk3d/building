import { ScreenCore } from "../../core/screen/ScreenCore";
import { PlatformScreen } from "../platform/PlatformScreen";
import { AboutScreen } from "../aboutContent/AboutScreen";
export class Screen extends ScreenCore {
    constructor(namePair = 'def-name') {
        super();
        this._name = namePair.trim();
        this.platformScr = PlatformScreen.getInstance();
        this.platformScr.name = this._name;
        this.aboutScr = AboutScreen.getInstance();
        this.aboutScr.name = this._name;
        this.setParams();
    }
    setParams() {
        this.baseData();
        if (this.getOrientScreenWhat(ScreenCore.WIDESCREEN)) {
            this.setParamsWideScreen();
        }
        else {
            this.setParamsNarrowScreen();
        }
    }
    baseData() {
        this.platformScr.sizePlatformSet(this.screenW, this.screenH);
        this.platformScr.baseParams();
        this.aboutScr.sizePlatformSet(this.screenW, this.screenH);
        this.aboutScr.baseParams();
    }
    setParamsWideScreen() {
        this.platformScr.wideScreen();
        this.aboutScr.wideScreen();
    }
    setParamsNarrowScreen() {
        this.platformScr.narrowScreen();
        this.aboutScr.narrowScreen();
    }
    // обновляем параметры для отрисовки экрана
    updateParamsScreen() {
        this.screenCurrentSize();
        this.setParams();
    }
    get namePair() {
        return this._name;
    }
}
