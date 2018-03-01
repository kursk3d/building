import {DesignStagePlatform} from "./screen/DesignStagePlatform";
// import $ from "jquery-ts";

export class PlatformElem{
    private _name:string = 'base';
    action:any;
    public static SPINNER_LOADED:string = 'spiner-load';
    public static LOADED_BASE_ELEM:string = 'loaded-base_elements';

    constructor(name:string){
        this.action = $('<button/>');
        this._name = name;
    }
    // основной элемент куда все помещается
    createStage(params:DesignStagePlatform){
        return $('<div/>',{
            id:this._name+'_platform',
            class:params.class,
            style:params.styleHD
        }).appendTo('body').css('font-weight', 'lighter');
    }

    createBaseElements(linkData:any, size:string, stage:any){
        let fon = linkData.fonLayer +size+'//fon';
        let imgFon = new Image();
        imgFon.addEventListener("load", (e)=>{
            $(stage).css({
                'background-image':'url("'+fon+'")',
                // 'background-repeat':'no-repeat',
                'background-color': 'rgb(195, 198, 203)'
            });
            this.action.trigger(PlatformElem.LOADED_BASE_ELEM);
        }, false);
        imgFon.src = fon;
    }

    createSpinner(link:string, sizePlatform:any, stage:any){
        let spinner = new Image();
        let jSpinner = $(spinner).on('load',(im)=>{
            jSpinner.appendTo(stage).hide().fadeIn( 'slow');
            console.log('SPINNER_LOADED');
            this.action.trigger(PlatformElem.SPINNER_LOADED);
            console.log('spinner.width',spinner.width);
            jSpinner.css({
                //TODO надо размеры спинера вывести на уровень верх а то они не читаеются
                position:'fixed',
                // top: (sizePlatform.height/2),
                top: (sizePlatform.height/2)-(spinner.height/2),
                left: (sizePlatform.width/2)-(spinner.width/2),
                // left: (sizePlatform.width/2),
            });
        }).attr({
            id:this._name+'_spinner',
            class:'spinner-one',
            src:  link+'/ah/'+sizePlatform.size+'//spiner',
        });


        return jSpinner;
    }
    createBtnClose(link:string, btnData:any, stage:any){
        let close = new Image();
        let btnClose = $(close).on('load',(im)=>{
            btnClose.appendTo(stage).hide().fadeIn( 'slow');
            btnClose.css({
                position:'fixed',
                top: 0,
                right:0,
            });
        }).attr({
            id:this._name+'_close',
            class:'close-one',
            src:  link+'/ah/'+btnData.size+'//btn-close',
            style:'cursor:pointer'
        });


        return btnClose;
    }
}
