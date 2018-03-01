import { DesignDataElement } from "./screen/DesignDataElement";
var AboutScreen = /** @class */ (function () {
    function AboutScreen() {
        this.w = 0;
        this.h = 0;
        this.name = 'def-name_about-screen';
        this.stage = new DesignDataElement();
        this.about = new DesignDataElement();
        this.baseParams();
    }
    AboutScreen.getInstance = function () {
        if (!AboutScreen.instance) {
            AboutScreen.instance = new AboutScreen();
        }
        return AboutScreen.instance;
    };
    AboutScreen.prototype.baseParams = function () {
        this.stage.styleBase = 'color:white;';
        this.stage.addStyleBase = 'width:inherit;height:inherit;';
        this.stage.addClass = 'flex_column__around-center';
        this.about.addClass = 'flex_column';
    };
    AboutScreen.prototype.wideScreen = function () {
        this.stage.style = 'font-size:30px';
    };
    AboutScreen.prototype.narrowScreen = function () {
        this.stage.style = 'font-size:40px';
    };
    AboutScreen.prototype.sizePlatformSet = function (width, height) {
        this.w = width;
        this.h = height;
    };
    return AboutScreen;
}());
export { AboutScreen };
