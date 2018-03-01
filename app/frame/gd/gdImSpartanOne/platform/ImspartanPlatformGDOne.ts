import {ImspartanPlatformElemGDOne} from "../platform/ImspartanPlatformElemGDOne";
import {ImspartanPlatformScreenGDOne} from "../platform/ImspartanPlatformScreenGDOne";
// import $ from "jquery-ts";

export class ImspartanPlatformGDOne{
    private screen: ImspartanPlatformScreenGDOne;
    // Собираем сюда все элементы
    public packElements:any = {};
    public baseLink:any;

    public contentData:any[] = [];

    public baseElem: ImspartanPlatformElemGDOne;
    // отображается ли в данный момент платфрома компании
    public visibility:boolean = false;

    constructor(){
        this.baseElem = new ImspartanPlatformElemGDOne();
        this.screen = ImspartanPlatformScreenGDOne.getInstance();
    }
    closePlatform(){
        this.removeContent();
        this.packElements.stagePlatform.remove();
        this.visibility = false;
    }
    showPlatform(){
        if(this.visibility){
            this.closePlatform();
        }
        this.run();
        this.visibility = true;
    }
    private run(){
        this.packElements.stagePlatform = this.baseElem.createStageScreen(this.screen);

        this.packElements.spinner = this.baseElem.createSpinner(this.baseLink.spinnerLink);

        this.packElements.stagePlatform.on(ImspartanPlatformElemGDOne.SPINNER_LOADED,()=>{
            console.log('createContent ON');
            this.createContent();
        });
    }
    private createContent(){
        this.packElements.stagePlatform.on(ImspartanPlatformElemGDOne.SPINNER_LOADED_COMP_ANIM,()=>{
            this.packElements.spinner.remove();
            this.showContent();
        });
        // создаем и загружаем картинки для основного слоя декорации
        this.baseElem.createBaseElements(this.baseLink);
    }
    addContent(content:any){
        this.contentData.push(content);
        console.log('add content to slider');
    }
    private showContent(){
        for(let i=0; i<this.contentData.length; i++){
            this.packElements.stagePlatform.prepend(this.contentData[i]);
        }
    }
    private removeContent(){
        for(let i=0; i<this.contentData.length; i++){
            this.contentData[i].remove();
        }
        this.contentData = [];
    }
}
