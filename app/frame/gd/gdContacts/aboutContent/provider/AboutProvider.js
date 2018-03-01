export class AboutProvider {
    constructor() { }
    get aboutInfo() {
        return {
            fio: 'Бартенев Алескандр',
            tel: '+7 (910) 277-77-73',
            email: 'kursk3dynamic@gmail.com',
            vk: 'https://vk.com/a.bartenev',
        };
    }
    get coinInfo() {
        return {
            qiwi: '+7 (910 277-77-73',
            sberBank: 'VISA 4276 3300 1139 1075',
            yandex: {
                link: 'https://money.yandex.ru/to/41001323085780',
                number: '41001323085780'
            }
        };
    }
}
