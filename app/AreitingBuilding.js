import { AreitingGD } from "./frame/gd/gdAreiting/AreitingGD";
export class AreitingBuilding {
    constructor() {
        this.areiting = new AreitingGD({ btnClose: false });
        this.areiting.show();
    }
}
let areitingBuild = new AreitingBuilding();
