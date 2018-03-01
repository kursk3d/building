export class ImspartanProviderGDOne {
    constructor() { }
    baseLink() {
        return {
            spinnerLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue',
            fonLayer: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/gd-imspartan_fon-layers_four',
            logoSpartanImg: 'http://xn--c1acae4aoap.xn--p1ai//gdImg/iface/name/im-spartan_logo-img',
            logoSpartanTxt: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/im-spartan_logo-txt',
            gorodDel: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/im-spartan_gd',
            closeLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/id/43'
        };
    }
    sliderData() {
        return [{ src: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/fintess/box/',
                srcName: 'fintess',
                txtCard: {
                    title: 'Фитнес-залы',
                    desc: ''
                } },
            { src: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/bassein/box/',
                srcName: 'water-pool',
                txtCard: {
                    title: 'Бассейны',
                    desc: 'Для взрослых, детей, спортцменов'
                } },
            { src: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/sport/box/',
                srcName: 'sport-section',
                txtCard: {
                    title: 'Спортивные и оздоровительные секции',
                    desc: 'Для всех возростов'
                } }
        ];
    }
    menuData() {
        return [
            { name: 'Турниры', link: '#' },
            { name: 'Спортивная экипировка', link: '#' },
            { name: 'Спортивные товары', link: '#' },
            { name: 'Спортивное питание', link: '#' }
        ];
    }
    baseBtn() {
        return [
            { name: 'Вернутся на сайт ГороДДел.РФ', link: '#' },
            { name: 'Спортивная экипировка', link: '#' }
        ];
    }
}
