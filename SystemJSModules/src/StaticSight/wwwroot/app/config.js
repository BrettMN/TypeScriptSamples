System.register([], function(exports_1) {
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                    this.settings = {
                        address: 'www.WIPDeveloper.com'
                    };
                }
                return Config;
            })();
            exports_1("Config", Config);
        }
    }
});
