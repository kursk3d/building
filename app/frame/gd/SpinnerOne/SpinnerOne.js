import $ from 'jquery-ts';
export class SpinnerOne {
    constructor() {
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
    createStage() {
        this.stage = $('<div/>', {
            id: 'stage',
            class: '',
            style: 'width:' + this.size.w + 'px;height:' + this.size.h + 'px;background-color:rgb(100,100,100)'
        }).appendTo('body');
    }
    createBaseElements() {
        let fon = 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/metall-one_02-hd/aw/' + this.size.w + '//fon';
        let imgFon = new Image();
        imgFon.addEventListener("load", (e) => {
            $(this.stage).css({
                'background-image': 'url("' + fon + '")',
            });
        }, false);
        imgFon.src = fon;
    }
    createSpinner() {
        let spinner = new Image();
        let jSpinner = $(spinner).on('load', (im) => {
            jSpinner.appendTo(this.stage).hide().fadeIn('slow');
            jSpinner.css({
                position: 'absolute',
                top: (this.size.h - spinner.height) / 2,
                left: (this.size.w - spinner.width) / 2,
            });
            this.createBaseElements();
        }).attr({
            src: this.linkSpinner + '/aw/' + this.sizeSpinner + '//spiner',
        }).addClass('spinner-one');
    }
}
