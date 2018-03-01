import {ImspartanSliderScreenCard} from "./screen/ImspartanSliderScreenCard";
import $ from "jquery-ts";

export class ImspartanSliderElemGDOne{
    public name:string;

    constructor(){}

    stage(data:any){
        return $('<div/>',{
            id: this.name+'_slider',
            class:data.class,
            style: data.style
        });
    }

    card(data:any = {}, style:ImspartanSliderScreenCard){
    // console.log(data.src);
    // console.log(data.srcName);
    // console.log(data.txtCard.title);
    // console.log(data.txtCard.desc);
        console.log('card',style.style);

        let card = $('<div/>',{
            class:this.name+'_card '+style.class,
            style: style.style
        });

        let img = $('<img/>',{
            class: this.name+'_img',
            src: data.src+'/aw/'+style.img.width+'//'+data.srcName
        });
        let txtBox = $('<div/>',{
            class:this.name+'_box flex_column',
            style: style.descStyle+';'+style.fontSizeTitleGet,
        });
        let title = $('<em/>',{
            class:this.name+'_box-txt',
            text:data.txtCard.title,
            style: ''
        });
        let desc = $('<div/>',{
            class:this.name+'_box-desc',
            text:data.txtCard.desc,
            style: ''
        });
        img.appendTo(card);
        title.appendTo(txtBox);
        desc.appendTo(txtBox);
        txtBox.appendTo(card);
        return card;
    }
}