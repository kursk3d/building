import {AboutProvider} from "./provider/AboutProvider";
import {AboutScreen} from "./AboutScreen";
import {AboutElem} from "./AboutElem";

export class AboutContent{
    // название компаненет
    private nameStage:string = 'base-name_about-content';
    // базовый слой для все контента
    private _screen:AboutScreen;
    private _layer:any = {};
    private elem:AboutElem;
    private visibility:boolean = false;
    private dataProvider:any;

    constructor(){
        this._screen = AboutScreen.getInstance();
        this.dataProvider = new AboutProvider();
        this.elem = new AboutElem(this._screen.name);
        // this.create();
    }
    create(){
        this._layer.stage = this.elem.createStage(this._screen.stage);
        this._layer.aboutInfo = this.elem.createAbout(this.dataProvider.aboutInfo,this._screen.about);
        this._layer.bank = this.elem.createInfoBank(this.dataProvider.coinInfo,this._screen.about);
        this._layer.aboutInfo.appendTo(this._layer.stage);
        this._layer.bank.appendTo(this._layer.stage);
        this.visibility = true;
    }
    close(){
        this._layer.stage.remove();
        this._layer = {};
    }
    get layerStage(){
        return this._layer.stage;
    }
}