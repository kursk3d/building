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
export { PlatformElem };
