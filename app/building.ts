import {ImspartanGDOne} from "./frame/gd/gdImSpartanOne/ImspartanGDOne";

export class Building{
    pair:ImspartanGDOne;
    constructor(){
        this.pair = new ImspartanGDOne({btnClose:false});
        this.pair.show();
    }

}

let bl = new Building();
