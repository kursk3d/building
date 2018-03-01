import { Screen } from "./screen/Screen";
import { Platform } from "./platform/Platform";
import $ from 'jquery-ts';
export class AreitingGD {
    constructor(params = {}) {
        this.screen = new Screen('areiting');
        this.platform = new Platform();
        this.eventChangeScreen();
    }
    show() {
        this.platform.showPlatform();
    }
    close() {
    }
    updatePlatform() {
        console.log('updatePlatform');
        this.platform.closePlatform();
        setTimeout(() => {
            this.screen.updateParamsScreen();
            this.platform.showPlatform();
        }, 300);
    }
    eventChangeScreen() {
        $(window).resize(() => { });
        var mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
            console.log('Текущая Портретная ориентация');
        }
        else {
            console.log('Текущая Горизонтальная ориентация');
        }
        // Прослушка события изменения ориентации
        mql.addListener((m) => {
            if (m.matches) {
                console.log('// Изменено на портретный режим');
            }
            else {
                console.log('// Изменено на горизонтальный режим');
            }
            this.updatePlatform();
        });
        console.log('Запустили -=> ' + this.screen.namePair);
    }
}
