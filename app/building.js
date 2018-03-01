import { ImspartanGDOne } from "./frame/gd/gdImSpartanOne/ImspartanGDOne";
export class Building {
    constructor() {
        this.pair = new ImspartanGDOne({ btnClose: false });
        this.pair.show();
    }
}
let bl = new Building();
