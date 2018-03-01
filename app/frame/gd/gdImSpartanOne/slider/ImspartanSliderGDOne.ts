import {ImspartanSliderScreenGDOne} from "../slider/ImspartanSliderScreenGDOne";
import {ImspartanSliderElemGDOne} from "./ImspartanSliderElemGDOne";
// import $ from "jquery-ts";

export class ImspartanSliderGDOne{
    private screen: ImspartanSliderScreenGDOne;
    private elemSlider: ImspartanSliderElemGDOne;

    public dataContent: any = {};
    // div контейнер для слайдера
    public stageSlider:any;
    // собираем сюда все эелементы
    private packSliderElements:any = {};

    private visibility:boolean;

    constructor(){
        this.elemSlider = new ImspartanSliderElemGDOne();
        this.screen = ImspartanSliderScreenGDOne.getInstance();
    }
    closeSlider(){
        this.stageSlider.remove();
        this.visibility = false;
    }
    showSlider(){
        if(this.visibility){this.closeSlider();}
        this.runSlider();
    }
    runSlider(){
        this.elemSlider.name = this.screen.name;
        this.stageSlider = this.elemSlider.stage(this.screen.stage);
        this.createContentSlider();
        this.visibility = true;
    }
    createContentSlider(){
        for (let i = 0; i < this.dataContent.length; i++){
            this.packSliderElements.card = this.elemSlider.card(this.dataContent[i],this.screen.card);
            this.stageSlider.append(this.packSliderElements.card);
        }
    }
    get stage(){
        return this.stageSlider;
    }


}