export class DesignStagePlatform {
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
