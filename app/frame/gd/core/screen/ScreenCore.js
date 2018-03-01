/*
* Задача класса определять характеристики экрана устройства
* */
var ScreenCore = /** @class */ (function () {
    function ScreenCore() {
        // Доступные размеры экрана
        this.wScreen = 0;
        this.hScreen = 0;
        // Количество слайдов в слайдере за раз
        this.valCardsSlider = 0;
        //текущая ориентация экрана
        this.orientScreen = 'HZ';
        //инфо об ориентации экрана
        this.orientwInfoScreen = 'HZ';
        this.screenCurrentSize();
    }
    ScreenCore.prototype.screenCurrentSize = function () {
        this.wScreen = window.innerWidth;
        this.hScreen = window.innerHeight;
        if (this.wScreen > this.hScreen) {
            this.orientScreen = ScreenCore.WIDESCREEN;
            this.orientwInfoScreen = 'HDTV(Full-HD)(FHD)1080p';
        }
        else {
            this.orientScreen = ScreenCore.NARROWCREEN;
            this.orientwInfoScreen = 'vertical';
        }
        console.log('Доступная область отрисовки wScreen:', this.wScreen, ' hScreen', this.hScreen);
    };
    Object.defineProperty(ScreenCore.prototype, "screenW", {
        get: function () {
            return this.wScreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenCore.prototype, "screenH", {
        get: function () {
            return this.hScreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenCore.prototype, "currentOrientScreen", {
        get: function () {
            return this.orientScreen;
        },
        enumerable: true,
        configurable: true
    });
    ScreenCore.prototype.getOrientScreenWhat = function (nameScreen) {
        console.log('Ориентация экрана ' + this.orientScreen);
        if (this.orientScreen == nameScreen) {
            return true;
        }
        else {
            return false;
        }
    };
    ScreenCore.WIDESCREEN = 'widescreen'; // 19x9
    ScreenCore.WIDESCREEN_HSMALL = 'widescreen_hsmall';
    ScreenCore.NARROWCREEN = 'narrow-screen';
    return ScreenCore;
}());
export { ScreenCore };
