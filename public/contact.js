var contact =
webpackJsonp_name_([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen_DesignDataElement__ = __webpack_require__(10);

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
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutScreen;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen_DesignStagePlatform__ = __webpack_require__(14);

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
        this.stage.styleBase = 'background-color:rgba(79, 92, 113, .5);';
        this.stage.addStyleBase = 'position:absolute;';
        this.stage.addStyleBase = 'top:0;left:0;';
        this.spinnerSize = Math.round(this.w * .1);
    }
    wideScreen() {
        this.stage.backgroundLink = '/aw/' + this.w;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:' + this.w + 'px;height:' + this.h + 'px;';
        this.stage.btnClose.size = Math.round(this.h * .05);
        // this.spinnerSize = Math.round(this.w*.1);
    }
    narrowScreen() {
        this.stage.backgroundLink = '/ah/' + this.h;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:' + this.w + 'px;height:' + this.h + 'px;';
        this.stage.btnClose.size = Math.round(this.w * .05);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsBuilding", function() { return ContactsBuilding; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_gd_gdContacts_ContactsGD__ = __webpack_require__(3);

var ContactsBuilding = /** @class */ (function () {
    function ContactsBuilding() {
        var _this = this;
        this.contacts = new __WEBPACK_IMPORTED_MODULE_0__frame_gd_gdContacts_ContactsGD__["a" /* ContactsGD */]({ btnClose: true });
        this.contacts.show();
        this.contacts.action.one(__WEBPACK_IMPORTED_MODULE_0__frame_gd_gdContacts_ContactsGD__["a" /* ContactsGD */].PLATFORM_CLOSE, function () {
            _this.contacts.close();
        });
    }
    return ContactsBuilding;
}());

var cntBuilding = new ContactsBuilding();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsGD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_Platform__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__screen_Screen__ = __webpack_require__(16);
// import $ from "jquery-ts";


var ContactsGD = /** @class */ (function () {
    function ContactsGD(params) {
        if (params === void 0) { params = {}; }
        this.action = $('<button/>');
        this.screen = new __WEBPACK_IMPORTED_MODULE_1__screen_Screen__["a" /* Screen */]('contacts');
        this.platform = new __WEBPACK_IMPORTED_MODULE_0__platform_Platform__["a" /* Platform */](params);
        this.eventChangeScreen();
    }
    ContactsGD.prototype.show = function () {
        var _this = this;
        this.platform.showPlatform();
        this.platform.btnClose.on('click', function () {
            _this.action.trigger(ContactsGD.PLATFORM_CLOSE);
        });
    };
    ContactsGD.prototype.close = function () {
        this.platform.closePlatform();
    };
    ContactsGD.prototype.updatePlatform = function () {
        var _this = this;
        console.log('updatePlatform');
        this.platform.closePlatform();
        setTimeout(function () {
            _this.screen.updateParamsScreen();
            _this.platform.showPlatform();
        }, 300);
    };
    ContactsGD.prototype.eventChangeScreen = function () {
        var _this = this;
        $(window).resize(function () {
        });
        var mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
            console.log('Текущая Портретная ориентация');
        }
        else {
            console.log('Текущая Горизонтальная ориентация');
        }
        // Прослушка события изменения ориентации
        mql.addListener(function (m) {
            if (m.matches) {
                console.log('// Изменено на портретный режим');
            }
            else {
                console.log('// Изменено на горизонтальный режим');
            }
            _this.updatePlatform();
        });
        console.log('Запустили -=> ' + this.screen.namePair);
    };
    ContactsGD.PLATFORM_CLOSE = 'platformClose';
    return ContactsGD;
}());



/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Platform; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlatformContent__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PlatformElem__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PlatformScreen__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_PlatformProvider__ = __webpack_require__(15);




var Platform = /** @class */ (function () {
    function Platform(params) {
        if (params === void 0) { params = {}; }
        // Собираем сюда все элементы
        this.packElements = {};
        // отображается ли в данный момент платфрома компании
        this.visibility = false;
        this.showData = params;
        this.screen = __WEBPACK_IMPORTED_MODULE_2__PlatformScreen__["a" /* PlatformScreen */].getInstance();
        this.jData = new __WEBPACK_IMPORTED_MODULE_3__provider_PlatformProvider__["a" /* PlatformProvider */]();
        this.pltElem = new __WEBPACK_IMPORTED_MODULE_1__PlatformElem__["a" /* PlatformElem */](this.screen.name);
        this.content = new __WEBPACK_IMPORTED_MODULE_0__PlatformContent__["a" /* PlatformContent */]();
    }
    Platform.prototype.closePlatform = function () {
        this.content.close();
        this.packElements.stagePlatform.remove();
        this.packElements = {};
        this.visibility = false;
    };
    Platform.prototype.showPlatform = function () {
        if (this.visibility) {
            this.closePlatform();
        }
        this.run();
        this.visibility = true;
    };
    Platform.prototype.run = function () {
        var _this = this;
        this.packElements.stagePlatform = this.pltElem.createStage(this.screen.stageData);
        this.packElements.spinner = this.pltElem.createSpinner(this.jData.spinnerLink, this.screen.spinnerData, this.packElements.stagePlatform);
        if (this.showData.btnClose) {
            this.btnClose = this.pltElem.createBtnClose(this.jData.baseLink.closeLink, this.screen.stageData.btnClose, this.packElements.stagePlatform);
        }
        this.pltElem.action.one(__WEBPACK_IMPORTED_MODULE_1__PlatformElem__["a" /* PlatformElem */].SPINNER_LOADED, function () { _this.createPlatform(); });
    };
    Platform.prototype.createPlatform = function () {
        var _this = this;
        this.content.create();
        this.pltElem.action.one(__WEBPACK_IMPORTED_MODULE_1__PlatformElem__["a" /* PlatformElem */].LOADED_BASE_ELEM, function () { _this.showContent(); });
        // создаем и загружаем картинки для основного слоя (декорации)
        this.pltElem.createBaseElements(this.jData.baseLink, this.screen.stageData.backgroundLink, this.packElements.stagePlatform);
    };
    Platform.prototype.showContent = function () {
        this.packElements.spinner.remove();
        for (var i = 0; i < this.content.content.length; i++) {
            this.packElements.stagePlatform.prepend(this.content.content[i]);
        }
    };
    return Platform;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutContent_AboutContent__ = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_AboutProvider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutScreen__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutElem__ = __webpack_require__(12);



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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AboutProvider {
    constructor() { }
    get aboutInfo() {
        return {
            fio: 'Бартенев Алескандр',
            tel: '+7 (910) 277-77-73',
            email: 'kursk3dynamic@gmail.com',
            vk: 'https://vk.com/a.bartenev',
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StyleColor__ = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
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
            class: this._name + '_fio ',
            style: '',
            text: data.fio
        }).appendTo(about);
        let tel = $('<div/>', {
            class: this._name + '_tel ',
            style: '',
            text: data.tel
        }).prepend('<strong>моб: </strong>').appendTo(about);
        let email = $('<div/>', {
            class: this._name + '_email ',
            style: '',
            text: data.email
        }).prepend('<strong>e:mail: </strong>').appendTo(about);
        let vk = $('<a/>', {
            class: this._name + '_vk',
            style: '' + design.color.white,
            text: data.vk,
            href: data.vk
        }).prepend('<strong>vk: </strong>').appendTo(about);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformElem; });
// import $ from "jquery-ts";
var PlatformElem = /** @class */ (function () {
    function PlatformElem(name) {
        this._name = 'base';
        this.action = $('<button/>');
        this._name = name;
    }
    // основной элемент куда все помещается
    PlatformElem.prototype.createStage = function (params) {
        return $('<div/>', {
            id: this._name + '_platform',
            class: params.class,
            style: params.styleHD
        }).appendTo('body').css('font-weight', 'lighter');
    };
    PlatformElem.prototype.createBaseElements = function (linkData, size, stage) {
        var _this = this;
        var fon = linkData.fonLayer + size + '//fon';
        var imgFon = new Image();
        imgFon.addEventListener("load", function (e) {
            $(stage).css({
                'background-image': 'url("' + fon + '")',
                // 'background-repeat':'no-repeat',
                'background-color': 'rgb(195, 198, 203)'
            });
            _this.action.trigger(PlatformElem.LOADED_BASE_ELEM);
        }, false);
        imgFon.src = fon;
    };
    PlatformElem.prototype.createSpinner = function (link, sizePlatform, stage) {
        var _this = this;
        var spinner = new Image();
        var jSpinner = $(spinner).on('load', function (im) {
            jSpinner.appendTo(stage).hide().fadeIn('slow');
            console.log('SPINNER_LOADED');
            _this.action.trigger(PlatformElem.SPINNER_LOADED);
            console.log('spinner.width', spinner.width);
            jSpinner.css({
                //TODO надо размеры спинера вывести на уровень верх а то они не читаеются
                position: 'fixed',
                // top: (sizePlatform.height/2),
                top: (sizePlatform.height / 2) - (spinner.height / 2),
                left: (sizePlatform.width / 2) - (spinner.width / 2),
            });
        }).attr({
            id: this._name + '_spinner',
            class: 'spinner-one',
            src: link + '/ah/' + sizePlatform.size + '//spiner',
        });
        return jSpinner;
    };
    PlatformElem.prototype.createBtnClose = function (link, btnData, stage) {
        var close = new Image();
        var btnClose = $(close).on('load', function (im) {
            btnClose.appendTo(stage).hide().fadeIn('slow');
            btnClose.css({
                position: 'fixed',
                top: 0,
                right: 0,
            });
        }).attr({
            id: this._name + '_close',
            class: 'close-one',
            src: link + '/ah/' + btnData.size + '//btn-close',
            style: 'cursor:pointer'
        });
        return btnClose;
    };
    PlatformElem.SPINNER_LOADED = 'spiner-load';
    PlatformElem.LOADED_BASE_ELEM = 'loaded-base_elements';
    return PlatformElem;
}());



/***/ }),
/* 14 */
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
        this.btnClose = { size: 10 };
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



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_screen_ScreenCore__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_PlatformScreen__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutContent_AboutScreen__ = __webpack_require__(0);



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
/* 17 */
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


/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L0Fib3V0U2NyZWVuLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm1TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vQ29udGFjdHNCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZENvbnRhY3RzL0NvbnRhY3RzR0QuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZENvbnRhY3RzL3BsYXRmb3JtL1BsYXRmb3JtQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZENvbnRhY3RzL2Fib3V0Q29udGVudC9BYm91dENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvcHJvdmlkZXIvQWJvdXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZENvbnRhY3RzL2Fib3V0Q29udGVudC9zY3JlZW4vRGVzaWduRGF0YUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvc2NyZWVuL1N0eWxlQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvQWJvdXRFbGVtLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm1FbGVtLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vc2NyZWVuL0Rlc2lnblN0YWdlUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9wcm92aWRlci9QbGF0Zm9ybVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkQ29udGFjdHMvc2NyZWVuL1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9jb3JlL3NjcmVlbi9TY3JlZW5Db3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlc2lnbkRhdGFFbGVtZW50IH0gZnJvbSBcIi4vc2NyZWVuL0Rlc2lnbkRhdGFFbGVtZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBBYm91dFNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLncgPSAwO1xyXG4gICAgICAgIHRoaXMuaCA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ2RlZi1uYW1lX2Fib3V0LXNjcmVlbic7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBEZXNpZ25EYXRhRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuYWJvdXQgPSBuZXcgRGVzaWduRGF0YUVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmJhc2VQYXJhbXMoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIUFib3V0U2NyZWVuLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEFib3V0U2NyZWVuLmluc3RhbmNlID0gbmV3IEFib3V0U2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBYm91dFNjcmVlbi5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGJhc2VQYXJhbXMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdHlsZUJhc2UgPSAnY29sb3I6d2hpdGU7JztcclxuICAgICAgICB0aGlzLnN0YWdlLmFkZFN0eWxlQmFzZSA9ICd3aWR0aDppbmhlcml0O2hlaWdodDppbmhlcml0Oyc7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRDbGFzcyA9ICdmbGV4X2NvbHVtbl9fYXJvdW5kLWNlbnRlcic7XHJcbiAgICAgICAgdGhpcy5hYm91dC5hZGRDbGFzcyA9ICdmbGV4X2NvbHVtbic7XHJcbiAgICB9XHJcbiAgICB3aWRlU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3R5bGUgPSAnZm9udC1zaXplOjMwcHgnO1xyXG4gICAgfVxyXG4gICAgbmFycm93U2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3R5bGUgPSAnZm9udC1zaXplOjQwcHgnO1xyXG4gICAgfVxyXG4gICAgc2l6ZVBsYXRmb3JtU2V0KHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLncgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmggPSBoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZENvbnRhY3RzL2Fib3V0Q29udGVudC9BYm91dFNjcmVlbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBEZXNpZ25TdGFnZVBsYXRmb3JtIH0gZnJvbSBcIi4vc2NyZWVuL0Rlc2lnblN0YWdlUGxhdGZvcm1cIjtcclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdkZWYtbmFtZV9wbGF0Zm9ybSc7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyU2l6ZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBuZXcgRGVzaWduU3RhZ2VQbGF0Zm9ybSgpO1xyXG4gICAgICAgIHRoaXMuYmFzZVBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUGxhdGZvcm1TY3JlZW4uaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1TY3JlZW4uaW5zdGFuY2UgPSBuZXcgUGxhdGZvcm1TY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtU2NyZWVuLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgYmFzZVBhcmFtcygpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLnN0eWxlQmFzZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzksIDkyLCAxMTMsIC41KTsnO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkU3R5bGVCYXNlID0gJ3Bvc2l0aW9uOmFic29sdXRlOyc7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRTdHlsZUJhc2UgPSAndG9wOjA7bGVmdDowOyc7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyU2l6ZSA9IE1hdGgucm91bmQodGhpcy53ICogLjEpO1xyXG4gICAgfVxyXG4gICAgd2lkZVNjcmVlbigpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLmJhY2tncm91bmRMaW5rID0gJy9hdy8nICsgdGhpcy53O1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuY2xhc3MgPSAnZmxleF9jb2x1bW5fX3N0YXJ0LWNlbnRlcic7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRTdHlsZSA9ICd3aWR0aDonICsgdGhpcy53ICsgJ3B4O2hlaWdodDonICsgdGhpcy5oICsgJ3B4Oyc7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5idG5DbG9zZS5zaXplID0gTWF0aC5yb3VuZCh0aGlzLmggKiAuMDUpO1xyXG4gICAgICAgIC8vIHRoaXMuc3Bpbm5lclNpemUgPSBNYXRoLnJvdW5kKHRoaXMudyouMSk7XHJcbiAgICB9XHJcbiAgICBuYXJyb3dTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kTGluayA9ICcvYWgvJyArIHRoaXMuaDtcclxuICAgICAgICB0aGlzLnN0YWdlLmNsYXNzID0gJ2ZsZXhfY29sdW1uX19zdGFydC1jZW50ZXInO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkU3R5bGUgPSAnd2lkdGg6JyArIHRoaXMudyArICdweDtoZWlnaHQ6JyArIHRoaXMuaCArICdweDsnO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYnRuQ2xvc2Uuc2l6ZSA9IE1hdGgucm91bmQodGhpcy53ICogLjA1KTtcclxuICAgIH1cclxuICAgIGdldCBzaXplUGxhdGZvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHRoaXMudywgaGVpZ2h0OiB0aGlzLmggfTtcclxuICAgIH1cclxuICAgIHNpemVQbGF0Zm9ybVNldCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZ2V0IHNwaW5uZXJEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB0aGlzLncsIGhlaWdodDogdGhpcy5oLCBzaXplOiB0aGlzLnNwaW5uZXJTaXplIH07XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhZ2VEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9QbGF0Zm9ybVNjcmVlbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb250YWN0c0dEIH0gZnJvbSBcIi4vZnJhbWUvZ2QvZ2RDb250YWN0cy9Db250YWN0c0dEXCI7XHJcbnZhciBDb250YWN0c0J1aWxkaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29udGFjdHNCdWlsZGluZygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29udGFjdHMgPSBuZXcgQ29udGFjdHNHRCh7IGJ0bkNsb3NlOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMuY29udGFjdHMuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuY29udGFjdHMuYWN0aW9uLm9uZShDb250YWN0c0dELlBMQVRGT1JNX0NMT1NFLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbnRhY3RzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29udGFjdHNCdWlsZGluZztcclxufSgpKTtcclxuZXhwb3J0IHsgQ29udGFjdHNCdWlsZGluZyB9O1xyXG52YXIgY250QnVpbGRpbmcgPSBuZXcgQ29udGFjdHNCdWlsZGluZygpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbnRhY3RzQnVpbGRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeS10c1wiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gXCIuL3BsYXRmb3JtL1BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL3NjcmVlbi9TY3JlZW5cIjtcclxudmFyIENvbnRhY3RzR0QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb250YWN0c0dEKHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gJCgnPGJ1dHRvbi8+Jyk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKCdjb250YWN0cycpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0ocGFyYW1zKTtcclxuICAgICAgICB0aGlzLmV2ZW50Q2hhbmdlU2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgICBDb250YWN0c0dELnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5zaG93UGxhdGZvcm0oKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtLmJ0bkNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuYWN0aW9uLnRyaWdnZXIoQ29udGFjdHNHRC5QTEFURk9STV9DTE9TRSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29udGFjdHNHRC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5jbG9zZVBsYXRmb3JtKCk7XHJcbiAgICB9O1xyXG4gICAgQ29udGFjdHNHRC5wcm90b3R5cGUudXBkYXRlUGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlUGxhdGZvcm0nKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtLmNsb3NlUGxhdGZvcm0oKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuc2NyZWVuLnVwZGF0ZVBhcmFtc1NjcmVlbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5wbGF0Zm9ybS5zaG93UGxhdGZvcm0oKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfTtcclxuICAgIENvbnRhY3RzR0QucHJvdG90eXBlLmV2ZW50Q2hhbmdlU2NyZWVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIik7XHJcbiAgICAgICAgaWYgKG1xbC5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQotC10LrRg9GJ0LDRjyDQn9C+0YDRgtGA0LXRgtC90LDRjyDQvtGA0LjQtdC90YLQsNGG0LjRjycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ci0LXQutGD0YnQsNGPINCT0L7RgNC40LfQvtC90YLQsNC70YzQvdCw0Y8g0L7RgNC40LXQvdGC0LDRhtC40Y8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0J/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNGPINC40LfQvNC10L3QtdC90LjRjyDQvtGA0LjQtdC90YLQsNGG0LjQuFxyXG4gICAgICAgIG1xbC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICBpZiAobS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLy8g0JjQt9C80LXQvdC10L3QviDQvdCwINC/0L7RgNGC0YDQtdGC0L3Ri9C5INGA0LXQttC40LwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcvLyDQmNC30LzQtdC90LXQvdC+INC90LAg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSDRgNC10LbQuNC8Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlUGxhdGZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn0JfQsNC/0YPRgdGC0LjQu9C4IC09PiAnICsgdGhpcy5zY3JlZW4ubmFtZVBhaXIpO1xyXG4gICAgfTtcclxuICAgIENvbnRhY3RzR0QuUExBVEZPUk1fQ0xPU0UgPSAncGxhdGZvcm1DbG9zZSc7XHJcbiAgICByZXR1cm4gQ29udGFjdHNHRDtcclxufSgpKTtcclxuZXhwb3J0IHsgQ29udGFjdHNHRCB9O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvQ29udGFjdHNHRC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQbGF0Zm9ybUNvbnRlbnQgfSBmcm9tIFwiLi9QbGF0Zm9ybUNvbnRlbnRcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm1FbGVtIH0gZnJvbSBcIi4vUGxhdGZvcm1FbGVtXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2NyZWVuIH0gZnJvbSBcIi4vUGxhdGZvcm1TY3JlZW5cIjtcclxuaW1wb3J0IHsgUGxhdGZvcm1Qcm92aWRlciB9IGZyb20gXCIuL3Byb3ZpZGVyL1BsYXRmb3JtUHJvdmlkZXJcIjtcclxudmFyIFBsYXRmb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxhdGZvcm0ocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IHt9OyB9XHJcbiAgICAgICAgLy8g0KHQvtCx0LjRgNCw0LXQvCDRgdGO0LTQsCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRi1xyXG4gICAgICAgIHRoaXMucGFja0VsZW1lbnRzID0ge307XHJcbiAgICAgICAgLy8g0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINC70Lgg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQv9C70LDRgtGE0YDQvtC80LAg0LrQvtC80L/QsNC90LjQuFxyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0RhdGEgPSBwYXJhbXM7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBQbGF0Zm9ybVNjcmVlbi5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuakRhdGEgPSBuZXcgUGxhdGZvcm1Qcm92aWRlcigpO1xyXG4gICAgICAgIHRoaXMucGx0RWxlbSA9IG5ldyBQbGF0Zm9ybUVsZW0odGhpcy5zY3JlZW4ubmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbmV3IFBsYXRmb3JtQ29udGVudCgpO1xyXG4gICAgfVxyXG4gICAgUGxhdGZvcm0ucHJvdG90eXBlLmNsb3NlUGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLnBhY2tFbGVtZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFBsYXRmb3JtLnByb3RvdHlwZS5zaG93UGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlUGxhdGZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFBsYXRmb3JtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnBhY2tFbGVtZW50cy5zdGFnZVBsYXRmb3JtID0gdGhpcy5wbHRFbGVtLmNyZWF0ZVN0YWdlKHRoaXMuc2NyZWVuLnN0YWdlRGF0YSk7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3Bpbm5lciA9IHRoaXMucGx0RWxlbS5jcmVhdGVTcGlubmVyKHRoaXMuakRhdGEuc3Bpbm5lckxpbmssIHRoaXMuc2NyZWVuLnNwaW5uZXJEYXRhLCB0aGlzLnBhY2tFbGVtZW50cy5zdGFnZVBsYXRmb3JtKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RGF0YS5idG5DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNsb3NlID0gdGhpcy5wbHRFbGVtLmNyZWF0ZUJ0bkNsb3NlKHRoaXMuakRhdGEuYmFzZUxpbmsuY2xvc2VMaW5rLCB0aGlzLnNjcmVlbi5zdGFnZURhdGEuYnRuQ2xvc2UsIHRoaXMucGFja0VsZW1lbnRzLnN0YWdlUGxhdGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsdEVsZW0uYWN0aW9uLm9uZShQbGF0Zm9ybUVsZW0uU1BJTk5FUl9MT0FERUQsIGZ1bmN0aW9uICgpIHsgX3RoaXMuY3JlYXRlUGxhdGZvcm0oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUGxhdGZvcm0ucHJvdG90eXBlLmNyZWF0ZVBsYXRmb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMucGx0RWxlbS5hY3Rpb24ub25lKFBsYXRmb3JtRWxlbS5MT0FERURfQkFTRV9FTEVNLCBmdW5jdGlvbiAoKSB7IF90aGlzLnNob3dDb250ZW50KCk7IH0pO1xyXG4gICAgICAgIC8vINGB0L7Qt9C00LDQtdC8INC4INC30LDQs9GA0YPQttCw0LXQvCDQutCw0YDRgtC40L3QutC4INC00LvRjyDQvtGB0L3QvtCy0L3QvtCz0L4g0YHQu9C+0Y8gKNC00LXQutC+0YDQsNGG0LjQuClcclxuICAgICAgICB0aGlzLnBsdEVsZW0uY3JlYXRlQmFzZUVsZW1lbnRzKHRoaXMuakRhdGEuYmFzZUxpbmssIHRoaXMuc2NyZWVuLnN0YWdlRGF0YS5iYWNrZ3JvdW5kTGluaywgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybSk7XHJcbiAgICB9O1xyXG4gICAgUGxhdGZvcm0ucHJvdG90eXBlLnNob3dDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGFja0VsZW1lbnRzLnNwaW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQuY29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhY2tFbGVtZW50cy5zdGFnZVBsYXRmb3JtLnByZXBlbmQodGhpcy5jb250ZW50LmNvbnRlbnRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxhdGZvcm07XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXRmb3JtIH07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9QbGF0Zm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBYm91dENvbnRlbnQgfSBmcm9tIFwiLi4vYWJvdXRDb250ZW50L0Fib3V0Q29udGVudFwiO1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1Db250ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBbXTtcclxuICAgICAgICB0aGlzLmFib3V0Q29udGVudCA9IG5ldyBBYm91dENvbnRlbnQoKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYWJvdXRDb250ZW50LmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IFtdO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWJvdXRDb250ZW50LmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29udGVudCh0aGlzLmFib3V0Q29udGVudC5sYXllclN0YWdlKTtcclxuICAgIH1cclxuICAgIGxvYWRlZENvbnRlbnQoKSB7XHJcbiAgICB9XHJcbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHsgdGhpcy5fY29udGVudC5wdXNoKGNvbnRlbnQpOyB9XHJcbiAgICBnZXQgY29udGVudCgpIHsgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7IH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvcGxhdGZvcm0vUGxhdGZvcm1Db250ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFib3V0UHJvdmlkZXIgfSBmcm9tIFwiLi9wcm92aWRlci9BYm91dFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEFib3V0U2NyZWVuIH0gZnJvbSBcIi4vQWJvdXRTY3JlZW5cIjtcclxuaW1wb3J0IHsgQWJvdXRFbGVtIH0gZnJvbSBcIi4vQWJvdXRFbGVtXCI7XHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbnRlbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8g0L3QsNC30LLQsNC90LjQtSDQutC+0LzQv9Cw0L3QtdC90LXRglxyXG4gICAgICAgIHRoaXMubmFtZVN0YWdlID0gJ2Jhc2UtbmFtZV9hYm91dC1jb250ZW50JztcclxuICAgICAgICB0aGlzLl9sYXllciA9IHt9O1xyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbiA9IEFib3V0U2NyZWVuLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBuZXcgQWJvdXRQcm92aWRlcigpO1xyXG4gICAgICAgIHRoaXMuZWxlbSA9IG5ldyBBYm91dEVsZW0odGhpcy5fc2NyZWVuLm5hbWUpO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIuc3RhZ2UgPSB0aGlzLmVsZW0uY3JlYXRlU3RhZ2UodGhpcy5fc2NyZWVuLnN0YWdlKTtcclxuICAgICAgICB0aGlzLl9sYXllci5hYm91dEluZm8gPSB0aGlzLmVsZW0uY3JlYXRlQWJvdXQodGhpcy5kYXRhUHJvdmlkZXIuYWJvdXRJbmZvLCB0aGlzLl9zY3JlZW4uYWJvdXQpO1xyXG4gICAgICAgIHRoaXMuX2xheWVyLmJhbmsgPSB0aGlzLmVsZW0uY3JlYXRlSW5mb0JhbmsodGhpcy5kYXRhUHJvdmlkZXIuY29pbkluZm8sIHRoaXMuX3NjcmVlbi5hYm91dCk7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIuYWJvdXRJbmZvLmFwcGVuZFRvKHRoaXMuX2xheWVyLnN0YWdlKTtcclxuICAgICAgICB0aGlzLl9sYXllci5iYW5rLmFwcGVuZFRvKHRoaXMuX2xheWVyLnN0YWdlKTtcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIuc3RhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIgPSB7fTtcclxuICAgIH1cclxuICAgIGdldCBsYXllclN0YWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllci5zdGFnZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvYWJvdXRDb250ZW50L0Fib3V0Q29udGVudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgQWJvdXRQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgZ2V0IGFib3V0SW5mbygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaW86ICfQkdCw0YDRgtC10L3QtdCyINCQ0LvQtdGB0LrQsNC90LTRgCcsXHJcbiAgICAgICAgICAgIHRlbDogJys3ICg5MTApIDI3Ny03Ny03MycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAna3Vyc2szZHluYW1pY0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICB2azogJ2h0dHBzOi8vdmsuY29tL2EuYmFydGVuZXYnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgY29pbkluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcWl3aTogJys3ICg5MTAgMjc3LTc3LTczJyxcclxuICAgICAgICAgICAgc2JlckJhbms6ICdWSVNBIDQyNzYgMzMwMCAxMTM5IDEwNzUnLFxyXG4gICAgICAgICAgICB5YW5kZXg6IHtcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL21vbmV5LnlhbmRleC5ydS90by80MTAwMTMyMzA4NTc4MCcsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6ICc0MTAwMTMyMzA4NTc4MCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZENvbnRhY3RzL2Fib3V0Q29udGVudC9wcm92aWRlci9BYm91dFByb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFN0eWxlQ29sb3IgfSBmcm9tIFwiLi9TdHlsZUNvbG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25EYXRhRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jbGFzc0Jhc2UgPSAnJztcclxuICAgICAgICB0aGlzLl9jbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlQmFzZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBTdHlsZUNvbG9yKCk7XHJcbiAgICB9XHJcbiAgICBzZXQgc3R5bGVCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlQmFzZSA9IHN0cjtcclxuICAgIH1cclxuICAgIHNldCBhZGRTdHlsZUJhc2Uoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fc3R5bGVCYXNlICs9IHN0cjtcclxuICAgIH1cclxuICAgIHNldCBhZGRTdHlsZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9zdHlsZSArPSBzdHI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0eWxlSEQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlQmFzZSArIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzQmFzZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9jbGFzc0Jhc2UgPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkQ2xhc3NCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX2NsYXNzQmFzZSArPSAnICcgKyBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkQ2xhc3Moc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3MgKz0gJyAnICsgc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsYXNzSEQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzQmFzZSArICcgJyArIHRoaXMuX2NsYXNzO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvc2NyZWVuL0Rlc2lnbkRhdGFFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgU3R5bGVDb2xvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLndoaXRlID0gJ2NvbG9yOndoaXRlOyc7XHJcbiAgICAgICAgdGhpcy5ibGFjayA9ICdjb2xvcjp3aGl0ZTsnO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvc2NyZWVuL1N0eWxlQ29sb3IuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnktdHNcIjtcclxuZXhwb3J0IGNsYXNzIEFib3V0RWxlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7IHRoaXMuX25hbWUgPSBuYW1lOyB9XHJcbiAgICBjcmVhdGVTdGFnZShkZXNpZ24pIHtcclxuICAgICAgICByZXR1cm4gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5fbmFtZSArICdfc3RhZ2UnLFxyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfc3RhZ2UgJyArIGRlc2lnbi5jbGFzc0hELFxyXG4gICAgICAgICAgICBzdHlsZTogZGVzaWduLnN0eWxlSERcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFib3V0KGRhdGEsIGRlc2lnbikge1xyXG4gICAgICAgIGxldCBhYm91dCA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX2Fib3V0ICcgKyBkZXNpZ24uY2xhc3NIRCxcclxuICAgICAgICAgICAgc3R5bGU6IGRlc2lnbi5zdHlsZUhEXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRpdGxlT25lID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfdGl0bGUtb25lICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ9Ca0J7QndCi0JDQmtCi0KsnXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oYWJvdXQpO1xyXG4gICAgICAgIGxldCBmaW8gPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ19maW8gJyxcclxuICAgICAgICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLmZpb1xyXG4gICAgICAgIH0pLmFwcGVuZFRvKGFib3V0KTtcclxuICAgICAgICBsZXQgdGVsID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfdGVsICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS50ZWxcclxuICAgICAgICB9KS5wcmVwZW5kKCc8c3Ryb25nPtC80L7QsTogPC9zdHJvbmc+JykuYXBwZW5kVG8oYWJvdXQpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX2VtYWlsICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5lbWFpbFxyXG4gICAgICAgIH0pLnByZXBlbmQoJzxzdHJvbmc+ZTptYWlsOiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhhYm91dCk7XHJcbiAgICAgICAgbGV0IHZrID0gJCgnPGEvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX3ZrJyxcclxuICAgICAgICAgICAgc3R5bGU6ICcnICsgZGVzaWduLmNvbG9yLndoaXRlLFxyXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnZrLFxyXG4gICAgICAgICAgICBocmVmOiBkYXRhLnZrXHJcbiAgICAgICAgfSkucHJlcGVuZCgnPHN0cm9uZz52azogPC9zdHJvbmc+JykuYXBwZW5kVG8oYWJvdXQpO1xyXG4gICAgICAgIHJldHVybiBhYm91dDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUluZm9CYW5rKGRhdGEsIGRlc2lnbikge1xyXG4gICAgICAgIGxldCBiYW5rID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfYmFuayAnICsgZGVzaWduLmNsYXNzSEQsXHJcbiAgICAgICAgICAgIHN0eWxlOiBkZXNpZ24uc3R5bGVIRFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0aXRsZVR3byA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuX25hbWUgKyAnX3RpdGxlLXR3byAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJycsXHJcbiAgICAgICAgICAgIHRleHQ6ICfQltC10LvQsNGO0YnQuNC8INC/0L7QvNC+0YfRjCDQv9GA0L7QtdC60YLRgy4nXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oYmFuayk7XHJcbiAgICAgICAgbGV0IHFpd2kgPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ19xaXdpICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5xaXdpXHJcbiAgICAgICAgfSkucHJlcGVuZCgnPHN0cm9uZz5xaXdpOiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhiYW5rKTtcclxuICAgICAgICBsZXQgc2JlckJhbmsgPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ19zYmVyICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS5zYmVyQmFua1xyXG4gICAgICAgIH0pLnByZXBlbmQoJzxzdHJvbmc+0YHQsdC10YDQsdCw0L3QuiBNYXN0ZXJDYXJkOiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhiYW5rKTtcclxuICAgICAgICBsZXQgeWFuZGV4ID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5fbmFtZSArICdfeWFuZGV4LW1vbmV5ICcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJ1xyXG4gICAgICAgIH0pLnByZXBlbmQoJzxzdHJvbmc+eWFuZGV4IG1vbmV5OiA8L3N0cm9uZz4nKS5hcHBlbmRUbyhiYW5rKTtcclxuICAgICAgICBsZXQgeWFuZGV4TGluayA9ICQoJzxhLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLl9uYW1lICsgJ195YW5kZXgtbW9uZXkgJyxcclxuICAgICAgICAgICAgc3R5bGU6ICcnICsgZGVzaWduLmNvbG9yLndoaXRlLFxyXG4gICAgICAgICAgICBocmVmOiBkYXRhLnlhbmRleC5saW5rLFxyXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnlhbmRleC5udW1iZXJcclxuICAgICAgICB9KS5hcHBlbmRUbyh5YW5kZXgpO1xyXG4gICAgICAgIHJldHVybiBiYW5rO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9hYm91dENvbnRlbnQvQWJvdXRFbGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXRzXCI7XHJcbnZhciBQbGF0Zm9ybUVsZW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF0Zm9ybUVsZW0obmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSAnYmFzZSc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAkKCc8YnV0dG9uLz4nKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIC8vINC+0YHQvdC+0LLQvdC+0Lkg0Y3Qu9C10LzQtdC90YIg0LrRg9C00LAg0LLRgdC1INC/0L7QvNC10YnQsNC10YLRgdGPXHJcbiAgICBQbGF0Zm9ybUVsZW0ucHJvdG90eXBlLmNyZWF0ZVN0YWdlID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLl9uYW1lICsgJ19wbGF0Zm9ybScsXHJcbiAgICAgICAgICAgIGNsYXNzOiBwYXJhbXMuY2xhc3MsXHJcbiAgICAgICAgICAgIHN0eWxlOiBwYXJhbXMuc3R5bGVIRFxyXG4gICAgICAgIH0pLmFwcGVuZFRvKCdib2R5JykuY3NzKCdmb250LXdlaWdodCcsICdsaWdodGVyJyk7XHJcbiAgICB9O1xyXG4gICAgUGxhdGZvcm1FbGVtLnByb3RvdHlwZS5jcmVhdGVCYXNlRWxlbWVudHMgPSBmdW5jdGlvbiAobGlua0RhdGEsIHNpemUsIHN0YWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZm9uID0gbGlua0RhdGEuZm9uTGF5ZXIgKyBzaXplICsgJy8vZm9uJztcclxuICAgICAgICB2YXIgaW1nRm9uID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nRm9uLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoc3RhZ2UpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgZm9uICsgJ1wiKScsXHJcbiAgICAgICAgICAgICAgICAvLyAnYmFja2dyb3VuZC1yZXBlYXQnOiduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAncmdiKDE5NSwgMTk4LCAyMDMpJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuYWN0aW9uLnRyaWdnZXIoUGxhdGZvcm1FbGVtLkxPQURFRF9CQVNFX0VMRU0pO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBpbWdGb24uc3JjID0gZm9uO1xyXG4gICAgfTtcclxuICAgIFBsYXRmb3JtRWxlbS5wcm90b3R5cGUuY3JlYXRlU3Bpbm5lciA9IGZ1bmN0aW9uIChsaW5rLCBzaXplUGxhdGZvcm0sIHN0YWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc3Bpbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHZhciBqU3Bpbm5lciA9ICQoc3Bpbm5lcikub24oJ2xvYWQnLCBmdW5jdGlvbiAoaW0pIHtcclxuICAgICAgICAgICAgalNwaW5uZXIuYXBwZW5kVG8oc3RhZ2UpLmhpZGUoKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NQSU5ORVJfTE9BREVEJyk7XHJcbiAgICAgICAgICAgIF90aGlzLmFjdGlvbi50cmlnZ2VyKFBsYXRmb3JtRWxlbS5TUElOTkVSX0xPQURFRCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzcGlubmVyLndpZHRoJywgc3Bpbm5lci53aWR0aCk7XHJcbiAgICAgICAgICAgIGpTcGlubmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE8g0L3QsNC00L4g0YDQsNC30LzQtdGA0Ysg0YHQv9C40L3QtdGA0LAg0LLRi9Cy0LXRgdGC0Lgg0L3QsCDRg9GA0L7QstC10L3RjCDQstC10YDRhSDQsCDRgtC+INC+0L3QuCDQvdC1INGH0LjRgtCw0LXRjtGC0YHRj1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICAvLyB0b3A6IChzaXplUGxhdGZvcm0uaGVpZ2h0LzIpLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAoc2l6ZVBsYXRmb3JtLmhlaWdodCAvIDIpIC0gKHNwaW5uZXIuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAoc2l6ZVBsYXRmb3JtLndpZHRoIC8gMikgLSAoc3Bpbm5lci53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5hdHRyKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuX25hbWUgKyAnX3NwaW5uZXInLFxyXG4gICAgICAgICAgICBjbGFzczogJ3NwaW5uZXItb25lJyxcclxuICAgICAgICAgICAgc3JjOiBsaW5rICsgJy9haC8nICsgc2l6ZVBsYXRmb3JtLnNpemUgKyAnLy9zcGluZXInLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBqU3Bpbm5lcjtcclxuICAgIH07XHJcbiAgICBQbGF0Zm9ybUVsZW0ucHJvdG90eXBlLmNyZWF0ZUJ0bkNsb3NlID0gZnVuY3Rpb24gKGxpbmssIGJ0bkRhdGEsIHN0YWdlKSB7XHJcbiAgICAgICAgdmFyIGNsb3NlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdmFyIGJ0bkNsb3NlID0gJChjbG9zZSkub24oJ2xvYWQnLCBmdW5jdGlvbiAoaW0pIHtcclxuICAgICAgICAgICAgYnRuQ2xvc2UuYXBwZW5kVG8oc3RhZ2UpLmhpZGUoKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgYnRuQ2xvc2UuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmF0dHIoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5fbmFtZSArICdfY2xvc2UnLFxyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlLW9uZScsXHJcbiAgICAgICAgICAgIHNyYzogbGluayArICcvYWgvJyArIGJ0bkRhdGEuc2l6ZSArICcvL2J0bi1jbG9zZScsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnY3Vyc29yOnBvaW50ZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGJ0bkNsb3NlO1xyXG4gICAgfTtcclxuICAgIFBsYXRmb3JtRWxlbS5TUElOTkVSX0xPQURFRCA9ICdzcGluZXItbG9hZCc7XHJcbiAgICBQbGF0Zm9ybUVsZW0uTE9BREVEX0JBU0VfRUxFTSA9ICdsb2FkZWQtYmFzZV9lbGVtZW50cyc7XHJcbiAgICByZXR1cm4gUGxhdGZvcm1FbGVtO1xyXG59KCkpO1xyXG5leHBvcnQgeyBQbGF0Zm9ybUVsZW0gfTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZENvbnRhY3RzL3BsYXRmb3JtL1BsYXRmb3JtRWxlbS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIERlc2lnblN0YWdlUGxhdGZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSA9ICdkZWZfc3RhZ2UtcGxhdGZvcm0nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NCYXNlID0gJyc7XHJcbiAgICAgICAgdGhpcy5fY2xhc3MgPSAnJztcclxuICAgICAgICB0aGlzLl9zdHlsZUJhc2UgPSAnJztcclxuICAgICAgICB0aGlzLl9zdHlsZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZExpbmsgPSAnJztcclxuICAgICAgICB0aGlzLmJ0bkNsb3NlID0geyBzaXplOiAxMCB9O1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgc3R5bGVCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlQmFzZSA9IHN0cjtcclxuICAgIH1cclxuICAgIHNldCBhZGRTdHlsZUJhc2Uoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fc3R5bGVCYXNlICs9IHN0cjtcclxuICAgIH1cclxuICAgIHNldCBhZGRTdHlsZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9zdHlsZSArPSBzdHI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0eWxlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0eWxlSEQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlQmFzZSArIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzQmFzZShzdHIpIHtcclxuICAgICAgICB0aGlzLl9jbGFzc0Jhc2UgPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkQ2xhc3NCYXNlKHN0cikge1xyXG4gICAgICAgIHRoaXMuX2NsYXNzQmFzZSArPSBzdHI7XHJcbiAgICB9XHJcbiAgICBzZXQgYWRkQ2xhc3Moc3RyKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3MgKz0gJyAnICsgc3RyO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzKHN0cikge1xyXG4gICAgICAgIHRoaXMuX2NsYXNzID0gc3RyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzcztcclxuICAgIH1cclxuICAgIGdldCBjbGFzc0hEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzc0Jhc2UgKyB0aGlzLl9jbGFzcztcclxuICAgIH1cclxuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RDb250YWN0cy9wbGF0Zm9ybS9zY3JlZW4vRGVzaWduU3RhZ2VQbGF0Zm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFBsYXRmb3JtUHJvdmlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIGdldCBiYXNlTGluaygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzcGlubmVyTGluazogJ2h0dHA6Ly94bi0tYzFhY2FlNGFvYXAueG4tLXAxYWkvZ2RJbWcvaWZhY2UvbmFtZS9zcGlubmVyLWJsdWUnLFxyXG4gICAgICAgICAgICBmb25MYXllcjogJ2h0dHA6Ly94bi0tYzFhY2FlNGFvYXAueG4tLXAxYWkvZ2RJbWcvaWZhY2UvbmFtZS9tZXRhbGwtb25lXzAyLWhkJyxcclxuICAgICAgICAgICAgY2xvc2VMaW5rOiAnaHR0cDovL3huLS1jMWFjYWU0YW9hcC54bi0tcDFhaS9nZEltZy9pZmFjZS9pZC80MydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IHNwaW5uZXJMaW5rKCkge1xyXG4gICAgICAgIHJldHVybiAnaHR0cDovL3huLS1jMWFjYWU0YW9hcC54bi0tcDFhaS9nZEltZy9pZmFjZS9uYW1lL3NwaW5uZXItYmx1ZSc7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZENvbnRhY3RzL3BsYXRmb3JtL3Byb3ZpZGVyL1BsYXRmb3JtUHJvdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNjcmVlbkNvcmUgfSBmcm9tIFwiLi4vLi4vY29yZS9zY3JlZW4vU2NyZWVuQ29yZVwiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNjcmVlbiB9IGZyb20gXCIuLi9wbGF0Zm9ybS9QbGF0Zm9ybVNjcmVlblwiO1xyXG5pbXBvcnQgeyBBYm91dFNjcmVlbiB9IGZyb20gXCIuLi9hYm91dENvbnRlbnQvQWJvdXRTY3JlZW5cIjtcclxuZXhwb3J0IGNsYXNzIFNjcmVlbiBleHRlbmRzIFNjcmVlbkNvcmUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZVBhaXIgPSAnZGVmLW5hbWUnKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZVBhaXIudHJpbSgpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TY3IgPSBQbGF0Zm9ybVNjcmVlbi5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TY3IubmFtZSA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgdGhpcy5hYm91dFNjciA9IEFib3V0U2NyZWVuLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5hYm91dFNjci5uYW1lID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB0aGlzLnNldFBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW1zKCkge1xyXG4gICAgICAgIHRoaXMuYmFzZURhdGEoKTtcclxuICAgICAgICBpZiAodGhpcy5nZXRPcmllbnRTY3JlZW5XaGF0KFNjcmVlbkNvcmUuV0lERVNDUkVFTikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYXJhbXNXaWRlU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBhcmFtc05hcnJvd1NjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJhc2VEYXRhKCkge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TY3Iuc2l6ZVBsYXRmb3JtU2V0KHRoaXMuc2NyZWVuVywgdGhpcy5zY3JlZW5IKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtU2NyLmJhc2VQYXJhbXMoKTtcclxuICAgICAgICB0aGlzLmFib3V0U2NyLnNpemVQbGF0Zm9ybVNldCh0aGlzLnNjcmVlblcsIHRoaXMuc2NyZWVuSCk7XHJcbiAgICAgICAgdGhpcy5hYm91dFNjci5iYXNlUGFyYW1zKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXNXaWRlU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TY3Iud2lkZVNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuYWJvdXRTY3Iud2lkZVNjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW1zTmFycm93U2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TY3IubmFycm93U2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5hYm91dFNjci5uYXJyb3dTY3JlZW4oKTtcclxuICAgIH1cclxuICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQv9Cw0YDQsNC80LXRgtGA0Ysg0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDRjdC60YDQsNC90LBcclxuICAgIHVwZGF0ZVBhcmFtc1NjcmVlbigpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbkN1cnJlbnRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQYXJhbXMoKTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lUGFpcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkQ29udGFjdHMvc2NyZWVuL1NjcmVlbi5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuKiDQl9Cw0LTQsNGH0LAg0LrQu9Cw0YHRgdCwINC+0L/RgNC10LTQtdC70Y/RgtGMINGF0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC60Lgg0Y3QutGA0LDQvdCwINGD0YHRgtGA0L7QudGB0YLQstCwXHJcbiogKi9cclxuZXhwb3J0IGNsYXNzIFNjcmVlbkNvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8g0JTQvtGB0YLRg9C/0L3Ri9C1INGA0LDQt9C80LXRgNGLINGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMud1NjcmVlbiA9IDA7XHJcbiAgICAgICAgdGhpcy5oU2NyZWVuID0gMDtcclxuICAgICAgICAvLyDQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdC70LDQudC00L7QsiDQsiDRgdC70LDQudC00LXRgNC1INC30LAg0YDQsNC3XHJcbiAgICAgICAgdGhpcy52YWxDYXJkc1NsaWRlciA9IDA7XHJcbiAgICAgICAgLy/RgtC10LrRg9GJ0LDRjyDQvtGA0LjQtdC90YLQsNGG0LjRjyDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLm9yaWVudFNjcmVlbiA9ICdIWic7XHJcbiAgICAgICAgLy/QuNC90YTQviDQvtCxINC+0YDQuNC10L3RgtCw0YbQuNC4INGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMub3JpZW50d0luZm9TY3JlZW4gPSAnSFonO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuQ3VycmVudFNpemUoKTtcclxuICAgIH1cclxuICAgIHNjcmVlbkN1cnJlbnRTaXplKCkge1xyXG4gICAgICAgIHRoaXMud1NjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuaFNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy53U2NyZWVuID4gdGhpcy5oU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50U2NyZWVuID0gU2NyZWVuQ29yZS5XSURFU0NSRUVOO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWVudHdJbmZvU2NyZWVuID0gJ0hEVFYoRnVsbC1IRCkoRkhEKTEwODBwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50U2NyZWVuID0gU2NyZWVuQ29yZS5OQVJST1dDUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnR3SW5mb1NjcmVlbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQlNC+0YHRgtGD0L/QvdCw0Y8g0L7QsdC70LDRgdGC0Ywg0L7RgtGA0LjRgdC+0LLQutC4IHdTY3JlZW46JywgdGhpcy53U2NyZWVuLCAnIGhTY3JlZW4nLCB0aGlzLmhTY3JlZW4pO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjcmVlblcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud1NjcmVlbjtcclxuICAgIH1cclxuICAgIGdldCBzY3JlZW5IKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhTY3JlZW47XHJcbiAgICB9XHJcbiAgICBnZXQgY3VycmVudE9yaWVudFNjcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmllbnRTY3JlZW47XHJcbiAgICB9XHJcbiAgICBnZXRPcmllbnRTY3JlZW5XaGF0KG5hbWVTY3JlZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0J7RgNC40LXQvdGC0LDRhtC40Y8g0Y3QutGA0LDQvdCwICcgKyB0aGlzLm9yaWVudFNjcmVlbik7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZW50U2NyZWVuID09IG5hbWVTY3JlZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblNjcmVlbkNvcmUuV0lERVNDUkVFTiA9ICd3aWRlc2NyZWVuJzsgLy8gMTl4OVxyXG5TY3JlZW5Db3JlLldJREVTQ1JFRU5fSFNNQUxMID0gJ3dpZGVzY3JlZW5faHNtYWxsJztcclxuU2NyZWVuQ29yZS5OQVJST1dDUkVFTiA9ICduYXJyb3ctc2NyZWVuJztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9jb3JlL3NjcmVlbi9TY3JlZW5Db3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3REQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQzNFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9