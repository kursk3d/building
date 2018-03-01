var imspartan =
webpackJsonp_name_([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen_ImspartanSliderScreenCard__ = __webpack_require__(7);

class ImspartanSliderScreenGDOne {
    constructor() {
        this.name = 'def-name_slider';
        this.stage = { class: '', style: '' };
        this.card = new __WEBPACK_IMPORTED_MODULE_0__screen_ImspartanSliderScreenCard__["a" /* ImspartanSliderScreenCard */]();
        this.baseParams();
    }
    static getInstance() {
        if (!ImspartanSliderScreenGDOne.instance) {
            ImspartanSliderScreenGDOne.instance = new ImspartanSliderScreenGDOne();
        }
        return ImspartanSliderScreenGDOne.instance;
    }
    baseParams() {
        this.stage.style = 'background-color:rgba(79, 92, 113, .5);';
    }
    wideScreen() {
        let mTop = Math.round(this.wBase * .069);
        let mLeft = Math.round(this.wBase * .08);
        this.wSlider = Math.round(this.wBase * .685);
        this.hSlider = Math.round(this.wBase * .27);
        this.stage.class = 'flex_row__around-start';
        this.sliderMarginStr = 'margin:' + mTop + 'px 0 0 ' + mLeft + 'px;';
        this.stage.style += 'width:' + this.wSlider + 'px;height:' + this.hSlider + 'px;' + this.sliderMarginStr;
        this.card.width = Math.round(this.wSlider * .3);
        this.card.img.width = this.card.width;
        this.card.img.height = this.card.height;
        this.card.class = 'flex_column';
        this.card.style = 'width:' + this.card.width + 'px;height:auto;color:white';
        this.card.descStyle = 'text-align:center;';
        this.card.fontSizeTitleSet = 'large';
    }
    narrowScreen() {
        let mTop = Math.round(this.wBase * .03);
        this.wSlider = Math.round(this.wBase * .9);
        this.stage.class = 'flex_column';
        this.sliderMarginStr = 'margin-top:' + mTop + 'px;';
        this.stage.style += 'width:' + this.wSlider + 'px;height:auto;' + this.sliderMarginStr;
        this.card.width = Math.round(this.wSlider);
        let mTopCard = 'margin-top:' + Math.round(this.card.width * .1) + 'px;';
        this.card.img.width = this.card.width;
        this.card.img.height = this.card.height;
        this.card.class = 'flex_column';
        this.card.style = 'width:' + this.card.width + 'px;height:auto;color:white;' + mTopCard;
        this.card.descStyle = 'text-align:center;';
        this.card.fontSizeTitleSet = 50 + 'px';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanSliderScreenGDOne;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImspartanPlatformScreenGDOne {
    constructor() {
        this.name = 'def-name_platform';
        this.spinnerSize = Math.round(this.w * .1);
        this.screenData = { logoGDshow: true };
        this.stageScreenStyle = '';
        this.stage = { style: '', class: '', width: 0, height: 0 };
        this.logoSpartan = { style: '', width: 0, height: 0, sizeStr: '' };
        this.logoSpartanTxt = { style: '', width: 0, height: 0, sizeStr: '' };
        this.logoGoroDDelStyle = '';
        this.baseParams();
    }
    static getInstance() {
        if (!ImspartanPlatformScreenGDOne.instance) {
            ImspartanPlatformScreenGDOne.instance = new ImspartanPlatformScreenGDOne();
        }
        return ImspartanPlatformScreenGDOne.instance;
    }
    baseParams() {
        this.stageScreenStyle = 'background-color:rgba(79, 92, 113, .5);position:absolute;';
        this.stage.style = 'background-color:rgba(79, 92, 113, .5);position:absolute;';
    }
    wideScreen() {
        this.screenData.logoGDshow = true;
        this.stage.class = '';
        this.stage.style += 'width:' + this.w + 'px;height:' + this.h + 'px;';
        this.logoSpartan.width = Math.round(this.w * .23);
        this.logoSpartan.sizeStr = '/aw/' + this.logoSpartan.width;
        this.logoSpartan.style = 'position:absolute;top:' + Math.round(this.w * 0.07) + 'px;right:' + Math.round(this.w * .003) + 'px;overflow:hidden;';
        this.logoSpartanTxt.width = Math.round(this.w * .7);
        this.logoSpartanTxt.sizeStr = '/aw/' + this.logoSpartanTxt.width;
        this.logoSpartanTxt.style = 'position:absolute;top:' + Math.round(this.w * 0.345) + 'px;left:' + Math.round(this.w * .08) + 'px;overflow:hidden;';
        this.logoGoroDDelStyle = 'position:absolute;top:' + Math.round(this.w * 0.05) + 'px;left:' + Math.round(this.w * .02) + 'px;overflow:hidden;';
        this.spinnerSize = Math.round(this.w * .1);
    }
    narrowScreen() {
        this.screenData.logoGDshow = false;
        this.stage.class = 'flex_column';
        this.stage.style += 'width:' + this.w + 'px;height:auto;';
        this.logoSpartan.width = Math.round(this.w * .9);
        this.logoSpartan.sizeStr = '/aw/' + this.logoSpartan.width;
        this.logoSpartan.style = 'overflow:hidden;';
        this.logoSpartanTxt.width = Math.round(this.w * .99);
        this.logoSpartanTxt.sizeStr = '/aw/' + this.logoSpartanTxt.width;
        this.logoSpartanTxt.style = 'overflow:hidden;';
        this.logoGoroDDelStyle = 'position:absolute;top:' + Math.round(this.w * 0.05) + 'px;left:' + Math.round(this.w * .02) + 'px;overflow:hidden;';
        this.spinnerSize = Math.round(this.w * .1);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanPlatformScreenGDOne;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_gd_gdImSpartanOne_ImspartanGDOne__ = __webpack_require__(3);

class Building {
    constructor() {
        this.pair = new __WEBPACK_IMPORTED_MODULE_0__frame_gd_gdImSpartanOne_ImspartanGDOne__["a" /* ImspartanGDOne */]({ btnClose: false });
        this.pair.show();
    }
}
/* harmony export (immutable) */ __webpack_exports__["Building"] = Building;

let bl = new Building();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_ImspartanSliderGDOne__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__screen_ImspartanScreenDataGDOne__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_ImspartanProviderGDOne__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_ImspartanPlatformGDOne__ = __webpack_require__(12);
// import $ from "jquery-ts";




class ImspartanGDOne {
    constructor(params = {}) {
        this.resizeInit = true;
        this.jData = new __WEBPACK_IMPORTED_MODULE_2__provider_ImspartanProviderGDOne__["a" /* ImspartanProviderGDOne */]();
        this.screenData = new __WEBPACK_IMPORTED_MODULE_1__screen_ImspartanScreenDataGDOne__["a" /* ImspartanScreenDataGDOne */]('imspartan');
        this.platform = new __WEBPACK_IMPORTED_MODULE_3__platform_ImspartanPlatformGDOne__["a" /* ImspartanPlatformGDOne */]();
        this.slider = new __WEBPACK_IMPORTED_MODULE_0__slider_ImspartanSliderGDOne__["a" /* ImspartanSliderGDOne */]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanGDOne;



/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_ImspartanSliderScreenGDOne__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ImspartanSliderElemGDOne__ = __webpack_require__(8);


// import $ from "jquery-ts";
class ImspartanSliderGDOne {
    constructor() {
        this.dataContent = {};
        // собираем сюда все эелементы
        this.packSliderElements = {};
        this.elemSlider = new __WEBPACK_IMPORTED_MODULE_1__ImspartanSliderElemGDOne__["a" /* ImspartanSliderElemGDOne */]();
        this.screen = __WEBPACK_IMPORTED_MODULE_0__slider_ImspartanSliderScreenGDOne__["a" /* ImspartanSliderScreenGDOne */].getInstance();
    }
    closeSlider() {
        this.stageSlider.remove();
        this.visibility = false;
    }
    showSlider() {
        if (this.visibility) {
            this.closeSlider();
        }
        this.runSlider();
    }
    runSlider() {
        this.elemSlider.name = this.screen.name;
        this.stageSlider = this.elemSlider.stage(this.screen.stage);
        this.createContentSlider();
        this.visibility = true;
    }
    createContentSlider() {
        for (let i = 0; i < this.dataContent.length; i++) {
            this.packSliderElements.card = this.elemSlider.card(this.dataContent[i], this.screen.card);
            this.stageSlider.append(this.packSliderElements.card);
        }
    }
    get stage() {
        return this.stageSlider;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanSliderGDOne;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImspartanSliderScreenCard {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.style = '';
        this.class = '';
        this.descClass = '';
        this.descStyle = '';
        //Размер картинки в карточке слайдера
        this.img = {
            width: 0,
            height: 0
        };
    }
    get fontSizeTitleGet() {
        return 'font-size:' + this.fontSizeTitle + ';';
    }
    set fontSizeTitleSet(size) {
        this.fontSizeTitle = size;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanSliderScreenCard;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import $ from "jquery-ts";
class ImspartanSliderElemGDOne {
    constructor() { }
    stage(data) {
        return $('<div/>', {
            id: this.name + '_slider',
            class: data.class,
            style: data.style
        });
    }
    card(data = {}, style) {
        // console.log(data.src);
        // console.log(data.srcName);
        // console.log(data.txtCard.title);
        // console.log(data.txtCard.desc);
        console.log('card', style.style);
        let card = $('<div/>', {
            class: this.name + '_card ' + style.class,
            style: style.style
        });
        let img = $('<img/>', {
            class: this.name + '_img',
            src: data.src + '/aw/' + style.img.width + '//' + data.srcName
        });
        let txtBox = $('<div/>', {
            class: this.name + '_box flex_column',
            style: style.descStyle + ';' + style.fontSizeTitleGet,
        });
        let title = $('<em/>', {
            class: this.name + '_box-txt',
            text: data.txtCard.title,
            style: ''
        });
        let desc = $('<div/>', {
            class: this.name + '_box-desc',
            text: data.txtCard.desc,
            style: ''
        });
        img.appendTo(card);
        title.appendTo(txtBox);
        desc.appendTo(txtBox);
        txtBox.appendTo(card);
        return card;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanSliderElemGDOne;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_ImspartanPlatformScreenGDOne__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_ImspartanSliderScreenGDOne__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_screen_ScreenCore__ = __webpack_require__(10);



class ImspartanScreenDataGDOne extends __WEBPACK_IMPORTED_MODULE_2__core_screen_ScreenCore__["a" /* ScreenCore */] {
    constructor(namePair = 'def-name') {
        super();
        this.namePairComp = namePair.trim();
        this.platform = __WEBPACK_IMPORTED_MODULE_0__platform_ImspartanPlatformScreenGDOne__["a" /* ImspartanPlatformScreenGDOne */].getInstance();
        this.platform.name = this.namePairComp;
        this.slider = __WEBPACK_IMPORTED_MODULE_1__slider_ImspartanSliderScreenGDOne__["a" /* ImspartanSliderScreenGDOne */].getInstance();
        this.slider.name = this.namePairComp;
        this.setParams();
    }
    setParams() {
        if (this.getOrientScreenWhat(__WEBPACK_IMPORTED_MODULE_2__core_screen_ScreenCore__["a" /* ScreenCore */].WIDESCREEN)) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanScreenDataGDOne;



/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImspartanProviderGDOne {
    constructor() { }
    baseLink() {
        return {
            spinnerLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue',
            fonLayer: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/gd-imspartan_fon-layers_four',
            logoSpartanImg: 'http://xn--c1acae4aoap.xn--p1ai//gdImg/iface/name/im-spartan_logo-img',
            logoSpartanTxt: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/im-spartan_logo-txt',
            gorodDel: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/im-spartan_gd',
            closeLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/id/43'
        };
    }
    sliderData() {
        return [{ src: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/fintess/box/',
                srcName: 'fintess',
                txtCard: {
                    title: 'Фитнес-залы',
                    desc: ''
                } },
            { src: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/bassein/box/',
                srcName: 'water-pool',
                txtCard: {
                    title: 'Бассейны',
                    desc: 'Для взрослых, детей, спортцменов'
                } },
            { src: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/sport/box/',
                srcName: 'sport-section',
                txtCard: {
                    title: 'Спортивные и оздоровительные секции',
                    desc: 'Для всех возростов'
                } }
        ];
    }
    menuData() {
        return [
            { name: 'Турниры', link: '#' },
            { name: 'Спортивная экипировка', link: '#' },
            { name: 'Спортивные товары', link: '#' },
            { name: 'Спортивное питание', link: '#' }
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanProviderGDOne;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_ImspartanPlatformElemGDOne__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_ImspartanPlatformScreenGDOne__ = __webpack_require__(1);


// import $ from "jquery-ts";
class ImspartanPlatformGDOne {
    constructor() {
        // Собираем сюда все элементы
        this.packElements = {};
        this.contentData = [];
        // отображается ли в данный момент платфрома компании
        this.visibility = false;
        this.baseElem = new __WEBPACK_IMPORTED_MODULE_0__platform_ImspartanPlatformElemGDOne__["a" /* ImspartanPlatformElemGDOne */]();
        this.screen = __WEBPACK_IMPORTED_MODULE_1__platform_ImspartanPlatformScreenGDOne__["a" /* ImspartanPlatformScreenGDOne */].getInstance();
    }
    closePlatform() {
        this.removeContent();
        this.packElements.stagePlatform.remove();
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
        this.packElements.stagePlatform = this.baseElem.createStageScreen(this.screen);
        this.packElements.spinner = this.baseElem.createSpinner(this.baseLink.spinnerLink);
        this.packElements.stagePlatform.on(__WEBPACK_IMPORTED_MODULE_0__platform_ImspartanPlatformElemGDOne__["a" /* ImspartanPlatformElemGDOne */].SPINNER_LOADED, () => {
            console.log('createContent ON');
            this.createContent();
        });
    }
    createContent() {
        this.packElements.stagePlatform.on(__WEBPACK_IMPORTED_MODULE_0__platform_ImspartanPlatformElemGDOne__["a" /* ImspartanPlatformElemGDOne */].SPINNER_LOADED_COMP_ANIM, () => {
            this.packElements.spinner.remove();
            this.showContent();
        });
        // создаем и загружаем картинки для основного слоя декорации
        this.baseElem.createBaseElements(this.baseLink);
    }
    addContent(content) {
        this.contentData.push(content);
        console.log('add content to slider');
    }
    showContent() {
        for (let i = 0; i < this.contentData.length; i++) {
            this.packElements.stagePlatform.prepend(this.contentData[i]);
        }
    }
    removeContent() {
        for (let i = 0; i < this.contentData.length; i++) {
            this.contentData[i].remove();
        }
        this.contentData = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanPlatformGDOne;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import $ from "jquery-ts";
class ImspartanPlatformElemGDOne {
    constructor() {
        this.baseScreen = {};
        // количество загруженых базовых элементов
        this.valLoadedElements = 0;
        this.currentLoadedElements = 0;
    }
    createStageScreen(screen) {
        this.screenParams = screen;
        this.stageScreen = $('<div/>', {
            id: this.screenParams.name + '_stage-screen',
            class: this.screenParams.stage.class,
            style: this.screenParams.stage.style
        }).appendTo('body');
        return this.stageScreen;
    }
    createBaseElements(linkData) {
        if (this.screenParams.screenData.logoGDshow) {
            this.valLoadedElements = 4;
        }
        else {
            this.valLoadedElements = 3;
        }
        let fon = linkData.fonLayer + '/aw/' + this.screenParams.w + '//fon';
        let logoSpartanImg = linkData.logoSpartanImg + this.screenParams.logoSpartan.sizeStr + '//logoSpartanImg';
        let logoSpartanTxt = linkData.logoSpartanTxt + this.screenParams.logoSpartanTxt.sizeStr + '//logoSpartanTxt';
        let logoGoroDDel = linkData.gorodDel + '/aw/' + Math.round(this.screenParams.w * .04) + '//logoGoroDDel';
        let imgFon = new Image();
        imgFon.addEventListener("load", (e) => {
            this.stageScreen.css({
                'background-image': 'url("' + fon + '")',
                'background-repeat': 'no-repeat',
                'background-color': 'rgb(195, 198, 203)'
            });
            this.loadedBaseElems();
        }, false);
        imgFon.src = fon;
        this.baseScreen.spartan = $('<img/>', {
            'id': this.screenParams.name + '_logo-img',
            style: this.screenParams.logoSpartan.style,
            src: logoSpartanImg
        }).on('error load', () => {
            this.loadedBaseElems();
        });
        this.baseScreen.spartanTxt = $('<img/>', {
            'id': this.screenParams.name + '_logo-txt',
            style: this.screenParams.logoSpartanTxt.style,
            src: logoSpartanTxt
        }).on('error load', () => {
            this.loadedBaseElems();
        });
        if (this.screenParams.screenData.logoGDshow) {
            this.baseScreen.logoGD = $('<img/>', {
                'id': this.screenParams.name + '_logo-goroddel',
                style: this.screenParams.logoGoroDDelStyle,
                src: logoGoroDDel
            }).on('error load', () => {
                this.loadedBaseElems();
            });
        }
        this.stageScreen.trigger(ImspartanPlatformElemGDOne.LOADED_BASE_ELEMENT);
    }
    loadedBaseElems() {
        ++this.currentLoadedElements;
        if (this.valLoadedElements == this.currentLoadedElements) {
            this.baseScreen.spartan.appendTo(this.stageScreen).hide().fadeIn('slow', () => {
                this.baseScreen.spartanTxt.appendTo(this.stageScreen).hide().fadeIn('slow', () => {
                    if (this.screenParams.screenData.logoGDshow) {
                        this.baseScreen.logoGD.appendTo(this.stageScreen).hide().fadeIn('slow', () => {
                            this.stageScreen.trigger(ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM);
                        });
                    }
                    else {
                        this.stageScreen.trigger(ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM);
                    }
                });
            });
            this.currentLoadedElements = 0;
        }
    }
    createSpinner(link) {
        let spinner = new Image();
        let jSpinner = $(spinner).on('load', (im) => {
            jSpinner.appendTo(this.stageScreen).hide().fadeIn('slow');
            this.stageScreen.trigger(ImspartanPlatformElemGDOne.SPINNER_LOADED);
            console.log('SPINNER_LOADED');
            jSpinner.css({
                position: 'absolute',
                top: (this.screenParams.h - spinner.height) / 2,
                left: (this.screenParams.w - spinner.width) / 2,
            });
        }).attr({
            id: this.screenParams.name + '_spinner',
            class: 'spinner-one',
            src: link + '/ah/' + this.screenParams.spinnerSize + '//spiner',
        });
        return jSpinner;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImspartanPlatformElemGDOne;

ImspartanPlatformElemGDOne.SPINNER_LOADED = 'spiner-load';
ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM = 'spiner-fadein_completed';
ImspartanPlatformElemGDOne.LOADED_BASE_ELEMENT = 'loaded-base-element';


/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1zcGFydGFuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RJbVNwYXJ0YW5PbmUvc2xpZGVyL0ltc3BhcnRhblNsaWRlclNjcmVlbkdET25lLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3BsYXRmb3JtL0ltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RJbVNwYXJ0YW5PbmUvSW1zcGFydGFuR0RPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RJbVNwYXJ0YW5PbmUvc2xpZGVyL0ltc3BhcnRhblNsaWRlckdET25lLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3NsaWRlci9zY3JlZW4vSW1zcGFydGFuU2xpZGVyU2NyZWVuQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZEltU3BhcnRhbk9uZS9zbGlkZXIvSW1zcGFydGFuU2xpZGVyRWxlbUdET25lLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3NjcmVlbi9JbXNwYXJ0YW5TY3JlZW5EYXRhR0RPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvY29yZS9zY3JlZW4vU2NyZWVuQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9mcmFtZS9nZC9nZEltU3BhcnRhbk9uZS9wcm92aWRlci9JbXNwYXJ0YW5Qcm92aWRlckdET25lLmpzIiwid2VicGFjazovLy8uL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3BsYXRmb3JtL0ltc3BhcnRhblBsYXRmb3JtR0RPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWUvZ2QvZ2RJbVNwYXJ0YW5PbmUvcGxhdGZvcm0vSW1zcGFydGFuUGxhdGZvcm1FbGVtR0RPbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1zcGFydGFuU2xpZGVyU2NyZWVuQ2FyZCB9IGZyb20gXCIuL3NjcmVlbi9JbXNwYXJ0YW5TbGlkZXJTY3JlZW5DYXJkXCI7XHJcbmV4cG9ydCBjbGFzcyBJbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnZGVmLW5hbWVfc2xpZGVyJztcclxuICAgICAgICB0aGlzLnN0YWdlID0geyBjbGFzczogJycsIHN0eWxlOiAnJyB9O1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBJbXNwYXJ0YW5TbGlkZXJTY3JlZW5DYXJkKCk7XHJcbiAgICAgICAgdGhpcy5iYXNlUGFyYW1zKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFJbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZS5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBJbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZS5pbnN0YW5jZSA9IG5ldyBJbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSW1zcGFydGFuU2xpZGVyU2NyZWVuR0RPbmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBiYXNlUGFyYW1zKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDc5LCA5MiwgMTEzLCAuNSk7JztcclxuICAgIH1cclxuICAgIHdpZGVTY3JlZW4oKSB7XHJcbiAgICAgICAgbGV0IG1Ub3AgPSBNYXRoLnJvdW5kKHRoaXMud0Jhc2UgKiAuMDY5KTtcclxuICAgICAgICBsZXQgbUxlZnQgPSBNYXRoLnJvdW5kKHRoaXMud0Jhc2UgKiAuMDgpO1xyXG4gICAgICAgIHRoaXMud1NsaWRlciA9IE1hdGgucm91bmQodGhpcy53QmFzZSAqIC42ODUpO1xyXG4gICAgICAgIHRoaXMuaFNsaWRlciA9IE1hdGgucm91bmQodGhpcy53QmFzZSAqIC4yNyk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5jbGFzcyA9ICdmbGV4X3Jvd19fYXJvdW5kLXN0YXJ0JztcclxuICAgICAgICB0aGlzLnNsaWRlck1hcmdpblN0ciA9ICdtYXJnaW46JyArIG1Ub3AgKyAncHggMCAwICcgKyBtTGVmdCArICdweDsnO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3R5bGUgKz0gJ3dpZHRoOicgKyB0aGlzLndTbGlkZXIgKyAncHg7aGVpZ2h0OicgKyB0aGlzLmhTbGlkZXIgKyAncHg7JyArIHRoaXMuc2xpZGVyTWFyZ2luU3RyO1xyXG4gICAgICAgIHRoaXMuY2FyZC53aWR0aCA9IE1hdGgucm91bmQodGhpcy53U2xpZGVyICogLjMpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5pbWcud2lkdGggPSB0aGlzLmNhcmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYXJkLmltZy5oZWlnaHQgPSB0aGlzLmNhcmQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FyZC5jbGFzcyA9ICdmbGV4X2NvbHVtbic7XHJcbiAgICAgICAgdGhpcy5jYXJkLnN0eWxlID0gJ3dpZHRoOicgKyB0aGlzLmNhcmQud2lkdGggKyAncHg7aGVpZ2h0OmF1dG87Y29sb3I6d2hpdGUnO1xyXG4gICAgICAgIHRoaXMuY2FyZC5kZXNjU3R5bGUgPSAndGV4dC1hbGlnbjpjZW50ZXI7JztcclxuICAgICAgICB0aGlzLmNhcmQuZm9udFNpemVUaXRsZVNldCA9ICdsYXJnZSc7XHJcbiAgICB9XHJcbiAgICBuYXJyb3dTY3JlZW4oKSB7XHJcbiAgICAgICAgbGV0IG1Ub3AgPSBNYXRoLnJvdW5kKHRoaXMud0Jhc2UgKiAuMDMpO1xyXG4gICAgICAgIHRoaXMud1NsaWRlciA9IE1hdGgucm91bmQodGhpcy53QmFzZSAqIC45KTtcclxuICAgICAgICB0aGlzLnN0YWdlLmNsYXNzID0gJ2ZsZXhfY29sdW1uJztcclxuICAgICAgICB0aGlzLnNsaWRlck1hcmdpblN0ciA9ICdtYXJnaW4tdG9wOicgKyBtVG9wICsgJ3B4Oyc7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdHlsZSArPSAnd2lkdGg6JyArIHRoaXMud1NsaWRlciArICdweDtoZWlnaHQ6YXV0bzsnICsgdGhpcy5zbGlkZXJNYXJnaW5TdHI7XHJcbiAgICAgICAgdGhpcy5jYXJkLndpZHRoID0gTWF0aC5yb3VuZCh0aGlzLndTbGlkZXIpO1xyXG4gICAgICAgIGxldCBtVG9wQ2FyZCA9ICdtYXJnaW4tdG9wOicgKyBNYXRoLnJvdW5kKHRoaXMuY2FyZC53aWR0aCAqIC4xKSArICdweDsnO1xyXG4gICAgICAgIHRoaXMuY2FyZC5pbWcud2lkdGggPSB0aGlzLmNhcmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYXJkLmltZy5oZWlnaHQgPSB0aGlzLmNhcmQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FyZC5jbGFzcyA9ICdmbGV4X2NvbHVtbic7XHJcbiAgICAgICAgdGhpcy5jYXJkLnN0eWxlID0gJ3dpZHRoOicgKyB0aGlzLmNhcmQud2lkdGggKyAncHg7aGVpZ2h0OmF1dG87Y29sb3I6d2hpdGU7JyArIG1Ub3BDYXJkO1xyXG4gICAgICAgIHRoaXMuY2FyZC5kZXNjU3R5bGUgPSAndGV4dC1hbGlnbjpjZW50ZXI7JztcclxuICAgICAgICB0aGlzLmNhcmQuZm9udFNpemVUaXRsZVNldCA9IDUwICsgJ3B4JztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3NsaWRlci9JbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW1zcGFydGFuUGxhdGZvcm1TY3JlZW5HRE9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnZGVmLW5hbWVfcGxhdGZvcm0nO1xyXG4gICAgICAgIHRoaXMuc3Bpbm5lclNpemUgPSBNYXRoLnJvdW5kKHRoaXMudyAqIC4xKTtcclxuICAgICAgICB0aGlzLnNjcmVlbkRhdGEgPSB7IGxvZ29HRHNob3c6IHRydWUgfTtcclxuICAgICAgICB0aGlzLnN0YWdlU2NyZWVuU3R5bGUgPSAnJztcclxuICAgICAgICB0aGlzLnN0YWdlID0geyBzdHlsZTogJycsIGNsYXNzOiAnJywgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xyXG4gICAgICAgIHRoaXMubG9nb1NwYXJ0YW4gPSB7IHN0eWxlOiAnJywgd2lkdGg6IDAsIGhlaWdodDogMCwgc2l6ZVN0cjogJycgfTtcclxuICAgICAgICB0aGlzLmxvZ29TcGFydGFuVHh0ID0geyBzdHlsZTogJycsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsIHNpemVTdHI6ICcnIH07XHJcbiAgICAgICAgdGhpcy5sb2dvR29yb0REZWxTdHlsZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYmFzZVBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghSW1zcGFydGFuUGxhdGZvcm1TY3JlZW5HRE9uZS5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBJbXNwYXJ0YW5QbGF0Zm9ybVNjcmVlbkdET25lLmluc3RhbmNlID0gbmV3IEltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBiYXNlUGFyYW1zKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2VTY3JlZW5TdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzksIDkyLCAxMTMsIC41KTtwb3NpdGlvbjphYnNvbHV0ZTsnO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDc5LCA5MiwgMTEzLCAuNSk7cG9zaXRpb246YWJzb2x1dGU7JztcclxuICAgIH1cclxuICAgIHdpZGVTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5EYXRhLmxvZ29HRHNob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuY2xhc3MgPSAnJztcclxuICAgICAgICB0aGlzLnN0YWdlLnN0eWxlICs9ICd3aWR0aDonICsgdGhpcy53ICsgJ3B4O2hlaWdodDonICsgdGhpcy5oICsgJ3B4Oyc7XHJcbiAgICAgICAgdGhpcy5sb2dvU3BhcnRhbi53aWR0aCA9IE1hdGgucm91bmQodGhpcy53ICogLjIzKTtcclxuICAgICAgICB0aGlzLmxvZ29TcGFydGFuLnNpemVTdHIgPSAnL2F3LycgKyB0aGlzLmxvZ29TcGFydGFuLndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9nb1NwYXJ0YW4uc3R5bGUgPSAncG9zaXRpb246YWJzb2x1dGU7dG9wOicgKyBNYXRoLnJvdW5kKHRoaXMudyAqIDAuMDcpICsgJ3B4O3JpZ2h0OicgKyBNYXRoLnJvdW5kKHRoaXMudyAqIC4wMDMpICsgJ3B4O292ZXJmbG93OmhpZGRlbjsnO1xyXG4gICAgICAgIHRoaXMubG9nb1NwYXJ0YW5UeHQud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMudyAqIC43KTtcclxuICAgICAgICB0aGlzLmxvZ29TcGFydGFuVHh0LnNpemVTdHIgPSAnL2F3LycgKyB0aGlzLmxvZ29TcGFydGFuVHh0LndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9nb1NwYXJ0YW5UeHQuc3R5bGUgPSAncG9zaXRpb246YWJzb2x1dGU7dG9wOicgKyBNYXRoLnJvdW5kKHRoaXMudyAqIDAuMzQ1KSArICdweDtsZWZ0OicgKyBNYXRoLnJvdW5kKHRoaXMudyAqIC4wOCkgKyAncHg7b3ZlcmZsb3c6aGlkZGVuOyc7XHJcbiAgICAgICAgdGhpcy5sb2dvR29yb0REZWxTdHlsZSA9ICdwb3NpdGlvbjphYnNvbHV0ZTt0b3A6JyArIE1hdGgucm91bmQodGhpcy53ICogMC4wNSkgKyAncHg7bGVmdDonICsgTWF0aC5yb3VuZCh0aGlzLncgKiAuMDIpICsgJ3B4O292ZXJmbG93OmhpZGRlbjsnO1xyXG4gICAgICAgIHRoaXMuc3Bpbm5lclNpemUgPSBNYXRoLnJvdW5kKHRoaXMudyAqIC4xKTtcclxuICAgIH1cclxuICAgIG5hcnJvd1NjcmVlbigpIHtcclxuICAgICAgICB0aGlzLnNjcmVlbkRhdGEubG9nb0dEc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuY2xhc3MgPSAnZmxleF9jb2x1bW4nO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3R5bGUgKz0gJ3dpZHRoOicgKyB0aGlzLncgKyAncHg7aGVpZ2h0OmF1dG87JztcclxuICAgICAgICB0aGlzLmxvZ29TcGFydGFuLndpZHRoID0gTWF0aC5yb3VuZCh0aGlzLncgKiAuOSk7XHJcbiAgICAgICAgdGhpcy5sb2dvU3BhcnRhbi5zaXplU3RyID0gJy9hdy8nICsgdGhpcy5sb2dvU3BhcnRhbi53aWR0aDtcclxuICAgICAgICB0aGlzLmxvZ29TcGFydGFuLnN0eWxlID0gJ292ZXJmbG93OmhpZGRlbjsnO1xyXG4gICAgICAgIHRoaXMubG9nb1NwYXJ0YW5UeHQud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMudyAqIC45OSk7XHJcbiAgICAgICAgdGhpcy5sb2dvU3BhcnRhblR4dC5zaXplU3RyID0gJy9hdy8nICsgdGhpcy5sb2dvU3BhcnRhblR4dC53aWR0aDtcclxuICAgICAgICB0aGlzLmxvZ29TcGFydGFuVHh0LnN0eWxlID0gJ292ZXJmbG93OmhpZGRlbjsnO1xyXG4gICAgICAgIHRoaXMubG9nb0dvcm9ERGVsU3R5bGUgPSAncG9zaXRpb246YWJzb2x1dGU7dG9wOicgKyBNYXRoLnJvdW5kKHRoaXMudyAqIDAuMDUpICsgJ3B4O2xlZnQ6JyArIE1hdGgucm91bmQodGhpcy53ICogLjAyKSArICdweDtvdmVyZmxvdzpoaWRkZW47JztcclxuICAgICAgICB0aGlzLnNwaW5uZXJTaXplID0gTWF0aC5yb3VuZCh0aGlzLncgKiAuMSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZEltU3BhcnRhbk9uZS9wbGF0Zm9ybS9JbXNwYXJ0YW5QbGF0Zm9ybVNjcmVlbkdET25lLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEltc3BhcnRhbkdET25lIH0gZnJvbSBcIi4vZnJhbWUvZ2QvZ2RJbVNwYXJ0YW5PbmUvSW1zcGFydGFuR0RPbmVcIjtcclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGFpciA9IG5ldyBJbXNwYXJ0YW5HRE9uZSh7IGJ0bkNsb3NlOiBmYWxzZSB9KTtcclxuICAgICAgICB0aGlzLnBhaXIuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcbmxldCBibCA9IG5ldyBCdWlsZGluZygpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2J1aWxkaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnktdHNcIjtcclxuaW1wb3J0IHsgSW1zcGFydGFuU2xpZGVyR0RPbmUgfSBmcm9tIFwiLi9zbGlkZXIvSW1zcGFydGFuU2xpZGVyR0RPbmVcIjtcclxuaW1wb3J0IHsgSW1zcGFydGFuU2NyZWVuRGF0YUdET25lIH0gZnJvbSBcIi4vc2NyZWVuL0ltc3BhcnRhblNjcmVlbkRhdGFHRE9uZVwiO1xyXG5pbXBvcnQgeyBJbXNwYXJ0YW5Qcm92aWRlckdET25lIH0gZnJvbSBcIi4vcHJvdmlkZXIvSW1zcGFydGFuUHJvdmlkZXJHRE9uZVwiO1xyXG5pbXBvcnQgeyBJbXNwYXJ0YW5QbGF0Zm9ybUdET25lIH0gZnJvbSBcIi4vcGxhdGZvcm0vSW1zcGFydGFuUGxhdGZvcm1HRE9uZVwiO1xyXG5leHBvcnQgY2xhc3MgSW1zcGFydGFuR0RPbmUge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZUluaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuakRhdGEgPSBuZXcgSW1zcGFydGFuUHJvdmlkZXJHRE9uZSgpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuRGF0YSA9IG5ldyBJbXNwYXJ0YW5TY3JlZW5EYXRhR0RPbmUoJ2ltc3BhcnRhbicpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgSW1zcGFydGFuUGxhdGZvcm1HRE9uZSgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyID0gbmV3IEltc3BhcnRhblNsaWRlckdET25lKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5iYXNlTGluayA9IHRoaXMuakRhdGEuYmFzZUxpbmsoKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5kYXRhQ29udGVudCA9IHRoaXMuakRhdGEuc2xpZGVyRGF0YSgpO1xyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlc2l6ZVBsYXRmb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIik7XHJcbiAgICAgICAgaWYgKG1xbC5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQotC10LrRg9GJ0LDRjyDQn9C+0YDRgtGA0LXRgtC90LDRjyDQvtGA0LjQtdC90YLQsNGG0LjRjycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ci0LXQutGD0YnQsNGPINCT0L7RgNC40LfQvtC90YLQsNC70YzQvdCw0Y8g0L7RgNC40LXQvdGC0LDRhtC40Y8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0J/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNGPINC40LfQvNC10L3QtdC90LjRjyDQvtGA0LjQtdC90YLQsNGG0LjQuFxyXG4gICAgICAgIG1xbC5hZGRMaXN0ZW5lcigobSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLy8g0JjQt9C80LXQvdC10L3QviDQvdCwINC/0L7RgNGC0YDQtdGC0L3Ri9C5INGA0LXQttC40LwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcvLyDQmNC30LzQtdC90LXQvdC+INC90LAg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSDRgNC10LbQuNC8Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXNpemVQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQl9Cw0L/Rg9GB0YLQuNC70Lgg0YHQv9Cw0YDRgtCw0L3RhtCwIC09PiAnICsgdGhpcy5zY3JlZW5EYXRhLm5hbWVQYWlyKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5zaG93UGxhdGZvcm0oKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5zaG93U2xpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5hZGRDb250ZW50KHRoaXMuc2xpZGVyLnN0YWdlKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0uY2xvc2VQbGF0Zm9ybSgpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmpEYXRhO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBsYXRmb3JtO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnNjcmVlbkRhdGE7XHJcbiAgICB9XHJcbiAgICByZXNpemVQbGF0Zm9ybSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzaXplJyk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5jbG9zZVBsYXRmb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzaXplSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUluaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbkRhdGEudXBkYXRlUGFyYW1zU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRmb3JtLnNob3dQbGF0Zm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2hvd1NsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybS5hZGRDb250ZW50KHRoaXMuc2xpZGVyLnN0YWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNpemUgT04hISEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplSW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJhbWUvZ2QvZ2RJbVNwYXJ0YW5PbmUvSW1zcGFydGFuR0RPbmUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW1zcGFydGFuU2xpZGVyU2NyZWVuR0RPbmUgfSBmcm9tIFwiLi4vc2xpZGVyL0ltc3BhcnRhblNsaWRlclNjcmVlbkdET25lXCI7XHJcbmltcG9ydCB7IEltc3BhcnRhblNsaWRlckVsZW1HRE9uZSB9IGZyb20gXCIuL0ltc3BhcnRhblNsaWRlckVsZW1HRE9uZVwiO1xyXG4vLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXRzXCI7XHJcbmV4cG9ydCBjbGFzcyBJbXNwYXJ0YW5TbGlkZXJHRE9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRhdGFDb250ZW50ID0ge307XHJcbiAgICAgICAgLy8g0YHQvtCx0LjRgNCw0LXQvCDRgdGO0LTQsCDQstGB0LUg0Y3QtdC70LXQvNC10L3RgtGLXHJcbiAgICAgICAgdGhpcy5wYWNrU2xpZGVyRWxlbWVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmVsZW1TbGlkZXIgPSBuZXcgSW1zcGFydGFuU2xpZGVyRWxlbUdET25lKCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBJbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VTbGlkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFnZVNsaWRlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNob3dTbGlkZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlU2xpZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucnVuU2xpZGVyKCk7XHJcbiAgICB9XHJcbiAgICBydW5TbGlkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtU2xpZGVyLm5hbWUgPSB0aGlzLnNjcmVlbi5uYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VTbGlkZXIgPSB0aGlzLmVsZW1TbGlkZXIuc3RhZ2UodGhpcy5zY3JlZW4uc3RhZ2UpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29udGVudFNsaWRlcigpO1xyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb250ZW50U2xpZGVyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhY2tTbGlkZXJFbGVtZW50cy5jYXJkID0gdGhpcy5lbGVtU2xpZGVyLmNhcmQodGhpcy5kYXRhQ29udGVudFtpXSwgdGhpcy5zY3JlZW4uY2FyZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VTbGlkZXIuYXBwZW5kKHRoaXMucGFja1NsaWRlckVsZW1lbnRzLmNhcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzdGFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZVNsaWRlcjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3NsaWRlci9JbXNwYXJ0YW5TbGlkZXJHRE9uZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW1zcGFydGFuU2xpZGVyU2NyZWVuQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcclxuICAgICAgICB0aGlzLnN0eWxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5jbGFzcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGVzY0NsYXNzID0gJyc7XHJcbiAgICAgICAgdGhpcy5kZXNjU3R5bGUgPSAnJztcclxuICAgICAgICAvL9Cg0LDQt9C80LXRgCDQutCw0YDRgtC40L3QutC4INCyINC60LDRgNGC0L7Rh9C60LUg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgIHRoaXMuaW1nID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBmb250U2l6ZVRpdGxlR2V0KCkge1xyXG4gICAgICAgIHJldHVybiAnZm9udC1zaXplOicgKyB0aGlzLmZvbnRTaXplVGl0bGUgKyAnOyc7XHJcbiAgICB9XHJcbiAgICBzZXQgZm9udFNpemVUaXRsZVNldChzaXplKSB7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZVRpdGxlID0gc2l6ZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3NsaWRlci9zY3JlZW4vSW1zcGFydGFuU2xpZGVyU2NyZWVuQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXRzXCI7XHJcbmV4cG9ydCBjbGFzcyBJbXNwYXJ0YW5TbGlkZXJFbGVtR0RPbmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHN0YWdlKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5uYW1lICsgJ19zbGlkZXInLFxyXG4gICAgICAgICAgICBjbGFzczogZGF0YS5jbGFzcyxcclxuICAgICAgICAgICAgc3R5bGU6IGRhdGEuc3R5bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhcmQoZGF0YSA9IHt9LCBzdHlsZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuc3JjKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnNyY05hbWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEudHh0Q2FyZC50aXRsZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS50eHRDYXJkLmRlc2MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXJkJywgc3R5bGUuc3R5bGUpO1xyXG4gICAgICAgIGxldCBjYXJkID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5uYW1lICsgJ19jYXJkICcgKyBzdHlsZS5jbGFzcyxcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlLnN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGltZyA9ICQoJzxpbWcvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMubmFtZSArICdfaW1nJyxcclxuICAgICAgICAgICAgc3JjOiBkYXRhLnNyYyArICcvYXcvJyArIHN0eWxlLmltZy53aWR0aCArICcvLycgKyBkYXRhLnNyY05hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdHh0Qm94ID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogdGhpcy5uYW1lICsgJ19ib3ggZmxleF9jb2x1bW4nLFxyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGUuZGVzY1N0eWxlICsgJzsnICsgc3R5bGUuZm9udFNpemVUaXRsZUdldCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdGl0bGUgPSAkKCc8ZW0vPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMubmFtZSArICdfYm94LXR4dCcsXHJcbiAgICAgICAgICAgIHRleHQ6IGRhdGEudHh0Q2FyZC50aXRsZSxcclxuICAgICAgICAgICAgc3R5bGU6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRlc2MgPSAkKCc8ZGl2Lz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLm5hbWUgKyAnX2JveC1kZXNjJyxcclxuICAgICAgICAgICAgdGV4dDogZGF0YS50eHRDYXJkLmRlc2MsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltZy5hcHBlbmRUbyhjYXJkKTtcclxuICAgICAgICB0aXRsZS5hcHBlbmRUbyh0eHRCb3gpO1xyXG4gICAgICAgIGRlc2MuYXBwZW5kVG8odHh0Qm94KTtcclxuICAgICAgICB0eHRCb3guYXBwZW5kVG8oY2FyZCk7XHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZEltU3BhcnRhbk9uZS9zbGlkZXIvSW1zcGFydGFuU2xpZGVyRWxlbUdET25lLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmUgfSBmcm9tIFwiLi4vcGxhdGZvcm0vSW1zcGFydGFuUGxhdGZvcm1TY3JlZW5HRE9uZVwiO1xyXG5pbXBvcnQgeyBJbXNwYXJ0YW5TbGlkZXJTY3JlZW5HRE9uZSB9IGZyb20gXCIuLi9zbGlkZXIvSW1zcGFydGFuU2xpZGVyU2NyZWVuR0RPbmVcIjtcclxuaW1wb3J0IHsgU2NyZWVuQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlL3NjcmVlbi9TY3JlZW5Db3JlXCI7XHJcbmV4cG9ydCBjbGFzcyBJbXNwYXJ0YW5TY3JlZW5EYXRhR0RPbmUgZXh0ZW5kcyBTY3JlZW5Db3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWVQYWlyID0gJ2RlZi1uYW1lJykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lUGFpckNvbXAgPSBuYW1lUGFpci50cmltKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IEltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmUuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtLm5hbWUgPSB0aGlzLm5hbWVQYWlyQ29tcDtcclxuICAgICAgICB0aGlzLnNsaWRlciA9IEltc3BhcnRhblNsaWRlclNjcmVlbkdET25lLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIubmFtZSA9IHRoaXMubmFtZVBhaXJDb21wO1xyXG4gICAgICAgIHRoaXMuc2V0UGFyYW1zKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0T3JpZW50U2NyZWVuV2hhdChTY3JlZW5Db3JlLldJREVTQ1JFRU4pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1zV2lkZVNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYXJhbXNOYXJyb3dTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXNXaWRlU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLndCYXNlID0gdGhpcy5wbGF0Zm9ybS53ID0gdGhpcy5zY3JlZW5XO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmhCYXNlID0gdGhpcy5wbGF0Zm9ybS5oID0gdGhpcy5zY3JlZW5IO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0ud2lkZVNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLndpZGVTY3JlZW4oKTtcclxuICAgIH1cclxuICAgIHNldFBhcmFtc05hcnJvd1NjcmVlbigpIHtcclxuICAgICAgICB0aGlzLnNsaWRlci53QmFzZSA9IHRoaXMucGxhdGZvcm0udyA9IHRoaXMuc2NyZWVuVztcclxuICAgICAgICB0aGlzLnNsaWRlci5oQmFzZSA9IHRoaXMucGxhdGZvcm0uaCA9IHRoaXMuc2NyZWVuSDtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtLm5hcnJvd1NjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLm5hcnJvd1NjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC/0LDRgNCw0LzQtdGC0YDRiyDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INGN0LrRgNCw0L3QsFxyXG4gICAgdXBkYXRlUGFyYW1zU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuQ3VycmVudFNpemUoKTtcclxuICAgICAgICB0aGlzLnNldFBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWVQYWlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVQYWlyQ29tcDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3NjcmVlbi9JbXNwYXJ0YW5TY3JlZW5EYXRhR0RPbmUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuKiDQl9Cw0LTQsNGH0LAg0LrQu9Cw0YHRgdCwINC+0L/RgNC10LTQtdC70Y/RgtGMINGF0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC60Lgg0Y3QutGA0LDQvdCwINGD0YHRgtGA0L7QudGB0YLQstCwXHJcbiogKi9cclxuZXhwb3J0IGNsYXNzIFNjcmVlbkNvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8g0JTQvtGB0YLRg9C/0L3Ri9C1INGA0LDQt9C80LXRgNGLINGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMud1NjcmVlbiA9IDA7XHJcbiAgICAgICAgdGhpcy5oU2NyZWVuID0gMDtcclxuICAgICAgICAvLyDQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdC70LDQudC00L7QsiDQsiDRgdC70LDQudC00LXRgNC1INC30LAg0YDQsNC3XHJcbiAgICAgICAgdGhpcy52YWxDYXJkc1NsaWRlciA9IDA7XHJcbiAgICAgICAgLy/RgtC10LrRg9GJ0LDRjyDQvtGA0LjQtdC90YLQsNGG0LjRjyDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLm9yaWVudFNjcmVlbiA9ICdIWic7XHJcbiAgICAgICAgLy/QuNC90YTQviDQvtCxINC+0YDQuNC10L3RgtCw0YbQuNC4INGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMub3JpZW50d0luZm9TY3JlZW4gPSAnSFonO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuQ3VycmVudFNpemUoKTtcclxuICAgIH1cclxuICAgIHNjcmVlbkN1cnJlbnRTaXplKCkge1xyXG4gICAgICAgIHRoaXMud1NjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuaFNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy53U2NyZWVuID4gdGhpcy5oU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50U2NyZWVuID0gU2NyZWVuQ29yZS5XSURFU0NSRUVOO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWVudHdJbmZvU2NyZWVuID0gJ0hEVFYoRnVsbC1IRCkoRkhEKTEwODBwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZW50U2NyZWVuID0gU2NyZWVuQ29yZS5OQVJST1dDUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnR3SW5mb1NjcmVlbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQlNC+0YHRgtGD0L/QvdCw0Y8g0L7QsdC70LDRgdGC0Ywg0L7RgtGA0LjRgdC+0LLQutC4IHdTY3JlZW46JywgdGhpcy53U2NyZWVuLCAnIGhTY3JlZW4nLCB0aGlzLmhTY3JlZW4pO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjcmVlblcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud1NjcmVlbjtcclxuICAgIH1cclxuICAgIGdldCBzY3JlZW5IKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhTY3JlZW47XHJcbiAgICB9XHJcbiAgICBnZXQgY3VycmVudE9yaWVudFNjcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmllbnRTY3JlZW47XHJcbiAgICB9XHJcbiAgICBnZXRPcmllbnRTY3JlZW5XaGF0KG5hbWVTY3JlZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0J7RgNC40LXQvdGC0LDRhtC40Y8g0Y3QutGA0LDQvdCwICcgKyB0aGlzLm9yaWVudFNjcmVlbik7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZW50U2NyZWVuID09IG5hbWVTY3JlZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblNjcmVlbkNvcmUuV0lERVNDUkVFTiA9ICd3aWRlc2NyZWVuJzsgLy8gMTl4OVxyXG5TY3JlZW5Db3JlLldJREVTQ1JFRU5fSFNNQUxMID0gJ3dpZGVzY3JlZW5faHNtYWxsJztcclxuU2NyZWVuQ29yZS5OQVJST1dDUkVFTiA9ICduYXJyb3ctc2NyZWVuJztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9jb3JlL3NjcmVlbi9TY3JlZW5Db3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW1zcGFydGFuUHJvdmlkZXJHRE9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgYmFzZUxpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3Bpbm5lckxpbms6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvc3Bpbm5lci1ibHVlJyxcclxuICAgICAgICAgICAgZm9uTGF5ZXI6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvZ2QtaW1zcGFydGFuX2Zvbi1sYXllcnNfZm91cicsXHJcbiAgICAgICAgICAgIGxvZ29TcGFydGFuSW1nOiAnaHR0cDovL3huLS1jMWFjYWU0YW9hcC54bi0tcDFhaS8vZ2RJbWcvaWZhY2UvbmFtZS9pbS1zcGFydGFuX2xvZ28taW1nJyxcclxuICAgICAgICAgICAgbG9nb1NwYXJ0YW5UeHQ6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvaW0tc3BhcnRhbl9sb2dvLXR4dCcsXHJcbiAgICAgICAgICAgIGdvcm9kRGVsOiAnaHR0cDovL3huLS1jMWFjYWU0YW9hcC54bi0tcDFhaS9nZEltZy9pZmFjZS9uYW1lL2ltLXNwYXJ0YW5fZ2QnLFxyXG4gICAgICAgICAgICBjbG9zZUxpbms6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL2lkLzQzJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzbGlkZXJEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBbeyBzcmM6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvZmludGVzcy9ib3gvJyxcclxuICAgICAgICAgICAgICAgIHNyY05hbWU6ICdmaW50ZXNzJyxcclxuICAgICAgICAgICAgICAgIHR4dENhcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ck0LjRgtC90LXRgS3Qt9Cw0LvRiycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJydcclxuICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgeyBzcmM6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvYmFzc2Vpbi9ib3gvJyxcclxuICAgICAgICAgICAgICAgIHNyY05hbWU6ICd3YXRlci1wb29sJyxcclxuICAgICAgICAgICAgICAgIHR4dENhcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CR0LDRgdGB0LXQudC90YsnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICfQlNC70Y8g0LLQt9GA0L7RgdC70YvRhSwg0LTQtdGC0LXQuSwg0YHQv9C+0YDRgtGG0LzQtdC90L7QsidcclxuICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgeyBzcmM6ICdodHRwOi8veG4tLWMxYWNhZTRhb2FwLnhuLS1wMWFpL2dkSW1nL2lmYWNlL25hbWUvc3BvcnQvYm94LycsXHJcbiAgICAgICAgICAgICAgICBzcmNOYW1lOiAnc3BvcnQtc2VjdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0eHRDYXJkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQodC/0L7RgNGC0LjQstC90YvQtSDQuCDQvtC30LTQvtGA0L7QstC40YLQtdC70YzQvdGL0LUg0YHQtdC60YbQuNC4JyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjOiAn0JTQu9GPINCy0YHQtdGFINCy0L7Qt9GA0L7RgdGC0L7QsidcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBtZW51RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICfQotGD0YDQvdC40YDRiycsIGxpbms6ICcjJyB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICfQodC/0L7RgNGC0LjQstC90LDRjyDRjdC60LjQv9C40YDQvtCy0LrQsCcsIGxpbms6ICcjJyB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICfQodC/0L7RgNGC0LjQstC90YvQtSDRgtC+0LLQsNGA0YsnLCBsaW5rOiAnIycgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAn0KHQv9C+0YDRgtC40LLQvdC+0LUg0L/QuNGC0LDQvdC40LUnLCBsaW5rOiAnIycgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZEltU3BhcnRhbk9uZS9wcm92aWRlci9JbXNwYXJ0YW5Qcm92aWRlckdET25lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZSB9IGZyb20gXCIuLi9wbGF0Zm9ybS9JbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZVwiO1xyXG5pbXBvcnQgeyBJbXNwYXJ0YW5QbGF0Zm9ybVNjcmVlbkdET25lIH0gZnJvbSBcIi4uL3BsYXRmb3JtL0ltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmVcIjtcclxuLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeS10c1wiO1xyXG5leHBvcnQgY2xhc3MgSW1zcGFydGFuUGxhdGZvcm1HRE9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDQodC+0LHQuNGA0LDQtdC8INGB0Y7QtNCwINCy0YHQtSDRjdC70LXQvNC10L3RgtGLXHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbnRlbnREYXRhID0gW107XHJcbiAgICAgICAgLy8g0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINC70Lgg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQv9C70LDRgtGE0YDQvtC80LAg0LrQvtC80L/QsNC90LjQuFxyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFzZUVsZW0gPSBuZXcgSW1zcGFydGFuUGxhdGZvcm1FbGVtR0RPbmUoKTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IEltc3BhcnRhblBsYXRmb3JtU2NyZWVuR0RPbmUuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuICAgIGNsb3NlUGxhdGZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDb250ZW50KCk7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNob3dQbGF0Zm9ybSgpIHtcclxuICAgICAgICBpZiAodGhpcy52aXNpYmlsaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybSA9IHRoaXMuYmFzZUVsZW0uY3JlYXRlU3RhZ2VTY3JlZW4odGhpcy5zY3JlZW4pO1xyXG4gICAgICAgIHRoaXMucGFja0VsZW1lbnRzLnNwaW5uZXIgPSB0aGlzLmJhc2VFbGVtLmNyZWF0ZVNwaW5uZXIodGhpcy5iYXNlTGluay5zcGlubmVyTGluayk7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybS5vbihJbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZS5TUElOTkVSX0xPQURFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlQ29udGVudCBPTicpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3RhZ2VQbGF0Zm9ybS5vbihJbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZS5TUElOTkVSX0xPQURFRF9DT01QX0FOSU0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYWNrRWxlbWVudHMuc3Bpbm5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vINGB0L7Qt9C00LDQtdC8INC4INC30LDQs9GA0YPQttCw0LXQvCDQutCw0YDRgtC40L3QutC4INC00LvRjyDQvtGB0L3QvtCy0L3QvtCz0L4g0YHQu9C+0Y8g0LTQtdC60L7RgNCw0YbQuNC4XHJcbiAgICAgICAgdGhpcy5iYXNlRWxlbS5jcmVhdGVCYXNlRWxlbWVudHModGhpcy5iYXNlTGluayk7XHJcbiAgICB9XHJcbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnREYXRhLnB1c2goY29udGVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCBjb250ZW50IHRvIHNsaWRlcicpO1xyXG4gICAgfVxyXG4gICAgc2hvd0NvbnRlbnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnREYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0VsZW1lbnRzLnN0YWdlUGxhdGZvcm0ucHJlcGVuZCh0aGlzLmNvbnRlbnREYXRhW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVDb250ZW50KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnREYXRhW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRlbnREYXRhID0gW107XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcmFtZS9nZC9nZEltU3BhcnRhbk9uZS9wbGF0Zm9ybS9JbXNwYXJ0YW5QbGF0Zm9ybUdET25lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXRzXCI7XHJcbmV4cG9ydCBjbGFzcyBJbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJhc2VTY3JlZW4gPSB7fTtcclxuICAgICAgICAvLyDQutC+0LvQuNGH0LXRgdGC0LLQviDQt9Cw0LPRgNGD0LbQtdC90YvRhSDQsdCw0LfQvtCy0YvRhSDRjdC70LXQvNC10L3RgtC+0LJcclxuICAgICAgICB0aGlzLnZhbExvYWRlZEVsZW1lbnRzID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMb2FkZWRFbGVtZW50cyA9IDA7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTdGFnZVNjcmVlbihzY3JlZW4pIHtcclxuICAgICAgICB0aGlzLnNjcmVlblBhcmFtcyA9IHNjcmVlbjtcclxuICAgICAgICB0aGlzLnN0YWdlU2NyZWVuID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5zY3JlZW5QYXJhbXMubmFtZSArICdfc3RhZ2Utc2NyZWVuJyxcclxuICAgICAgICAgICAgY2xhc3M6IHRoaXMuc2NyZWVuUGFyYW1zLnN0YWdlLmNsYXNzLFxyXG4gICAgICAgICAgICBzdHlsZTogdGhpcy5zY3JlZW5QYXJhbXMuc3RhZ2Uuc3R5bGVcclxuICAgICAgICB9KS5hcHBlbmRUbygnYm9keScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlU2NyZWVuO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQmFzZUVsZW1lbnRzKGxpbmtEYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NyZWVuUGFyYW1zLnNjcmVlbkRhdGEubG9nb0dEc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbExvYWRlZEVsZW1lbnRzID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsTG9hZGVkRWxlbWVudHMgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9uID0gbGlua0RhdGEuZm9uTGF5ZXIgKyAnL2F3LycgKyB0aGlzLnNjcmVlblBhcmFtcy53ICsgJy8vZm9uJztcclxuICAgICAgICBsZXQgbG9nb1NwYXJ0YW5JbWcgPSBsaW5rRGF0YS5sb2dvU3BhcnRhbkltZyArIHRoaXMuc2NyZWVuUGFyYW1zLmxvZ29TcGFydGFuLnNpemVTdHIgKyAnLy9sb2dvU3BhcnRhbkltZyc7XHJcbiAgICAgICAgbGV0IGxvZ29TcGFydGFuVHh0ID0gbGlua0RhdGEubG9nb1NwYXJ0YW5UeHQgKyB0aGlzLnNjcmVlblBhcmFtcy5sb2dvU3BhcnRhblR4dC5zaXplU3RyICsgJy8vbG9nb1NwYXJ0YW5UeHQnO1xyXG4gICAgICAgIGxldCBsb2dvR29yb0REZWwgPSBsaW5rRGF0YS5nb3JvZERlbCArICcvYXcvJyArIE1hdGgucm91bmQodGhpcy5zY3JlZW5QYXJhbXMudyAqIC4wNCkgKyAnLy9sb2dvR29yb0REZWwnO1xyXG4gICAgICAgIGxldCBpbWdGb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWdGb24uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZVNjcmVlbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIGZvbiArICdcIiknLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdyZ2IoMTk1LCAxOTgsIDIwMyknXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEJhc2VFbGVtcygpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBpbWdGb24uc3JjID0gZm9uO1xyXG4gICAgICAgIHRoaXMuYmFzZVNjcmVlbi5zcGFydGFuID0gJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAnaWQnOiB0aGlzLnNjcmVlblBhcmFtcy5uYW1lICsgJ19sb2dvLWltZycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnNjcmVlblBhcmFtcy5sb2dvU3BhcnRhbi5zdHlsZSxcclxuICAgICAgICAgICAgc3JjOiBsb2dvU3BhcnRhbkltZ1xyXG4gICAgICAgIH0pLm9uKCdlcnJvciBsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEJhc2VFbGVtcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFzZVNjcmVlbi5zcGFydGFuVHh0ID0gJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAnaWQnOiB0aGlzLnNjcmVlblBhcmFtcy5uYW1lICsgJ19sb2dvLXR4dCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnNjcmVlblBhcmFtcy5sb2dvU3BhcnRhblR4dC5zdHlsZSxcclxuICAgICAgICAgICAgc3JjOiBsb2dvU3BhcnRhblR4dFxyXG4gICAgICAgIH0pLm9uKCdlcnJvciBsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEJhc2VFbGVtcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnNjcmVlblBhcmFtcy5zY3JlZW5EYXRhLmxvZ29HRHNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlU2NyZWVuLmxvZ29HRCA9ICQoJzxpbWcvPicsIHtcclxuICAgICAgICAgICAgICAgICdpZCc6IHRoaXMuc2NyZWVuUGFyYW1zLm5hbWUgKyAnX2xvZ28tZ29yb2RkZWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuc2NyZWVuUGFyYW1zLmxvZ29Hb3JvRERlbFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBsb2dvR29yb0REZWxcclxuICAgICAgICAgICAgfSkub24oJ2Vycm9yIGxvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZEJhc2VFbGVtcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZVNjcmVlbi50cmlnZ2VyKEltc3BhcnRhblBsYXRmb3JtRWxlbUdET25lLkxPQURFRF9CQVNFX0VMRU1FTlQpO1xyXG4gICAgfVxyXG4gICAgbG9hZGVkQmFzZUVsZW1zKCkge1xyXG4gICAgICAgICsrdGhpcy5jdXJyZW50TG9hZGVkRWxlbWVudHM7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsTG9hZGVkRWxlbWVudHMgPT0gdGhpcy5jdXJyZW50TG9hZGVkRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlU2NyZWVuLnNwYXJ0YW4uYXBwZW5kVG8odGhpcy5zdGFnZVNjcmVlbikuaGlkZSgpLmZhZGVJbignc2xvdycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZVNjcmVlbi5zcGFydGFuVHh0LmFwcGVuZFRvKHRoaXMuc3RhZ2VTY3JlZW4pLmhpZGUoKS5mYWRlSW4oJ3Nsb3cnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NyZWVuUGFyYW1zLnNjcmVlbkRhdGEubG9nb0dEc2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VTY3JlZW4ubG9nb0dELmFwcGVuZFRvKHRoaXMuc3RhZ2VTY3JlZW4pLmhpZGUoKS5mYWRlSW4oJ3Nsb3cnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlU2NyZWVuLnRyaWdnZXIoSW1zcGFydGFuUGxhdGZvcm1FbGVtR0RPbmUuU1BJTk5FUl9MT0FERURfQ09NUF9BTklNKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlU2NyZWVuLnRyaWdnZXIoSW1zcGFydGFuUGxhdGZvcm1FbGVtR0RPbmUuU1BJTk5FUl9MT0FERURfQ09NUF9BTklNKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWRlZEVsZW1lbnRzID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTcGlubmVyKGxpbmspIHtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGxldCBqU3Bpbm5lciA9ICQoc3Bpbm5lcikub24oJ2xvYWQnLCAoaW0pID0+IHtcclxuICAgICAgICAgICAgalNwaW5uZXIuYXBwZW5kVG8odGhpcy5zdGFnZVNjcmVlbikuaGlkZSgpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlU2NyZWVuLnRyaWdnZXIoSW1zcGFydGFuUGxhdGZvcm1FbGVtR0RPbmUuU1BJTk5FUl9MT0FERUQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU1BJTk5FUl9MT0FERUQnKTtcclxuICAgICAgICAgICAgalNwaW5uZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAodGhpcy5zY3JlZW5QYXJhbXMuaCAtIHNwaW5uZXIuaGVpZ2h0KSAvIDIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAodGhpcy5zY3JlZW5QYXJhbXMudyAtIHNwaW5uZXIud2lkdGgpIC8gMixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuYXR0cih7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnNjcmVlblBhcmFtcy5uYW1lICsgJ19zcGlubmVyJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdzcGlubmVyLW9uZScsXHJcbiAgICAgICAgICAgIHNyYzogbGluayArICcvYWgvJyArIHRoaXMuc2NyZWVuUGFyYW1zLnNwaW5uZXJTaXplICsgJy8vc3BpbmVyJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4galNwaW5uZXI7XHJcbiAgICB9XHJcbn1cclxuSW1zcGFydGFuUGxhdGZvcm1FbGVtR0RPbmUuU1BJTk5FUl9MT0FERUQgPSAnc3BpbmVyLWxvYWQnO1xyXG5JbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZS5TUElOTkVSX0xPQURFRF9DT01QX0FOSU0gPSAnc3BpbmVyLWZhZGVpbl9jb21wbGV0ZWQnO1xyXG5JbXNwYXJ0YW5QbGF0Zm9ybUVsZW1HRE9uZS5MT0FERURfQkFTRV9FTEVNRU5UID0gJ2xvYWRlZC1iYXNlLWVsZW1lbnQnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZyYW1lL2dkL2dkSW1TcGFydGFuT25lL3BsYXRmb3JtL0ltc3BhcnRhblBsYXRmb3JtRWxlbUdET25lLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9