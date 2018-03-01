export class ImspartanSliderScreenCard {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.style = '';
        this.class = '';
        this.descClass = '';
        this.descStyle = '';
        //Размер картинки в карточке слайдера
        this.img = {
            width: 0,
            height: 0
        };
    }
    get fontSizeTitleGet() {
        return 'font-size:' + this.fontSizeTitle + ';';
    }
    set fontSizeTitleSet(size) {
        this.fontSizeTitle = size;
    }
}
