/*
* Задача класса определять характеристики экрана устройства
* */
export class ScreenCore{
    static WIDESCREEN:string = 'widescreen';// 19x9
    static WIDESCREEN_HSMALL:string = 'widescreen_hsmall';
    static NARROWCREEN:string = 'narrow-screen';

    // Доступные размеры экрана
    private wScreen:number = 0;
    private hScreen:number = 0;

    // Количество слайдов в слайдере за раз
    public valCardsSlider:number = 0;

    //текущая ориентация экрана
    private orientScreen:string = 'HZ';
    //инфо об ориентации экрана
    public orientwInfoScreen:string = 'HZ';

    constructor(){
        this.screenCurrentSize();
    }

    screenCurrentSize(){
        this.wScreen = window.innerWidth;
        this.hScreen = window.innerHeight;
        if(this.wScreen>this.hScreen){
            this.orientScreen = ScreenCore.WIDESCREEN;
            this.orientwInfoScreen = 'HDTV(Full-HD)(FHD)1080p';
        }else{
            this.orientScreen = ScreenCore.NARROWCREEN;
            this.orientwInfoScreen = 'vertical';
        }
        console.log('Доступная область отрисовки wScreen:', this.wScreen,' hScreen', this.hScreen);
    }
    get screenW():number{
        return this.wScreen;
    }
    get screenH(){
        return this.hScreen;
    }
    get currentOrientScreen(){
        return this.orientScreen;
    }
    getOrientScreenWhat(nameScreen:string){
        console.log('Ориентация экрана '+ this.orientScreen);
        if(this.orientScreen == nameScreen){
            return true;
        }else{
            return false;
        }
    }
}