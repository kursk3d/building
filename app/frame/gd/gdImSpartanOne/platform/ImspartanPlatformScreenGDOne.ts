export class ImspartanPlatformScreenGDOne{

    w:number;
    h:number;
    name:string = 'def-name_platform';

    spinnerSize:number = Math.round(this.w*.1);

    screenData:{logoGDshow:boolean} = {logoGDshow:true};

    stageScreenStyle:string = '';
    stage:{style:string,class:string,width:number,height:number} = {style:'',class:'',width:0,height:0};

    logoSpartan:{style:string,width:number,height:number,sizeStr:string} = {style:'',width:0,height:0,sizeStr:''};
    logoSpartanTxt:{style:string,width:number,height:number,sizeStr:string} = {style:'',width:0,height:0,sizeStr:''};
    logoGoroDDelStyle:string = '';

    private static instance: ImspartanPlatformScreenGDOne;


    private constructor(){
        this.baseParams();
    }
    static getInstance() {
        if (!ImspartanPlatformScreenGDOne.instance) {
            ImspartanPlatformScreenGDOne.instance = new ImspartanPlatformScreenGDOne();
        }
        return ImspartanPlatformScreenGDOne.instance;
    }
    private baseParams(){
        this.stageScreenStyle = 'background-color:rgba(79, 92, 113, .5);position:absolute;';
        this.stage.style = 'background-color:rgba(79, 92, 113, .5);position:absolute;';
    }

    wideScreen(){
        this.screenData.logoGDshow = true;
        this.stage.class = '';
        this.stage.style += 'width:'+this.w+'px;height:'+this.h+'px;';
        this.logoSpartan.width = Math.round(this.w*.23);
        this.logoSpartan.sizeStr = '/aw/'+this.logoSpartan.width;
        this.logoSpartan.style = 'position:absolute;top:'+Math.round(this.w*0.07)+'px;right:'+Math.round(this.w*.003)+'px;overflow:hidden;';
        this.logoSpartanTxt.width = Math.round(this.w*.7);
        this.logoSpartanTxt.sizeStr = '/aw/'+this.logoSpartanTxt.width;
        this.logoSpartanTxt.style = 'position:absolute;top:'+Math.round(this.w*0.345)+'px;left:'+Math.round(this.w*.08)+'px;overflow:hidden;';
        this.logoGoroDDelStyle = 'position:absolute;top:'+Math.round(this.w*0.05)+'px;left:'+Math.round(this.w*.02)+'px;overflow:hidden;';
        this.spinnerSize = Math.round(this.w*.1);
    }
    narrowScreen(){
        this.screenData.logoGDshow = false;
        this.stage.class = 'flex_column';
        this.stage.style += 'width:'+this.w+'px;height:auto;';
        this.logoSpartan.width = Math.round(this.w*.9);
        this.logoSpartan.sizeStr = '/aw/'+this.logoSpartan.width;
        this.logoSpartan.style = 'overflow:hidden;';
        this.logoSpartanTxt.width = Math.round(this.w*.99);
        this.logoSpartanTxt.sizeStr = '/aw/'+this.logoSpartanTxt.width;
        this.logoSpartanTxt.style = 'overflow:hidden;';
        this.logoGoroDDelStyle = 'position:absolute;top:'+Math.round(this.w*0.05)+'px;left:'+Math.round(this.w*.02)+'px;overflow:hidden;';
        this.spinnerSize = Math.round(this.w*.1);
    }
}