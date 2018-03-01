import { ContactsGD } from "./frame/gd/gdContacts/ContactsGD";
var ContactsBuilding = /** @class */ (function () {
    function ContactsBuilding() {
        this.contacts = new ContactsGD({ btnClose: false });
        this.contacts.show();
        /*
        this.contacts.action.one(ContactsGD.PLATFORM_CLOSE,()=>{
            this.contacts.close();
            console.log('close ContactsGD');
        });
        */
    }
    return ContactsBuilding;
}());
export { ContactsBuilding };
var cntBuilding = new ContactsBuilding();
