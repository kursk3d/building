// import $ from "jquery-ts";
import { Platform } from "./platform/Platform";
import { Screen } from "./screen/Screen";
var ContactsGD = /** @class */ (function () {
    function ContactsGD(params) {
        if (params === void 0) { params = {}; }
        this.action = $('<button/>');
        this.screen = new Screen('contacts');
        this.platform = new Platform(params);
        this.eventChangeScreen();
    }
    ContactsGD.prototype.show = function () {
        var _this = this;
        this.platform.showPlatform();
        this.platform.btnClose.on('click', function () {
            _this.action.trigger(ContactsGD.PLATFORM_CLOSE);
        });
    };
    ContactsGD.prototype.close = function () {
        this.platform.closePlatform();
    };
    ContactsGD.prototype.updatePlatform = function () {
        var _this = this;
        console.log('updatePlatform');
        this.platform.closePlatform();
        setTimeout(function () {
            _this.screen.updateParamsScreen();
            _this.platform.showPlatform();
        }, 300);
    };
    ContactsGD.prototype.eventChangeScreen = function () {
        var _this = this;
        $(window).resize(function () {
        });
        var mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
            console.log('Текущая Портретная ориентация');
        }
        else {
            console.log('Текущая Горизонтальная ориентация');
        }
        // Прослушка события изменения ориентации
        mql.addListener(function (m) {
            if (m.matches) {
                console.log('// Изменено на портретный режим');
            }
            else {
                console.log('// Изменено на горизонтальный режим');
            }
            _this.updatePlatform();
        });
        console.log('Запустили -=> ' + this.screen.namePair);
    };
    ContactsGD.PLATFORM_CLOSE = 'platformClose';
    return ContactsGD;
}());
export { ContactsGD };
