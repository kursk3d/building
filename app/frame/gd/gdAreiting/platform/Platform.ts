import {PlatformContent} from "./PlatformContent";
import {PlatformElem} from "./PlatformElem";
import {PlatformScreen} from "./PlatformScreen";
import {PlatformProvider} from "./provider/PlatformProvider";

// import $ from "jquery-ts";

export class Platform{
    private screen: PlatformScreen;
    private jData:PlatformProvider;
    // Собираем сюда все элементы
    public packElements:any = {};
    public pltElem: PlatformElem;
    public content:PlatformContent;
    // отображается ли в данный момент платфрома компании
    public visibility:boolean = false;

    constructor(){
        this.screen = PlatformScreen.getInstance();
        this.jData = new PlatformProvider();
        this.pltElem = new PlatformElem(this.screen.name);
        this.content = new PlatformContent();
    }
    closePlatform(){
        this.content.close();
        this.packElements.stagePlatform.remove();
        this.packElements = {};
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
        this.packElements.stagePlatform = this.pltElem.createStage(this.screen.stageData);
        this.packElements.spinner = this.pltElem.createSpinner(this.jData.spinnerLink,this.screen.spinnerData,this.packElements.stagePlatform);
        this.pltElem.action.one(PlatformElem.SPINNER_LOADED,()=>{this.createPlatform();});
    }
    private createPlatform(){
        this.content.create();
        this.pltElem.action.one(PlatformElem.LOADED_BASE_ELEM,()=>{this.showContent();});
        // создаем и загружаем картинки для основного слоя (декорации)
        this.pltElem.createBaseElements(this.jData.baseLink, this.screen.stageData.backgroundLink,this.packElements.stagePlatform);
    }
    private showContent(){
        this.packElements.spinner.remove();
        for(let i=0; i<this.content.content.length; i++){
            this.packElements.stagePlatform.prepend(this.content.content[i]);
        }
    }
}
