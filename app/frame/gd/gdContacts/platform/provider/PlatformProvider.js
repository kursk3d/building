var PlatformProvider = /** @class */ (function () {
    function PlatformProvider() {
    }
    Object.defineProperty(PlatformProvider.prototype, "baseLink", {
        get: function () {
            return {
                spinnerLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue',
                fonLayer: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/metall-one_02-hd',
                closeLink: 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/id/43'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformProvider.prototype, "spinnerLink", {
        get: function () {
            return 'http://xn--c1acae4aoap.xn--p1ai/gdImg/iface/name/spinner-blue';
        },
        enumerable: true,
        configurable: true
    });
    return PlatformProvider;
}());
export { PlatformProvider };
