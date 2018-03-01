import { DesignStagePlatform } from "./screen/DesignStagePlatform";
export class PlatformScreen {
    constructor() {
        this.name = 'def-name_platform';
        this.spinnerSize = 10;
        this.stage = new DesignStagePlatform();
        this.baseParams();
    }
    static getInstance() {
        if (!PlatformScreen.instance) {
            PlatformScreen.instance = new PlatformScreen();
        }
        return PlatformScreen.instance;
    }
    baseParams() {
        this.stage.styleBase = 'background-color:rgba(79, 92, 113, .5);position:absolute;';
        this.spinnerSize = Math.round(this.w * .1);
    }
    wideScreen() {
        this.stage.backgroundLink = '/aw/' + this.w;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:' + this.w + 'px;height:' + this.h + 'px;';
        // this.spinnerSize = Math.round(this.w*.1);
    }
    narrowScreen() {
        this.stage.backgroundLink = '/ah/' + this.h;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:' + this.w + 'px;height:' + this.h + 'px;';
        // this.spinnerSize = Math.round(this.w*.1);
    }
    get sizePlatform() {
        return { width: this.w, height: this.h };
    }
    sizePlatformSet(width, height) {
        this.w = width;
        this.h = height;
    }
    get spinnerData() {
        return { width: this.w, height: this.h, size: this.spinnerSize };
    }
    get stageData() {
        return this.stage;
    }
}
