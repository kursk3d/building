import $ from 'jquery-ts';

export class SpinnerOne{

    size:{w:number,h:number} = {w:0,h:0};
    stage:any;

    linkSpinner:string ='http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue';
    sizeSpinner:number = 0;

    constructor(){
        this.size.w = window.innerWidth;
        this.size.h = window.innerHeight;
        this.sizeSpinner = Math.round(this.size.w*.1);
        this.createStage();
        this.createSpinner();
    console.log('this.size.w',this.size.w,'this.size.h',this.size.h);

    }

    createStage(){
        this.stage =  $('<div/>',{
            id:'stage',
            class:'',
            style:'width:'+this.size.w+'px;height:'+this.size.h+'px;background-color:rgb(100,100,100)'
        }).appendTo('body');
    }

    createBaseElements(){
        let fon = 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/metall-one_02-hd/aw/'+this.size.w+'//fon';
        let imgFon = new Image();
        imgFon.addEventListener("load", (e)=>{
            $(this.stage).css({
                'background-image':'url("'+fon+'")',
                // 'background-repeat':'no-repeat',

            });
        }, false);
        imgFon.src = fon;
    }

    createSpinner(){
        let spinner = new Image();
        let jSpinner = $(spinner).on('load',(im)=>{
            jSpinner.appendTo(this.stage).hide().fadeIn( 'slow');
            jSpinner.css({
                position:'absolute',
                top: (this.size.h-spinner.height)/2,
                left: (this.size.w-spinner.width)/2,
                // top: this.size.h-spinner.height/2,
                // left: this.size.w-spinner.width/2,
                // top: spinner.height/2,
                // left: spinner.width/2,
                // top: (this.size.h/2),
                // left: (this.size.w/2),
            });
            this.createBaseElements();
        }).attr({
            src:  this.linkSpinner+'/aw/'+this.sizeSpinner+'//spiner',
        }).addClass('spinner-one');
    }
}