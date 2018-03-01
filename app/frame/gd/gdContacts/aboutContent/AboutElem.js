// import $ from "jquery-ts";
var AboutElem = /** @class */ (function () {
    function AboutElem(name) {
        this._name = name;
    }
    AboutElem.prototype.createStage = function (design) {
        return $('<div/>', {
            id: this._name + '_stage',
            class: this._name + '_stage ' + design.classHD,
            style: design.styleHD
        });
    };
    AboutElem.prototype.createAbout = function (data, design) {
        var about = $('<div/>', {
            class: this._name + '_about ' + design.classHD,
            style: design.styleHD
        });
        var titleOne = $('<div/>', {
            class: this._name + '_title-one ',
            style: '',
            text: 'КОНТАКТЫ'
        }).appendTo(about);
        var fio = $('<div/>', {
            class: this._name + '_fio ',
            style: '',
            text: data.fio
        }).appendTo(about);
        var tel = $('<div/>', {
            class: this._name + '_tel ',
            style: '',
            text: data.tel
        }).prepend('<strong>моб: </strong>').appendTo(about);
        var email = $('<div/>', {
            class: this._name + '_email ',
            style: '',
            text: data.email
        }).prepend('<strong>e:mail: </strong>').appendTo(about);
        var vk = $('<a/>', {
            class: this._name + '_vk',
            style: '' + design.color.white,
            text: data.vk,
            href: data.vk
        }).prepend('<strong>vk: </strong>').appendTo(about);
        return about;
    };
    AboutElem.prototype.createInfoBank = function (data, design) {
        var bank = $('<div/>', {
            class: this._name + '_bank ' + design.classHD,
            style: design.styleHD
        });
        var titleTwo = $('<div/>', {
            class: this._name + '_title-two ',
            style: '',
            text: 'Желающим помочь проекту.'
        }).appendTo(bank);
        var qiwi = $('<div/>', {
            class: this._name + '_qiwi ',
            style: '',
            text: data.qiwi
        }).prepend('<strong>qiwi: </strong>').appendTo(bank);
        var sberBank = $('<div/>', {
            class: this._name + '_sber ',
            style: '',
            text: data.sberBank
        }).prepend('<strong>сбербанк MasterCard: </strong>').appendTo(bank);
        var yandex = $('<div/>', {
            class: this._name + '_yandex-money ',
            style: ''
        }).prepend('<strong>yandex money: </strong>').appendTo(bank);
        var yandexLink = $('<a/>', {
            class: this._name + '_yandex-money ',
            style: '' + design.color.white,
            href: data.yandex.link,
            text: data.yandex.number
        }).appendTo(yandex);
        return bank;
    };
    return AboutElem;
}());
export { AboutElem };
