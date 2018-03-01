import {DesignDataElement} from "./screen/DesignDataElement";

export class AboutScreen{
    private w:number = 0;
    private h:number = 0;

    name:string = 'def-name_about-screen';

    stage:DesignDataElement = new DesignDataElement();
    about:DesignDataElement = new DesignDataElement();

    private static instance: AboutScreen;
    private constructor(){
        this.baseParams();
    }
    static getInstance() {
        if (!AboutScreen.instance) {
            AboutScreen.instance = new AboutScreen();
        }
        return AboutScreen.instance;
    }
    baseParams(){
        this.stage.styleBase = 'color:white;';
        this.stage.addStyleBase = 'width:inherit;height:inherit;';
        this.stage.addClass = 'flex_column__around-center';
        this.about.addClass = 'flex_column';
    }
    wideScreen(){
        this.stage.style = 'font-size:30px';
    }

    narrowScreen(){
        this.stage.style = 'font-size:40px';
    }
    sizePlatformSet(width:number,height:number){
        this.w = width;
        this.h = height;
    }
}