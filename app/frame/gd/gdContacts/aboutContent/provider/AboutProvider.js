var AboutProvider = /** @class */ (function () {
    function AboutProvider() {
    }
    Object.defineProperty(AboutProvider.prototype, "aboutInfo", {
        get: function () {
            return {
                fio: 'Бартенев Алескандр',
                tel: '+7 (910) 277-77-73',
                email: 'kursk3dynamic@gmail.com',
                vk: 'https://vk.com/a.bartenev',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutProvider.prototype, "coinInfo", {
        get: function () {
            return {
                qiwi: '+7 (910 277-77-73',
                sberBank: 'VISA 4276 3300 1139 1075',
                yandex: {
                    link: 'https://money.yandex.ru/to/41001323085780',
                    number: '41001323085780'
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return AboutProvider;
}());
export { AboutProvider };
