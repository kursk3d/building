import {AboutContent} from "../aboutContent/AboutContent";

export class PlatformContent{
    private aboutContent:AboutContent;
    private _content:any = [];

    constructor() {
        this.aboutContent = new AboutContent();

    }

    close(){
        this.aboutContent.close();
        this._content = [];
    }
    create(){
        this.aboutContent.create();
        this.addContent(this.aboutContent.layerStage);
    }
    private loadedContent(){

    }

    private addContent(content:any){this._content.push(content);}
    get content(){ return this._content;}

}