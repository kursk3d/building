import {ContactsGD} from "./frame/gd/gdContacts/ContactsGD";

export class ContactsBuilding{
contacts:ContactsGD;

    constructor(){
        this.contacts = new ContactsGD({btnClose:false});
        this.contacts.show();
        /*
        this.contacts.action.one(ContactsGD.PLATFORM_CLOSE,()=>{
            this.contacts.close();
            console.log('close ContactsGD');
        });
        */
    }
}
let cntBuilding = new ContactsBuilding();
