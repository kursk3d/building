import {ImspartanPlatformScreenGDOne} from "../platform/ImspartanPlatformScreenGDOne";
import $ from "jquery-ts";

export class ImspartanPlatformElemGDOne{
    screenParams:ImspartanPlatformScreenGDOne;
    stageScreen:any;
    baseScreen:any = {};
    public static SPINNER_LOADED:string = 'spiner-load';
    public static SPINNER_LOADED_COMP_ANIM:string = 'spiner-fadein_completed';
    public static LOADED_BASE_ELEMENT:string = 'loaded-base-element';

    // количество загруженых базовых элементов
    private valLoadedElements:number = 0;
    private currentLoadedElements:number = 0;

    private paramsData:any;
    constructor(){}

    createStageScreen(screen:any){
        this.screenParams = screen;
        this.stageScreen = $('<div/>',{
            id:this.screenParams.name+'_stage-screen',
            class:this.screenParams.stage.class,
            style:this.screenParams.stage.style
        }).appendTo('body');
        return this.stageScreen;
    }

    createBaseElements(linkData:any){
        if(this.screenParams.screenData.logoGDshow){
            this.valLoadedElements = 4;
        }else {
            this.valLoadedElements = 3;
        }
        let fon = linkData.fonLayer +'/aw/'+this.screenParams.w+'//fon';
        let logoSpartanImg = linkData.logoSpartanImg+this.screenParams.logoSpartan.sizeStr+'//logoSpartanImg';
        let logoSpartanTxt = linkData.logoSpartanTxt+this.screenParams.logoSpartanTxt.sizeStr+'//logoSpartanTxt';
        let logoGoroDDel = linkData.gorodDel+'/aw/'+Math.round(this.screenParams.w*.04)+'//logoGoroDDel';


        let imgFon = new Image();
        imgFon.addEventListener("load", (e)=>{
            this.stageScreen.css({
                'background-image':'url("'+fon+'")',
                'background-repeat':'no-repeat',
                'background-color': 'rgb(195, 198, 203)'
            });
            this.loadedBaseElems();
        }, false);
        imgFon.src = fon;

        this.baseScreen.spartan = $('<img/>',{
            'id':this.screenParams.name+'_logo-img',
            style:this.screenParams.logoSpartan.style,
            src: logoSpartanImg
        }).on('error load',()=>{
            this.loadedBaseElems();
        });
        this.baseScreen.spartanTxt = $('<img/>',{
            'id':this.screenParams.name+'_logo-txt',
            style:this.screenParams.logoSpartanTxt.style,
            src: logoSpartanTxt
        }).on('error load',()=>{
            this.loadedBaseElems();
        });
        if(this.screenParams.screenData.logoGDshow) {
            this.baseScreen.logoGD = $('<img/>', {
                'id': this.screenParams.name + '_logo-goroddel',
                style: this.screenParams.logoGoroDDelStyle,
                src: logoGoroDDel
            }).on('error load', () => {
                this.loadedBaseElems();
            });
        }
        this.stageScreen.trigger(ImspartanPlatformElemGDOne.LOADED_BASE_ELEMENT);
    }
    private loadedBaseElems(){
        ++this.currentLoadedElements;
        if(this.valLoadedElements == this.currentLoadedElements){
            this.baseScreen.spartan.appendTo(this.stageScreen).hide().fadeIn( 'slow',()=>{
                this.baseScreen.spartanTxt.appendTo(this.stageScreen).hide().fadeIn( 'slow',()=>{

                    if(this.screenParams.screenData.logoGDshow) {
                        this.baseScreen.logoGD.appendTo(this.stageScreen).hide().fadeIn('slow', () => {
                            this.stageScreen.trigger(ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM);
                        });
                    }else {
                        this.stageScreen.trigger(ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM);
                    }
                });});
            this.currentLoadedElements = 0;
        }
    }
    createSpinner(link:string){
        let spinner = new Image();
        let jSpinner = $(spinner).on('load',(im)=>{
            jSpinner.appendTo(this.stageScreen).hide().fadeIn( 'slow');
            this.stageScreen.trigger(ImspartanPlatformElemGDOne.SPINNER_LOADED);
            console.log('SPINNER_LOADED');
            jSpinner.css({
                position:'absolute',
                top: (this.screenParams.h-spinner.height)/2,
                left: (this.screenParams.w-spinner.width)/2,
            });
        }).attr({
            id:this.screenParams.name+'_spinner',
            class:'spinner-one',
            src:  link+'/ah/'+this.screenParams.spinnerSize+'//spiner',
        });
        return jSpinner;
    }
}
