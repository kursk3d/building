import { ContactsGD } from "./frame/gd/gdContacts/ContactsGD";
export class ContactsBuilding {
    constructor() {
        // alert('!!!!!!!!!!!!');
        console.log('!!!!!!!console!!!!!');
        this.contacts = new ContactsGD({ btnClose: true });
        this.contacts.show();
        this.contacts.action.one(ContactsGD.PLATFORM_CLOSE, () => {
            this.contacts.close();
            console.log('close ContactsGD');
        });
    }
}
let cntBuilding = new ContactsBuilding();
