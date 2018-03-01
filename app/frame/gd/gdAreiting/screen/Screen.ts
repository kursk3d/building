import {ScreenCore} from "../../core/screen/ScreenCore";
import {PlatformScreen} from "../platform/PlatformScreen";
// import {AboutScreen} from "../aboutContent/AboutScreen";

export class Screen  extends ScreenCore{

    private _name:string;
    private platformScr:PlatformScreen;
    // private aboutScr:AboutScreen;


    constructor(namePair:string = 'def-name'){
        super();
        this._name = namePair.trim();

        this.platformScr = PlatformScreen.getInstance();
        this.platformScr.name = this._name;

        // this.aboutScr = AboutScreen.getInstance();
        // this.aboutScr.name = this._name;

        this.setParams();
    }
    private setParams(){
        this.baseData();
        if(this.getOrientScreenWhat(ScreenCore.WIDESCREEN)){
            this.setParamsWideScreen();
        }else{
            this.setParamsNarrowScreen();
        }
    }
    private baseData(){
        this.platformScr.sizePlatformSet(this.screenW, this.screenH);
        this.platformScr.baseParams();
        // this.aboutScr.sizePlatformSet(this.screenW, this.screenH);
        // this.aboutScr.baseParams();
    }
    private setParamsWideScreen(){
        this.platformScr.wideScreen();
        // this.aboutScr.wideScreen();
    }
    private setParamsNarrowScreen(){
        this.platformScr.narrowScreen();
        // this.aboutScr.narrowScreen();
    }
    // обновляем параметры для отрисовки экрана
    updateParamsScreen(){
        this.screenCurrentSize();
        this.setParams();
    }
    get namePair():string{
        return this._name;
    }
}