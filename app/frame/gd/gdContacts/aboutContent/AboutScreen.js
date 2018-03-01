import { DesignDataElement } from "./screen/DesignDataElement";
export class AboutScreen {
    constructor() {
        this.w = 0;
        this.h = 0;
        this.name = 'def-name_about-screen';
        this.stage = new DesignDataElement();
        this.about = new DesignDataElement();
        this.baseParams();
    }
    static getInstance() {
        if (!AboutScreen.instance) {
            AboutScreen.instance = new AboutScreen();
        }
        return AboutScreen.instance;
    }
    baseParams() {
        this.stage.styleBase = 'color:white;';
        this.stage.addStyleBase = 'width:inherit;height:inherit;';
        this.stage.addClass = 'flex_column__around-center';
        this.about.addClass = 'flex_column';
    }
    wideScreen() {
        this.stage.style = 'font-size:30px';
    }
    narrowScreen() {
        this.stage.style = 'font-size:40px';
    }
    sizePlatformSet(width, height) {
        this.w = width;
        this.h = height;
    }
}
