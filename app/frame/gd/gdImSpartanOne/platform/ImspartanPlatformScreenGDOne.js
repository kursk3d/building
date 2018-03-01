export class ImspartanPlatformScreenGDOne {
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
