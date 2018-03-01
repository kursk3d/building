import { StyleColor } from "./StyleColor";
export class DesignDataElement {
    constructor() {
        this._classBase = '';
        this._class = '';
        this._styleBase = '';
        this._style = '';
        this.color = new StyleColor();
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
