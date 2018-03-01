import $ from 'jquery-ts';
var SpinnerOne = /** @class */ (function () {
    function SpinnerOne() {
        this.size = { w: 0, h: 0 };
        this.linkSpinner = 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue';
        this.sizeSpinner = 0;
        this.size.w = window.innerWidth;
        this.size.h = window.innerHeight;
        this.sizeSpinner = Math.round(this.size.w * .1);
        this.createStage();
        this.createSpinner();
        console.log('this.size.w', this.size.w, 'this.size.h', this.size.h);
    }
    SpinnerOne.prototype.createStage = function () {
        this.stage = $('<div/>', {
            id: 'stage',
            class: '',
            style: 'width:' + this.size.w + 'px;height:' + this.size.h + 'px;background-color:rgb(100,100,100)'
        }).appendTo('body');
    };
    SpinnerOne.prototype.createBaseElements = function () {
        var _this = this;
        var fon = 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/metall-one_02-hd/aw/' + this.size.w + '//fon';
        var imgFon = new Image();
        imgFon.addEventListener("load", function (e) {
            $(_this.stage).css({
                'background-image': 'url("' + fon + '")',
            });
        }, false);
        imgFon.src = fon;
    };
    SpinnerOne.prototype.createSpinner = function () {
        var _this = this;
        var spinner = new Image();
        var jSpinner = $(spinner).on('load', function (im) {
            jSpinner.appendTo(_this.stage).hide().fadeIn('slow');
            jSpinner.css({
                position: 'absolute',
                top: (_this.size.h - spinner.height) / 2,
                left: (_this.size.w - spinner.width) / 2,
            });
            _this.createBaseElements();
        }).attr({
            src: this.linkSpinner + '/aw/' + this.sizeSpinner + '//spiner',
        }).addClass('spinner-one');
    };
    return SpinnerOne;
}());
export { SpinnerOne };
