/*
* Задача класса определять характеристики экрана устройства
* */
export class ScreenCore {
    constructor() {
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
    screenCurrentSize() {
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
    }
    get screenW() {
        return this.wScreen;
    }
    get screenH() {
        return this.hScreen;
    }
    get currentOrientScreen() {
        return this.orientScreen;
    }
    getOrientScreenWhat(nameScreen) {
        console.log('Ориентация экрана ' + this.orientScreen);
        if (this.orientScreen == nameScreen) {
            return true;
        }
        else {
            return false;
        }
    }
}
ScreenCore.WIDESCREEN = 'widescreen'; // 19x9
ScreenCore.WIDESCREEN_HSMALL = 'widescreen_hsmall';
ScreenCore.NARROWCREEN = 'narrow-screen';
