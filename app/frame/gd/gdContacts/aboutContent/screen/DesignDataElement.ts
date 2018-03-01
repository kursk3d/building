import {StyleColor} from "./StyleColor";

export class DesignDataElement{
    private _classBase:string = '';
    private _class:string = '';

    private _styleBase:string = '';
    private _style:string = '';
    color:StyleColor = new StyleColor();
    constructor(){
    }

    set styleBase(str:string){
        this._styleBase = str;
    }
    set addStyleBase(str:string){
        this._styleBase += str;
    }
    set addStyle(str:string){
        this._style += str;
    }
    get style(){
        return this._style;
    }
    set style(str:string){
        this._style = str;
    }
    get styleHD(){
        return this._styleBase + this._style;
    }


    set classBase(str:string){
        this._classBase = str;
    }
    set addClassBase(str:string){
        this._classBase += ' '+str;
    }
    set addClass(str:string){
        this._class += ' '+str;
    }
    get classHD(){
        return this._classBase +' '+this._class;
    }

}