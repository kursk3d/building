var building =
webpackJsonp_name_([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen_DesignStagePlatform__ = __webpack_require__(6);

class PlatformScreen {
    constructor() {
        this.name = 'def-name_platform';
        this.spinnerSize = 10;
        this.stage = new __WEBPACK_IMPORTED_MODULE_0__screen_DesignStagePlatform__["a" /* DesignStagePlatform */]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = PlatformScreen;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen_DesignDataElement__ = __webpack_require__(7);

class AboutScreen {
    constructor() {
        this.w = 0;
        this.h = 0;
        this.name = 'def-name_about-screen';
        this.stage = new __WEBPACK_IMPORTED_MODULE_0__screen_DesignDataElement__["a" /* DesignDataElement */]();
        this.about = new __WEBPACK_IMPORTED_MODULE_0__screen_DesignDataElement__["a" /* DesignDataElement */]();
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
        this.stage.addStyle = 'font-size:35px';
    }
    narrowScreen() {
        this.stage.addStyle = 'font-size:40px';
    }
    sizePlatformSet(width, height) {
        this.w = width;
        this.h = height;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutScreen;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_gd_gdContacts_ContactsGD__ = __webpack_require__(3);

class ContactsBuilding {
    constructor() {
        this.contacts = new __WEBPACK_IMPORTED_MODULE_0__frame_gd_gdContacts_ContactsGD__["a" /* ContactsGD */]({ btnClose: false });
        this.contacts.show();
    }
}
/* harmony export (immutable) */ __webpack_exports__["ContactsBuilding"] = ContactsBuilding;

let cntBuilding = new ContactsBuilding();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen_Screen__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_Platform__ = __webpack_require__(9);


class ContactsGD {
    constructor(params = {}) {
        this.screen = new __WEBPACK_IMPORTED_MODULE_0__screen_Screen__["a" /* Screen */]('contacts');
        this.platform = new __WEBPACK_IMPORTED_MODULE_1__platform_Platform__["a" /* Platform */]();
        this.eventChangeScreen();
    }
    show() {
        this.platform.showPlatform();
    }
    close() {
    }
    updatePlatform() {
        console.log('updatePlatform');
        this.platform.closePlatform();
        setTimeout(() => {
            this.screen.updateParamsScreen();
            this.platform.showPlatform();
        }, 300);
    }
    eventChangeScreen() {
        $(window).resize(() => { });
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
            this.updatePlatform();
        });
        console.log('Запустили -=> ' + this.screen.namePair);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContactsGD;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_screen_ScreenCore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_PlatformScreen__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutContent_AboutScreen__ = __webpack_require__(1);



class Screen extends __WEBPACK_IMPORTED_MODULE_0__core_screen_ScreenCore__["a" /* ScreenCore */] {
    constructor(namePair = 'def-name') {
        super();
        this._name = namePair.trim();
        this.platformScr = __WEBPACK_IMPORTED_MODULE_1__platform_PlatformScreen__["a" /* PlatformScreen */].getInstance();
        this.platformScr.name = this._name;
        this.aboutScr = __WEBPACK_IMPORTED_MODULE_2__aboutContent_AboutScreen__["a" /* AboutScreen */].getInstance();
        this.aboutScr.name = this._name;
        this.setParams();
    }
    setParams() {
        this.baseData();
        if (this.getOrientScreenWhat(__WEBPACK_IMPORTED_MODULE_0__core_screen_ScreenCore__["a" /* ScreenCore */].WIDESCREEN)) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Screen;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
* Задача класса определять характеристики экрана устройства
* */
class ScreenCore {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenCore;

ScreenCore.WIDESCREEN = 'widescreen'; // 19x9
ScreenCore.WIDESCREEN_HSMALL = 'widescreen_hsmall';
ScreenCore.NARROWCREEN = 'narrow-screen';


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DesignStagePlatform {
    constructor(name = 'def_stage-platform') {
        this.name = '';
        this._width = 0;
        this._height = 0;
        this._classBase = '';
        this._class = '';
        this._styleBase = '';
        this._style = '';
        this.backgroundLink = '';
        this.name = name;
    }
    set styleBase(str) {
        this._styleBase = str;
    }
    set addStyleBase(str) {
        this._styleBase += str;
    }
    set addStyle(str) {
        this._style += str;
    }
    get style() {
        return this._style;
    }
    set style(str) {
        this._style = str;
    }
    get styleHD() {
        return this._styleBase + this._style;
    }
    set classBase(str) {
        this._classBase = str;
    }
    set addClassBase(str) {
        this._classBase += str;
    }
    set addClass(str) {
        this._class += ' ' + str;
    }
    set class(str) {
        this._class = str;
    }
    get class() {
        return this._class;
    }
    get classHD() {
        return this._classBase + this._class;
    }
    setSize(width, height) {
        this._width = width;
        this._height = height;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DesignStagePlatform;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StyleColor__ = __webpack_require__(8);

class DesignDataElement {
    constructor() {
        this._classBase = '';
        this._class = '';
        this._styleBase = '';
        this._style = '';
        this.color = new __WEBPACK_IMPORTED_MODULE_0__StyleColor__["a" /* StyleColor */]();
    }
    set styleBase(str) {
        this._styleBase = str;
    }
    set addStyleBase(str) {
        this._styleBase += str;
    }
    set addStyle(str) {
        this._style += str;
    }
    get style() {
        return this._style;
    }
    set style(str) {
        this._style = str;
    }
    get styleHD() {
        return this._styleBase + this._style;
    }
    set classBase(str) {
        this._classBase = str;
    }
    set addClassBase(str) {
        this._classBase += ' ' + str;
    }
    set addClass(str) {
        this._class += ' ' + str;
    }
    get classHD() {
        return this._classBase + ' ' + this._class;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DesignDataElement;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StyleColor {
    constructor() {
        this.white = 'color:white;';
        this.black = 'color:white;';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StyleColor;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlatformContent__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PlatformElem__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PlatformScreen__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_PlatformProvider__ = __webpack_require__(15);




// import $ from "jquery-ts";
class Platform {
    constructor() {
        // Собираем сюда все элементы
        this.packElements = {};
        // отображается ли в данный момент платфрома компании
        this.visibility = false;
        this.screen = __WEBPACK_IMPORTED_MODULE_2__PlatformScreen__["a" /* PlatformScreen */].getInstance();
        this.jData = new __WEBPACK_IMPORTED_MODULE_3__provider_PlatformProvider__["a" /* PlatformProvider */]();
        this.pltElem = new __WEBPACK_IMPORTED_MODULE_1__PlatformElem__["a" /* PlatformElem */](this.screen.name);
        this.content = new __WEBPACK_IMPORTED_MODULE_0__PlatformContent__["a" /* PlatformContent */]();
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
        this.pltElem.action.one(__WEBPACK_IMPORTED_MODULE_1__PlatformElem__["a" /* PlatformElem */].SPINNER_LOADED, () => { this.createPlatform(); });
    }
    createPlatform() {
        this.content.create();
        this.pltElem.action.one(__WEBPACK_IMPORTED_MODULE_1__PlatformElem__["a" /* PlatformElem */].LOADED_BASE_ELEM, () => { this.showContent(); });
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Platform;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutContent_AboutContent__ = __webpack_require__(11);

class PlatformContent {
    constructor() {
        this._content = [];
        this.aboutContent = new __WEBPACK_IMPORTED_MODULE_0__aboutContent_AboutContent__["a" /* AboutContent */]();
    }
    close() {
        this.aboutContent.close();
        this._content = [];
    }
    create() {
        this.aboutContent.create();
        this.addContent(this.aboutContent.layerStage);
    }
    loadedContent() {
    }
    addContent(content) { this._content.push(content); }
    get content() { return this._content; }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlatformContent;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_AboutProvider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutScreen__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutElem__ = __webpack_require__(13);



class AboutContent {
    constructor() {
        // название компаненет
        this.nameStage = 'base-name_about-content';
        this._layer = {};
        this.visibility = false;
        this._screen = __WEBPACK_IMPORTED_MODULE_1__AboutScreen__["a" /* AboutScreen */].getInstance();
        this.dataProvider = new __WEBPACK_IMPORTED_MODULE_0__provider_AboutProvider__["a" /* AboutProvider */]();
        this.elem = new __WEBPACK_IMPORTED_MODULE_2__AboutElem__["a" /* AboutElem */](this._screen.name);
        // this.create();
    }
    create() {
        this._layer.stage = this.elem.createStage(this._screen.stage);
        this._layer.aboutInfo = this.elem.createAbout(this.dataProvider.aboutInfo, this._screen.about);
        this._layer.bank = this.elem.createInfoBank(this.dataProvider.coinInfo, this._screen.about);
        this._layer.aboutInfo.appendTo(this._layer.stage);
        this._layer.bank.appendTo(this._layer.stage);
        this.visibility = true;
    }
    close() {
        this._layer.stage.remove();
        this._layer = {};
    }
    get layerStage() {
        return this._layer.stage;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutContent;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AboutProvider {
    constructor() { }
    get aboutInfo() {
        return {
            fio: 'Бартенев Алескандр',
            tel: '+7 (910) 277-77-73',
            email: 'kursk3dynamic@gmail.com',
        };
    }
    get coinInfo() {
        return {
            qiwi: '+7 (910 277-77-73',
            sberBank: 'VISA 4276 3300 1139 1075',
            yandex: {
                link: 'https://money.yandex.ru/to/41001323085780',
                number: '41001323085780'
            }
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutProvider;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import $ from "jquery-ts";
class AboutElem {
    constructor(name) { this._name = name; }
    createStage(design) {
        return $('<div/>', {
            id: this._name + '_stage',
            class: this._name + '_stage ' + design.classHD,
            style: design.styleHD
        });
    }
    createAbout(data, design) {
        let about = $('<div/>', {
            class: this._name + '_about ' + design.classHD,
            style: design.styleHD
        });
        let titleOne = $('<div/>', {
            class: this._name + '_title-one ',
            style: '',
            text: 'КОНТАКТЫ'
        }).appendTo(about);
        let fio = $('<div/>', {
            class: this._name + '_title-one ',
            style: '',
            text: data.fio
        }).appendTo(about);
        let tel = $('<div/>', {
            class: this._name + '_tel ',
            style: '',
            text: data.tel
        }).prepend('<strong>моб: </strong>').appendTo(about);
        let email = $('<div/>', {
            class: this._name + '_tel ',
            style: '',
            text: data.email
        }).prepend('<strong>e:mail: </strong>').appendTo(about);
        return about;
    }
    createInfoBank(data, design) {
        let bank = $('<div/>', {
            class: this._name + '_bank ' + design.classHD,
            style: design.styleHD
        });
        let titleTwo = $('<div/>', {
            class: this._name + '_title-two ',
            style: '',
            text: 'Желающим помочь проекту.'
        }).appendTo(bank);
        let qiwi = $('<div/>', {
            class: this._name + '_qiwi ',
            style: '',
            text: data.qiwi
        }).prepend('<strong>qiwi: </strong>').appendTo(bank);
        let sberBank = $('<div/>', {
            class: this._name + '_sber ',
            style: '',
            text: data.sberBank
        }).prepend('<strong>сбербанк MasterCard: </strong>').appendTo(bank);
        let yandex = $('<div/>', {
            class: this._name + '_yandex-money ',
            style: ''
        }).prepend('<strong>yandex money: </strong>').appendTo(bank);
        let yandexLink = $('<a/>', {
            class: this._name + '_yandex-money ',
            style: '' + design.color.white,
            href: data.yandex.link,
            text: data.yandex.number
        }).appendTo(yandex);
        return bank;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutElem;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import $ from "jquery-ts";
class PlatformElem {
    constructor(name) {
        this._name = 'base';
        this.action = $('<button/>');
        this._name = name;
    }
    // основной элемент куда все помещается
    createStage(params) {
        return $('<div/>', {
            id: this._name + '_platform',
            class: params.class,
            style: params.style
        }).appendTo('body').css('font-weight', 'lighter');
    }
    createBaseElements(linkData, size, stage) {
        let fon = linkData.fonLayer + size + '//fon';
        let imgFon = new Image();
        imgFon.addEventListener("load", (e) => {
            $(stage).css({
                'background-image': 'url("' + fon + '")',
                // 'background-repeat':'no-repeat',
                'background-color': 'rgb(195, 198, 203)'
            });
            this.action.trigger(PlatformElem.LOADED_BASE_ELEM);
        }, false);
        imgFon.src = fon;
    }
    createSpinner(link, sizePlatform, stage) {
        let spinner = new Image();
        let jSpinner = $(spinner).on('load', (im) => {
            jSpinner.appendTo(stage).hide().fadeIn('slow');
            console.log('SPINNER_LOADED');
            this.action.trigger(PlatformElem.SPINNER_LOADED);
            jSpinner.css({
                position: 'absolute',
                top: (sizePlatform.height - spinner.height) / 2,
                left: (sizePlatform.width - spinner.width) / 2,
            });
        }).attr({
            id: this._name + '_spinner',
            class: 'spinner-one',
            src: link + '/ah/' + sizePlatform.size + '//spiner',
        });
        return jSpinner;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlatformElem;

PlatformElem.SPINNER_LOADED = 'spiner-load';
PlatformElem.LOADED_BASE_ELEM = 'loaded-base_elements';


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PlatformProvider {
    constructor() { }
    get baseLink() {
        return {
            spinnerLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue',
            fonLayer: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/metall-one_02-hd',
            closeLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/id/43'
        };
    }
    get spinnerLink() {
        return 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlatformProvider;



/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRpbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZENvbnRhY3RzL3BsYXRmb3JtL1BsYXRmb3JtU2NyZWVuLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L0Fib3V0U2NyZWVuLmpzIiwid2VicGFjazovLy8uL0NvbnRhY3RzQnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9Db250YWN0c0dELmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvc2NyZWVuL1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9jb3JlL3NjcmVlbi9TY3JlZW5Db3JlLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vc2NyZWVuL0Rlc2lnblN0YWdlUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvc2NyZWVuL0Rlc2lnbkRhdGFFbGVtZW50LmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L3NjcmVlbi9TdHlsZUNvbG9yLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9QbGF0Zm9ybUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvQWJvdXRDb250ZW50LmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L3Byb3ZpZGVyL0Fib3V0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvQWJvdXRFbGVtLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm1FbGVtLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vcHJvdmlkZXIvUGxhdGZvcm1Qcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXNpZ25TdGFnZVBsYXRmb3JtIH0gZnJvbSBcIi4vc2NyZWVuL0Rlc2lnblN0YWdlUGxhdGZvcm1cIjtcclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdkZWYtbmFtZV9wbGF0Zm9ybSc7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyU2l6ZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBuZXcgRGVzaWduU3RhZ2VQbGF0Zm9ybSgpO1xyXG4gICAgICAgIHRoaXMuYmFzZVBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUGxhdGZvcm1TY3JlZW4uaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1TY3JlZW4uaW5zdGFuY2UgPSBuZXcgUGxhdGZvcm1TY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtU2NyZWVuLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgYmFzZVBhcmFtcygpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLnN0eWxlQmFzZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzksIDkyLCAxMTMsIC41KTtwb3NpdGlvbjphYnNvbHV0ZTsnO1xyXG4gICAgICAgIHRoaXMuc3Bpbm5lclNpemUgPSBNYXRoLnJvdW5kKHRoaXMudyAqIC4xKTtcclxuICAgIH1cclxuICAgIHdpZGVTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kTGluayA9ICcvYXcvJyArIHRoaXMudztcclxuICAgICAgICB0aGlzLnN0YWdlLmNsYXNzID0gJ2ZsZXhfY29sdW1uX19zdGFydC1jZW50ZXInO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkU3R5bGUgPSAnd2lkdGg6JyArIHRoaXMudyArICdweDtoZWlnaHQ6JyArIHRoaXMuaCArICdweDsnO1xyXG4gICAgICAgIC8vIHRoaXMuc3Bpbm5lclNpemUgPSBNYXRoLnJvdW5kKHRoaXMudyouMSk7XHJcbiAgICB9XHJcbiAgICBuYXJyb3dTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kTGluayA9ICcvYWgvJyArIHRoaXMuaDtcclxuICAgICAgICB0aGlzLnN0YWdlLmNsYXNzID0gJ2ZsZXhfY29sdW1uX19zdGFydC1jZW50ZXInO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkU3R5bGUgPSAnd2lkdGg6JyArIHRoaXMudyArICdweDtoZWlnaHQ6JyArIHRoaXMuaCArICdweDsnO1xyXG4gICAgICAgIC8vIHRoaXMuc3Bpbm5lclNpemUgPSBNYXRoLnJvdW5kKHRoaXMudyouMSk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2l6ZVBsYXRmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB0aGlzLncsIGhlaWdodDogdGhpcy5oIH07XHJcbiAgICB9XHJcbiAgICBzaXplUGxhdGZvcm1TZXQod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMudyA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIGdldCBzcGlubmVyRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4geyB3aWR0aDogdGhpcy53LCBoZWlnaHQ6IHRoaXMuaCwgc2l6ZTogdGhpcy5zcGlubmVyU2l6ZSB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0YWdlRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm1TY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRGVzaWduRGF0YUVsZW1lbnQgfSBmcm9tIFwiLi9zY3JlZW4vRGVzaWduRGF0YUVsZW1lbnRcIjtcclxuZXhwb3J0IGNsYXNzIEFib3V0U2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudyA9IDA7XHJcbiAgICAgICAgdGhpcy5oID0gMDtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnZGVmLW5hbWVfYWJvdXQtc2NyZWVuJztcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IERlc2lnbkRhdGFFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5hYm91dCA9IG5ldyBEZXNpZ25EYXRhRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuYmFzZVBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghQWJvdXRTY3JlZW4uaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgQWJvdXRTY3JlZW4uaW5zdGFuY2UgPSBuZXcgQWJvdXRTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEFib3V0U2NyZWVuLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgYmFzZVBhcmFtcygpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLnN0eWxlQmFzZSA9ICdjb2xvcjp3aGl0ZTsnO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkU3R5bGVCYXNlID0gJ3dpZHRoOmluaGVyaXQ7aGVpZ2h0OmluaGVyaXQ7JztcclxuICAgICAgICB0aGlzLnN0YWdlLmFkZENsYXNzID0gJ2ZsZXhfY29sdW1uX19hcm91bmQtY2VudGVyJztcclxuICAgICAgICB0aGlzLmFib3V0LmFkZENsYXNzID0gJ2ZsZXhfY29sdW1uJztcclxuICAgIH1cclxuICAgIHdpZGVTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRTdHlsZSA9ICdmb250LXNpemU6MzVweCc7XHJcbiAgICB9XHJcbiAgICBuYXJyb3dTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRTdHlsZSA9ICdmb250LXNpemU6NDBweCc7XHJcbiAgICB9XHJcbiAgICBzaXplUGxhdGZvcm1TZXQod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMudyA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaCA9IGhlaWdodDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L0Fib3V0U2NyZWVuLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbnRhY3RzR0QgfSBmcm9tIFwiLi9mcmFtZS9nZC9nZENvbnRhY3RzL0NvbnRhY3RzR0RcIjtcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RzQnVpbGRpbmcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWN0cyA9IG5ldyBDb250YWN0c0dEKHsgYnRuQ2xvc2U6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRoaXMuY29udGFjdHMuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcbmxldCBjbnRCdWlsZGluZyA9IG5ldyBDb250YWN0c0J1aWxkaW5nKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29udGFjdHNCdWlsZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW4vU2NyZWVuXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSBcIi4vcGxhdGZvcm0vUGxhdGZvcm1cIjtcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RzR0Qge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oJ2NvbnRhY3RzJyk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRDaGFuZ2VTY3JlZW4oKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5zaG93UGxhdGZvcm0oKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUGxhdGZvcm0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZVBsYXRmb3JtJyk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5jbG9zZVBsYXRmb3JtKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLnVwZGF0ZVBhcmFtc1NjcmVlbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXRmb3JtLnNob3dQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbiAgICBldmVudENoYW5nZVNjcmVlbigpIHtcclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHsgfSk7XHJcbiAgICAgICAgdmFyIG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIik7XHJcbiAgICAgICAgaWYgKG1xbC5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQotC10LrRg9GJ0LDRjyDQn9C+0YDRgtGA0LXRgtC90LDRjyDQvtGA0LjQtdC90YLQsNGG0LjRjycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ci0LXQutGD0YnQsNGPINCT0L7RgNC40LfQvtC90YLQsNC70YzQvdCw0Y8g0L7RgNC40LXQvdGC0LDRhtC40Y8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0J/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNGPINC40LfQvNC10L3QtdC90LjRjyDQvtGA0LjQtdC90YLQsNGG0LjQuFxyXG4gICAgICAgIG1xbC5hZGRMaXN0ZW5lcigobSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLy8g0JjQt9C80LXQvdC10L3QviDQvdCwINC/0L7RgNGC0YDQtdGC0L3Ri9C5INGA0LXQttC40LwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcvLyDQmNC30LzQtdC90LXQvdC+INC90LAg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSDRgNC10LbQuNC8Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQl9Cw0L/Rg9GB0YLQuNC70LggLT0+ICcgKyB0aGlzLnNjcmVlbi5uYW1lUGFpcik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZENvbnRhY3RzL0NvbnRhY3RzR0QuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2NyZWVuQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlL3NjcmVlbi9TY3JlZW5Db3JlXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2NyZWVuIH0gZnJvbSBcIi4uL3BsYXRmb3JtL1BsYXRmb3JtU2NyZWVuXCI7XHJcbmltcG9ydCB7IEFib3V0U2NyZWVuIH0gZnJvbSBcIi4uL2Fib3V0Q29udGVudC9BYm91dFNjcmVlblwiO1xyXG5leHBvcnQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgU2NyZWVuQ29yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lUGFpciA9ICdkZWYtbmFtZScpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lUGFpci50cmltKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNjciA9IFBsYXRmb3JtU2NyZWVuLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNjci5uYW1lID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB0aGlzLmFib3V0U2NyID0gQWJvdXRTY3JlZW4uZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmFib3V0U2NyLm5hbWUgPSB0aGlzLl9uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0UGFyYW1zKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXMoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlRGF0YSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE9yaWVudFNjcmVlbldoYXQoU2NyZWVuQ29yZS5XSURFU0NSRUVOKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBhcmFtc1dpZGVTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1zTmFycm93U2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYmFzZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNjci5zaXplUGxhdGZvcm1TZXQodGhpcy5zY3JlZW5XLCB0aGlzLnNjcmVlbkgpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TY3IuYmFzZVBhcmFtcygpO1xyXG4gICAgICAgIHRoaXMuYWJvdXRTY3Iuc2l6ZVBsYXRmb3JtU2V0KHRoaXMuc2NyZWVuVywgdGhpcy5zY3JlZW5IKTtcclxuICAgICAgICB0aGlzLmFib3V0U2NyLmJhc2VQYXJhbXMoKTtcclxuICAgIH1cclxuICAgIHNldFBhcmFtc1dpZGVTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNjci53aWRlU2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5hYm91dFNjci53aWRlU2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXNOYXJyb3dTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNjci5uYXJyb3dTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLmFib3V0U2NyLm5hcnJvd1NjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC/0LDRgNCw0LzQtdGC0YDRiyDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INGN0LrRgNCw0L3QsFxyXG4gICAgdXBkYXRlUGFyYW1zU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuQ3VycmVudFNpemUoKTtcclxuICAgICAgICB0aGlzLnNldFBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWVQYWlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9zY3JlZW4vU2NyZWVuLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiog0JfQsNC00LDRh9CwINC60LvQsNGB0YHQsCDQvtC/0YDQtdC00LXQu9GP0YLRjCDRhdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutC4INGN0LrRgNCw0L3QsCDRg9GB0YLRgNC+0LnRgdGC0LLQsFxyXG4qICovXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5Db3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vINCU0L7RgdGC0YPQv9C90YvQtSDRgNCw0LfQvNC10YDRiyDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLndTY3JlZW4gPSAwO1xyXG4gICAgICAgIHRoaXMuaFNjcmVlbiA9IDA7XHJcbiAgICAgICAgLy8g0JrQvtC70LjRh9C10YHRgtCy0L4g0YHQu9Cw0LnQtNC+0LIg0LIg0YHQu9Cw0LnQtNC10YDQtSDQt9CwINGA0LDQt1xyXG4gICAgICAgIHRoaXMudmFsQ2FyZHNTbGlkZXIgPSAwO1xyXG4gICAgICAgIC8v0YLQtdC60YPRidCw0Y8g0L7RgNC40LXQvdGC0LDRhtC40Y8g0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgdGhpcy5vcmllbnRTY3JlZW4gPSAnSFonO1xyXG4gICAgICAgIC8v0LjQvdGE0L4g0L7QsSDQvtGA0LjQtdC90YLQsNGG0LjQuCDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLm9yaWVudHdJbmZvU2NyZWVuID0gJ0haJztcclxuICAgICAgICB0aGlzLnNjcmVlbkN1cnJlbnRTaXplKCk7XHJcbiAgICB9XHJcbiAgICBzY3JlZW5DdXJyZW50U2l6ZSgpIHtcclxuICAgICAgICB0aGlzLndTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmhTY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHRoaXMud1NjcmVlbiA+IHRoaXMuaFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWVudFNjcmVlbiA9IFNjcmVlbkNvcmUuV0lERVNDUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnR3SW5mb1NjcmVlbiA9ICdIRFRWKEZ1bGwtSEQpKEZIRCkxMDgwcCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWVudFNjcmVlbiA9IFNjcmVlbkNvcmUuTkFSUk9XQ1JFRU47XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50d0luZm9TY3JlZW4gPSAndmVydGljYWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygn0JTQvtGB0YLRg9C/0L3QsNGPINC+0LHQu9Cw0YHRgtGMINC+0YLRgNC40YHQvtCy0LrQuCB3U2NyZWVuOicsIHRoaXMud1NjcmVlbiwgJyBoU2NyZWVuJywgdGhpcy5oU2NyZWVuKTtcclxuICAgIH1cclxuICAgIGdldCBzY3JlZW5XKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndTY3JlZW47XHJcbiAgICB9XHJcbiAgICBnZXQgc2NyZWVuSCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oU2NyZWVuO1xyXG4gICAgfVxyXG4gICAgZ2V0IGN1cnJlbnRPcmllbnRTY3JlZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50U2NyZWVuO1xyXG4gICAgfVxyXG4gICAgZ2V0T3JpZW50U2NyZWVuV2hhdChuYW1lU2NyZWVuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ce0YDQuNC10L3RgtCw0YbQuNGPINGN0LrRgNCw0L3QsCAnICsgdGhpcy5vcmllbnRTY3JlZW4pO1xyXG4gICAgICAgIGlmICh0aGlzLm9yaWVudFNjcmVlbiA9PSBuYW1lU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5TY3JlZW5Db3JlLldJREVTQ1JFRU4gPSAnd2lkZXNjcmVlbic7IC8vIDE5eDlcclxuU2NyZWVuQ29yZS5XSURFU0NSRUVOX0hTTUFMTCA9ICd3aWRlc2NyZWVuX2hzbWFsbCc7XHJcblNjcmVlbkNvcmUuTkFSUk9XQ1JFRU4gPSAnbmFycm93LXNjcmVlbic7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvY29yZS9zY3JlZW4vU2NyZWVuQ29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRGVzaWduU3RhZ2VQbGF0Zm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gJ2RlZl9zdGFnZS1wbGF0Zm9ybScpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLl93aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLl9jbGFzc0Jhc2UgPSAnJztcclxuICAgICAgICB0aGlzLl9jbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlQmFzZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTGluayA9ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgc3R5bGVCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlQmFzZSA9IHN0cjtcclxuICAgIH1cclxuICAgIHNldCBhZGRTdHlsZUJhc2Uoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fc3R5bGVCYXNlICs9IHN0cjtcclxuICAgIH1cclxuICAgIHNldCBhZGRTdHlsZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9zdHlsZSArPSBzdHI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0eWxlSEQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlQmFzZSArIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzQmFzZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9jbGFzc0Jhc2UgPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkQ2xhc3NCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX2NsYXNzQmFzZSArPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkQ2xhc3Moc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3MgKz0gJyAnICsgc3RyO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzKHN0cikge1xyXG4gICAgICAgIHRoaXMuX2NsYXNzID0gc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzcztcclxuICAgIH1cclxuICAgIGdldCBjbGFzc0hEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzc0Jhc2UgKyB0aGlzLl9jbGFzcztcclxuICAgIH1cclxuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9zY3JlZW4vRGVzaWduU3RhZ2VQbGF0Zm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTdHlsZUNvbG9yIH0gZnJvbSBcIi4vU3R5bGVDb2xvclwiO1xyXG5leHBvcnQgY2xhc3MgRGVzaWduRGF0YUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NCYXNlID0gJyc7XHJcbiAgICAgICAgdGhpcy5fY2xhc3MgPSAnJztcclxuICAgICAgICB0aGlzLl9zdHlsZUJhc2UgPSAnJztcclxuICAgICAgICB0aGlzLl9zdHlsZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgU3R5bGVDb2xvcigpO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxlQmFzZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9zdHlsZUJhc2UgPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkU3R5bGVCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlQmFzZSArPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkU3R5bGUoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgKz0gc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0eWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZTtcclxuICAgIH1cclxuICAgIHNldCBzdHlsZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9zdHlsZSA9IHN0cjtcclxuICAgIH1cclxuICAgIGdldCBzdHlsZUhEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZUJhc2UgKyB0aGlzLl9zdHlsZTtcclxuICAgIH1cclxuICAgIHNldCBjbGFzc0Jhc2Uoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NCYXNlID0gc3RyO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkZENsYXNzQmFzZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9jbGFzc0Jhc2UgKz0gJyAnICsgc3RyO1xyXG4gICAgfVxyXG4gICAgc2V0IGFkZENsYXNzKHN0cikge1xyXG4gICAgICAgIHRoaXMuX2NsYXNzICs9ICcgJyArIHN0cjtcclxuICAgIH1cclxuICAgIGdldCBjbGFzc0hEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzc0Jhc2UgKyAnICcgKyB0aGlzLl9jbGFzcztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L3NjcmVlbi9EZXNpZ25EYXRhRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgU3R5bGVDb2xvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLndoaXRlID0gJ2NvbG9yOndoaXRlOyc7XHJcbiAgICAgICAgdGhpcy5ibGFjayA9ICdjb2xvcjp3aGl0ZTsnO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvc2NyZWVuL1N0eWxlQ29sb3IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGxhdGZvcm1Db250ZW50IH0gZnJvbSBcIi4vUGxhdGZvcm1Db250ZW50XCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtRWxlbSB9IGZyb20gXCIuL1BsYXRmb3JtRWxlbVwiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNjcmVlbiB9IGZyb20gXCIuL1BsYXRmb3JtU2NyZWVuXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtUHJvdmlkZXIgfSBmcm9tIFwiLi9wcm92aWRlci9QbGF0Zm9ybVByb3ZpZGVyXCI7XHJcbi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnktdHNcIjtcclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vINCh0L7QsdC40YDQsNC10Lwg0YHRjtC00LAg0LLRgdC1INGN0LvQtdC80LXQvdGC0YtcclxuICAgICAgICB0aGlzLnBhY2tFbGVtZW50cyA9IHt9O1xyXG4gICAgICAgIC8vINC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQu9C4INCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0L/Qu9Cw0YLRhNGA0L7QvNCwINC60L7QvNC/0LDQvdC40LhcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IFBsYXRmb3JtU2NyZWVuLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5qRGF0YSA9IG5ldyBQbGF0Zm9ybVByb3ZpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbHRFbGVtID0gbmV3IFBsYXRmb3JtRWxlbSh0aGlzLnNjcmVlbi5uYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBuZXcgUGxhdGZvcm1Db250ZW50KCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZVBsYXRmb3JtKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudC5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucGFja0VsZW1lbnRzLnN0YWdlUGxhdGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNob3dQbGF0Zm9ybSgpIHtcclxuICAgICAgICBpZiAodGhpcy52aXNpYmlsaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybSA9IHRoaXMucGx0RWxlbS5jcmVhdGVTdGFnZSh0aGlzLnNjcmVlbi5zdGFnZURhdGEpO1xyXG4gICAgICAgIHRoaXMucGFja0VsZW1lbnRzLnNwaW5uZXIgPSB0aGlzLnBsdEVsZW0uY3JlYXRlU3Bpbm5lcih0aGlzLmpEYXRhLnNwaW5uZXJMaW5rLCB0aGlzLnNjcmVlbi5zcGlubmVyRGF0YSwgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybSk7XHJcbiAgICAgICAgdGhpcy5wbHRFbGVtLmFjdGlvbi5vbmUoUGxhdGZvcm1FbGVtLlNQSU5ORVJfTE9BREVELCAoKSA9PiB7IHRoaXMuY3JlYXRlUGxhdGZvcm0oKTsgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVQbGF0Zm9ybSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wbHRFbGVtLmFjdGlvbi5vbmUoUGxhdGZvcm1FbGVtLkxPQURFRF9CQVNFX0VMRU0sICgpID0+IHsgdGhpcy5zaG93Q29udGVudCgpOyB9KTtcclxuICAgICAgICAvLyDRgdC+0LfQtNCw0LXQvCDQuCDQt9Cw0LPRgNGD0LbQsNC10Lwg0LrQsNGA0YLQuNC90LrQuCDQtNC70Y8g0L7RgdC90L7QstC90L7Qs9C+INGB0LvQvtGPICjQtNC10LrQvtGA0LDRhtC40LgpXHJcbiAgICAgICAgdGhpcy5wbHRFbGVtLmNyZWF0ZUJhc2VFbGVtZW50cyh0aGlzLmpEYXRhLmJhc2VMaW5rLCB0aGlzLnNjcmVlbi5zdGFnZURhdGEuYmFja2dyb3VuZExpbmssIHRoaXMucGFja0VsZW1lbnRzLnN0YWdlUGxhdGZvcm0pO1xyXG4gICAgfVxyXG4gICAgc2hvd0NvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudC5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0VsZW1lbnRzLnN0YWdlUGxhdGZvcm0ucHJlcGVuZCh0aGlzLmNvbnRlbnQuY29udGVudFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9QbGF0Zm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBYm91dENvbnRlbnQgfSBmcm9tIFwiLi4vYWJvdXRDb250ZW50L0Fib3V0Q29udGVudFwiO1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1Db250ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBbXTtcclxuICAgICAgICB0aGlzLmFib3V0Q29udGVudCA9IG5ldyBBYm91dENvbnRlbnQoKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYWJvdXRDb250ZW50LmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IFtdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWJvdXRDb250ZW50LmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29udGVudCh0aGlzLmFib3V0Q29udGVudC5sYXllclN0YWdlKTtcclxuICAgIH1cclxuICAgIGxvYWRlZENvbnRlbnQoKSB7XHJcbiAgICB9XHJcbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHsgdGhpcy5fY29udGVudC5wdXNoKGNvbnRlbnQpOyB9XHJcbiAgICBnZXQgY29udGVudCgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm1Db250ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBYm91dFByb3ZpZGVyIH0gZnJvbSBcIi4vcHJvdmlkZXIvQWJvdXRQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBBYm91dFNjcmVlbiB9IGZyb20gXCIuL0Fib3V0U2NyZWVuXCI7XHJcbmltcG9ydCB7IEFib3V0RWxlbSB9IGZyb20gXCIuL0Fib3V0RWxlbVwiO1xyXG5leHBvcnQgY2xhc3MgQWJvdXRDb250ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vINC90LDQt9Cy0LDQvdC40LUg0LrQvtC80L/QsNC90LXQvdC10YJcclxuICAgICAgICB0aGlzLm5hbWVTdGFnZSA9ICdiYXNlLW5hbWVfYWJvdXQtY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIgPSB7fTtcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zY3JlZW4gPSBBYm91dFNjcmVlbi5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gbmV3IEFib3V0UHJvdmlkZXIoKTtcclxuICAgICAgICB0aGlzLmVsZW0gPSBuZXcgQWJvdXRFbGVtKHRoaXMuX3NjcmVlbi5uYW1lKTtcclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2xheWVyLnN0YWdlID0gdGhpcy5lbGVtLmNyZWF0ZVN0YWdlKHRoaXMuX3NjcmVlbi5zdGFnZSk7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIuYWJvdXRJbmZvID0gdGhpcy5lbGVtLmNyZWF0ZUFib3V0KHRoaXMuZGF0YVByb3ZpZGVyLmFib3V0SW5mbywgdGhpcy5fc2NyZWVuLmFib3V0KTtcclxuICAgICAgICB0aGlzLl9sYXllci5iYW5rID0gdGhpcy5lbGVtLmNyZWF0ZUluZm9CYW5rKHRoaXMuZGF0YVByb3ZpZGVyLmNvaW5JbmZvLCB0aGlzLl9zY3JlZW4uYWJvdXQpO1xyXG4gICAgICAgIHRoaXMuX2xheWVyLmFib3V0SW5mby5hcHBlbmRUbyh0aGlzLl9sYXllci5zdGFnZSk7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIuYmFuay5hcHBlbmRUbyh0aGlzLl9sYXllci5zdGFnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2xheWVyLnN0YWdlLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuX2xheWVyID0ge307XHJcbiAgICB9XHJcbiAgICBnZXQgbGF5ZXJTdGFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXIuc3RhZ2U7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZENvbnRhY3RzL2Fib3V0Q29udGVudC9BYm91dENvbnRlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBBYm91dFByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBnZXQgYWJvdXRJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbzogJ9CR0LDRgNGC0LXQvdC10LIg0JDQu9C10YHQutCw0L3QtNGAJyxcclxuICAgICAgICAgICAgdGVsOiAnKzcgKDkxMCkgMjc3LTc3LTczJyxcclxuICAgICAgICAgICAgZW1haWw6ICdrdXJzazNkeW5hbWljQGdtYWlsLmNvbScsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBjb2luSW5mbygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBxaXdpOiAnKzcgKDkxMCAyNzctNzctNzMnLFxyXG4gICAgICAgICAgICBzYmVyQmFuazogJ1ZJU0EgNDI3NiAzMzAwIDExMzkgMTA3NScsXHJcbiAgICAgICAgICAgIHlhbmRleDoge1xyXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vbW9uZXkueWFuZGV4LnJ1L3RvLzQxMDAxMzIzMDg1NzgwJyxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogJzQxMDAxMzIzMDg1NzgwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L3Byb3ZpZGVyL0Fib3V0UHJvdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnktdHNcIjtcclxuZXhwb3J0IGNsYXNzIEFib3V0RWxlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7IHRoaXMuX25hbWUgPSBuYW1lOyB9XHJcbiAgICBjcmVhdGVTdGFnZShkZXNpZ24pIHtcclxuICAgICAgICByZXR1cm4gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5fbmFtZSArICdfc3RhZ2UnLFxyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfc3RhZ2UgJyArIGRlc2lnbi5jbGFzc0hELFxyXG4gICAgICAgICAgICBzdHlsZTogZGVzaWduLnN0eWxlSERcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFib3V0KGRhdGEsIGRlc2lnbikge1xyXG4gICAgICAgIGxldCBhYm91dCA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX2Fib3V0ICcgKyBkZXNpZ24uY2xhc3NIRCxcclxuICAgICAgICAgICAgc3R5bGU6IGRlc2lnbi5zdHlsZUhEXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRpdGxlT25lID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfdGl0bGUtb25lICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ9Ca0J7QndCi0JDQmtCi0KsnXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oYWJvdXQpO1xyXG4gICAgICAgIGxldCBmaW8gPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ190aXRsZS1vbmUgJyxcclxuICAgICAgICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLmZpb1xyXG4gICAgICAgIH0pLmFwcGVuZFRvKGFib3V0KTtcclxuICAgICAgICBsZXQgdGVsID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfdGVsICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS50ZWxcclxuICAgICAgICB9KS5wcmVwZW5kKCc8c3Ryb25nPtC80L7QsTogPC9zdHJvbmc+JykuYXBwZW5kVG8oYWJvdXQpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX3RlbCAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJycsXHJcbiAgICAgICAgICAgIHRleHQ6IGRhdGEuZW1haWxcclxuICAgICAgICB9KS5wcmVwZW5kKCc8c3Ryb25nPmU6bWFpbDogPC9zdHJvbmc+JykuYXBwZW5kVG8oYWJvdXQpO1xyXG4gICAgICAgIHJldHVybiBhYm91dDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUluZm9CYW5rKGRhdGEsIGRlc2lnbikge1xyXG4gICAgICAgIGxldCBiYW5rID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfYmFuayAnICsgZGVzaWduLmNsYXNzSEQsXHJcbiAgICAgICAgICAgIHN0eWxlOiBkZXNpZ24uc3R5bGVIRFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0aXRsZVR3byA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX3RpdGxlLXR3byAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJycsXHJcbiAgICAgICAgICAgIHRleHQ6ICfQltC10LvQsNGO0YnQuNC8INC/0L7QvNC+0YfRjCDQv9GA0L7QtdC60YLRgy4nXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oYmFuayk7XHJcbiAgICAgICAgbGV0IHFpd2kgPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ19xaXdpICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5xaXdpXHJcbiAgICAgICAgfSkucHJlcGVuZCgnPHN0cm9uZz5xaXdpOiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhiYW5rKTtcclxuICAgICAgICBsZXQgc2JlckJhbmsgPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ19zYmVyICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5zYmVyQmFua1xyXG4gICAgICAgIH0pLnByZXBlbmQoJzxzdHJvbmc+0YHQsdC10YDQsdCw0L3QuiBNYXN0ZXJDYXJkOiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhiYW5rKTtcclxuICAgICAgICBsZXQgeWFuZGV4ID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfeWFuZGV4LW1vbmV5ICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJ1xyXG4gICAgICAgIH0pLnByZXBlbmQoJzxzdHJvbmc+eWFuZGV4IG1vbmV5OiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhiYW5rKTtcclxuICAgICAgICBsZXQgeWFuZGV4TGluayA9ICQoJzxhLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ195YW5kZXgtbW9uZXkgJyxcclxuICAgICAgICAgICAgc3R5bGU6ICcnICsgZGVzaWduLmNvbG9yLndoaXRlLFxyXG4gICAgICAgICAgICBocmVmOiBkYXRhLnlhbmRleC5saW5rLFxyXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnlhbmRleC5udW1iZXJcclxuICAgICAgICB9KS5hcHBlbmRUbyh5YW5kZXgpO1xyXG4gICAgICAgIHJldHVybiBiYW5rO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvQWJvdXRFbGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXRzXCI7XHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybUVsZW0ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSAnYmFzZSc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAkKCc8YnV0dG9uLz4nKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIC8vINC+0YHQvdC+0LLQvdC+0Lkg0Y3Qu9C10LzQtdC90YIg0LrRg9C00LAg0LLRgdC1INC/0L7QvNC10YnQsNC10YLRgdGPXHJcbiAgICBjcmVhdGVTdGFnZShwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5fbmFtZSArICdfcGxhdGZvcm0nLFxyXG4gICAgICAgICAgICBjbGFzczogcGFyYW1zLmNsYXNzLFxyXG4gICAgICAgICAgICBzdHlsZTogcGFyYW1zLnN0eWxlXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJ2JvZHknKS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2xpZ2h0ZXInKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhc2VFbGVtZW50cyhsaW5rRGF0YSwgc2l6ZSwgc3RhZ2UpIHtcclxuICAgICAgICBsZXQgZm9uID0gbGlua0RhdGEuZm9uTGF5ZXIgKyBzaXplICsgJy8vZm9uJztcclxuICAgICAgICBsZXQgaW1nRm9uID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nRm9uLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICQoc3RhZ2UpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgZm9uICsgJ1wiKScsXHJcbiAgICAgICAgICAgICAgICAvLyAnYmFja2dyb3VuZC1yZXBlYXQnOiduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAncmdiKDE5NSwgMTk4LCAyMDMpJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24udHJpZ2dlcihQbGF0Zm9ybUVsZW0uTE9BREVEX0JBU0VfRUxFTSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGltZ0Zvbi5zcmMgPSBmb247XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTcGlubmVyKGxpbmssIHNpemVQbGF0Zm9ybSwgc3RhZ2UpIHtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGxldCBqU3Bpbm5lciA9ICQoc3Bpbm5lcikub24oJ2xvYWQnLCAoaW0pID0+IHtcclxuICAgICAgICAgICAgalNwaW5uZXIuYXBwZW5kVG8oc3RhZ2UpLmhpZGUoKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NQSU5ORVJfTE9BREVEJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLnRyaWdnZXIoUGxhdGZvcm1FbGVtLlNQSU5ORVJfTE9BREVEKTtcclxuICAgICAgICAgICAgalNwaW5uZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAoc2l6ZVBsYXRmb3JtLmhlaWdodCAtIHNwaW5uZXIuaGVpZ2h0KSAvIDIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAoc2l6ZVBsYXRmb3JtLndpZHRoIC0gc3Bpbm5lci53aWR0aCkgLyAyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5hdHRyKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuX25hbWUgKyAnX3NwaW5uZXInLFxyXG4gICAgICAgICAgICBjbGFzczogJ3NwaW5uZXItb25lJyxcclxuICAgICAgICAgICAgc3JjOiBsaW5rICsgJy9haC8nICsgc2l6ZVBsYXRmb3JtLnNpemUgKyAnLy9zcGluZXInLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBqU3Bpbm5lcjtcclxuICAgIH1cclxufVxyXG5QbGF0Zm9ybUVsZW0uU1BJTk5FUl9MT0FERUQgPSAnc3BpbmVyLWxvYWQnO1xyXG5QbGF0Zm9ybUVsZW0uTE9BREVEX0JBU0VfRUxFTSA9ICdsb2FkZWQtYmFzZV9lbGVtZW50cyc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9QbGF0Zm9ybUVsZW0uanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBQbGF0Zm9ybVByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBnZXQgYmFzZUxpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3Bpbm5lckxpbms6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvc3Bpbm5lci1ibHVlJyxcclxuICAgICAgICAgICAgZm9uTGF5ZXI6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvbWV0YWxsLW9uZV8wMi1oZCcsXHJcbiAgICAgICAgICAgIGNsb3NlTGluazogJ2h0dHA6Ly94bi0tYzFhY2FlNGFvYXAueG4tLXAxYWkvZ2RJbWcvaWZhY2UvaWQvNDMnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBzcGlubmVyTGluaygpIHtcclxuICAgICAgICByZXR1cm4gJ2h0dHA6Ly94bi0tYzFhY2FlNGFvYXAueG4tLXAxYWkvZ2RJbWcvaWZhY2UvbmFtZS9zcGlubmVyLWJsdWUnO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9wcm92aWRlci9QbGF0Zm9ybVByb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ3BEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQzlDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==