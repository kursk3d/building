// import $ from "jquery-ts";
export class AboutElem {
    constructor(name) { this._name = name; }
    createStage(design) {
        return $('<div/>', {
            id: this._name + '_stage',
            class: this._name + '_stage ' + design.classHD,
            style: design.styleHD
        });
    }
    createAbout(data, design) {
        let about = $('<div/>', {
            class: this._name + '_about ' + design.classHD,
            style: design.styleHD
        });
        let titleOne = $('<div/>', {
            class: this._name + '_title-one ',
            style: '',
            text: 'КОНТАКТЫ'
        }).appendTo(about);
        let fio = $('<div/>', {
            class: this._name + '_fio ',
            style: '',
            text: data.fio
        }).appendTo(about);
        let tel = $('<div/>', {
            class: this._name + '_tel ',
            style: '',
            text: data.tel
        }).prepend('<strong>моб: </strong>').appendTo(about);
        let email = $('<div/>', {
            class: this._name + '_email ',
            style: '',
            text: data.email
        }).prepend('<strong>e:mail: </strong>').appendTo(about);
        let vk = $('<a/>', {
            class: this._name + '_vk',
            style: '' + design.color.white,
            text: data.vk,
            href: data.vk
        }).prepend('<strong>vk: </strong>').appendTo(about);
        return about;
    }
    createInfoBank(data, design) {
        let bank = $('<div/>', {
            class: this._name + '_bank ' + design.classHD,
            style: design.styleHD
        });
        let titleTwo = $('<div/>', {
            class: this._name + '_title-two ',
            style: '',
            text: 'Желающим помочь проекту.'
        }).appendTo(bank);
        let qiwi = $('<div/>', {
            class: this._name + '_qiwi ',
            style: '',
            text: data.qiwi
        }).prepend('<strong>qiwi: </strong>').appendTo(bank);
        let sberBank = $('<div/>', {
            class: this._name + '_sber ',
            style: '',
            text: data.sberBank
        }).prepend('<strong>сбербанк MasterCard: </strong>').appendTo(bank);
        let yandex = $('<div/>', {
            class: this._name + '_yandex-money ',
            style: ''
        }).prepend('<strong>yandex money: </strong>').appendTo(bank);
        let yandexLink = $('<a/>', {
            class: this._name + '_yandex-money ',
            style: '' + design.color.white,
            href: data.yandex.link,
            text: data.yandex.number
        }).appendTo(yandex);
        return bank;
    }
}
