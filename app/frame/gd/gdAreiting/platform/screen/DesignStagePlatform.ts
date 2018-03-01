export class DesignStagePlatform{
    name:string = '';

    private _width:number = 0;
    private _height:number = 0;

    private _classBase:string = '';
    private _class:string = '';

    private _styleBase:string = '';
    private _style:string = '';

    backgroundLink:string = '';

    constructor(name:string = 'def_stage-platform'){this.name = name;}

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
        this._classBase += str;
    }
    set addClass(str:string){
        this._class += ' '+str;
    }
    set class(str:string){
        this._class = str;
    }
    get class(){
        return this._class;
    }
    get classHD(){
        return this._classBase + this._class;
    }


    setSize(width:number,height:number){
        this._width = width;
        this._height = height;
    }

}