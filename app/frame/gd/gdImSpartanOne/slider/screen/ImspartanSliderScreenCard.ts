export class ImspartanSliderScreenCard{
    width:number = 10;
    height:number = 10;

    style:string = '';
    class:string = '';

    descClass:string = '';
    descStyle:string = '';

    private fontSizeTitle:string;
    fontSizeDesc:string;

    //Размер картинки в карточке слайдера
    img:{
        width:number,
        height:number
    } = {
        width:0,
        height:0
    };

    get fontSizeTitleGet(){
        return 'font-size:'+this.fontSizeTitle+';';
    }
    set fontSizeTitleSet(size:string){
        this.fontSizeTitle = size;
    }

}