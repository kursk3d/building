import {DesignStagePlatform} from "./screen/DesignStagePlatform";

export class PlatformScreen{

    w:number;
    h:number;
    name:string = 'def-name_platform';

    private spinnerSize:number = 10;
    private stage:DesignStagePlatform;
    private static instance: PlatformScreen;


    private constructor(){
        this.stage = new DesignStagePlatform();
        this.baseParams();
    }
    static getInstance() {
        if (!PlatformScreen.instance) {
            PlatformScreen.instance = new PlatformScreen();
        }
        return PlatformScreen.instance;
    }
    baseParams(){
        this.stage.styleBase = 'background-color:rgba(79, 92, 113, .5);';
        this.stage.addStyleBase = 'position:absolute;';
        this.stage.addStyleBase = 'top:0;left:0;';
        this.spinnerSize = Math.round(this.w*.1);
    }

    wideScreen(){
        this.stage.backgroundLink = '/aw/'+this.w;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:'+this.w+'px;height:'+this.h+'px;';
        this.stage.btnClose.size = Math.round(this.h*.05);
        // this.spinnerSize = Math.round(this.w*.1);
    }
    narrowScreen(){
        this.stage.backgroundLink = '/ah/'+this.h;
        this.stage.class = 'flex_column__start-center';
        this.stage.addStyle = 'width:'+this.w+'px;height:'+this.h+'px;';
        this.stage.btnClose.size = Math.round(this.w*.05);
    }
    get sizePlatform(){
        return {width:this.w,height:this.h}
    }
    sizePlatformSet(width:number,height:number){
        this.w = width;
        this.h = height;
    }
    get spinnerData(){
        return {width:this.w,height:this.h, size:this.spinnerSize}
    }
    get stageData(){
        return this.stage;
    }
}