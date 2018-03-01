import { ImspartanSliderScreenCard } from "./screen/ImspartanSliderScreenCard";
export class ImspartanSliderScreenGDOne {
    constructor() {
        this.name = 'def-name_slider';
        this.stage = { class: '', style: '' };
        this.card = new ImspartanSliderScreenCard();
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
