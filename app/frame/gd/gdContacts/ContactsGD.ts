import $ from "jquery-ts";
import {Platform} from "./platform/Platform";
import {Screen} from "./screen/Screen";

export class ContactsGD{
    public static PLATFORM_CLOSE:string = 'platformClose';

    private screen: Screen;
    private platform: Platform;
    public action: any = $('<button/>');
    constructor(params: any = {} ) {
        this.screen = new Screen('contacts');
        this.platform = new Platform(params);
        this.eventChangeScreen();
    }

    public show() {
        this.platform.showPlatform();
        this.platform.btnClose.on('click', ()=>{
            this.action.trigger(ContactsGD.PLATFORM_CLOSE);
        });
    }

    public close() {
        this.platform.closePlatform();
    }

    public updatePlatform() {
        console.log('updatePlatform');
        this.platform.closePlatform();
        setTimeout(() => {
            this.screen.updateParamsScreen();
            this.platform.showPlatform();
        }, 300);
    }

    private eventChangeScreen() {
        $(window).resize(() => {
        });
        var mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
            console.log('Текущая Портретная ориентация');
        }else{
            console.log('Текущая Горизонтальная ориентация');
        }
        // Прослушка события изменения ориентации
        mql.addListener((m) => {
            if (m.matches) {
                console.log('// Изменено на портретный режим');
            } else {
                console.log('// Изменено на горизонтальный режим');
            }
            this.updatePlatform();
        });
        console.log('Запустили -=> ' + this.screen.namePair);
    }
}